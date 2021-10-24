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
        message: "description",
        name: 'description',
    },
    {
        type: 'input',
        message: "installation instructions",
        name: 'installation',
    },
    {
        type: 'input',
        message: "usage information",
        name: 'usage',
    },
    {
        type: 'input',
        message: "contribution guidelines",
        name: 'contribution',
    },
    {
        type: 'input',
        message: "test instructions",
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