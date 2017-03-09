//console.log("Up and running!");

//array of cards
var cards = ["queen", "queen", "king", "king"];

//empty array to hold cards that are in play
var cardsInPlay = [];

checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!")
	}
	  else {
	  	alert("Sorry, try again.")
	  }
}


//steps when user flips a card
var flipCard = function(cardId) {

  //variable to represent first card flipped
  var cardOne = cards[0];

  //variable to represent 2nd card flipped
  var cardTwo = cards[2];
  
  console.log("User flipped " + cards[cardId]);
  
  cardsInPlay.push(cards[cardId]);
  
  if (cardsInPlay.length === 2) {
	checkForMatch();
   }  else {
	
  }
}

flipCard(0);
flipCard(2);







