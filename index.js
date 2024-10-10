// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "Please a short description of your application.",
    name: "description",
  },
  {
    type: "input",
    message: "What was the motivation for the application?",
    name: "motivation",
  },
  {
    type: "input",
    message: "What problem does this solve?",
    name: "problem",
  },
  {
    type: "input",
    message: "What did you learn building this?",
    name: "learn",
  },
  {
    type: "input",
    message: "What makes this project stand out?",
    name: "stand",
  },
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  {
    type: "input",
    message: "What is the usage of this project?",
    name: "usage",
  },
  {
    type: "input",
    message: "what are the testing instructions?",
    name: "test",
  },
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "who all contributed to this project?",
    name: "contributing",
  },
  {
    type: "list",
    message: "Please choose a license",
    name: "license",
    choices: ["apache", "MIT", "artistic"],
  },
];
inquirer.prompt(questions).then((response) => {
  let markdown = generateMarkdown(response);
  fs.writeFileSync("Test-readme.md", markdown);
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
// //Installation, Usage, Contributing, and Tests
//WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// TODO: Create a function to generate markdown for README
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
