// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the name of your app?',
        name: 'appName',
    },
    {
        type: 'input',
        message: 'short discription of app?',
        name: 'description',
    },
    {
        type: 'input',
        message: 'add you contents here?',
        name: 'tableofContent',
    },
    {
        type: 'input',
        message: 'instructions to install app?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'how is the apped being used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What license are you using?',
        name: 'appLicense',
        choices: ['Apache-2.0', 'BSD-3', 'GPL', 'LGPL', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0', 'N/A']
    },
    {
        type: 'input',
        message: 'who is contributing to your app?',
        name: 'contributers',
    },
    {
        type: 'input',
        message: 'how will the user test the code?',
        name: 'test',
    },
    {
        type: 'input',
        message: 'add your questions here?',
        name: 'questions',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('ReadMe Created Successfully')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.promt(questions)
    .then(function (data) {
        writeToFile('Readme.md', generateMarkdown(data));
    })
}

// Function call to initialize app
init();
