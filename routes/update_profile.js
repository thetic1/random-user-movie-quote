var multer = require('multer');
var index = __dirname.lastIndexOf('/');
var appDir = __dirname.slice(0, index);
var upload = multer({ dest: appDir + "/public/images/" });

module.exports = function(app, isLoggedIn)
{
    app.get('/profile', isLoggedIn, function(req, res) 
    {

        res.render('profile.ejs', 
        {

                user : req.user,

        });

    });

    app.post('/profile', [isLoggedIn, upload.single('picture')], function(req, res) 
    {
    
        //change the name
        if(req.body.name != "")
        {

            req.user.local.name = req.body.name;

        }

        if(req.file.originalname != "")
        {   
            
            req.user.local.picture = req.file.filename;
            
            /*var index = req.file.fieldname.lastIndexOf('.');
            var fileExt = req.file.picture.slice(index);
                
            var newPath = __dirname + "public/images/" + req.user.name + fileExt;*/

        }

        req.user.save();

        res.render('profile.ejs', 
        {

                user : req.user,

        });

    });
    
}