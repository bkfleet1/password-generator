// Assignment code here
/* incSpecialChar are special characters supported all of the following organizations: OWASP, Oracle Identity Manager and Microsoft Active Directory. */
/* exSpecialChars are special characters not supported by one or more of the following organizations: OWASP, Oracle Identity Manager and Microsoft Active Directory. */
var incSpecialChars="-!#$%()/:?@[\]^_{}~+.";
var exSpecialChars="' &*,;`|’”<=>";
var alphaUpper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaLower="abcdefghijklmnopqrstuvwxyz";
var numbers="0123456789";




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
