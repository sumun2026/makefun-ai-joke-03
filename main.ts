import { mkdirSync, writeFileSync } from 'node:fs';

const joke = 'My AI agent traced the bug to its root cause and fixed the comment.';

mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt', joke, 'utf8');
