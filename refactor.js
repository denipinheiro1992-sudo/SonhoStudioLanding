const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
  });
}

walk('./src', function(filePath) {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Backgrounds
    content = content.replace(/bg-brand-white/g, 'bg-brand-dark');
    content = content.replace(/bg-brand-black/g, 'bg-[#111111]');
    content = content.replace(/bg-white/g, 'bg-white/5 backdrop-blur-sm border border-white/10');
    
    // Text colors
    content = content.replace(/text-brand-black/g, 'text-brand-light');
    content = content.replace(/text-brand-white/g, 'text-brand-dark');
    content = content.replace(/text-brand-graphite/g, 'text-gray-400');
    content = content.replace(/text-brand-gray/g, 'text-gray-400');
    
    // Borders
    content = content.replace(/border-brand-black/g, 'border-white');
    content = content.replace(/border-brand-gray/g, 'border-white');
    
    // Accents
    content = content.replace(/brand-orange/g, 'brand-accent');
    
    // Button shapes
    content = content.replace(/rounded-md/g, 'rounded-full');
    
    // Specific tweaks
    content = content.replace(/bg-brand-gray/g, 'bg-white/10');
    
    fs.writeFileSync(filePath, content, 'utf8');
  }
});
console.log('Refactoring complete.');
