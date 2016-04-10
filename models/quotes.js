// app/models/user.js
// load the things we need
var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

// define the schema for our quote model
var quoteSchema = mongoose.Schema({

        quote      	: String,
        image     	: String,
        movie 		: String,
        issue		: Boolean,
        hits  		: Number,
        submitter	: String

});

quoteSchema.methods.addHit = function () {
  
	this.hits++;

}

quoteSchema.methods.hasIssue = function () {
  
	this.issue = true;

}

// create the model for quotes and expose it to our app
module.exports = mongoose.model('Quote', quoteSchema);