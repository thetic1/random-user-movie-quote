app.get('/add', isLoggedIn, function(req, res) 
{

    res.render('add.ejs', { message: req.flash('loginMessage') });

});