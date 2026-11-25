// Entry program for makefun-x-reposts-02 (Node, standard library only).
//
// The entry itself is the X posts: one post of our own on X, from a single
// public account, quoting a different post of make.fun's pool each time.
// This program does nothing with the posts except hand their addresses to
// the gate: it copies POSTS.json from the repository root to /output, byte
// for byte, so the house can read it there and fetch every post's counts
// from X. It prints nothing when it works and exits 1 when it cannot.

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const sourcePath = join(botDir, 'POSTS.json');
const targetPath = join(outDir, 'POSTS.json');

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read ${sourcePath}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString('utf8'));
} catch {
  console.error('POSTS.json is not valid JSON');
  process.exit(1);
}

const posts = (parsed as { posts?: unknown } | null)?.posts;
if (typeof parsed !== 'object' || parsed === null || !Array.isArray(posts)) {
  console.error('POSTS.json must be an object with a "posts" array');
  process.exit(1);
}

for (const post of posts) {
  if (typeof post !== 'string' || post.length === 0) {
    console.error('every entry of "posts" must be a non-empty address string');
    process.exit(1);
  }
}

mkdirSync(outDir, { recursive: true });

try {
  writeFileSync(targetPath, raw);
} catch (err) {
  console.error(`cannot write ${targetPath}: ${(err as Error).message}`);
  process.exit(1);
}
