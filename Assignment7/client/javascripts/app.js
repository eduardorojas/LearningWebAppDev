// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */
"use strict";

var main = function() {
	var original = "",
		newlink = "";
	
    $("#submit").click(function() {
    	original = $("#inputbox").val();
        $.post("/", {url: original, shortened: false}).done(function(res){
        	newlink = newlink.concat('<a href="',original,'">',res.shorturl, '</a>');
        	$("div.result").append(newlink);
        });

    });
    
    $("#revert").click(function() {
    	shortened = $("#inputbox").val();
        $.post("/", {url: original, shortened : true}).done(function(res){
        	newlink = newlink.concat('<a href="',original,'">http://localhost:3000/',res.shorturl, '</a>');
        	$("div.result").append(newlink);
        });

    });

};

$(document).ready(main);