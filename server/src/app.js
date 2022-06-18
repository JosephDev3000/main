// This file we need to define a web appliction
// declaring the packages installed
const express = require('express')
const bodyParser = require('body-parser') //body parser allows to process json data very easily
const cors = require('cors') // morgan is a log generator 
const morgan = require('morgan')
const {sequelize} = require('./models') // register endpoint like route
const session = require('express-session');
const passport = require('passport');
const config = require('./config/config')
const {notFound,errorHandler} = require('./middlewares')
const { not } = require('joi')
  
// build an express server
const app = express()

// use the packages
app.use(morgan('combine'))
app.use(bodyParser.json()) //allow our express app to easily parse any json request that are sent in

app.use(cors()) //Cross-Origin Resource Sharing. nee cors if we want a server to be hosted on a different domain
// The ORM to be used

// use session
app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}));

// passport.js setup ===================================================
app.use(passport.initialize());
app.use(passport.session());


passport.serializeUser(function (user, cb) {
  cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
  cb(null, obj);
});


// linked in login =============================================================
require('./controllers/SocialAuthenticationController')(passport)

// importing the routes
require('./routes')(app)


// This is for handling error 404 for non existent files
// This by all means should be located at the bottom of the page
// or at least below all the routes
app.use(notFound)
app.use(errorHandler)

// connect the sequelize to database
// include this if you want to force registration of same email
// remove force true cause it causes data to be removed from database during server restart

// sequelize.sync({force:true}) 

sequelize.sync()
.then(() => {
  app.listen(config.port)
  console.log(`Server started on port ${config.port}`)
})

