let firstCard = 13;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';

let msgEl = document.getElementById("message-el");


function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂";
  } else if (sum === 21) {
    hasBlackJack = true;
    message = "Wohoo! You won! 🥳";
  } else {
    isAlive = false;
    message = "You're out of the game! 😭";
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

  