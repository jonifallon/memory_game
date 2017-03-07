console.log("Up and running!");

//array of cards
var cards = ["queen", "queen", "king", "king"];

//empty array to hold cards that are in play
var cardsInPlay = [];


//variable to represent first card flipped
var cardOne = cards[0];

//variable to represent 2nd card flipped
var cardTwo = cards[2];

//add first card to the cardsInPlay array
cardsInPlay.push(cardOne);

//add 2nd card to cardsInPlay array
cardsInPlay.push(cardTwo);

console.log("User flipped " + cardOne);

//display card that user flipped
console.log("User flipped " + cardTwo);

//add logic to check to see if two cards have been played
//if not, don't display any alert
//if yes, alert if they have a match or not
if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	}
	  else {
	  	alert("Sorry, try again.")
	  }
}  else {
	
}