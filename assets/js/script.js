// Assignment code here

//lowercase Letters Randomize
    function getRandomLowercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    };
    
//Uppercase letters Randomize
    function getRandomUppercase() {
      return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
    };
    
//Numbers Randomize
    function getRandomNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    };
    
//Symbols Randomize
    function getRandomSymbol() {
    const symbols = '!"#$%&()*+,-./:;<=>?@[^_`{|}~';
      return symbols[Math.floor(Math.random() * symbols.length)];
    };
  
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
//The + converts the return string into a integer. 
const totalRange = +passwordRange();

//Check if lower, upper, number, symbol type should be used (confirm returns either true or false)
var typeCheck = function() {

while (!lowerCheck && !upperCheck && !numberCheck && !symbolCheck) {
  window.alert("Next select whether you would like lowercase, uppercase, numbers, or symbols add. (At least one type should be selected to generate password.)")
  var lowerCheck = (confirm("Should the password contain lowercase letters?"));
  var upperCheck = (confirm("Should the password contain uppercase letters?"));
  var numberCheck = (confirm("Should the password contain numbers?"));
  var symbolCheck = (confirm("Should the password contain symbols"));
}

//This array compiles the true/false returns from lowerCheck, upperCheck, numberCheck, symbolCheck variables
var typeArr = [lowerCheck, upperCheck, numberCheck, symbolCheck];

//Checks to see if lowerCheck is true and if so passes the function gerRandomLowercase. If false it returns a blank array
const lowerCheckValueForGenerator = function () {
  if (lowerCheck === true) {
    return [getRandomLowercase]
  } else {
    return []
  }
};

// ... is the spread operator and does similar things as the lowerCheckValueForGenerator function above
const generators = [
  ...lowerCheckValueForGenerator(),
  ...(upperCheck ? [getRandomUppercase] : []),
  ...(numberCheck ? [getRandomNumber] : []),
  ...(symbolCheck ? [getRandomSymbol] : [])
]

console.log('typeArr:', typeArr);

//Creates an array based on the totalRange 
const passwordArray = Array.apply(null, Array(totalRange))
const characters = passwordArray.map((empty, i) => {
  return generators[i % generators.length]()

}).join('')

console.log('characters', characters)
return characters;

};
//Invoking typeCheck function
const characters = typeCheck();

//Returns password value to display box
return characters;
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
document.getElementById("generate").addEventListener("click", writePassword);


