var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');

var fs = require('fs');


router.use(bodyParser.json());
/* GET users listing. */

router.route('/getFile').get(function (req, response) {



    fs.readFile( process.env.CONFIGXML, function(err, data) {
        if(err)
        {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
                var text = data.toString();

                response.send(text); // Set disposition and send it.
        }
    });





});

module.exports = router;
