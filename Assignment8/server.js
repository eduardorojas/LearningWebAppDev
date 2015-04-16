// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

var express = require("express"),
    http = require("http"),
    app = express(),
    bodyParser = require("body-parser"),
    shortid = require("shortid"),
    sh = "http://localhost:3000/",
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/urls");
//This code was copied from the Mongoose documentation
var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function (callback) {
  // yay!
});

var linkSchema = new mongoose.Schema({
    longurl: String,
    shorturl: String,
    clicks: {type: Number, default: 0}
});

var Url = mongoose.model("Url",linkSchema);

app.use(express.static(__dirname + "/client"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);


app.get("/links", function(req,res) {
    Url.find({}).sort({clicks: "desc"}).limit(10).exec(function(err, urls){
        if (err){
            return console.error(err);
        }
        res.json(urls);
    });
});

app.post("/submit", function (req, res) {
    sh = "http://localhost:3000/" + shortid.generate();
	
    var newlink = new Url({longurl : req.body.url, shorturl: sh});
    newlink.save(function(err) {
        if (err){
            return console.error(err);
        }
    });
	res.json({shorturl: sh});
});

app.post("/revert", function (req, res) {
    Url.findOne({shorturl : req.body.url},function(err,url){
        if (err){
            return console.error(err);
        }
        res.json({originalurl: url.longurl});
    });

});

app.get("/:id", function (req, res) {
    var sh = "http://localhost:3000/" + req.params.id.trim();

    Url.findOne({shorturl : sh},function(err,url){
        url.clicks += 1;
        url.save(function(err){
            if(err){
                return console.error(err);
            }
            res.redirect(url.longurl);
        }); 
    });

});


console.log("Server is listening at http://localhost:3000/");