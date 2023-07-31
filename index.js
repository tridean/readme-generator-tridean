// TODO: Include packages needed for this application
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "Enter the name of the project.",
    },
    {
        type: "input",
        name: "description",
        message: "Describe the primary function and purpose of this project.",
    },
    {
        type: "input",
        name: "screenshot",
        message: "Input the path to the screenshot."
    },
    {
        type: "input",
        name: "link",
        message: "Input the URL to the deployed application."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select a license applicable to this project.",
        choices: ["MPL2.0", "BSD2", "BSD3", "MIT", "APACHE2.0", "Boost1.0", "none"],
    },
    {
        type: "input",
        name: "usage",
        message:
        "List the technologies, languages, etc associated with the project.",
    },
    {
        type: "input",
        name: "author",
        message: "Enter your GitHub username.",
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email address.",
    },
    {
        type: "input",
        name: "contributors",
        message: "Using GitHub usernames, list any contributors to the project.",
        default: "",
    },
    {
        type: "input",
        name: "test",
        message: "Give a walkthrough of any necessary tests.",
    },
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile("./output/README.md", generateMarkdown({ ...responses }));
        });
    }

// Function call to initialize app
init();
