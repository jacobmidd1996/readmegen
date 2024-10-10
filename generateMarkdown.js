// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: Artistic 2.0](https://img.shields.io/badge/License-artistic_2.0-yellow.svg)](https://opensource.org/license/artistic-2-0)";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "apache") {
    return "[Check it out!](https://opensource.org/license/apache-2-0)";
  } else if (license === "MIT") {
    return "[Check it out!](https://opensource.org/licenses/MIT)";
  } else {
    return "[Check it out!](https://opensource.org/license/artistic-2-0)";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//Installation, Usage, Contributing, and Tests
//WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// TODO: Create a function to generate markdown for README
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
function generateMarkdown(data) {
  console.log("data");
  console.log(data);
  const {
    title,
    description,
    motivation,
    problem,
    learn,
    stand,
    github,
    email,
    usage,
    test,
    installation,
    contributing,
    license,
  } = data;
  return `
# < ${title} >

## Description

${description}

${motivation}. ${problem}. ${learn}. ${stand}.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [tests](#tests)
- [contact](#contact)

## Installation

${installation}

## Usage

${usage}

To add a screenshot, create an \`assets/images\` folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    \`\`\`md
    ![alt text](assets/images/screenshot.png)
    \`\`\`

## Credits

${contributing}

## License

${renderLicenseBadge(license)}
${renderLicenseLink(license)}

## Tests
${test}

## Contact
Github: [Click to visit](https://github.com/${github})
Email: ${email}

`;
}

module.exports = generateMarkdown;
