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

reload = function(){
	 location.reload();

};

//steps when user flips a card
var flipCard = function() {

  var cardId = this.getAttribute('data-id');
  //variable to represent first card flipped
  var cardOne = cards[0];

  //variable to represent 2nd card flipped
  var cardTwo = cards[2];
  
  console.log("User flipped " + cards[cardId].rank);
  //see card images & suits that are flipped
  console.log(cards[cardId].cardImage);
  console.log(cards[cardId].suit);
  cardsInPlay.push(cards[cardId].rank);

  this.setAttribute('src', (cards[cardId].cardImage));
  
  if (cardsInPlay.length === 2) {
	checkForMatch();
   }  else {
	
  }
}

var createBoard = function() {
for (var i = 0; i < cards.length; i++) {
	var cardElement = document.createElement('img');
	cardElement.setAttribute('src', 'images/back.png');
	cardElement.setAttribute('data-id', i);
//addEventListener() method to add a click event to the cardElement
//run flipCard function when uer clicks on a card
	cardElement.addEventListener('click', flipCard);
	document.getElementById('game-board').appendChild(cardElement);



  }
};

createBoard();
