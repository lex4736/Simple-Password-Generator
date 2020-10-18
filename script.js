// Assignment Code
let generateBtn = document.querySelector("#generate");


//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Prompts after clicking generate password button

function generatePassword() {
  
  let passwordLength = prompt("Please select desired password lengt. Must be between 8 - 128");

  while(passwordLength < 8 || passwordLength > 128) {
    alert("You must choose between 8 and 128");
    passwordLength = prompt("Please enter password length. Select between 8 and 128");
  }

  let lowerCases = confirm("Do you want lower cases in your password?");

  let upperCases = confirm("Do you want upper cases in your password?");

  let numbers = confirm("Do you want numbers in your password?");

  let special = confirm("Do you want special characters in your password?");


  //Check to make sure user selects okay for all choices and uses empty minimums from above
let characters = [];

let numbersarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  if (numbers) {
    characters= characters.concat(numbersarray); 
  }

let lowers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  if(lowerCases) {
    characters= characters.concat(lowers)
  }

  let uppers = ["A" ,"B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  if(upperCases) {
    characters = characters.concat(uppers)
  }

  let specialCharacters = ["!", "@", "$", "%", "^", "&", "*", "(", ")", "+"]
  if(special) {
    characters = characters.concat(specialCharacters)
  }

  let randomPasswordGenerated = [];

  console.log(characters)
  console.log(passwordLength)

  for(let i = 0; i < passwordLength; i++) {
    let randomNumberPicked = Math.floor(Math.random()*characters.length);
    randomPasswordGenerated.push(characters[randomNumberPicked]);
  }

  return randomPasswordGenerated;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
