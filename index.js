// Packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// Array of questions for user input
const questions = require("./utils/questions.js");

const fileName = "README.md";

// Writes to README file
function writeToFile(fileName) {
    inquirer.prompt(questions)
        .then(answers => {
            console.log(answers);
            let data = createData(answers);
            fs.writeFile(fileName, data, err => {
                err ? console.log(err) : console.log('The file has been saved!');
            });
        });
}

function createData({ title, description }) {
    let data = `# ${title}
${description}`;

    return data
}

// Function to initialize app
function init() {
    writeToFile(fileName)
}


init();
