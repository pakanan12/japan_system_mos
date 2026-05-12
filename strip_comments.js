import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

function processFile(filePath) {
  const ext = path.extname(filePath);
  if (!['.js', '.jsx', '.css'].includes(ext)) return;
  
  let content = fs.readFileSync(filePath, 'utf8');
  const originalContent = content;
  
  if (ext === '.css') {
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    content = content.replace(/^[ \t]*\n/gm, '');
  } else {
    // Remove full line JSX comments
    content = content.replace(/^[ \t]*\{\s*\/\*[\s\S]*?\*\/\s*\}[ \t]*\r?\n/gm, '');
    // Remove inline JSX comments
    content = content.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, '');
    
    // Remove full line block comments
    content = content.replace(/^[ \t]*\/\*[\s\S]*?\*\/[ \t]*\r?\n/gm, '');
    // Remove inline block comments
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Remove full line double slash comments
    content = content.replace(/^[ \t]*\/\/.*(?:\r?\n|$)/gm, '');
    // Remove inline double slash comments (ignore http:// or https://)
    content = content.replace(/[ \t]*(?<!:)\/\/.*$/gm, '');
  }
  
  if (content !== originalContent) {
    console.log(`Modified ${filePath}`);
    fs.writeFileSync(filePath, content);
  }
}

walkDir(path.join(__dirname, 'src'), processFile);
