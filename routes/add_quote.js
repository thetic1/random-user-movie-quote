module.exports = function(app, isLoggedIn) {

    // process the add form
    app.post('/add_quote', isLoggedIn, function(req, res) {

        var QuoteSchema = require('../models/quotes');

        console.log('******Incoming Quote******');
        console.log('QUOTE: ' + req.body.quote + ' IMAGE: ' + req.body.imgURL + ' SOURCE: ' + req.body.source + ' SUBMITTER: ' + req.user.local.name);

        var quote = new QuoteSchema({quote: req.body.quote, image: req.body.imgURL, movie: req.body.source, submitter: req.user.local.name, hits: 0});

        quote.save(function(err, quote) {

            if (err) {

              console.error(err);

              res.json({success: false});

            }

            req.user.incrementSubmissions();

            req.user.save();

            res.json({success: true});

          });

      });

  };
