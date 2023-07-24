// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
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

/**
 * add event listener to generate password button
 * a series of prompts for password criteria
 *  - get legth
 *    - validate length 8-128 characters
 *  - inlcude lowercase 
 *  -include upppercase
 *  -include numeric 
 *  -include speical characters
 *    -validate character use 
 *  -geenrate password that meets criteria 
 *  - display password
 */

//variabls definition
// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordCriteria = {
  length: 12,
  lowercase: true,
  uppercase: true,
  numeric: true,
  specialCharacters: true
}

var alphabet = "abcdefghijklmnopqrstuvwxyz";
var numeric = "1234567890";
var specialCharacters = "!@#$%^&*()";

var passwordCharacters = {
  alphaLower: alphabet.split(''),
  alphaUpper: (alphabet.toUpperCase().split('')),
  numbers: numeric.split(''),
  specialChars: specialCharacters.split(''),
}

console.log(passwordCharacters)


//functions

//prompt for length
var passwordLength = confirm("Would you like your password to be minimum of 8 characters long?")
// prompt for characters
var characterPrompt = confirm("Does your password need to contain an uppercase, lowercase, number and special character?")
//validate length, characters

var characters = []
if (passwordCriteria.lowercase) {
  characters = characters.concat(passwordCharacters.alphaLower)
}
if (passwordCriteria.uppercase) {
  characters = characters.concat(passwordCharacters.alphaUpper)
}
if (passwordCriteria.specialCharacters) {
  characters = characters.concat(passwordCharacters.specialChars)
}
if(passwordCriteria.numbers) {
  characters = characters.concat(passwordCharacters.numbers)
}
var password = ""


for (let i = 0; i < passwordCriteria.length; i++) {

  var random = characters[Math.floor(Math.random() * characters.length)]
  console.log(random)
  password = random + password
}

console.log(password)


//generate password
//show password
// var button = 
// button.addEventListener ('click', writePassword)

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//special functions like event listeners 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



var newPassword = alert("Here is your new password: " + password)