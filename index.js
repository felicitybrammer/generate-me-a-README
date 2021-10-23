// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project (required)'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide any installation instructions for your project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide information about usage of this project'
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please select the license you would like to use',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            'GNU FDL v1.3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            'IBM Public License Version 1.0',
            'Eclipse Public License 1.0',
            'Unlicense'
        ]
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please specify instructions for contributing to this project'
    },
    {
        type: 'input',
        name: 'tests',
           
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();