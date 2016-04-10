module.exports = function(app, isLoggedIn)
{
    app.get('/import', isLoggedIn, function(req, res) 
    {

        request('http://www.com/theme/orangered/js/quotes.json',function(error,response,responseBody){

        if (error) return console.error(error);

        var quoteSchema = require('./models/quotes');

        var parsedQuotes = JSON.parse(responseBody).quotes;

        console.log("Importing " + parsedQuotes.length + " quotes.");

        for(var i = 0; i < parsedQuotes.length; i++)
        {

            console.log("Importing " + i + "/" + parsedQuotes.length);

            var quote = new quoteSchema({quote : parsedQuotes[i].quote, image : parsedQuotes[i].image, movie : parsedQuotes[i].movie, hits : 0, submitter : "importer"});

            quote.save(function (err, quote){

             if (err) return console.error(err);

             console.log("Saved " + i + "/" + parsedQuotes.length + ": " + quote);

            });

        }

        // render the page and pass in any flash data if it exists
        res.render('import.ejs', {});

        });

    });

}