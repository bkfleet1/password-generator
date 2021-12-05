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
The following narrative details the developer's notes for the portfolio website challenge to conform with the acceptance criteria. Moreover, the hyperlinks below provide further supporting materials for site development.
> - Deployed code: https://bkfleet1.github.io/password-generator/
> - GitHub repository: https://github.com/bkfleet1/password-generator 

Other links
> - Project writeup: https://bkfleet1.github.io/password-generator/assets/documents/password-generator.pdf 

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