// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === 'Apache-2.0') {
    return `![License: Apache-2.0](https://img.shields.io/badge/License-Apache--2.0-blue)`
  } else if(license === 'BSD-3' ) {
    return `![License: MIT](https://img.shields.io/badge/License-BSD--3-blue)`
  } else if(license === 'GPL' ) {
    return `![License: GPL](https://img.shields.io/badge/License-GPL-blue)`
  } else if(license === 'LGPL' ) {
    return `![License: LGPL](https://img.shields.io/badge/License-LGPL-blue)`
  } else if(license === 'MIT' ) {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-blue)`
  } else if(license === 'MPL-2.0' ) {
    return `![License: MPL-2.0](https://img.shields.io/badge/License-MPL--2.0-blue)`
  } else if(license === 'CDDL-1.0' ) {
    return `![License: CDDL-1.0](https://img.shields.io/badge/License-CDDL--1.0-blue)`
  } else if(license === 'EPL-2.0'){
    return `![License: EPL2.0](https://img.shields.io/badge/License-EPL--2.0-blue)`
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
