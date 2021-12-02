// Assignment code here






  //lowercase Letters Randomize
    function getRandomLowercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };
    console.log(getRandomLowercase());

//Uppercase letters Randomize
    function getRandomUppercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };
    console.log(getRandomUppercase());

//Numbers Randomize
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    }
    console.log(getRandomNumber());
  
//Symbols Randomize
    function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';
      return symbols[Math.floor(Math.random() * symbols.length)];
    }
    console.log(getRandomSymbol());
  
//Start of Main Generate Password Function
function generatePassword() {

//Function to set password range
var passwordRange = function() {
  var range = "";
  while (range === "" || range === null || isNaN(range) || range < 8 || range > 128) {
    range = prompt("How many characters would you like your password to contain? (Choose a length of at least 8 characters and no more than 128 characters)");
  }
  return range;
};
console.log(passwordRange());

//Check if lower, upper, number, symbol type should be used
var typeCheck = function() {

while (!lowerCheck && !upperCheck && !numberCheck && !symbolCheck) {
  window.alert("Next select whether you'd like lowercase, uppercase, numbers, or symbols add. (At least one type should be selected to generate password.)")
var lowerCheck = (confirm("Should the password contain lowercase letters?"));
var upperCheck = (confirm("Should the password contain uppercase letters?"));
var numberCheck = (confirm("Should the password contain numbers?"));
var symbolCheck = (confirm("Should the password contain symbols"));
}
console.log(lowerCheck);
console.log(upperCheck);
console.log(numberCheck);
console.log(symbolCheck);
};
typeCheck();




  
  //Returns password value to display box
  return "Generated password will go here!";

};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//From Acceptance Criteria 

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the 

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

//Personal Pseudo Code
//Click generate password
//Presented with a prompt that asks the lengh of the password desired
//Present alert if user selects any responce lower than 8 characters or more than 128
//User response length is is logged 

//User selects True/False if they want uppercase letters
//If true add random uppercase letters based on length
//If false skip adding uppercase letters and log false 

//User selects True/False if they want lowercase letters
//If true add random Lowercase letters based on length
//If false skip adding Lowercase letters

