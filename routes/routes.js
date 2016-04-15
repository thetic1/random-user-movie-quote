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
    
    //------Routes With EJS Views------//
    require('./login.js')(app, passport);
    require('./signup.js')(app, passport);
    //require('./main.js')(app, isLoggedIn);
    
    //------API ROUTES------//
    //require('./add_quote.js')(app);
    //require('./get_quotes.js')(app);
    //require('./update_profile.js')(app);
    //require('./logout.js')(app);

    //------Testing/Dev Routes------//
    //require('./polymertemplate.js')(app);
   
};