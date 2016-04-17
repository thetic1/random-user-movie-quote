//------Dependencies------//
var request = require('request');
var express = require('express');

//------Router------//
var router = express.Router();

//------Middleware------//

//Makes sure user is logged in
function isLoggedIn(req, res, next) {

  // if user is authenticated in the session, carry on
  if (req.isAuthenticated()) {
    return next();
  }

  // if they aren't redirect them to the home page
  res.redirect('/');

}

//makes sure user is logged out
function isLoggedOut(req, res, next) {

  // if user is authenticated in the session, carry on
  if (!req.isAuthenticated()) {
    return next();
  }

  // if they aren't redirect them to the home page
  res.redirect('/main');

}

//------Routes------//
module.exports = function(app, passport) {

    //------Routes With EJS Views------//
    require('./login.js')(app, passport, isLoggedOut);
    require('./signup.js')(app, passport, isLoggedOut);
    require('./main.js')(app, isLoggedIn);

    //------API ROUTES------//
    require('./add_quote.js')(app, isLoggedIn);
    require('./get_quotes.js')(app, isLoggedIn);
    require('./update_profile.js')(app, isLoggedIn);
    require('./logout.js')(app);

    //------Testing/Dev Routes------//
    require('./polymertemplate.js')(app);

  };
