// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

var express = require("express"),
    http = require("http"),
    app = express(),
    bodyParser = require("body-parser"),
    shortid = require('shortid'),
    client = require("redis").createClient(),
    sh = "http://localhost:3000/";

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);

// set up our routes
app.post("/", function (req, res) {
		console.log("hello");
		sh = sh.concat(shortid.generate());
		console.log(sh);
    	client.set(sh, req.body.url);
    	client.set(req.body.url,sh);
    	res.json({shorturl: sh});

});

app.get('/:id', function (req, res) {
    var sh = req.params.id.trim();
    
    client.get(sh, function (err, reply) {
		res.redirect(reply);
    });
});


console.log("Server is listening at http://localhost:3000/");