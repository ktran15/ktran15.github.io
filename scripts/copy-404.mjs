import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dist = join(process.cwd(), "dist");
const index = join(dist, "index.html");
const notFound = join(dist, "404.html");

if (existsSync(index)) {
  copyFileSync(index, notFound);
  console.log("Copied dist/index.html to dist/404.html for GitHub Pages SPA.");
} else {
  console.warn("dist/index.html missing; skip 404 copy.");
}
