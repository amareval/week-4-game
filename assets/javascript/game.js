// Want to have playey number equal a function of adding all the morty images being clicked

var playerNumber = 0;


//Run when page loads

$(document).ready(function(){



//A function to start the game and eventually call back when we need to reset

function startGame(){
//Add that number into the number to match
var computerNumber = Math.floor(Math.random() * 50);
$(".computerNumber").append(computerNumber);

//Add the score counter into the "score" div
var wins = 0;
var losses = 0;

$(".score").append("Wins: " + wins + "<br>");
$(".score").append("Losses: " + losses);

};
//Function to start the game with the above code
startGame();

// Next step is to define the buttons as random number generators at the beginning of the game

function assignNumbers(){
 rick1 = Math.floor(Math.random() * 25);
 rick2 = Math.floor(Math.random() * 10);
 rick3 = Math.floor(Math.random() * 5);
 rick4 = Math.floor(Math.random() * 15);

return [rick1 , rick2, rick3, rick4];
};
//Assign function value to variable
var rickNumbers = assignNumbers();

console.log(rickNumbers);
console.log(rickNumbers[0]);

//Now we add to the playerNumber amount when we click on an image.

$('.rick1').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[0]);
    console.log(playerNumber);
    console.log(rickNumbers[0])
})
$('.rick2').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[1]);
})
$('.rick3').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[2]);
})
$('.rick4').on('click', function() {
    playerNumber = (playerNumber + rickNumbers[3]);
})

$('.pic').on('click', function(){
$('.yourNumber').text(playerNumber);
});

});



//Add all numbers in an array, possible?
