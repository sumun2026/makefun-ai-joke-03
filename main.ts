// ai-joke-03 entry (Node 22, standard library only).
//
// The competition's gate takes UTF-8 text of 1 to 280 characters that is not only white space, and the judge
// reads exactly the bytes written, so write no line end you do not mean to show.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const JOKE = 'I asked my agent for a one-line fix. It sent a pull request with a changelog, a migration guide and three new dependencies.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), JOKE);
