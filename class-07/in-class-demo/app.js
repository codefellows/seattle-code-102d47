// NOTES ON FUNCTIONS

// function declaration
// function functionName(parameters){code that will execute}

function addTwoNumbers(num1, num2){
  let sum = num1 + num2;
  console.log(sum);
  return sum
}

// Example of a function that does not need a return statement
// It does the job it's supposed to, we don't need information back from it

function sayHi(){
  console.log("Hello");
}

// sayHi();

// ------------------------------------------------------------------------------

// My code from before, refactored into seperate functions

function greetUser(){
  let usersName = prompt("What is your name?");
  console.log("The user's name is: " + usersName);
  document.write("Hello and welcome " + usersName + "!");
  return usersName
}

function guessColor(){
  let myFavColor = 'yellow';
  let userGuess = prompt("What is my favorite color?");

  if (userGuess == myFavColor) {
    document.write("You guessed my favorite color!");
  } else if (userGuess == "YELLOW") {
    document.write("You guessed my favorite color!");
  } else if (userGuess == "Yellow") {
    document.write("You guessed my favorite color!");
  } else {
    document.write("You did not guess my favorite color.");
  }

  return userGuess;

}

// Functions are being invoked in HTML file, lines 24 & 30

// Example of Data Validation 
// - check the user's input
// if they don't give you what you're expecting,
// ask them one more time.

let usersName = prompt("What is your name?");

if (usersName){
  console.log("Oooh, " + usersName + " is a nice name!");
} else {
  console.log("You gave me nothing...");
  usersName = prompt("Come on, please tell me your name.")
}

console.log(usersName);