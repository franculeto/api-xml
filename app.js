//generics
var express = require('express');

var bodyParser = require('body-parser');//BD
var routes = require('./index');


var app = express();

app.use(bodyParser.json());

app.use('/', routes);


// catch 404 and forward to error handler

if (process.env.log==='debug' || process.env.log==='error') {
    app.use((req, res) => {
        var now=new Date();
    logger.error(now.toLocaleString()+" - "+"Route not found: " + req.url);
    res.status(404);
    res.json({
        "error": "Error. Route not found"
    });
});

    app.use((err, req, res) => {
        var now = new Date();
    logger.error(now.toLocaleString()+" - "+err.message);
    res.status(500);
    res.json({
        "error": `${err}`
    });
});
}
module.exports = app;
