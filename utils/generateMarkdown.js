function licenseBadgeLink(licenses) {
  switch (licenses) {
    case "Apache License v2":
      return ["[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]", "https://opensource.org/licenses/Apache-2.0"];
    case "3-Clause BSD License":
      return ["[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)]", "https://opensource.org/licenses/BSD-3-Clause"];
    case "2-Clause BSD License":
      return ["[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)]", "https://opensource.org/licenses/BSD-2-Clause"];
    case "GNU General Public License v3 (GPL)":
      return ["[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]", "https://opensource.org/licenses/GPL-3.0"];
    case "GNU Lesser General Public License v3 (LGPL)":
      return ["[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]", "https://opensource.org/licenses/LGPL-3.0"];
    case "MIT License":
      return ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]", "https://opensource.org/licenses/MIT"];
    case "Mozilla Public License 2.0":
      return ["[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]", "https://opensource.org/licenses/MPL-2.0"];
    case "Common Development and Distribution License 1.0":
      return ["[![License: CDDL 1.0](https://img.shields.io/badge/License-CDDL_1.0-red.svg)]", "https://opensource.org/licenses/CDDL-1.0"];
    case "Eclipse Public License version 2.0":
      return ["[![License](https://img.shields.io/badge/License-EPL_2.0-red.svg)]", "https://opensource.org/licenses/EPL-2.0"];
    case "No license":
      return false;

  }
}

function checkIfLicense(answers, text) { 
  const chosenLic = licenseBadgeLink(answers.licenses)
  if (chosenLic){
    return `${chosenLic[0]}(${chosenLic[1]})`
  } else {
    return text;
  }
}
function licenseLink(answers) { 
  const chosenLic = licenseBadgeLink(answers.licenses)
  if (chosenLic){
    return `Usage is provided under the [${answers.licenses}](${chosenLic[1]}). See LICENSE for the full details.`
  } else {
    return "";
  }
}

function generateFile(answers) {
    return `# ${answers.title}
  ${checkIfLicense(answers, "")}

  ## Table of contents
  - [Description](#description)
  - [Installation instructions](#installation-instructions)
  - [Usage information](#usage-information)
  - [Contribution guidelines](#contribution-guidelines)
  - [Test instructions](#test-instructions)
  - [License](#license)
  - [Questions](#questions)

  ## Description
  ${answers.description}
  ## Installation instructions
  For dependancies run following comand:
  ${answers.installation}
  ## Usage information
  ${answers.usage}
  ## Contribution guidelines
  ${answers.contribution}
  ## Test instructions
  Run following command to test:
  ${answers.test}
  ## License
  ${checkIfLicense(answers, "No license specified.")}

  ${licenseLink(answers)}

  ## Questions

  To reach me with additional questions

  GitHub: [${answers.gitHub}](https://github.com/${answers.gitHub})

  Email: ${answers.email}

`;
}

module.exports = generateFile;
