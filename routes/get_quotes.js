module.exports = function(app, isLoggedIn)
{
    app.get('/get_quotes', isLoggedIn, function(req, res) 
    {

        var quoteSchema = require('../models/quotes');

        quoteSchema.find({}, function (err, quote) 
        {

            if (err) return console.error(err);

            var userSchema = require('../models/user');

            userSchema.find({}, function (err, users) 
            { 

                if (err) return console.error(err);

                var userArray = [];

                for(var i = 0; i < users.length; i++)
                {

                    userArray.push({name: users[i].local.name, submissions: users[i].local.submissions, picture: users[i].local.picture});

                }

                console.log(userArray);

                var average = 0;

                //find the average number of quotes
                for(var i = 0; i < quote.length; i++)
                {

                   average += quote[i].hits;

                }

                var average = average / quote.length;

                var quoteArray = [];

                var numberArray = [];

                for(var i = 0; i < quote.length; i++)
                {

                    numberArray.push(i);

                }

                //allows grabbing slightly above average quotes if there aren't enough average quotes
                var averageModifier = 1;

                for(var i = 0; quoteArray.length <= (users.length + (users.length/2)); i++)
                {

                    if(i >= quote.length)
                    {

                        i = 0;

                        //allow more quotes in since we haven't got enough in.
                        averageModifier++;

                    }

                    var randomArrayIndex = Math.floor(Math.random() * numberArray.length);

                    var random = numberArray.splice(randomArrayIndex, 1);

                    if(quote[random].hits < (average + averageModifier))
                    {

                        var quoteToAdd = quote[random];

                        quoteArray.push({quote: quoteToAdd.quote, image: quoteToAdd.image, movie: quoteToAdd.movie});

                        //add hit to the quote and save it
                        quoteToAdd.addHit();
                        quoteToAdd.save();

                    }

                }

                // render the page and pass data
                res.json({quotes: quoteArray, users: userArray});

            });

        });

    });
    
}