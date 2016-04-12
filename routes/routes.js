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
    
    //routes
    require('./index.js')(app);
    require('./login.js')(app, passport);
    require('./logout.js')(app);
    require('./signup.js')(app, passport);
    require('./profile.js')(app, isLoggedIn, router);
    require('./picker.js')(app, isLoggedIn);
    require('./import.js')(app, isLoggedIn);
    require('./add.js')(app, isLoggedIn);
   
};