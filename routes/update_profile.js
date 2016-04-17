var multer = require('multer');
var index = __dirname.lastIndexOf('/');
var appDir = __dirname.slice(0, index);
var upload = multer({dest: appDir + '/public/images/'});

module.exports = function(app, isLoggedIn) {

    app.post('/update_profile', [isLoggedIn, upload.single('picture')], function(req, res) {

        if (req.file.originalname != '') {

          req.user.local.picture = req.file.filename;

        }

        req.user.save();

        res.json({success: true, picture: req.file.filename});

      });

  };
