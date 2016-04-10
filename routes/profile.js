module.exports = function(app, isLoggedIn)
{
    app.get('/profile', isLoggedIn, function(req, res) 
    {

        res.render('profile.ejs', 
        {

                user : req.user,

        });

    });

    app.post('/profile', isLoggedIn, function(req, res) 
    {

        console.log(req.body);
        console.log(req.user);
        console.log(req.files);

        if(req.body.name != "")
        {

            req.user.local.name = req.body.name;

        }

        if(req.body.picture != "")
        {

            req.user.local.picture = req.body.picture;

        }

        req.user.incrementSubmissions();

        req.user.save();

        res.render('profile.ejs', 
        {

                user : req.user,

        });

    });
}