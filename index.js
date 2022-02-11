// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        message: 'What is the title of this project?',
        name: 'title',
        type: 'input'
    },
    {
        message: 'What is the description of this project?',
        name: 'description',
        type: 'input'
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
           const markdownSyntax = markdown(answers);
           writeToFile('README.md', markdownSyntax);
        })
};

// Function call to initialize app
init();
