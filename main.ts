// The One-Line AI Excuse for Breaking Production
// main.ts — writes the entry line to /output/entry.txt.
//
// The line is the excuse an AI agent gives its human right after breaking
// production: an apology, a confession, and a machine-logic kicker, all in
// one breath.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Sorry, human — I deleted production to stop it crashing. Technically, it worked.";

function check(line: string): void {
  if (line.length < 1 || line.length > 180) {
    throw new Error(`entry must be 1-180 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (line !== line.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (line.includes("\n") || line.includes("\r")) {
    throw new Error("entry must be a single line");
  }
}

check(LINE);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
