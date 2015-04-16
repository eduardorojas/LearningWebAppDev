// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, strict: true, undef: true, unused: true */

var main = function() {
    "use strict";
	var original = "",
		newlink = "",
        oldlink = "",
        s = "";
	
    $("#submit").click(function() {
    	original = $("#inputbox").val();
        if(original){
            $.post("/submit", {url: original}).done(function(res){
                newlink = '<a href="' + original + '">' + res.shorturl +  '</a>';
            	$("div.result").html(newlink);
            },refreshLinks);
        }
    });
    
    $("#revert").click(function() {
    	s = $("#reverttext").val();
        if(s){
            $.post("/revert", {url: s}).done(function(res){
                console.log(res.originalurl);
            	oldlink = '<a href="'+res.originalurl+'">'+res.originalurl+'</a>';
            	$("div.original").html(oldlink);
            });
        }
    });

    $("#refresh").click(function() {
        refreshLinks();
    });

    var refreshLinks = function() {
        var $lnks = $("div.toplinks");
        $.getJSON("/links", function(links) {
            $lnks.empty();
            console.log(links);
            links.forEach(function(link){
                $lnks.append($("<p>").html(link.shorturl + "    |   Click count: " + link.clicks));
            });
        });
    };

    refreshLinks();
};

$(document).ready(main);