//Run when page loads

$(document).ready(function(){

//Choose the random number displayed to the customer

var wins = 0;
var losses = 0;

//A function to start the game and eventually call back when we need to reset

function startGame(){
//Add that number into the number to match
var computerNumber = Math.floor(Math.random() * 50);
$(".computerNumber").append(computerNumber);

//Add the score counter into the "score" div

$(".score").append("Wins: " + wins + "<br>");
$(".score").append("Losses: " + losses);

};
//Function to start the game with the above code
startGame();

// Next step is to define the buttons as random number generators at the beginning of the game

});

