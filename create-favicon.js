const fs = require('fs');
const path = require('path');

// Create a simple text-based placeholder favicon.ico
// Note: This is not a real ICO file but a text file with the .ico extension
// which can help with Next.js routing during development
const faviconContent = `This is a placeholder for favicon.ico.
The real favicon is served via the metadata configuration in layout.tsx.`;

// Write to app directory
fs.writeFileSync(path.join(__dirname, 'src', 'app', 'favicon.ico'), faviconContent);

// Write to public directory as well
fs.writeFileSync(path.join(__dirname, 'public', 'favicon.ico'), faviconContent);

console.log('Placeholder favicon files created successfully.'); 