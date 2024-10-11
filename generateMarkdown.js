//  a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === "apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "[![License: Artistic 2.0](https://img.shields.io/badge/License-artistic_2.0-yellow.svg)](https://opensource.org/license/artistic-2-0)";
  }
}

//  a function that returns the license link
function renderLicenseLink(license) {
  if (license === "apache") {
    return "[Check it out!](https://opensource.org/license/apache-2-0)";
  } else if (license === "MIT") {
    return "[Check it out!](https://opensource.org/licenses/MIT)";
  } else {
    return "[Check it out!](https://opensource.org/license/artistic-2-0)";
  }
}

// a function that returns the license section of README

function renderLicenseSection(license) {}
function generateMarkdown(data) {
  console.log("data");
  console.log(data);
  // destructure data object
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
    logo,
    license,
  } = data;
  // return markdown with user input
  return `
  # < ${title} >

<div align="center">
  <a href="https://github.com/${github}">
    <img src="${logo}" alt="Logo" width="80" height="80">
  </a>
</div>

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
// export generate markdown function to be used elsewhere in app
module.exports = generateMarkdown;
