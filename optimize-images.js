const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const targetDir = path.join(__dirname, 'public/assets');

async function processImages(dir) {
  if (!fs.existsSync(dir)) {
    console.log('Directory not found:', dir);
    return;
  }
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      await processImages(fullPath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const ext = path.extname(file);
      const name = path.basename(file, ext);
      const outputPath = path.join(dir, `${name}.webp`);
      
      if (fs.existsSync(outputPath)) continue;

      await sharp(fullPath)
        .webp({ quality: 80 })
        .toFile(outputPath)
        .then(() => console.log(`Optimized: ${file} -> ${name}.webp`))
        .catch(err => console.error(`Error processing ${file}:`, err));
    }
  }
}

processImages(targetDir).then(() => console.log('Image optimization complete!'));