let firstCard = 17;
let secondCard = 6;

let sum = firstCard + secondCard;

if (sum < 21) {
    console.log('Do you want to draw a new card?');
} else if (sum === 21) {
    console.log('Wohoo! You won!')
} else {
    console.log("You're out of the game!")
}

//check age

let personAge = 21;

if(personAge < 21) {
    console.log('YOu can not enter the club!');
} else{
    console.log('Welcome!');
}