var express = require('express');

var router = express.Router();
var bodyParser = require('body-parser');

var fs = require('fs');
var zlib = require('zlib')

router.use(bodyParser.json());
/* GET users listing. */

// ------------ PETICIONES PARA VENTA FIJA ------------////
router.route('/getFileSaleFixed').get(function (req, response) {
    fs.readFile(process.env.CONFIGXML, function (err, data) {
        if (err) {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });

});
// ------------FIN  PETICIONES PARA VENTA FIJA ------------////


// ------------ PETICIONES PARA CUTOVER ------------////

router.route('/getFileCutoverAvance').get(function (req, response) {

    fs.readFile(process.env.FILECUTOVERAVANCE, function (err, data) {
        if (err) {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });


});


router.route('/getFileCutoverStatus').get(function (req, response) {


    fs.readFile(process.env.FILECUTOVERSTATUS, function (err, data) {
        if (err) {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });


});
// ------------FIN  PETICIONES PARA CUTOVER ------------////


// ------------ PETICIONES PARA VENTA FAN ------------////

router.route('/getFileSaleFAN').get(function (req, response) {


    fs.readFile(process.env.CONFIGXMLFAN, function (err, data) {
        if (err) {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });


});

// ------------FIN  PETICIONES PARA VENTA FAN ------------////

// ------------ PETICIONES PARA POST VENTA FAN ------------////

router.route('/getFilePostSaleFAN').get(function (req, response) {


    fs.readFile(process.env.CONFIGXMLPOSTSALEFAN, function (err, data) {
        if (err) {
            response.send('No hay archivo o puede que su configuracion sea erronea');
        }
        else {
            var text = data.toString();

            response.send(text);

        }
    });


});

// ------------FIN  PETICIONES PARA VENTA FAN ------------////


module.exports = router;
