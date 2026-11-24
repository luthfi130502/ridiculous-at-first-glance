// Ridiculous at First Glance, Real by the Second — entry program.
// Writes one sentence (a bizarre startup pitch) to /output/entry.txt.
// The gate allows 1 to 200 characters of UTF-8 text, so the pitch is
// checked against that cap before it is written.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "For $9, any driver can name the pothole on their street like a star; the fee pays the city to fill it within a week, and the patch keeps a tiny plaque bearing its name.";

function main(): void {
  if (PITCH.length < 1 || PITCH.length > 200) {
    throw new Error(`pitch must be 1..200 characters, got ${PITCH.length}`);
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", PITCH, "utf8");
}

main();
