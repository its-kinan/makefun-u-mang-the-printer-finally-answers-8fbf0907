import { mkdirSync, writeFileSync } from "node:fs";

// The office printer's comeback: flat, literal, counted — one thump per jam,
// as if the machine were the problem and not the hands feeding it crooked.
const LINE =
  "I have printed 214,803 pages and jammed 41 times, and you have thumped me 41 times — one thump per jam, as if the machine were the problem and not the hands feeding it crooked.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
