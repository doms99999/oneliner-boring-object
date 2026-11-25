// The Most Boring Object Reviewed in One Line — a review of a bread clip.
// The program writes the review to /output/entry.txt (at most 200 chars, UTF-8).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The bread clip's whole job is keeping the bag shut, yet every loaf in my kitchen is closed with a twist and a prayer instead.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
