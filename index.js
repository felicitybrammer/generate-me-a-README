// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (required)',
        validate: title => {
            if (title) return true; //is return needed?
            console.log('You must enter a title for your project');
            return false;
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project (required).',
        validate: description => {
            if (description) return true;
            console.log('You must enter a description');
            return false;
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use. Include screenshots as needed.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Please select a license (required)',
        choices: [
            'GNU AGPLv3',
            'GNU GPLv3',
            'GNU LGPLv3',
            //'GNU FDL v1.3',
            'Mozilla Public License 2.0',
            'Apache License 2.0',
            'MIT License',
            'Boost Software License 1.0',
            //'IBM Public License Version 1.0',
          //  'Eclipse Public License 1.0',
            'The Unlicense'
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
        message: 'Please provide any testing examples for this project'
    },
    {
        type: 'input',
        name: 'username',
        message: 'Please enter your GitHub username (required)',
        validate: username => {
            if (username) return true;
            console.log('Please enter your GitHub username');
            return false;
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email address (required)',
        validate: email => {
            if (email) return true;
            console.log('You must enter your email address');
            return false;
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) return console.log(`Error: ${err}`);
        console.log('File successfully written!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => {
            writeToFile('./dist/README.md',generateMarkdown(data)) 
        });
}

// Function call to initialize app
init();