let firstCard = 16;
let secondCard = 5;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

let msgEl = document.getElementById("message-el");

let sumEl = document.getElementById('sum-el');

function startGame() {
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





//console.log(hasBlackJack);
//console.log(isAlive);
//check age

// let personAge = 21;

// if(personAge < 21) {
//     console.log('YOu can not enter the club!');
// } else{
//     console.log('Welcome!');
// }

  