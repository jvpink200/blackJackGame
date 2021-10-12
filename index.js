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

let personAge = 25;

if(personAge >= 21) {
    console.log('You are old enough to enter');
} else{
    console.log('Too young!');
}