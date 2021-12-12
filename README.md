# Password Generator Starter Code

# Scope
Create an application that an employee can use to generate a random password based on criteria they’ve selected. This app will run in the browser, and will feature dynamically updated HTML and CSS powered by JavaScript code that you write. It will have a clean and polished user interface that is responsive, ensuring that it adapts to multiple screen sizes. This week’s coursework will teach you all the skills you need to succeed in this assignment.

The password can include special characters. If you’re unfamiliar with these, see this list of Password Special Characters from the OWASP Foundation (Links to an external site.).
https://www.owasp.org/index.php/Password_special_characters


# User Story
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security

# Acceptance Criteria
GIVEN I need a new, secure password

### Item 1
> - WHEN I click the button to generate a password
> - THEN I am presented with a series of prompts for password criteria

### Item 2
> - WHEN prompted for password criteria
> - THEN I select which criteria to include in the password

### Item 3
> - WHEN prompted for the length of the password
> - THEN I choose a length of at least 8 characters and no more than 128 characters

### Item 4
> - WHEN asked for character types to include in the password
> - THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

### Item 5
> - WHEN I answer each prompt
> - THEN my input should be validated and at least one character type should be selected

### Item 6
> - WHEN all prompts are answered
> - THEN a password is generated that matches the selected criteria

### Item 7
> - WHEN the password is generated
> - THEN the password is either displayed in an alert or written to the page

# Site Code
The following narrative details the developer's notes for the portfolio website challenge to conform with the acceptance criteria.

> - Deployed code: https://bkfleet1.github.io/password-generator/
> - GitHub repository: https://github.com/bkfleet1/password-generator 

# Repository
The developer performed the following steps to initiate the project.

1.	Logged into developers GitHub portal
2.	Created a new repository named "password-generator" and a readme.md file
3.	Enabled the repository’s web page features, which are found under the repository’s settings > pages
4.	Opened Git Bash terminal entered the following commands:
> - cd to desktop/projects
> - git clone git@github.com:bkelley1/password-generator.git
> - mkdir assets (make directory assets)
> - cd assets (change directory to assets)
> - mkdir images (make directory images)
> - mkdir documents (make directory documents)
> - mkdir css (make directory css)
> - cd ../../ (change directory to local repository root)
> - git clone https://github.com/coding-boot-camp/friendly-parakeet.git 
5.  Starter code from the "friendly-parakeet" local respository were copied to the "password-generator" repository. Files included the following.
>>> - .gitignore
>>> - readme.md (replaced readme from password-generator clone)
>>> - ./develop/index.html
>>> - ./develop/script.js
>>> - ./develop/style.css
>>> The original files in the .develop were retained in the "password-generator" repository (./develop) and copies of the files were placed in the following locations.
>>> - index.html (repository root directory)
>>> - script.js (./assets/js)
>>> - style.css (./assets/css)
6.	Opened Git Bash terminal entered the following commands:
> - cd to desktop/projects/password-generator
> - git add - A
> - git commit -m "initial portfolio commit"
> - git push origin develop
> - git checkout main
> - git merge develop
> - git add - A
> - git commit -m "initial portfolio commit"
> - git push origin main
> - git checkout -b develop

At this point the development environment on the developer’s local machine and GitHub repository were established and ready for development. Below is a screen capture of the password-generator repository.
 [password generator repository](./assets/images/repository.png) 


 https://bkfleet1.github.io/password-generator/ 

 # Site Structure
The application's structure consistis of three components: CSS, HTML, and JS files. 

# HTML Structure
The application's HTML page (index.html) consists of the following structure.

> - head
> - body
> - div class="wrapper"
>> - header
>> - div class="card"
>>> - div class="card-header"
>>> - div class="card-body"
>>>> - textarea id="password"
>>> - div class="card-footer"
>>>> - button id="generate" class="btn"
> - script

The following graphic further illustrates the site structure.
  [password site architecture](./assets/images/password-design.png) 

# Original Code Modifications

## CSS File
The code in the style.css is the original from the the cloned "friendly-parakeet" respository. 

## HTML File
The code in the index.html is the original cloned from "friendly-parakeet" respository, except for the declared locations of the style.css and script.js. The following graphics illustrates these changes to the original HTML file (highlighted in pink).

[html edits](./assets/images/html-edits.png) 

## Javascript File
Unlike the style.css and index.html files, the code found in the script.js file is new. The following image illustrates the code cloned from the "friendly-parakeet" respository and denotes the two lines of code retained in this application (highligthed in blue). Moreover, var generatebtn and generateBtn.addEventListener were retained to support the initiation of the password generator functions contained in the script.js file.

