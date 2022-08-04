// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {

  var lowerCaseInput;
  var upperCaseInput;
  var numericInput;
  var specialCharactersInput;
  var options = [];

  var length = prompt("Hi cutie. ;) Please choose a number from 8-128. This will be how many characters your password will have.")
  if (length < 8 || length > 128) {
    return alert("Really dude!? The length must be between 8 and 128!")
  }

  lowerCaseInput = confirm("Do you want lowercase characters in your password?")
  if (lowerCaseInput) {
    options.push(...lowerCase)
    alert("Awesome!")
  } else {
    alert("Okay...")
  }

  upperCaseInput = confirm("Do you want uppercase characters in your password?")
  if (upperCaseInput) {
    options.push(...upperCase)
    alert("Whoo!!!")
  } else {
    alert("Okay...")
  }

  numericInput = confirm("Do you want numeric characters?")
  if (numericInput) {
    options.push(...numeric)
    alert("Yes!!!")
  } else {
    alert("Hmm...>_>")
  }

  specialCharactersInput = confirm("Final question! Do you want special characters?")
  if (specialCharactersInput) {
    options.push(...specialCharacters)
    alert("Yes!!!")
  } else {
    alert("Wow! Really!?")
  }

  if (!lowerCaseInput && !upperCaseInput && !numericInput && !specialCharactersInput) {
    return alert("Oops! You need to have selected at least one criteria. Please try again!")
  }

  var results = []

  for (var i = 0; i < length; i++) {
    var temp = options[Math.floor(Math.random() * options.length)];
    results.push(temp);
  };

  console.log(options)

  return results.join("")

}
