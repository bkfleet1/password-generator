
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
var alphaUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower="abcdefghijklmnopqrstuvwxyz";
var specialChars="-!#$%()/:?@[\]^_{}~+.";




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  passLength()
};

  
function passLength() {
    var passLength= 0;
    passLength = prompt("Passwords must be a minimum of 8 and maximum of 128 characters. How many characters do you want in your password?")
    confirm ("Are certain you want a password of " + passLength + " characters in lenght?"); {
    if (passLength >= 8 && passLength <= 128) {
      console.log("passLength",passLength)
    } else if (passLength <= 8) {
        alert("You've requested a password of " + passLength + " character(s), which is less than 8 characters.")
        writePassword()
    } else { 
        alert("You've requested a password of " + passLength + " character(s), which is more than 128 characters.")
        writePassword()
    }
    }
  };
       
     

/*

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

} */

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

