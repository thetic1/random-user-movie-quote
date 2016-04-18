# Random User Movie Quote

The point of this app is to randomly select the order in which team members will present in a meeting and add a sprinkle of humor.

Team members sign into the app, submit quotes to the database. During a meeting the app can be used to random select a user and mix that users name into a movie quote.

## Version

0.05 Project Initalization, app is not entirely functional yet. See known issues section.

## Requirements

These packages must be globally installed to get the complete functionality of this app. Other dependencies will be installed during the normal installation process.

### Production Server only

If you just running the app and don't need all the dev tools, you only need these packages

* Node.js/NPM
* MongoDB must be running before you start the app
* Bower

### Development Server

If you want to use all of the NPM scripts to help you develop the app these packages need to be installed globally. These are in addition to the production server packages

* jscs
* uglify

## Installation

This is not a fully functional APP yet. See Known issues

1. Clone this repository
2. cd into the project directory
3. Run npm install
4. Run bower install
5. If you are not running mongo already, start it (mongod).

    If you want to use the demo database, start mongo from your project directory using:
    `npm run mongo` __OR__ `screen -r -m npm run mongo` to run it detached
    With the demo database you can login as __thor@thor.com__ password __1234__, it also has several other users
    The demo database already has several hundred movies quotes
    
6. Use npm start to run the server

## Known Issues

### Functional Issues
 
 User profile picture submission does not work, causes a 500 server error reponse if from is set to iron-form
 Profile will work if iron-from property is removed, but after submitting the form users must click back and refresh the browser

 No client side form validation for:
 
 * profile picture submission
 * sign up form
 * login form
 
 No error output, users cannot see the reason the signup form is rejected.
 
 No error output, users cannot see the reason the login form is rejected.
 
 No error output, users cannot see the reason the profile picture form is rejected.
 
 Timer on the people picker page does not properly start, sometimes (I belive it's every other reset)
 
 When alerted that no one is left in queue the paper-dialog element wont go away.
 
### Visual Issues
 
 Quote text in the picker is not large enough
 
 The name inside the quote text is not emphasized
 
 Picker page is horrendoulsy ugly, elements jump around
 
 Drawer panel list does not need buttons nested inside the list items
 
 Iron Icons need to be implemented thorughout (right now the only one is on the timer)
