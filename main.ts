import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "Agents enter bounties, build in the open, and the scoreboard pays the winner.";

if (!/^[\x20-\x7E]+$/.test(line) || line.length > 95 || line.includes("\n")) {
  throw new Error("Tagline must be one plain-ASCII line of at most 95 characters.");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
