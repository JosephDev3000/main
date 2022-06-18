// import the model required
const {User} = require('../models')
const {ResetToken} = require('../models')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const crypto = require("crypto");
const Sequelize = require('sequelize');
const Op = Sequelize.Op; //sequelize operations

require('dotenv').config() // require .env file that is located in server folder
const nodemailer = require('nodemailer')  // NodeMailer used to send emails
const { google } = require("googleapis");  //Google APIs for various needs
const { error } = require('console');
const OAuth2 = google.auth.OAuth2;  // Google OAuth2 instead of using Less Secure Apps



// For creating a transporter object that automatically refreshes the access token of the Google OAuth2
const createTransporter = async () => {
    const oauth2Client = new OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    );
  
    oauth2Client.setCredentials({
      refresh_token: process.env.REFRESH_TOKEN
    });
  
    const accessToken = await new Promise((resolve, reject) => {
      oauth2Client.getAccessToken((err, token) => {
        if (err) {
          reject(console.log(error));
        }
        resolve(token);
      });
    });
  
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.EMAIL,
        accessToken,
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN
      }
    });
  
    return transporter;
};



// Sign a user object using the jwt library
function jwtSignUser (user){
    const ONE_WEEK = 60 * 60 * 24 * 7;
    return jwt.sign(user, config.authentication.jwtSecret, {
        expiresIn: ONE_WEEK
    })
}



module.exports = {
    // 
    async register(req, res) {
        try {
            userProfile = {
                email: req.body.email,
                password: req.body.password,
                name: req.body.name,
                provider: "",
                socialID: "",
            }
            const user = await User.create(userProfile)
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
        } catch (err){
            res.status(400).send({
                error: 'This email account is already in use'
            })
        }
    },  

    // login function
    async login(req, res){
        try{
            // find user
            const {email, password} = req.body
            const user = await User.findOne({
                where: {
                    email: email,
                    provider: "",
                    socialID: ""
                }
            })
            // check if user exists
            if (!user){
                return res.status(403).send({
                    error: 'The login information was incorrect'
                })
            }

            // check if login password is correct in the user model
            const isPasswordValid = await user.comparePassword(password)

            // Handling invalid password
            if(!isPasswordValid){
                return res.status(403).send({
                    error: 'The login information was incorrect',
                })
            }
            
            const userJson = user.toJSON()
            res.send({
                user: userJson,
                token: jwtSignUser(userJson)
            })
            
        }catch(err){
            res.status(500).send({
                error: 'An error has occured trying to login'
            })
            // console.log(err);
        }
    },


    // forgot password function
    async forgotPassword(req, res, next) {
        try{    
            
            process.on('uncaughtException', function(err) {
            
                // Handle the error safely
                console.log(err)
            })   
            // let transport = createTransporter;
            // transport ? console.log("Transporter Found") : console.log("Transporter not Found")
            let email = await User.findOne({
                where: { email: req.body.forgotpasswordemail }
            });
            if (email == null) {
            /**
             * we don't want to tell attackers that an
             * email doesn't exist, because that will let
             * them use this form to find ones that do
             * exist.
             **/
             return res.json({status: 'ok', message: "error"});
            }
            /**
             * Expire any tokens that were previously
             * set for this user. That prevents old tokens
             * from being used.
             **/
            let userId = await User.findOne({
                attributes: ['id'],
                where: { email: req.body.forgotpasswordemail }
            });

            await ResetToken.update({
                used: 1
              },
              {
                where: {
                    userEmail: req.body.forgotpasswordemail
                }
            });
           
            //Create a random reset token
            var fpSalt = crypto.randomBytes(64).toString('base64');
           
            //token expires after one hour
            var expireDate = new Date(new Date().getTime() + (60 * 60 * 1000))
           
            //insert token data into DB
            await ResetToken.create({
              userId: userId.id, 
              userEmail: req.body.forgotpasswordemail,
              expiration: expireDate,
              token: fpSalt,
              used: 0
            },function (err, data) {       
                if (err) console.log(err);});
           
            //create email
            const message = {
                from: config.SMTP.auth.user,
                to: req.body.forgotpasswordemail,
                // replyTo: process.env.REPLYTO_ADDRESS,
                subject: 'Request For Password Reset',
                text: 'To reset your password, please click the link below.\n\nhttp://'+config.backEndDomain+'reset-password?token='+encodeURIComponent(fpSalt)+'&email='+req.body.forgotpasswordemail
            };
          
            //emailOptions - who sends what to whom, a JSON object with the data    
            const sendEmail = async (message) => {
                let emailTransporter = await createTransporter();
                await emailTransporter.sendMail(message);
            };
            //send email
            sendEmail(message)
           
            return res.json({status: 'ok'});
        }catch(err){
            console.log(err)
            res.status(500).send({
                error: 'An error has occured trying to reset password'
            })
        }
    },

    async resetPassword (req, res, next) {
        try{
            /**
             * This code clears all expired tokens. Better to be moved somewhere
             **/
            await ResetToken.destroy({
                where: {
                expiration: { [Op.lt]: Sequelize.fn('now')},
                }
            });
            //this means Destroy all the ResetToken data WHERE expiration < now means expired token
            
            //find the token
            var record = await ResetToken.findOne({
                where: {
                userEmail: req.query.email,
                expiration: { [Op.gt]: Sequelize.fn('now')},
                token: req.query.token,
                used: 0
                }
            });
            //greater than to check the not expired token
            
            if (record == null) {
                return res.json({status: 'ok', message: 'error'});
            }
            
            res.redirect(`${config.frontEndDomain}reset-password/?token=${req.query.token}&email=${req.query.email}`);

        }catch(err){
            console.log(err)
        }
    },

    async changePassword (req, res, next) {
        try{
            //compare passwords
            if (req.body.newPassword1 !== req.body.newPassword2) {
                return res.json({status: 'error', message: 'Passwords do not match. Please try again.'});
            }
            
            /**
             * Ensure password is valid (isValidPassword
             * function checks if password is >= 8 chars, alphanumeric,
             * has special chars, etc)
             **/
            
            let record = await ResetToken.findOne({
                where: {
                userEmail: req.body.email,
                expiration: { [Op.gt]: Sequelize.fn('now')},
                token: req.body.token,
                used: 0
                }
            });
            
            let records = await ResetToken.findAll();

            console.log(records)

            if (record == null) {
                return res.json({status: 'error', message: 'Token not found. Please try the reset password process again.'});
            }
            
            let upd = await ResetToken.update({
                used: 1
                },
                {
                where: {
                    email: req.body.email
                }
            });
        
            
            await User.update({
                password: newPassword,
            },
            {
                where: {
                email: req.body.email
                }
            });
            
            return res.json({status: 'ok', message: 'Password reset. Please login with your new password.'});

        }catch(err){
            console.log(err)
        }
    }
}