// Assignment Code
var pLength = 2;
var totalAry = [];
// List of possible characters and numbers 
var specChar = ['+','_',')','(','*','&','^','%','$','#','@','!','<','>','?'];
var loCase = ['q','w','e','r','t','y','u','i','o','p','a','s','d','f','g','h','j','k','l','z','x','c','v','b','n','m'];
var upCase = ['Q','W','E','R','T','Y','U','I','O','P','A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M']
var numb = ['0','1','2','3','4','5','6','7','8','9'];


var generateBtn = document.querySelector("#generate");


// The actual function that generates random password from array that has been created in the choises function.
function generatePassword() {
  var password = "";
  for(var i = 0; i < pLength; i++) {
var randomizer = Math.floor(Math.random() * totalAry.length);
password = password + totalAry[randomizer];
}
  return password;
}

// This function creates arry of simbols and numbers.
function choises() {
// Resets arry
  totalAry = [];
  // sets the appropriate number of characters in the password 
   pLength = parseInt(prompt("How many characters would you like your password to containe. must be 8 to 128 "));
  if (isNaN(pLength) || (pLength < 8 || pLength > 128)) {
    alert("Please enter a valid number. Must be between 8 to 128");
   
    return false;
    }

if (confirm("Include special characters?")) {
  totalAry = totalAry.concat(specChar);

}
// console.log(specChar)

 if (confirm("Include lowcase letters ?")) {
  totalAry = totalAry.concat(loCase);
}

if (confirm("Include uppercase letters ? ")) {
  totalAry = totalAry.concat(upCase)
}

if (confirm("Include number ? ")) {
  totalAry = totalAry.concat(numb)
}
return true;
}


// Write password to the #password input
// new function added "choises()" to ganarate the arrays of possible characters
function writePassword() {
 var startagane = choises();

 if (startagane !== true) {
  alert("You have to re Enter your choises");
  
  return "Try agane !!!!" ;
  }

 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
