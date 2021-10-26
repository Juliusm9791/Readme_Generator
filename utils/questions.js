const inquirer = require("inquirer");
const popularLicenses = ["No license",
    "Apache License v2",
    "3-Clause BSD License",
    "2-Clause BSD License",
    "GNU General Public License v3 (GPL)",
    "GNU Lesser General Public License v3 (LGPL)",
    "MIT License",
    "Mozilla Public License 2.0",
    "Common Development and Distribution License 1.0",
    "Eclipse Public License version 2.0",
    new inquirer.Separator()];
 
module.exports = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
    },
    {
        type: 'input',
        message: "Write description for your project.",
        name: 'description',
    },
    {
        type: 'input',
        message: "What dependencies you need to install?",
        name: 'installation',
    },
    {
        type: 'input',
        message: "What is required to use this repo?",
        name: 'usage',
    },
    {
        type: 'input',
        message: "What information you need for contribution?",
        name: 'contribution',
    },
    {
        type: 'input',
        message: "What do you need to run the program and test?",
        name: 'test',
    },
    {
        type: 'rawlist',
        message: "Choose a license for your application from a list of popular licenses.",
        name: 'licenses',
        choices: popularLicenses,
    },
    {
        type: 'input',
        message: "What is your GitHub username?",
        name: 'gitHub',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'email',
    },
];