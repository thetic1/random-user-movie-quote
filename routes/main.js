module.exports = function(app, isLoggedIn)
{

    app.get('/main', isLoggedIn, function(req, res) {


        res.render('main.ejs', {user: req.user.local});
        
    });
    
}