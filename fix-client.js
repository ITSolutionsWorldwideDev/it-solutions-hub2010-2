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

      if (content.includes("use client")) {
        content = content.replace(/["\x27]use client["\x27];?\s*/g, "");
        content = "\"use client\";\n" + content;

        fs.writeFileSync(fullPath, content, "utf8");
        console.log("Fixed: " + path.relative(__dirname, fullPath));
      }
    }
  }
}

dirsToScan.forEach(dir => processFiles(dir));
console.log("Client directive fix complete!");
