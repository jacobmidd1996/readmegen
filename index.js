//  packages needed for project
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown.js");
// array of questions for user input
const questions = [
  // title
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  // description
  {
    type: "input",
    message: "Please a short description of your application.",
    name: "description",
  },
  // motivation
  {
    type: "input",
    message: "What was the motivation for the application?",
    name: "motivation",
  },
  // problem
  {
    type: "input",
    message: "What problem does this solve?",
    name: "problem",
  },
  // learn
  {
    type: "input",
    message: "What did you learn building this?",
    name: "learn",
  },
  // stand
  {
    type: "input",
    message: "What makes this project stand out?",
    name: "stand",
  },
  // github
  {
    type: "input",
    message: "What is your github username?",
    name: "github",
  },
  // email
  {
    type: "input",
    message: "What is your email?",
    name: "email",
  },
  // usage
  {
    type: "input",
    message: "how do you use this project?",
    name: "usage",
  },
  // test
  {
    type: "input",
    message: "what are the testing instructions?",
    name: "test",
  },
  // installation
  {
    type: "input",
    message: "What are the installation instructions?",
    name: "installation",
  },
  // contributing
  {
    type: "input",
    message: "who all contributed to this project?",
    name: "contributing",
  },
  // logo
  {
    type: "input",
    message: "insert logo link",
    name: "logo",
  },
  // license
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

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize app
function init() {}

// Function call to initialize app
init();
