module.exports = function(app) {
    app.get('/polymertemplate', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('polymertemplate.ejs');

      });

  };
