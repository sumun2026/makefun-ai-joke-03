// ai-joke-03 entry (Node 22, standard library only).
//
// It writes one joke about AI coding agents to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// The judge reads exactly these bytes, so the string is written as-is: no trailing line end,
// no trimming, no pretty-printing.
//
// Local run (MAKEFUN_OUTPUT_DIR stands in for /output outside the grader's container):
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'My AI agent and I have a great division of labor: it writes the code, and I find out what it does.';

// The gate: 1..280 code points, at least one non-space character, no line end anywhere.
const length = [...JOKE].length;
if (length < 1 || length > 280) {
  throw new Error(`joke is ${length} code points, outside the 1..280 gate`);
}
if (!/\S/.test(JOKE)) {
  throw new Error('joke is only white space');
}
if (/[\r\n]/.test(JOKE)) {
  throw new Error('joke carries a line end; the judge reads the bytes as they are');
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE, 'utf8');
