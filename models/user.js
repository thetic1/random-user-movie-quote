// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({

    local            : {
        email        : String,
        password     : String,
        name         : String,
        submissions  : Number,
        picture      : String
    }
});

// methods ======================
// generating a hash
userSchema.methods.generateHash = function(password) 
{

    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);

};

// checking if password is valid
userSchema.methods.validPassword = function(password) 
{

    return bcrypt.compareSync(password, this.local.password);

};

userSchema.methods.incrementSubmissions = function() 
{

    this.local.submissions++;

};

// create the model for users and expose it to our app
module.exports = mongoose.model('User', userSchema);