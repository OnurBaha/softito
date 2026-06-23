import fs from 'fs';

const cssContent = fs.readFileSync('dist/assets/index-PE-hsxQL.css', 'utf8');

// Search for status-card-box in the minified CSS
const match = cssContent.match(/\.status-card-box\{([^}]+)\}/);
if (match) {
  console.log('Found status-card-box rules:');
  console.log(match[0]);
} else {
  console.log('status-card-box not found in CSS');
}

// Search for status-failed-card-box
const matchFailed = cssContent.match(/\.status-failed-card-box\{([^}]+)\}/);
if (matchFailed) {
  console.log('Found status-failed-card-box rules:');
  console.log(matchFailed[0]);
} else {
  console.log('status-failed-card-box not found in CSS');
}