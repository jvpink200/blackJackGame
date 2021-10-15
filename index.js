let firstCard = getRandomCard();
let secondCard = getRandomCard();
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

function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13) + 1;
  return randomNumber;
}

console.log(getRandomCard());

function renderGame() {
  cardsEl.textContent = "Cards: " 
  //for loop that renders out all the cards
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
  sumEl.textContent = "Sum: " + sum;
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
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
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

  