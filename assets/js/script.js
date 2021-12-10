
/* Included special characters are supported by all of the following organizations: OWASP, Oracle Identity Manager and Microsoft Active Directory. Excluded special characters, listed below, are not supported by one or more of these organizations. Excluded special characters = "' &*,;`|’”<=>" . */

/*

1.	Click the button to generate a password;
2.	Present a series of prompts for password criteria;
    a.	Length of the password that is at least 8 and no more than 128 characters;
    b.	Lowercase alpha characters;
    c.	Uppercase alpha characters;
    d.	Numbers; and
    e.	Special characters;
3.	Validate results;
4.	Require at least one character type;
5.	Generate password that matches the selected criteria; and
6.	Password is either displayed in an alert or written to the page.

*/

// Assignment code here

var numbers="0123456789";
var alphaLower="abcdefghijklmnopqrstuvwxyz";
var alphaUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars="-!#$%()/:?@[]\^_{}~+.";
var passLength = 0;
var passChars = "";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  passLen();
};


function passLen() {
  passLength = parseInt(prompt("Passwords must be a minimum of 8 and maximum of 128 characters. How many characters do you want in your password?"));
  if (passLength < 8 || passLength > 128) {
    alert("Password invalid. Please try again.");
    stop;
  } else if
    (confirm ("Are certain you want a password of " + passLength + " characters in lenght?")) {
    console.log(passLength);
    charPrompts()
   }
   else stop;
  };

function charPrompts() {
  if (confirm ("Include numbers in password?")) {
    passChars = passChars + numbers;
    console.log(passChars);
  }
  if (confirm ("Include lower case letters in password?")) {
    passChars = passChars + alphaLower;
    console.log(passChars);
  }
  if (confirm ("Include upper case letters in password?")) {
    passChars = passChars + alphaUpper;
    console.log(passChars);
  }
  if (confirm ("Include special characters in password?")) {
    passChars = passChars + specialChars;
    console.log(passChars);
  }
  if (passChars == "" || passChars == null ) {
    if (confirm("Passwords requires at least one of the following: numbers, lower case letter, upper case letters, and / or special characters. It appears you did not select any. Click OK to try again!")) {
      charPrompts();
    }
  }
  generatePassword();
};

function generatePassword() {
for (i = 0; i <= passLength; i++) {
  passLoop = passChars.charAt(Math.floor(Math.random() * (passLength-1)));
  password = password + passLoop;
  console.log(password);
  }
};

/*

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

