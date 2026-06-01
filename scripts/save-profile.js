const fs = require('fs');
const path = require('path');

if (process.argv.length < 3) {
  console.error('Usage: node scripts/save-profile.js /path/to/image.jpg');
  process.exit(1);
}

const src = process.argv[2];
const destDir = path.join(__dirname, '..', 'public');
const dest = path.join(destDir, 'profile.jpg');

if (!fs.existsSync(src)) {
  console.error('Source file not found:', src);
  process.exit(2);
}

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

fs.copyFileSync(src, dest);
console.log('Copied', src, 'to', dest);
console.log('Now commit and push the change to make the profile image public.');
