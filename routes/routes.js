//------Dependencies------//
var request = require('request');
var express = require('express');

//------Router------//
var router = express.Router();

//------Middleware------//
function isLoggedIn(req, res, next) 
{

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
    
}

//------Routes------//
module.exports = function(app, passport) 
{

    console.log('App is: ' + app);
    
    //routes
    require('./index.js')(app);
    /*require('./login.js')(app, passport);
    require('./logout.js')(app, passport);
    require('./signup.js')(app, passport);
    require('./profile.js')(app, passport);
    require('./picker.js')(app, passport);
    require('./import.js')(app, passport);
    require('./add.js')(app, passport);*/
   
};