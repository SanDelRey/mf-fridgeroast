// entry.txt: one line, plain text, no trailing whitespace beyond the newline
import { mkdirSync, writeFileSync } from "node:fs";
const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const line = "Fridge locks at midnight 'for scheduled maintenance.' Its maintenance is humming smugly while I eat peanut butter off a spoon.";
mkdirSync(dir, { recursive: true });
writeFileSync(dir + "/entry.txt", line + "\n", "utf8");
