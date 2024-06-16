// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
{
    type: 'input', //Sets type property from inquirer to allow any user input
    name: 'title', //Creates name for generateMarkdown to read
    message: 'What is the title of your project?', //Sets prompt given to the user
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
    type: 'list', //Allows a set number of choices rather than any user input
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'], //Sets possible choices for the user
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
function writeToFile(fileName, data) { //Accepts name of a file and the data for content to be added to the file
    fs.writeFile(fileName, data, (err) => // Uses node.js to write to the accepted file
    err ? console.error(err) : console.log('README.md created successfully!') //Creates message to show that the task was successfully completed
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => { //Presents the questions array and awaits answers that the user inputs
        const markdown = generateMarkdown(answers); //Sends answers to generateMarkdown
        writeToFile('README.md', markdown); //Sends file name and data to writeToFile function
  });
}

// Function call to initialize app
init();
