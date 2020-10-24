// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function generatePassword(event) {
event.preventDefault();

var options 

var characters = prompt("Hi cutie. ;) Please choose a number from 8-128. This will be how many characters your password will have.")
while (characters < 8 || characters > 128) {
characters = prompt("Choose a number between 8 and 128!");
}

var lowerCaseInput = confirm("Do you want lowercase characters in your password?")
if (lowerCaseInput) {
alert("Awesome!")
}
else {
alert("Okay...")
}

var upperCaseInput = confirm("Do you want uppercase characters in your password?")
if (upperCaseInput) {
alert("Whoo!!!")
}
else {
alert("Okay...")
}

var numericInput = confirm("Do you want numeric characters?")
if (numericInput) {
alert("Yes!!!")
}
else {
alert("Hmm...>_>")
}

var specialCharactersInput = confirm("Final question! Do you want numeric characters?")
if (specialCharactersInput) {
alert("Yes!!!")
}
else {
alert("Wow! Really!?")
}

if (!lowerCaseInput  && !upperCaseInput  && !numericInput  && !specialCharactersInput) {
alert("Oops! You need to have selected at least one criteria. Please try again!")
}

else if (lowerCaseInput) {
options = lowercase;
}

else if (upperCaseInput) {
}

else if (numericInput) {
}

else if (specialCharactersInput) {
}

else if (lowerCaseInput && upperCaseInput) {
}

else if (lowerCaseInput && numericInput) {
}

else if (lowerCaseInput && specialCharactersInput) {
}

else if (upperCaseInput && numericInput) {
}

else if (upperCaseInput && specialCharactersInput) {
}

else if (numericInput && specialCharactersInput) {
}

else if (lowerCaseInput && upperCaseInput && numericInput) {
}

else if (lowerCaseInput && upperCaseInput && specialCharactersInput) {
}

else if (lowerCaseInput && numericInput && specialCharactersInput) {
}

else if (upperCaseInput && numericInput && specialCharactersInput) {
}

else if (lowerCaseInput && upperCaseInput && numericInput && specialCharactersInput) {
}


var upperCase  = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

});
function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
  const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  return symbols [Math.floor(Math.random()* symbols.length)]};