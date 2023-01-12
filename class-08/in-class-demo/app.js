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

// -----------------------------------------------------------

// My code from before, refactored into seperate functions

function greetUser(){
  let usersName = prompt("What is your name?");

  // Using a while-loop to check if the name does not exist (they cancelled the prompt, or typed nothing)
  while (!usersName){
    usersName = prompt("Please tell me your name.");
  }
  document.write("Hello and welcome " + usersName + "!");
  return usersName
}

function guessColor(){
  let myFavColor = 'yellow';
  let userGuess = prompt("What is my favorite color?");

  // Using Logical OR operators to check multiple conditions
  if (userGuess == myFavColor || 'YELLOW' || 'Yellow') {
    document.write("You guessed my favorite color!");
  } else {
    document.write("You did not guess my favorite color.");
  }

  return userGuess;

}

let myNumber = 10;

// Using a for-loop to write an HTML element to the document a specified number of times
for (let i = 0; i < myNumber; i++){
  document.write('<p style="color: blue;">Hello</p>')
}

// Functions are being invoked in HTML file, lines 24 & 30
