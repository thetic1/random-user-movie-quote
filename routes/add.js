module.exports = function(app, isLoggedIn)
{
    app.get('/add', isLoggedIn, function(req, res) 
    {

        res.render('add.ejs', { message: req.flash('loginMessage'), added: false });

    });
    
    // process the add form
    app.post('/add', isLoggedIn, function(req, res) {

        var quoteSchema = require('../models/quotes');

        var quote = new quoteSchema({quote : req.body.quote, image : req.body.imgURL, movie : req.body.source, hits : 0});

        quote.save(function (err, quote){

            if (err) return console.error(err);
            
            req.user.incrementSubmissions();

        });

         res.render('add.ejs', {message: req.flash('loginMessage'), added: true});
        
    });
    
}