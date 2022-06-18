const LinkedInStrategy = require('passport-linkedin-oauth2').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const {User} = require('../models')
const {LoginLogs} = require('../models')
const jwt = require('jsonwebtoken');
const { token } = require('morgan');
const config = require('../config/config')

module.exports = (passport) =>{
    // Linked in authentication ============================================================================
    passport.use(new LinkedInStrategy({
        clientID: config.linkedinAuth.clientID,
        clientSecret: config.linkedinAuth.clientSecret,
        callbackURL: config.linkedinAuth.callbackURL,
        scope: ['r_emailaddress', 'r_liteprofile'],
        }, 
        async (token, tokenSecret, profile, done) => {

            userProfile = {
                email: profile.emails[0].value,
                name: profile.displayName,
                provider: profile.provider,
                socialID: profile.id,
            }
            try{
                // check if user exists and if exist return the user
                let userLinkedin = await checkIfUserExists(profile)
                
                // if user doesn't exist
                if(!userLinkedin){
                    userLinkedin = await createUser(userProfile)
                }

                // the information which shall be inside the jsonwebtoken
                const userJson = userLinkedin.toJSON()
                const payload = createPayLoad(userLinkedin)
                // create jsonwebtoken and return it
                const token = createJsonWebToken(payload)
                if(token){
                    loginData = {
                        user: userJson,
                        token: token
                    }
                    // logLogin(loginData)
                    return done(null,JSON.stringify(loginData))

                }

            }catch(err){
                return done(err)
            }
        }
    ));

     // Google in authentication ============================================================================
    /*  Google AUTH  */
    const GOOGLE_CLIENT_ID = config.googleAuth.clientID;
    const GOOGLE_CLIENT_SECRET = config.googleAuth.clientSecret;
        passport.use(new GoogleStrategy({
            clientID: GOOGLE_CLIENT_ID,
            clientSecret: GOOGLE_CLIENT_SECRET,
            callbackURL: config.googleAuth.callbackURL
        },
        async (token, tokenSecret, profile, done) => {
            userProfile=profile;
            userProfile = {
                email: profile.emails[0].value,
                name: profile.displayName,
                provider: profile.provider,
                socialID: profile.id,
            }
            try{
                // check if user exists and if exist return the user
                let userGoogle = await checkIfUserExists(profile)
                
                // if user doesn't exist
                if(!userGoogle){
                    userGoogle = await createUser(userProfile)
                }

                // the information which shall be inside the jsonwebtoken

                const userJson = userGoogle.toJSON()

                const payload = createPayLoad(userGoogle)
                // create jsonwebtoken and return it
                const token = createJsonWebToken(payload)
                if(token){
                    loginData = {
                        user: userJson,
                        token: token
                    }
                    // logLogin(loginData)
                    return done(null,JSON.stringify(loginData))
                    
                }

            }catch(err){
                return done(err)
            }
        }
    ));

     // Google in authentication ============================================================================
    /*  Google AUTH  */
    passport.use(new FacebookStrategy({
        clientID: config.facebookAuth.clientID,
        clientSecret: config.facebookAuth.clientSecret,
        callbackURL: config.facebookAuth.callbackURL,
        profileFields: ['id', 'emails', 'name']
    }, 
        async (token, tokenSecret, profile, done) => {
            userProfile=profile;
            userProfile = {
                email: profile.emails[0].value,
                name: profile.displayName,
                provider: profile.provider,
                socialID: profile.id,
            }
            try{
                // check if user exists and if exist return the user
                let userGoogle = await checkIfUserExists(profile)
                
                // if user doesn't exist
                if(!userGoogle){
                    userGoogle = await createUser(userProfile)
                }

                // the information which shall be inside the jsonwebtoken
                const payload = createPayLoad(userGoogle)
                // create jsonwebtoken and return it
                const token = createJsonWebToken(payload)
                if(token){
                    loginData = {
                        user: userProfile,
                        token: token
                    }
                    // logLogin(loginData)
                    return done(null,loginData)
                }

            }catch(err){
                return done(err)
            }
        }
    ));
    






























    // Check if user exists in the system
    async function checkIfUserExists(profile){
        let user = await User.findOne({
            where: {
                socialID: profile.id,
                provider: profile.provider
            }
        })

        if(!user){
            user = await User.findOne({
                where: {
                    email: profile.emails[0].value
                }
            })
        }
        
        return user
    }

    function createUser(userProfile){
        return User.create(userProfile)
    }

    function logLogin(loginData){
        return LoginLogs.create(loginData)
    }
    
    function createPayLoad(user){
        const payload = {
          user: {
            id: user.id
          }
        };
        return payload
    }

    function createJsonWebToken(payload){
        const ONE_WEEK = 60 * 60 * 24 * 7;
        return jwt.sign(
            payload,
            config.authentication.jwtSecret, // get the secret from default.json to hash jsonwebtoken
            { expiresIn: ONE_WEEK },
        );
    }
}