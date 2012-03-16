// Project 3
// Author: Irvin Reaves
// Created for: SDI Online


var player = {			// properties
	name: "David Smith",
	country: "USA",
	totalScore: -17,
	winner: true,
	roundsTotal: [64, 68, 69, 70], 
	teeOff: " at 8:25 AM",
	
	teeOff: function () {
		console.log("at 8:25 AM")
	},
	
	firstRound: function () {
		console.log("and shot a 64 for the low opening round of day one");
	},
	country: function () {
		console.log("from the USA");
	},
		scoresEachRound: function () {
		console.log("David had a great 4 rounds of golf he shot a " + 64 + " on day one a "  + 68 + " on day two a " + 69 + " On the third day and a "  + 70 +  " for the final round, for a total of");
	},

	roundsTotal: function () {
		console.log();
	},
	totalScore: function () {
		console.log("and that's good enough for the win this week!!!");
	},
	comments: function () {
		console.log("Comments from David after the win, Every thing just went my way this week. I was able to hit really good shots when I need them. And the putter did not let me down at all this week.");
	},
	
};	

	var key = "name" 
	var roundsTotal = [64 + 68 + 69 + 70];
	var scoresEachRound = "64, 68, 69, 70";
	var totalScore = -17;
	var winner = true;
	var teeOff = "8:25 AM"
	
	console.log()
	console.log(player.name);
	
	
	player.country();

	if (teeOff === "8:25 AM"){
	console.log("tee's off ");
		} else {
	console.log("It's not your tee time yet.");
	};
	
	player.teeOff();
	player.firstRound();
	player.scoresEachRound(64, 68, 69, 70);
	player.roundsTotal(64 + 68 + 69 + 70);
	

	for (var i=0, checkLength=roundsTotal.length; i < checkLength; i++) 
{
console.log(roundsTotal[i]);
};


while (totalScore >-17) {
	  totalScore-=1;
	  console.log(totalScore);
	
	};
	
	player.totalScore();

	player.comments();
	
	
	
	if (winner === true){
		console.log("-17 Wins!");
		} else {
		console.log("-17 was just not good enough this week. ");
	};

	
	for (var key in player) {
	//console.log("key: " + key + "' roundsTotal: " + player[key]);
	console.log("key: " + key + "' roundsTotal ", player[key]);
	
}; 