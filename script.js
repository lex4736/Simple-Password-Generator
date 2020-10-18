// Links the script to the unique ID tag "generate password button" in html
let generateBtn = document.querySelector("#generate");


// initiates the script that allows the next step
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Generates a series of prompt selections for the user that will personalize the generation of the password based on choices slected


function generatePassword() {
  
  let passwordLength =parseInt(prompt("Please select desired password lenght.Password must be between 8 - 128"));

  while(passwordLength < 8 || passwordLength > 128 || isNaN(length)) {
    alert("Selection does not meet required parameters. Please try again");
    passwordLength =prompt("Please select a number between 8 - 128");
  }

  let lowerCases = confirm("Would you like lower cases in your password?");

  let upperCases = confirm("Would you like upper cases in your password?");

  let numbers = confirm(" Would you like numbers in your password?");

  let special = confirm(" Would you like special characters in your password?");
  
  

  // Once the user has completed setting the criteria's above for their desired password, the script will use the array below to generate a unique password per the user's selection
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
// Adds an event listener to generate button
generateBtn.addEventListener("click", writePassword);
