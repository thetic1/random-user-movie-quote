module.exports = function(app, passport, isLoggedOut)
{
    app.get('/', isLoggedOut, function(req, res) 
    {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') });

    });

    app.post('/login', passport.authenticate('local-login', 
    {
    
        successRedirect : '/main', // redirect to the main app page section
        
        failureRedirect : '/', // redirect back to the signup page if there is an error
        
        failureFlash : true // allow flash messages
    
    }));

}