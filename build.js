'use strict';

// Pull in our modules
import chalk from 'chalk';
import boxen from 'boxen';
import fs from 'fs';
import path from 'path';

// Define options for Boxen
const options = {
  borderStyle: 'round',
  padding: 1,
  margin: 1,
  textAlign: 'center'
};

const name = chalk.rgb(255, 144, 0).bold('Jon Deaves'.toUpperCase());
const role = 'Web Developer';

const username = 'jondeaves';
const npmLink = `https://npmjs.com/~${username}`;
const githubLink = `https://github.com/${username}`;
const linkedinLink = `https://linkedin.com/in/${username}`;
const webLink = `https://${username}.me`;

// Text + chalk definitions
const data = {
  name: `           ${name}`,
  title: `          ${role}`,
  npm: npmLink,
  github: githubLink,
  linkedin: linkedinLink,
  web: webLink
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name}`;
const working = `${data.title}`;
const npming = `  ${data.npm}`;
const githubing = `  ${data.github}`;
const linkedining = `${data.linkedin}`;
const webing = `     ${data.web}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  working +
  newline + // Add one whole blank line
  newline +
  npming +
  newline + //
  githubing +
  newline +
  linkedining +
  newline +
  webing;

fs.writeFileSync(
  path.join('./bin/output'),
  boxen(output, options)
);
