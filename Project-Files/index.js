// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
// An array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'Enter your project title: ',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a project description: ',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions: ',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information: ',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines: ',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions: ',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: [
          'MIT_License',
          'GNU_GPLv3',
          'Apache_License_2.0',
          'ISC_License',
          'No_License',
        ],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username: ',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
      },
];

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("README created!");
        }
    });
}

// Function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateReadme(answers);
        writeToFile('README.md', readmeContent);
    });
}
// Function to generate READme data from generateMarkdown
function generateReadme(data) {
    return generateMarkdown(data);
}
// Function call to initialize app
init();
