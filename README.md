# ⚡ Zirr - Modern React Starter CLI

[![GitHub stars](https://img.shields.io/github/stars/dev-adelacruz/zirr?style=social)](https://github.com/dev-adelacruz/zirr)
[![npm version](https://img.shields.io/npm/v/zirr)](https://www.npmjs.com/package/zirr)
[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D12.0.0-brightgreen)](https://nodejs.org/)
[![Downloads](https://img.shields.io/npm/dt/zirr)](https://www.npmjs.com/package/zirr)

A professional command-line tool to scaffold modern React applications with production-ready configurations. Based on the elegant template from the `wifi_qr` project, Zirr provides a beautiful foundation for any React application with zero configuration overhead.

## ✨ Why Zirr?

Zirr eliminates the tedious setup process for modern React projects. Instead of spending hours configuring build tools, styling frameworks, and code quality tools, Zirr gives you a complete, polished starting point in seconds.

### Key Advantages

- **🚀 Zero Configuration**: All tools pre-configured and working together
- **🎨 Beautiful Design System**: Professional UI with Tailwind CSS and Lucide icons
- **⚡ Production Ready**: ESLint, optimized build, and modern React practices
- **📱 Fully Responsive**: Mobile-first design that works on all devices
- **🔧 Extensible**: Easy to customize and extend for any project type

## 📦 What's Included

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI library with latest features |
| **Vite** | 7.2.4 | Lightning-fast build tool and dev server |
| **Tailwind CSS** | 4.1.18 | Utility-first CSS framework |
| **ESLint** | 9.39.1 | Code quality and consistency |
| **Lucide React** | 0.562.0 | Beautiful, consistent icon set |
| **PostCSS** | 8.5.6 | CSS processing with autoprefixer |
| **TypeScript Types** | Latest | Type definitions for React and DOM |

## 🚀 Quick Start

### Installation Options

#### Option 1: Install from npm (Recommended)
```bash
# Install globally from npm
npm install -g zirr

# Verify installation
zirr --version
```

#### Option 2: Install from GitHub
```bash
# Install directly from GitHub
npm install -g github:dev-adelacruz/zirr

# Or clone and install locally
git clone https://github.com/dev-adelacruz/zirr.git
cd zirr
npm install
npm link
```

#### Option 3: Direct Usage (No Installation)
```bash
# Run with npx (no installation needed)
npx zirr my-app

# Or run directly from GitHub
npx github:dev-adelacruz/zirr my-app
```

### Creating Your First Project

```bash
# Interactive mode (recommended)
zirr my-awesome-app

# Auto mode (skip prompts)
zirr my-awesome-app --yes

# Specify different directory
cd ~/projects
zirr new-project
```

## 📖 Detailed Usage

### Command Line Options

```bash
zirr <project-name> [options]
```

| Option | Alias | Description | Example |
|--------|-------|-------------|---------|
| `--yes` | `-y` | Skip all prompts, use defaults | `zirr my-app -y` |
| `--help` | `-h` | Show help message | `zirr --help` |
| `--version` | `-v` | Show version information | `zirr --version` |

### Interactive Prompts

When running without `--yes`, Zirr will ask:

1. **Project Name**: Must be lowercase with hyphens (e.g., `my-awesome-app`)
2. **Project Title**: Human-readable title (auto-generated from name)

Example session:
```bash
$ zirr my-awesome-app
⚡ Zirr - Modern React Starter

? Project name: (my-awesome-app) 
? Project title: (My Awesome App) 

Creating project: my-awesome-app
  ✓ App.jsx
  ✓ vite.config.js
  ✓ tailwind.config.js
  ... (more files)

✅ Project created successfully!

Next steps:
  cd my-awesome-app
  npm install
  npm run dev

Happy coding! 🚀
```

## 📁 Generated Project Structure

```
my-awesome-app/
├── 📄 package.json           # Project dependencies and scripts
├── 📄 index.html            # HTML entry point with meta tags
├── ⚙️ vite.config.js        # Vite configuration (dev server, build)
├── 🎨 tailwind.config.js    # Tailwind CSS customization
├── 🛠️ postcss.config.js     # PostCSS plugins (Tailwind + autoprefixer)
├── ✅ eslint.config.js      # ESLint configuration with React rules
├── 🙈 .gitignore           # Comprehensive Git ignore file
├── 📁 src/
│   ├── 🎭 App.jsx          # Main React component (sample UI)
│   ├── 🚀 main.jsx         # React DOM rendering entry point
│   └── 🎨 index.css        # Global styles with Tailwind imports
└── 📁 public/
    └── 🖼️ vite.svg         # Default favicon (replace with your logo)
```

## 🎭 Sample Application Preview

The generated `App.jsx` includes a fully functional demo that showcases:

### 1. **Modern Design Patterns**
- Gradient backgrounds and smooth shadows
- Rounded corners and responsive spacing
- Consistent color palette using Tailwind
- Animated interactive elements

### 2. **React Best Practices**
- Functional components with hooks (`useState`)
- Proper component structure and organization
- Event handling and state management
- Conditional rendering and list mapping

### 3. **Interactive Features**
- Live counter with increment/reset functionality
- Responsive grid layout (mobile → desktop)
- Icon buttons with hover states
- Feature cards with Lucide icons

### 4. **Developer Experience**
- Getting started instructions
- Ready-to-use code snippets
- Development commands reference
- Clear file structure comments

## 🛠️ Development Workflow

### Available Scripts

```bash
# Start development server with hot reload
npm run dev
# Open http://localhost:5173 in your browser

# Build for production (optimized)
npm run build
# Outputs to `dist/` directory

# Lint code for errors and warnings
npm run lint

# Preview production build locally
npm run preview

# Run all three: dev + lint + type check (custom)
npm start
```

### Development Server Features

- **⚡ Instant HMR**: Changes appear without page reload
- **📱 Network Access**: Access from other devices on network
- **🔍 Source Maps**: Debug original source code in browser
- **📦 Optimized Builds**: Tree-shaking and code splitting

## 🎨 Customization Guide

### Tailwind CSS Configuration

Edit `tailwind.config.js` to customize:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#3B82F6',
          secondary: '#10B981',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

### Adding New Dependencies

```bash
# Install additional packages
npm install axios date-fns

# Install dev dependencies
npm install -D @types/node @testing-library/react
```

### Modifying Vite Configuration

Update `vite.config.js` for advanced needs:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Example: Add SVG support

export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    port: 3000,
    open: true, // Auto-open browser
  },
  build: {
    outDir: 'build', // Change output directory
  },
})
```

## 🔍 Template Source & Philosophy

Zirr is based on the production-tested template from the `wifi_qr` project, which demonstrates:

- **Real-world usability**: Battle-tested in an actual application
- **Performance optimization**: Fast loading and smooth interactions
- **Accessibility considerations**: Semantic HTML and ARIA attributes
- **Print styles**: CSS media queries for printing
- **Cross-browser compatibility**: Works on modern browsers

### What We Changed

| Original (wifi_qr) | Zirr Version | Reason |
|-------------------|--------------|---------|
| WiFi QR generator | Generic starter | Broader applicability |
| Network forms | Interactive demo | Showcase React capabilities |
| Print-specific UI | Responsive design | Better mobile experience |
| External QR API | Self-contained | No external dependencies |

## 🧪 Testing the CLI

### Smoke Test
```bash
# Clean test
cd /Users/aldrindelacruz/workspace
rm -rf test-project
node zirr-cli/bin/zirr.js test-project --yes

# Verify files were created
ls -la test-project
cat test-project/package.json
```

### Interactive Test
```bash
# Test with prompts (requires manual input)
node zirr-cli/bin/zirr.js interactive-test
```

### Project Validation
```bash
# Test if generated project works
cd test-project
npm install
npm run dev &
# Check if server starts on http://localhost:5173
```

## 📚 Advanced Topics

### Git Integration

```bash
# Initialize git repository
cd my-awesome-app
git init
git add .
git commit -m "Initial commit from Zirr"

# Connect to remote repository
git remote add origin https://github.com/username/repo.git
git branch -M main
git push -u origin main
```

### Adding TypeScript

```bash
# Install TypeScript
npm install -D typescript @types/react @types/react-dom

# Create tsconfig.json
npx tsc --init

# Rename files from .jsx to .tsx
mv src/App.jsx src/App.tsx
mv src/main.jsx src/main.tsx
```

### Environment Variables

Create `.env` file:
```env
VITE_API_URL=https://api.example.com
VITE_APP_TITLE=My Awesome App
```

Access in code:
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🐛 Troubleshooting

### Common Issues

#### "Project name can only contain lowercase letters, numbers, and hyphens"
- **Solution**: Use `my-app` instead of `MyApp` or `my_app`
- **Example**: `zirr my-project` ✓, `zirr MyProject` ✗

#### "Directory already exists"
- **Solution**: Choose a different name or delete existing directory
- **Example**: `rm -rf existing-app && zirr existing-app`

#### Node.js Version Warnings
- **Solution**: The CLI works with Node 12+, but generated projects need Node 18+
- **Fix**: Install Node 18+ from [nodejs.org](https://nodejs.org/)

#### Permission Errors
- **Solution**: Use `sudo` for global installation or fix npm permissions
- **Alternative**: Use `npm link` for development without sudo

### Getting Help

1. Check the help: `zirr --help`
2. Verify Node version: `node --version`
3. Check npm version: `npm --version`
4. Review generated files for errors

## 🚀 Deployment

### Static Hosting (Vercel, Netlify, GitHub Pages)

```bash
# Build the project
npm run build

# The `dist/` folder contains static files
# Upload to your preferred hosting service
```

### Docker Deployment

Create `Dockerfile`:
```dockerfile
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 📈 Performance Metrics

The generated project includes:

- **🎯 Code Splitting**: Automatic route-based splitting with React.lazy
- **📦 Tree Shaking**: Unused code eliminated from production bundle
- **🖼️ Asset Optimization**: Images and fonts optimized during build
- **⚡ Fast Refresh**: Sub-second updates during development

## 🤝 Contributing

Want to improve Zirr? Here's how:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly: `node bin/zirr.js test-project --yes`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Development Setup

```bash
# Clone and setup
git clone <repository>
cd zirr-cli
npm install

# Make changes to src/ and templates/

# Test changes
node bin/zirr.js test-changes

# Link for global testing
npm link
zirr test-global
```

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** for the amazing library
- **Vite Team** for the incredible build tool
- **Tailwind CSS** for the utility-first approach
- **Lucide** for the beautiful icon set
- **Original wifi_qr project** for the design inspiration

## 📞 Support

- **Issues**: Report bugs or request features
- **Questions**: Check the troubleshooting section first
- **Contributions**: Pull requests welcome!

---

<div align="center">
Made with ⚡ by <b>Zirr</b> • Modern React Starter
<br>
Get started: <code>zirr your-project-name</code>
</div>
