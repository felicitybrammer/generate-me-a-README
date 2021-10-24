// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'GNU AGPLv3': return `![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)`;
    case 'GNU GPLv3': return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
    case 'GNU LGPLv3': return `![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)`;
    case 'Mozilla Public License 2.0': return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)`
    case 'Apache License 2.0': return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
    case 'MIT License': return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
    case 'Boost Software License 1.0': return `![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)`;
    case 'The Unlicense': return `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;
    //default: return 'None';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'GNU AGPLv3': return `https://www.gnu.org/licenses/agpl-3.0`;
    case 'GNU GPLv3': return `https://www.gnu.org/licenses/gpl-3.0`;
    case 'GNU LGPLv3': return `https://www.gnu.org/licenses/lgpl-3.0`;
    case 'Mozilla Public License 2.0': return `https://opensource.org/licenses/MPL-2.0`;
    case 'Apache License 2.0': return `https://opensource.org/licenses/Apache-2.0`;
    case 'MIT License': return `https://opensource.org/licenses/MIT`;
    case 'Boost Software License 1.0': return `https://www.boost.org/LICENSE_1_0.txt`;
    case 'The Unlicense': return `http://unlicense.org/`;
    //default: return 'None';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return license; 
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title} 
  ${renderLicenseBadge(data.license)}  
  ${renderLicenseLink(data.license)}
      
  ## Description

  ${data.description}

  ## Table Of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#username)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Licenses

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  Github: https://github.com/${data.username}/

  If you have additional questions, you can reach me at: ${data.email}
`;
}

module.exports = generateMarkdown;