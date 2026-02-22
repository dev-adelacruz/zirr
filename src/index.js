const fs = require('fs-extra');
const path = require('path');
const chalk = require('chalk');
const readline = require('readline');

// Simple prompt function
function prompt(question, defaultValue = '') {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise((resolve) => {
    rl.question(chalk.blue(`? ${question} `) + (defaultValue ? `(${defaultValue}) ` : ''), (answer) => {
      rl.close();
      resolve(answer.trim() || defaultValue);
    });
  });
}

async function createProject(projectName, options) {
  console.log(chalk.blue.bold('\n⚡ Zirr - Modern React Starter\n'));

  // Get project details
  let projectDetails = {
    name: projectName,
    title: projectName ? projectName.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : ''
  };

  // If not in auto mode, prompt for details
  if (!options.yes) {
    const name = await prompt('Project name:', projectName || 'my-app');
    
    // Validate project name
    if (!name.trim()) {
      console.log(chalk.red('Error: Project name is required'));
      process.exit(1);
    }
    if (!/^[a-z0-9-]+$/.test(name)) {
      console.log(chalk.red('Error: Project name can only contain lowercase letters, numbers, and hyphens'));
      process.exit(1);
    }

    const title = await prompt('Project title:', 
      name.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    );

    projectDetails = { name, title };
  }

  const projectDir = path.resolve(process.cwd(), projectDetails.name);

  // Check if directory exists
  if (fs.existsSync(projectDir)) {
    console.log(chalk.red(`Error: Directory "${projectDetails.name}" already exists.`));
    process.exit(1);
  }

  try {
    console.log(chalk.cyan(`\nCreating project: ${chalk.bold(projectDetails.name)}`));

    // Create project directory
    fs.ensureDirSync(projectDir);

    // Read template files recursively (compatible with older Node versions)
    const templateDir = path.join(__dirname, 'templates');
    
    // Helper function to get all files recursively
    function getAllFiles(dir) {
      const files = [];
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const itemPath = path.join(dir, item);
        const stat = fs.statSync(itemPath);
        
        if (stat.isDirectory()) {
          const subFiles = getAllFiles(itemPath);
          for (const subFile of subFiles) {
            files.push(path.join(item, subFile));
          }
        } else {
          files.push(item);
        }
      }
      
      return files;
    }
    
    const templateFiles = getAllFiles(templateDir);

    // Process and copy each template file
    for (const templateFile of templateFiles) {
      const sourcePath = path.join(templateDir, templateFile);
      const targetPath = path.join(projectDir, templateFile);

      // Ensure target directory exists
      fs.ensureDirSync(path.dirname(targetPath));

      // Read template content
      let content = fs.readFileSync(sourcePath, 'utf-8');

      // Replace placeholders
      content = content.replace(/{{PROJECT_NAME}}/g, projectDetails.name);
      content = content.replace(/{{PROJECT_TITLE}}/g, projectDetails.title);

      // Write to target
      fs.writeFileSync(targetPath, content);

      console.log(chalk.gray(`  ✓ ${templateFile}`));
    }

    // Create additional required files
    createAdditionalFiles(projectDir, projectDetails);

    console.log(chalk.green('\n✅ Project created successfully!\n'));

    // Show next steps
    console.log(chalk.bold('Next steps:'));
    console.log(chalk.cyan(`  cd ${projectDetails.name}`));
    console.log(chalk.cyan('  npm install'));
    console.log(chalk.cyan('  npm run dev\n'));

    console.log(chalk.gray('Happy coding! 🚀'));

  } catch (error) {
    console.error(chalk.red('Error creating project:'), error);
    process.exit(1);
  }
}

function createAdditionalFiles(projectDir, projectDetails) {
  // Create package.json from template
  const packageJson = {
    name: projectDetails.name,
    private: true,
    version: '0.0.0',
    type: 'module',
    engines: {
      node: '>=18.0.0'
    },
    scripts: {
      dev: 'vite',
      build: 'vite build',
      lint: 'eslint .',
      preview: 'vite preview'
    },
    dependencies: {
      'lucide-react': '^0.562.0',
      'react': '^19.2.0',
      'react-dom': '^19.2.0'
    },
    devDependencies: {
      '@eslint/js': '^9.39.1',
      '@tailwindcss/postcss': '^4.1.18',
      '@types/react': '^19.2.5',
      '@types/react-dom': '^19.2.3',
      '@vitejs/plugin-react': '^5.1.1',
      'autoprefixer': '^10.4.24',
      'eslint': '^9.39.1',
      'eslint-plugin-react-hooks': '^7.0.1',
      'eslint-plugin-react-refresh': '^0.4.24',
      'globals': '^16.5.0',
      'postcss': '^8.5.6',
      'tailwindcss': '^4.1.18',
      'vite': '^7.2.4'
    }
  };

  fs.writeFileSync(
    path.join(projectDir, 'package.json'),
    JSON.stringify(packageJson, null, 2)
  );

  // Create index.html
  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectDetails.title} - Modern React App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`;

  fs.writeFileSync(
    path.join(projectDir, 'index.html'),
    indexHtml
  );

  // Create configuration files
  const configFiles = {
    'vite.config.js': `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})`,

    'tailwind.config.js': `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`,

    'postcss.config.js': `export default {
  plugins: {
    "@tailwindcss/postcss": {},
    autoprefixer: {},
  },
}`,

    'eslint.config.js': `import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
])`,

    'src/index.css': `@import "tailwindcss";

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}`,

    'src/main.jsx': `import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`,

    '.gitignore': `# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage
*.lcov

# nyc test coverage
.nyc_output

# Grunt intermediate storage (https://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Microbundle cache
.rpt2_cache/
.rts2_cache_cjs/
.rts2_cache_es/
.rts2_cache_umd/

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env
.env.test

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# Next.js build output
.next

# Nuxt.js build / generate output
.nuxt
dist

# Gatsby files
.cache/
public

# Vuepress build output
.vuepress/dist

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# DynamoDB Local files
.dynamodb/

# TernJS port file
.tern-port

# Stores VSCode versions used for testing VSCode extensions
.vscode-test

# Temporary folders
tmp/
temp/`
  };

  // Write all config files
  for (const [filePath, content] of Object.entries(configFiles)) {
    const fullPath = path.join(projectDir, filePath);
    fs.ensureDirSync(path.dirname(fullPath));
    fs.writeFileSync(fullPath, content);
    console.log(chalk.gray(`  ✓ ${filePath}`));
  }
}

module.exports = createProject;