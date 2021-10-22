module.exports = [
    {
        type: 'input',
        message: "What is your project title?",
        name: 'title',
    },
    {
        type: 'input',
        message: "description, installation instructions, usage information, contribution guidelines, and test instructions",
        name: 'description',
    },
    {
        type: 'checkbox',
        message: "Choose a license for your application from a list of options.",
        name: 'license',
        choices: ['MIT', 'B', 'AAA', 'CCC'],
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