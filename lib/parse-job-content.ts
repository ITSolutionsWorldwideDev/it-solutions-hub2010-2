// lib/parse-job-content.ts

export interface ParsedJobContent {
  aboutRole?: string[];
  whatYoullDo?: string[];
  whatYoullBring?: string[];
  niceToHave?: string[];
}

function cleanLine(line: string): string {
  return line
    .replace(/^-+\s*/, "")   // remove leading "- "
    .replace(/^\*+\s*/, "")  // remove leading "* "
    .trim();
}

export function parseJobContent(raw: string): ParsedJobContent {
  const result: ParsedJobContent = {};

  // Normalize line endings, split into lines
  const lines = raw.replace(/\r\n/g, "\n").split("\n");

  let currentSection: keyof ParsedJobContent | null = null;
  let buffer: string[] = [];

  const sectionMap: { match: RegExp; key: keyof ParsedJobContent }[] = [
    { match: /about the role/i, key: "aboutRole" },
    { match: /key responsibilities|what you.?ll do/i, key: "whatYoullDo" },
    { match: /requirements|what you.?ll bring/i, key: "whatYoullBring" },
    { match: /nice to have/i, key: "niceToHave" },
  ];

  const flush = () => {
    if (currentSection && buffer.length > 0) {
      result[currentSection] = [...(result[currentSection] || []), ...buffer];
    }
    buffer = [];
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) continue;

    // Is this line a markdown header? (## Heading)
    const headerMatch = line.match(/^#{1,6}\s*(.+)$/);
    if (headerMatch) {
      const headerText = headerMatch[1];
      const matched = sectionMap.find((s) => s.match.test(headerText));
      if (matched) {
        flush();
        currentSection = matched.key;
        continue;
      }
    }

    // Not a header — treat as content for current section
    if (currentSection) {
      buffer.push(cleanLine(line));
    }
  }
  flush();

  return result;
}