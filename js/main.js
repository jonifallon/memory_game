//console.log("Up and running!");

//array containing card objects
var cards = [

{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},

{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},

{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-diamonds.png"
}

];

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
  
  console.log("User flipped " + cards[cardId].rank);
  //see card images & suits that are flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  
  cardsInPlay.push(cards[cardId].rank);
  
  if (cardsInPlay.length === 2) {
	checkForMatch();
   }  else {
	
  }
}

flipCard(0);
flipCard(2);







