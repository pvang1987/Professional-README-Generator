// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {  if (!license || license === 'No License') {
  return ''; // If there is no license, return an empty string
}
return `![License](https://img.shields.io/badge/License-${license}-brightgreen)`;
}
  
// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { if (!license || license === 'No License') {
  return ''; // If there is no license, return an empty string
}
return `[License](#license)`;}
  
// Function that returns the license section of README 
// If there is no license, return an empty string
function renderLicenseSection(license) {  if (!license || license === 'No License') {
  return ''; // If there is no license, return an empty string
}
return `## License
  
This application is covered under the ${license} license.`;
}
  
// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);
  return `# ${data.projectTitle}
  ${licenseBadge}
    
  ## Description
  ${data.description}
    
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  ${licenseLink}
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ${licenseSection}
  
  ## Contributing
  ${data.contributing}
    
  ## Tests
  ${data.tests}
  
  ## Questions
  - GitHub Profile: [${data.githubUsername}](https://github.com/${data.githubUsername})
  - Contact me at ${data.email} with any additional questions.
  `;
}
  
module.exports = generateMarkdown;
  