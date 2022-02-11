// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of this project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is the description of this project?',
        name: 'description'
    },
    {
        type: 'list',
        message: 'What is the license of this project?',
        name: 'license'
    },
    {
        type: 'input',
        message: 'Are there any installation instructions?',
        name: 'install'
    },
    {
        type: 'input',
        message: 'How do we use your application?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'Can anyone contribute?',
        name: 'contribute'
    },
    {
        type: 'input',
        message: 'Are there any tests associated with this project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
       if (err) throw err;
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
           const markedDown = markdown(answers);
           writeToFile('README.md', markedDown);
        })
};

// Function call to initialize app
init();
