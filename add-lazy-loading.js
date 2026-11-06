#!/usr/bin/env node
/**
 * add-lazy-loading.js
 *
 * Scans a Next.js project and:
 *  1. Adds loading="lazy" + decoding="async" to raw <img> tags that don't
 *     already have a loading attribute (next/image <Image> components are
 *     SKIPPED — they already lazy-load by default unless `priority` is set).
 *  2. Adds loading="lazy" to <iframe> tags missing it.
 *  3. Flags (but does NOT touch) <img>/<Image> tags that look like they might
 *     be above-the-fold / LCP-critical, so you don't accidentally lazy-load
 *     your hero image and hurt LCP.
 *  4. Flags <img> tags missing width/height (CLS risk) — not auto-fixed
 *     because the right values depend on your design.
 *
 * USAGE:
 *   node add-lazy-loading.js            # dry run — shows what WOULD change
 *   node add-lazy-loading.js --write    # actually writes the changes
 *
 * Run this from your project root (where package.json lives).
 */

const fs = require("fs");
const path = require("path");

const ROOT = process.cwd();
const WRITE = process.argv.includes("--write");

const EXT_RE = /\.(tsx|jsx|ts|js)$/;
const IGNORE_DIRS = new Set([
  "node_modules",
  ".next",
  ".git",
  "dist",
  "build",
  "out",
  ".vercel",
  ".turbo",
]);

// Heuristic keywords that suggest an image is likely above-the-fold / LCP.
// NOTE: checked ONLY against the src value, not the full attrs string —
// otherwise common Tailwind classes like "object-cover" cause false positives.
const LCP_HINTS = [
  "hero",
  "banner",
  "header-bg",
  "bg-hero",
  "poster",
];

// Files to never touch (this script itself, and any one-off migration
// scripts whose source code happens to contain <img ...>-looking strings
// that aren't real JSX).
const EXCLUDE_FILES = new Set([
  "add-lazy-loading.js",
  "migrate-images.js",
]);

let filesScanned = 0;
let imgTagsFound = 0;
let imgTagsFixed = 0;
let iframeTagsFixed = 0;
let flaggedForReview = [];
let missingDimensions = [];

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (IGNORE_DIRS.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full);
    } else if (EXT_RE.test(entry.name) && !EXCLUDE_FILES.has(entry.name)) {
      processFile(full);
    }
  }
}

function processFile(filePath) {
  const original = fs.readFileSync(filePath, "utf8");
  let content = original;
  filesScanned++;

  // --- Handle raw <img ...> tags (NOT next/image <Image .../>) ---
  // Matches <img ...> or <img ... /> but not <Image .../>
  const imgTagRe = /<img\b([^>]*?)\/?>/g;

  content = content.replace(imgTagRe, (match, attrs) => {
    imgTagsFound++;

    const alreadyHasLoading = /\bloading\s*=/.test(attrs);
    const alreadyHasDecoding = /\bdecoding\s*=/.test(attrs);
    const hasWidth = /\bwidth\s*=/.test(attrs);
    const hasHeight = /\bheight\s*=/.test(attrs);
    const srcMatch = attrs.match(/\bsrc\s*=\s*{?["']?([^"'}\s]+)/);
    const srcValue = srcMatch ? srcMatch[1] : "(dynamic src)";

    const looksLcp = LCP_HINTS.some((hint) =>
      srcValue.toLowerCase().includes(hint)
    );

    if (looksLcp) {
      flaggedForReview.push(
        `${filePath}\n    <img src="${srcValue}"> — looks like it MIGHT be above-the-fold (hero/banner/poster). Skipped auto-lazy so LCP isn't hurt. Review manually.`
      );
      // still fill in decoding if missing, but do NOT add loading="lazy"
      if (!alreadyHasDecoding) {
        imgTagsFixed++;
        return match.replace(/<img\b/, `<img decoding="async"`);
      }
      return match;
    }

    if (!hasWidth || !hasHeight) {
      missingDimensions.push(`${filePath}\n    <img src="${srcValue}"> — missing width/height (CLS risk)`);
    }

    if (alreadyHasLoading) {
      return match; // don't touch, already has a loading strategy
    }

    imgTagsFixed++;
    let newAttrs = ` loading="lazy"`;
    if (!alreadyHasDecoding) newAttrs += ` decoding="async"`;
    return match.replace(/<img\b/, `<img${newAttrs}`);
  });

  // --- Handle <iframe ...> tags ---
  const iframeTagRe = /<iframe\b([^>]*?)>/g;
  content = content.replace(iframeTagRe, (match, attrs) => {
    if (/\bloading\s*=/.test(attrs)) return match;
    iframeTagsFixed++;
    return match.replace(/<iframe\b/, `<iframe loading="lazy"`);
  });

  if (content !== original) {
    if (WRITE) {
      fs.writeFileSync(filePath, content, "utf8");
    }
    console.log(`${WRITE ? "✏️  Updated" : "🔍 Would update"}: ${path.relative(ROOT, filePath)}`);
  }
}

console.log(`Scanning project from: ${ROOT}`);
console.log(WRITE ? "Mode: WRITE (files will be modified)\n" : "Mode: DRY RUN (no files modified, use --write to apply)\n");

walk(ROOT);

console.log("\n========== SUMMARY ==========");
console.log(`Files scanned:        ${filesScanned}`);
console.log(`<img> tags found:     ${imgTagsFound}`);
console.log(`<img> tags fixed:     ${imgTagsFixed}`);
console.log(`<iframe> tags fixed:  ${iframeTagsFixed}`);

if (flaggedForReview.length) {
  console.log(`\n⚠️  Skipped ${flaggedForReview.length} image(s) that look LCP-critical (review manually):`);
  flaggedForReview.forEach((f) => console.log(`  - ${f}`));
}

if (missingDimensions.length) {
  console.log(`\n⚠️  ${missingDimensions.length} <img> tag(s) missing width/height (CLS risk, not auto-fixed):`);
  missingDimensions.forEach((f) => console.log(`  - ${f}`));
}

console.log("\nNote: next/image <Image /> components were NOT touched.");
console.log("They already lazy-load by default unless you pass `priority`.");

if (!WRITE) {
  console.log("\n👉 This was a DRY RUN. Re-run with --write to actually apply changes:");
  console.log("   node add-lazy-loading.js --write");
}