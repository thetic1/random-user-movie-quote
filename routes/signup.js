module.exports = function(app, passport, isLoggedOut)
{
    app.get('/signup', isLoggedOut, function(req, res) 
    {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });

    });

    app.post('/signup', passport.authenticate('local-signup', { failureRedirect : '/signup', failureFlash : true}), function(req, res) 
    {

        req.user.local.name = req.body.name;
        req.user.local.submissions = 0;
        req.user.local.picture = "profile_default.jpg";
        req.user.save();

        res.redirect('/main');

    });
    
}