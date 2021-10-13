let firstCard = 13;
let secondCard = 5;
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let msgEl = document.getElementById("message-el");
let cardsEl = document.getElementById("cards-el");
let sumEl = document.getElementById('sum-el');

function startGame() {
    renderGame();
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum;
  cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];

  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "You got Blackjack!";
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }
  
  msgEl.textContent = message;
}

function newCard() {
    let newCard = 3;
    sum += newCard;

    renderGame();
}


//console.log(hasBlackJack);
//console.log(isAlive);
//check age

// let personAge = 21;

// if(personAge < 21) {
//     console.log('YOu can not enter the club!');
// } else{
//     console.log('Welcome!');
// }

  