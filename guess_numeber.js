// Write a JS program to generate a random number and store it in a variable.
// The program than takes an input from the user to tell them whether the number is correct, greater or lesser than the original number.
// 100 - (number of guesses) points are awarded for each correct guess.
// The program is expected to terminate when the user guesses the correct number.
// Number should be between 1-100.

const minNumber =1;
const maxNumber =100;
const randomNumber = Math.floor(Math.random() * (maxNumber - minNumber +1)) + minNumber;

let noOfGuesses = 0;

while(true) {
    noOfGuesses++;
    let userInput = prompt("Guess the number between 1-100");

    if(userInput == randomNumber) {
        alert("Correct Guess");
        alert(`You took ${noOfGuesses} guesses`);
        alert(`Your score is ${100 - noOfGuesses}`);
        break;
    } else if (userInput > randomNumber) {
        alert("Guess is greater than the number");
    } else {
        alert("Guess is lesser than the number");
    }
}