// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
},
{
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Provide usage information:',
},
{
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines:',
},
{
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions:',
},
{
    type: 'input',
    name: 'license',
    message: 'What is the license for your project? Enter "None" if there is no license:',
},
{
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub username:',
},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email address:',
},
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md created successfully!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        answers.license = answers.license.toLowerCase();
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
  });
}

// Function call to initialize app
init();
