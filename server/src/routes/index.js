const AuthenticationController = require('../controllers/AuthenticationController') 
const AuthenticationControllerPolicy = require('../policies/AuthenticationControllerPolicy') //for joi
const passport = require('passport');

module.exports = (app) =>{
    app.post('/api/register',
    AuthenticationControllerPolicy.register,
    AuthenticationController.register)

    app.post('/api/login',
    AuthenticationController.login)

    // linked in login =============================================================
    app.get('/api/auth/linkedin', passport.authenticate('linkedin', {
        scope: ['r_emailaddress', 'r_liteprofile'],
      }));
 
    app.get('/api/auth/linkedin/callback',
    passport.authenticate('linkedin', { failureRedirect: 'http://localhost:8080/#/', session: false }),
        function (req, res) {
        let token = res.req.user;
        res.redirect('http://localhost:8080/#/verifyLogin?method=linkedin&token=' + token);
        }
    );

    // google auth ==================================================================
    app.get('/api/auth/google', 
    passport.authenticate('google', { scope : ['profile', 'email'] }));

    app.get('/api/auth/google/callback', 
    passport.authenticate('google', { failureRedirect: 'http://localhost:8081/#/', session: false }),
    function(req, res) {
        let token = res.req.user;
        res.redirect('http://localhost:8080/#/verifyLogin?method=google&token=' + token);
        // res.send(token);
    });


    // facebook auth ==================================================================
    app.get('/api/auth/facebook', passport.authenticate('facebook', {
        scope: ['public_profile', 'email']
      }));
      
    app.get('/api/auth/facebook/callback',
    passport.authenticate('facebook', { failureRedirect: 'http://localhost:8080/#/', session: false }),
    function(req, res) {
        let token = res.req.user;
        res.redirect('http://localhost:8080/#/verifyLogin?method=facebook&token=' + token);
    });
    

    // ===============================================================================

    app.get('/api/logout', function (req, res) {
      req.logout();
      res.redirect('http://localhost:8080/#/');
    });

    // forgot password routes ================================================================
      // post route
    app.post('/api/forgot-password', AuthenticationController.forgotPassword);
    app.get('/api/reset-password', AuthenticationController.resetPassword);
    app.post('/api/reset-password', AuthenticationControllerPolicy.resetPasswordChange, AuthenticationController.changePassword);
}