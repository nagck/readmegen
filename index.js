const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a short description of your project"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide step-by-step installation instructions for your project"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide details on how the application can be used."
    },
    {
        type: "list",
        name: "license",
        message: "Please choose one of the following licenses as applicable to your application",
        choices: [
            "Apache",
            "GNU",
            "MIT",
            "Mozilla",
        ]
    },
    {
        type: "input",
        name: "contributing",
        message: "Please provide contribution guidelines for other developers to contribute to your project."
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide application test instructions with examples on how to run them."
    },
    {
        type: "input",
        name: "repo",
        message: "Please provide link to Git repo?"
    },
    {
        type: "input",
        name: "questions",
        message: "Who do I do contact if I have an issue?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub user name? "
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your e-mail address."
    }
    
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('README2.md file created successfully!');
    });
}


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function (data) { //calling the prompt method from inquirer and pasing the questions
        writeToFile("README2.md", generateReadme(data)) // write file with the filename and the data
    })
}

// function call to initialize program
init(); //this is the entry point to the application
