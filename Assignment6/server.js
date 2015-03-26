// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

var express = require("express"),
    http = require("http"),
    app = express(),
	resultsObj = {
        server_res : "",
    	outcome : "",
    	wins : 0,
    	losses : 0,
    	ties : 0
    };

app.use(express.static(__dirname + "/client"));

// Create our Express-powered HTTP server
http.createServer(app).listen(3000);

// set up our routes
app.get("/play/rock", function (req, res) {
    checkResult("lizard","scissors","paper","spock");
    res.json(resultsObj);
});

app.get("/play/paper", function (req, res) {
    checkResult("rock","spock","scissors","lizard");
    res.json(resultsObj);
});

app.get("/play/scissors", function (req, res) {
    checkResult("paper","lizard","rock","spock");
    res.json(resultsObj);
});

app.get("/play/lizard", function (req, res) {
    checkResult("paper","spock","rock","scissors");
    res.json(resultsObj);
});

app.get("/play/spock", function (req, res) {
    checkResult("rock","scissors","paper","lizard");
    res.json(resultsObj);
});


// set up the root route
app.get("/", function (req, res) {
    res.send("This is the root route!");
});

function checkResult(w1,w2,l1,l2){

	var responses = ["rock", "paper", "scissors", "lizard", "spock"];
	var random_response = responses[Math.floor(Math.random() * responses.length)];
	resultsObj.server_res = random_response;
	if(random_response === w1 || random_response === w2){
		resultsObj.outcome = "Win";
		resultsObj.wins += 1;
	} else if (random_response === l1 || random_response === l2) {
    	resultsObj.outcome = "lose";
    	resultsObj.losses += 1;
    } else {
    	resultsObj.outcome = "tie";
    	resultsObj.ties += 1;
    }
}

console.log("Server is listening at http://localhost:3000/");