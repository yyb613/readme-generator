// Retrieve license badge 
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT License':
      return 'https://img.shields.io/badge/License-MIT-yellow.svg';
    case 'Apache License 2.0':
      return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
    case 'GPL License':
      return 'https://img.shields.io/badge/License-GPLv3-blue.svg';
    default:
      return '';
  }
}

// Retrieve license link
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
      return 'https://opensource.org/licenses/MIT';
    case 'Apache License 2.0':
      return 'https://opensource.org/licenses/Apache-2.0';
    case 'GPL License':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    default:
      return '';
  }
}

// Generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description
  ${data.description}

  ## License
  ![${data.license}](${renderLicenseBadge(data.license)})

  This project is licensed under the ${data.license}.
    
  For more information on this license, please visit [their website](${renderLicenseLink(data.license)}).
    
  ## Table of Contents
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
    
  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribute}

  ## Testing
  ${data.tests}

  ## Questions

  If you have any questions, you can find me on [GitHub](https://github.com/${data.github}) or [email me](mailto:${data.email}). 
  `;
}

module.exports = generateMarkdown;
