const fs = require('fs');
const path = require('path');

const dirsToScan = [
  path.join(__dirname, 'components'),
  path.join(__dirname, 'app'),
  path.join(__dirname, 'pages')
];

function processFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFiles(fullPath);
    } else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, 'utf8');

      if (/<img\s+[^>]*>/i.test(content)) {
        content = content.replace(/<img\s+([^>]*?)src=["']([^"']+)["']([^>]*?)>/gi, (match, p1, srcVal, p2) => {
          const altMatch = (p1 + p2).match(/alt=["']([^"']*)["']/i);
          const altVal = altMatch ? altMatch[1] : "image";
          
          const classMatch = (p1 + p2).match(/className=["']([^"']*)["']/i);
          const classVal = classMatch ? `className="${classMatch[1]}"` : '';

          return `<Image src="${srcVal}" alt="${altVal}" width={500} height={500} loading="lazy" ${classVal} />`;
        });

        if (!content.includes("import Image from 'next/image'")) {
          content = `import Image from 'next/image';\n` + content;
        }

        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Migrated: ${path.relative(__dirname, fullPath)}`);
      }
    }
  }
}

dirsToScan.forEach(dir => processFiles(dir));
console.log('Image migration complete!');