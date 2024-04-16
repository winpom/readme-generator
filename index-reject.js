// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What would you like to Title your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What would you like the Description of your project to say?",
        name: "description",
    },
    {
        type: "input",
        message: "What would you like the Installation Instructions section of your project to say?",
        name: "installation",
    },
    {
        type: "input",
        message: "What would you like the Usage Information section of your project to say?",
        name: "usage",
    },
    {
        type: "input",
        message: "What would you like the Contributing Guidelines section of your project to say?",
        name: "contributing",
    },
    {
        type: "input",
        message: "What would you like the Test Instructions section of your project to say?",
        name: "tests",
    },
    {
        type: "list",
        message: "Which license would you like to use for your project?",
        name: "license",
        choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause 'Simplified' License", "The Unilicense"],
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username",
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email",
    },
];

const licenseBadges = {
    "Apache License 2.0": "[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)",
    "GNU General Public License v3.0": "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    "MIT License": "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "BSD 2-Clause 'Simplified' License": "[![License: BSD 2-Clause](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    "The Unilicense": "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
};

const licenseUrls = {
    "Apache License 2.0": "(https://www.apache.org/licenses/LICENSE-2.0)",
    "GNU General Public License v3.0": "(https://www.gnu.org/licenses/gpl-3.0)",
    "MIT License": "(https://opensource.org/licenses/MIT)",
    "BSD 2-Clause 'Simplified' License": "(https://opensource.org/licenses/BSD-2-Clause)",
    "The Unilicense": "(http://unlicense.org/)"
};

// TODO: Create a function to write README file
function writeToFile(fileName, answers) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), answers)
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log("Writing README...");
        writeToFile("README.md", answers)
        console.log('README.md file created successfully!!!!!!')
    })
};

// Function call to initialize app
init();
