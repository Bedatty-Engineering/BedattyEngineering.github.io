import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import sharp from "sharp";

const inputPath = resolve("public/og-image.svg");
const outputPath = resolve("public/og-image.png");

const svg = await readFile(inputPath);
const png = await sharp(svg).png({ compressionLevel: 9 }).toBuffer();

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, png);

console.log(`Generated ${outputPath}`);
