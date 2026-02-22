#!/usr/bin/env node

const createProject = require('../src/index.js');

// Parse command line arguments
const args = process.argv.slice(2);
let projectName = '';
let options = { yes: false };

for (let i = 0; i < args.length; i++) {
  const arg = args[i];
  if (arg === '-y' || arg === '--yes') {
    options.yes = true;
  } else if (arg === '-h' || arg === '--help') {
    showHelp();
    process.exit(0);
  } else if (arg === '-v' || arg === '--version') {
    showVersion();
    process.exit(0);
  } else if (!arg.startsWith('-')) {
    projectName = arg;
  }
}

// If no project name provided and not in auto mode, show help
if (!projectName && !options.yes) {
  showHelp();
  process.exit(1);
}

// Execute the main function
createProject(projectName, options).catch((error) => {
  console.error('Error:', error.message);
  process.exit(1);
});

function showHelp() {
  console.log(`
⚡ Zirr - Modern React Starter

Usage:
  zirr <project-name> [options]

Options:
  -y, --yes    Skip prompts and use default values
  -h, --help   Show this help message
  -v, --version Show version

Example:
  zirr my-app
  zirr my-app --yes
`);
}

function showVersion() {
  console.log('zirr v1.0.0');
}
