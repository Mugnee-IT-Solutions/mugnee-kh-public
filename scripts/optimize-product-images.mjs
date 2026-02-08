import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();
const inputDir = path.join(root, "public", "images", "products");
const maxWidth = 1600;

if (!fs.existsSync(inputDir)) {
  console.error(`Missing folder: ${inputDir}`);
  process.exit(1);
}

const files = fs.readdirSync(inputDir).filter((f) =>
  /\.(png|jpe?g|webp)$/i.test(f)
);

const tasks = files.map(async (file) => {
  const inputPath = path.join(inputDir, file);
  const base = file.replace(/\.(png|jpe?g|webp)$/i, "");
  const webpPath = path.join(inputDir, `${base}.webp`);
  const avifPath = path.join(inputDir, `${base}.avif`);

  try {
    const img = sharp(inputPath).resize({ width: maxWidth, withoutEnlargement: true });
    const isWebp = /\.webp$/i.test(file);

    if (!isWebp) {
      await img.webp({ quality: 78 }).toFile(webpPath);
    }
    await img.avif({ quality: 58 }).toFile(avifPath);
  } catch (err) {
    console.warn(`Skipping ${file}: ${err?.message || err}`);
  }
});

await Promise.all(tasks);
console.log(`Optimized ${files.length} images to WebP/AVIF.`);
