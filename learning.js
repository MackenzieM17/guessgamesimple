/*
50 points for an error-free basic sequence OK
10 points for proper indentations and clear outputs
20 points for calculating & displaying average
10 points for play again after win option
10 points for NaN validation with cancel play option
*/




//initalitze variable
var games = 0;
var turns = 0;
var guess = 0;
var answer = 0;

alert("Starting game");
answer = 15;


do {
	guess = prompt("Guess a number"); //STUDY
	if(guess < answer){
		alert("Guess Higher");
	}
	else if (guess > answer){
		alert("Guess Lower");
	}
}
while (guess != answer);
alert("You are Correct");

//End Product