[original javascript edits 1](./assets/images/js-edit1.png) 

The original generateBtn.addEventListener was modified to launch the passwordLength function instead of the writePassword function. This change is illustrated below.
[original javascript edits 2](./assets/images/js-edit2.png) 


# Application Functionality
The application's acceptance criteria previously noted is addressed in the following manner.

Upon launch of the application the user is presented with the UI illustrated below. https://bkfleet1.github.io/password-generator/ . 
[password generator](./assets/images/pass-generator.png) 

As previously noted, when the user "clicks" red button labeled "Generate Password", the generateBtn.addEventListener launches the passwordLength() function contained in the script.js file - illustrated below. 
[passwordLength function](./assets/images/passLength.png) 

## Password Length Prompt, Validation Checks & Confirmation
The passwordLength() function first prompts the user with the message "Passwords must be a minimum of 8 and maximum of 128 characters. Please enter the number of characters you want in your password in the field below and click OK." As indicated in the message, a field is also provided for the user to type a numeric value >=8 and <=128. The image below illustrates the prompt.
[password length prompt](./assets/images/passlength1.png) 

If the user clicks the CANCEL button, the application end the password generation process. However, if the user clicks OK a series of validations are run to check the value entered by the user. The passwordLength() function first validates the value entered is a numeric data type, which rejects all non-numeric values including NULL entries and triggers an alert with a message stating ""The length of a password must be a number between 8 - 128. You did not enter a number. Please try again." The image below illustrates this alert. 
[prompt numeric value validation](./assets/images/passlength2a.png) 

The second validation checks the length of password desired is >=8 and <=128 characters. If the value entered by the user fails this check, they are presented with an alert with the message "The length of a password must be a number between 8 - 128. Please try again." The image below demonstrates this alert.
[password length validation](./assets/images/passlength2b.png) 

Upon passing the validation checks, the passwordLength() function then confirms password length the user desires with the message "Are certain you want a password of PASSWORD LENGTH characters in lenght?". If the user clicks the CANCEL button, application will exit the password generation routine. However, if the user clicks OK, application will launch the charPrompts() function (i.e., the password data types to include in generated password). 

The password length confirmation is illustrated below.
[password length confirmation](./assets/images/passlength3.png)

## Data Type Prompts
The password generator offers four data types that can be used in the generation of a password - numbers, lower case letters, upper case letters, and special characters. The special characters offered include "-!#$%()/:?@[]\^_{}~+.", which are supported by OWASP, Oracle Identity Manager and Microsoft Active Directory. Using a series of confirm() method contained in the charPrompts() function, the application prompts the user to select the types of data to include in the generated password. The screencapture below contains the charPrompts() function with data confirmation methods.
[data type prompts](./assets/images/charprompts.png)

The following images illustrate the data type prompts presented to the user. Included in the data type prompt is a message "Include DATA TYPE in password?" If the user clicks OK, the data type will be included in the pool of characters that the application will randomly select from to generate a password. If the user clicks CANCEL, the data type will be excluded from the pool of characters to generate a password.

### Data Type Prompt - Numbers
[data type prompt - Numbers](./assets/images/charprompt1.png)

### Data Type Prompt - Lower Case Letters
[data type prompt - lower case letters](./assets/images/charprompt2.png)

### Data Type Prompt - Upper Case Letters
[data type prompt - upper case letters](./assets/images/charprompt3.png)

### Data Type Prompt - Lower Case Letters
[data type prompt - special characters](./assets/images/charprompt4.png)

The application requires at least one data type to generate a password. if the user selects one or more data type, the application will launch the generatePassword() function; which generates the password. However, if the user does not select at least one data type, the appplication will produce the alert below. 
>> If the user clicks OK, the application will present the data prompt series again. If the user clicks the CANCEL button, the application end the password generation process.
 [data type alert](./assets/images/charalert.png)


 ## Random Password Generation
 The generatePassword() function utilizes a looped algorithm to randomly select password characters. The algorithm utilizes the password length and data types selected by the user as variables to generate the password. As noted earlier, the user-selected data types are pooled in array from which the algorithm randomly selects characters. Each time the algorithm runs it selects one character randomly from this pool, which the application logs in memory. The loop function executes the algorithm over-and-over, until it has logged enough characters to reach the user's desired password length.

 The final step of the generatePassword() function is to present the user with the password created by the algorithm. This is achieved using '''document.getElementById("password").textContent=password;'''
 
 The image below contains the complete generatePassword() function.
[password generation function](./assets/images/password-gen.png)

The following image illustrates the password presented in the application's UI.
[password generation function](./assets/images/genpass.png)


