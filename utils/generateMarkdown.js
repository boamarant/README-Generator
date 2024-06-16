// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  if (!license || license === 'None') { //Does not render a badge if no license is selected
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`; //Renders license badge if there is a license
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') { //Does not render a link if no license is selected
    return '';
  }
  
  const licenseLinks = { //Provides links for common licenses
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache': 'https://opensource.org/licenses/Apache-2.0',
    'GPL': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return licenseLinks[license] || '';
}


// TODO: Create a function that returns the license section of README
function renderLicenseSection(license) {
  if (!license || license === 'None') { //If there is no license, return a different string
    return `## License
    
    There is no license for this project.`;
  }
  const licenseLink = renderLicenseLink(license); //Accepts information about license and returns a fitting string
  return `## License

  This project is licensed under the ${licenseLink ? `[${license}](${licenseLink})` : license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) { //Uses data from "answers" in the init function inside of index.js to create markdown text
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  For any questions, please contact me via:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})
  `;
}

module.exports = generateMarkdown;
