// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

function callAPI(path) {
    $.getJSON(path, function(resultsObj) {
        console.log(resultsObj);
        $(".results").empty();
        $(".results").append("<p>Server chooses " + resultsObj.server_res + "!</p>");
        $(".results").append("<p>Outcome: " + resultsObj.outcome + "</p>");
        $(".results").append("<p>Wins: " + resultsObj.wins + "</p>");
        $(".results").append("<p>Losses: " + resultsObj.losses + "</p>");
        $(".results").append("<p>Ties: " + resultsObj.ties + "</p>");
    });
}

var main = function() {
    $("#rock").click(function() {
        callAPI("/play/rock");
    });
    
    $("#paper").click(function() {
        callAPI("/play/paper");
    });

    $("#scissors").click(function() {
        callAPI("/play/scissors");
    });

    $("#lizard").click(function() {
        callAPI("/play/lizard");
    });

    $("#spock").click(function() {
        callAPI("/play/spock");
    });
};

$(document).ready(main);