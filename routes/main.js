module.exports = function(app, isLoggedIn)
{

    app.get('/main', isLoggedIn, function(req, res) {


        res.render('main.ejs', { message: req.flash('loginMessage') });
        
    });
    
}