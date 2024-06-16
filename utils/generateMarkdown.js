// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license || license === 'none') {
    return '';
  }
  return `![License: ${license}](https://img.shields.io/badge/License-${encodeURIComponent(license)}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'none') {
    return '';
  }
  // For simplicity, assuming license input matches known license URLs.
  const licenseLinks = {
    'mit': 'https://opensource.org/licenses/MIT',
    'apache': 'https://opensource.org/licenses/Apache-2.0',
    'gpl': 'https://www.gnu.org/licenses/gpl-3.0',
    'bsd': 'https://opensource.org/licenses/BSD-3-Clause',
  };
  return licenseLinks[license] || '';
}


// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'none') {
    return '';
  }
  const licenseLink = renderLicenseLink(license);
  return `## License

  This project is licensed under the ${licenseLink ? `[${license}](${licenseLink})` : license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
