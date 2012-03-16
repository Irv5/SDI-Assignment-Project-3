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
