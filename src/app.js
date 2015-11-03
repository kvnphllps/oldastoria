/**
 * Created by kevinGphillips on 9/11/15.
 */

'use strict';
var express = require('express');

// Setup development server
var PORT = 3000;
var app = express();

// Serve static files: css, js, images etc.
app.use('/static', express.static(__dirname + '/public'));

// Serve static files from node_modules: bootstrap for instance
app.use('/static', express.static(__dirname + '/node_modules'));

// Rendering configuration
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

// Routing
app.get('/', function (req,res) {

    // return our rendered jade file
    var path = req.path;
    res.render('index',{path:path});

});

// Listen on port off localhost
app.listen(PORT, function () {
    console.log("Frontend server running on port " + PORT + ".")
});