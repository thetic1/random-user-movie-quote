module.exports = function(app, isLoggedIn)
{

    // process the add form
    app.post('/add', function(req, isLoggedIn, res) {

        var quoteSchema = require('../models/quotes');

        var quote = new quoteSchema({quote : req.body.quote, image : req.body.imgURL, movie : req.body.source, hits : 0});

        quote.save(function (err, quote){

            if (err)
            { 
                
                console.error(err);
                
                res.json({success: false});
                
            }       
                
            req.user.incrementSubmissions();
                
            req.user.save();
            
            res.json({success: true});
            
        });

    });
    
}