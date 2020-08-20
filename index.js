const fs = require("fs");
const inquirer = require("inquirer");

/*
what is the app for
how to use the app
how to install it 
how to report issues 
how to make contributions so that other developers are more likely to use and contribute to the success of the project.
title of your project 
sections entitled Description
Table of Contents
Installation
Usage
License
Contributing
Tests
Questions

description
installation instructions
usage information
contribution guidelines
test instructions
*/

// array of questions for user
const questions = [
    {
        type:'input',
        message: "What is the title of your project?",
        name: "title"
    },{
        type:'input',
        message: "Give a brief description of your what your project does:",
        name: "description"
    },{
        type:'input',
        message: "How do you use this project?",
        name: "usage"
    },{
        type:'input',
        message: "Give instructions on how to install this project:",
        name: "install"
    },{
        type:'input',
        message: "How can others contribute to the project?",
        name: "contribution"
    },{
        type:'list',
        message: "What kind of license would you like to use for this project?",
        choices: ["MIT","GNU","ISC","Apache"],
        name: "license"
    },{
        type:'input',
        message: "How can someone test this project?",
        name: "testing"
    },{
        type:'input',
        message: "What is your GitHub username?",
        name: "github"
    },{
        type:'input',
        message: "What is your email?",
        name: "email"
    }
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        console.log('answers: ', answers);
        
        // writeToFile("README.md", answers)
    }
    catch {err => console.log(err)};
}

// function call to initialize program
init();
