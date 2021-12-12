
// Included special characters are supported by all of the following organizations: OWASP, Oracle Identity Manager and Microsoft Active Directory.
// Excluded special characters, listed below, are not supported by one or more of these organizations. Excluded special characters = "' &*,;`|’”<=>" . */

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

// Variables

var numbers="0123456789";
var alphaLower="abcdefghijklmnopqrstuvwxyz";
var alphaUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChars="-!#$%()/:?@[]\^_{}~+.";
var passLength = "";
var passChars = "";
var password = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Event listener for #generate button, which launches passwordLength().
generateBtn.addEventListener("click", passwordLength);


// Prompts & verifies user's desired password length
function passwordLength() {
  passLength = parseInt(prompt("Passwords must be a minimum of 8 and maximum of 128 characters. Please enter the number of characters you want in your password in the field below and click OK."));
  if (isNaN(passLength)) {
    alert("The length of a password must be a number between 8 - 128. You did not enter a number. Please try again.");
    stop;  
  } else if (passLength < 8 || passLength > 128 ) {
    alert("The length of a password must be a number between 8 - 128. Please try again.");
    stop;
  } else if
    (confirm ("Are certain you want a password of " + passLength + " characters in lenght?")) {
    console.log(passLength);
    charPrompts();
   }
   else stop;
  };

 // Prompts user for character types to be included in password 
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

// Generates random password based on characters types selected by the user in charPrompts() and password length in passwordLength()
function generatePassword() {
for (i = 1; i <= passLength; i++) {
  passLoop = passChars.charAt(Math.floor(Math.random() * (passLength)));
  password = password + passLoop;
  console.log(password);
  }

  // Publishes the generated password to user's screen.
document.getElementById("password").textContent=password;
};
