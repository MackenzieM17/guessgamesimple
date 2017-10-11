/* My new guessing game */
alert ("The guessing game's start");
var Games = 0;
var TotalTurns = 0;
var Average = 0;
var PlayAgain = "y";
do{
	
var Answer =  Math.round((Math.random()*100)+ 1);
var Turns = 0;
alert (Answer);
do{
	var Guess = prompt("Guess a number between 1 and 100");
	Turns = Turns+1;
	if (Guess < Answer){
		alert ("Guess Higher");
	}
	else if (Guess > Answer){
		alert ("Guess Lower");
	}
}
while (Guess != Answer);
alert ("Your answer is correct in "+Turns+" Turn.");
Games = Games + 1; 
TotalTurns = TotalTurns + Turns;
Average = TotalTurns / Games;
alert ("It takes you  "+Turns+" Turns");
alert ("The average is "+Average+" Turns.");
var PlayAgain = prompt("Do you want to play again? y = Yes ");
}
while (PlayAgain == "y");
alert ("Thank you for playing");