// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// (also creates license link)
function renderLicenseBadge(license) {
  if (license == "MPL2.0") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license == "BSD2") {
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
  }
  else if (license == "BSD3") {
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  }
  else if (license == "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license == "Apache2.0") {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license == "Boost1.0") {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if (license == "none") {
    return "";
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "none") {
    return "";
  }
  else return `## License\nThis project is covered under ${license}.`;

}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Deployed Application URL
  ${data.link}
  ## Screenshot
  ![screenshot](${data.screenshot})
  ## Table of Contents
  * [Using this Application](#UsingthisApplication)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ## Technologies Used:
  ${data.technologies}
  ## Contributors
  ${data.contributors}
  ## Testing
  ${data.test}
  ## Questions
  Send all questions to ${data.email} or check out my [GitHub](https://github.com/${data.author}).
  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
