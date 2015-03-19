var http = require("http"),
    server,
    resultsObj = {
    	outcome : "",
    	wins : 0,
    	losses : 0,
    	ties : 0
    };

function beginPage(res, title) {
    res.write("<!DOCTYPE html>\n");
    res.write("<html lang='en'>\n");
    res.write("<head>\n");
    res.write("<meta charset='utf-8'>\n");
    res.write("<title>"+ title + "</title>\n");
    res.write("</head>\n");
    res.write("<body>\n");
    res.write("<div class='buttons'>");

}

function writeHeading(res, tag, title) {
    res.write("<" + tag + ">" + title + "</" + tag + ">\n");
}

function endPage(res) {
    res.write("</div>");
    res.write("</body>\n");
    res.write("</html>\n");
    res.end();
}

function buttons(res) {
    res.write("<form method='POST' action='/play/rock'>\n");
    res.write("<input type='submit' value='Rock'>\n");
    res.write("</form>\n");
    res.write("<form method='POST' action='/play/paper'>\n");
    res.write("<input type='submit' value='Paper'>\n");
    res.write("</form>\n");
    res.write("<form method='POST' action='/play/scissors'>\n");
    res.write("<input type='submit' value='Scissors'>\n");
    res.write("</form>\n");
    res.write("<form method='POST' action='/play/lizard'>\n");
    res.write("<input type='submit' value='Lizard'>\n");
    res.write("</form>\n");
    res.write("<form method='POST' action='/play/spock'>\n");
    res.write("<input type='submit' value='Spock'>\n");
    res.write("</form>\n<br>");
}

function checkResult(w1,w2,l1,l2,res){

	var responses = ["rock", "paper", "scissors", "lizard", "spock"];
	var random_response = responses[Math.floor(Math.random() * responses.length)];
	
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
    res.write("<p>Server chooses " + random_response + "!</p>\n");
}

function game(req, res){

	if (req.method === "POST" && req.url === "/play/rock") {
		checkResult("lizard","scissors","paper","spock",res);
    } else if (req.method === "POST" && req.url === "/play/paper") {
    	checkResult("rock","spock","scissors","lizard",res);
    } else if (req.method === "POST" && req.url === "/play/scissors") {
    	checkResult("paper","lizard","rock","spock",res);
    } else if (req.method === "POST" && req.url === "/play/lizard") {
    	checkResult("paper","spock","rock","scissors",res);
    } else if (req.method === "POST" && req.url === "/play/spock") {
    	checkResult("rock","scissors","paper","lizard",res);
    }
    res.write("<p>Outcome: " + resultsObj.outcome + "</p>");
    res.write("<p>Wins: " + resultsObj.wins + "</p>");
    res.write("<p>Losses: " + resultsObj.losses + "</p>");
    res.write("<p>Ties: " + resultsObj.ties + "</p>");
}

function frontPage(req, res) {
    res.writeHead(200, {
        "Content-Type": "text/html"
    });


    var title = "Assignment 5";

    beginPage(res, title);
    writeHeading(res, "h1", title);
    buttons(res);
    if (req.method === "POST") {
    	game(req,res);
    }
    endPage(res);
}

var server = http.createServer(frontPage);
server.listen(3000);

console.log("Server running on port 3000");
