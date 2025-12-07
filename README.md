# Cybersecurity Portfolio

A premium, cyberpunk-themed personal portfolio website built with React, TypeScript, and Vite. Designed for Cybersecurity professionals, SysAdmins, and Digital Forensics analysts.

## Features
- 🛡️ **Cyberpunk Aesthetic**: Dark mode, neon accents, scanlines, and glitch effects.
- ⚡ **Performance**: Built on Vite for instant loading.
- 📱 **Responsive**: Fully optimized for mobile and desktop.
- 🔧 **Customizable**: Easy to update content in `src/components`.

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Deployment to GitHub Pages

This project is configured for GitHub Pages deployment.

1. Update `homepage` in `package.json` with your URL:
   ```json
   "homepage": "https://<YOUR_USERNAME>.github.io/portafolio"
   ```

2. Push to GitHub.

3. Deploy:
   ```bash
   npm run deploy
   ```
   *Note: This runs `gh-pages -d dist`.*

## Customization
- **Colors**: Edit variables in `src/index.css`.
- **Content**: Edit individual components in `src/components/`.
