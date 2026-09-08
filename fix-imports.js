const fs = require("fs");
const path = require("path");

const dirsToScan = [
  path.join(__dirname, "components"),
  path.join(__dirname, "app"),
  path.join(__dirname, "pages")
];

function processFiles(dir) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFiles(fullPath);
    } else if (entry.isFile() && /\.(tsx|jsx)$/.test(entry.name)) {
      let content = fs.readFileSync(fullPath, "utf8");

      const matches = content.match(/import\s+Image\s+from\s+["\x27]next\/image["\x27];?/g);
      if (matches && matches.length > 1) {
        content = content.replace(/import\s+Image\s+from\s+["\x27]next\/image["\x27];?\s*/g, "");
        if (content.includes("use client")) {
          content = content.replace(/"use client";/, "\"use client\";\nimport Image from \"next/image\";");
        } else {
          content = "import Image from \"next/image\";\n" + content;
        }

        fs.writeFileSync(fullPath, content, "utf8");
        console.log("Deduplicated: " + path.relative(__dirname, fullPath));
      }
    }
  }
}

dirsToScan.forEach(dir => processFiles(dir));
console.log("Deduplication complete!");
