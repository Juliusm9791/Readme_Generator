// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input
const questions = require("./utils/questions.js");

// Function for creating file content
const generateFile = require("./utils/generateMarkdown.js")

const fileName = "README.md";

// Writes to README file
function writeToFile() {
    inquirer.prompt(questions)
        .then(answers => {
            fs.writeFile(fileName, generateFile(answers), err => {
                err ? console.log(err) : console.log('The file has been saved!');
            });
        });
}

writeToFile();