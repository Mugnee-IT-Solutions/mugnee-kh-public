import fs from "fs";
import path from "path";
import sharp from "sharp";

const root = process.cwd();

const targets = [
  {
    file: path.join(root, "public", "images", "hero", "cambodia-led-hero.webp"),
    width: 1920,
    quality: 64,
    maxKB: 160,
  },
  {
    file: path.join(root, "public", "images", "hero", "cambodia-led-billboard-advertising.webp"),
    width: 1600,
    quality: 66,
    maxKB: 135,
  },
  {
    file: path.join(root, "public", "images", "hero", "cambodia-indoor-led-video-wall-retail.webp"),
    width: 1600,
    quality: 66,
    maxKB: 130,
  },
  {
    file: path.join(
      root,
      "public",
      "images",
      "hero",
    "cambodia-smart-classroom-interactive-flat-panel.webp"
    ),
    width: 1600,
    quality: 66,
    maxKB: 120,
  },
  {
    file: path.join(
      root,
      "public",
      "images",
      "hero",
      "cambodia-access-control-turnstile-pa-system.webp"
    ),
    width: 1600,
    quality: 66,
    maxKB: 125,
  },
];

let optimized = 0;
for (const target of targets) {
  if (!fs.existsSync(target.file)) continue;
  const currentStat = await fs.promises.stat(target.file);
  if (currentStat.size <= target.maxKB * 1024) continue;
  const input = await fs.promises.readFile(target.file);
  const output = await sharp(input)
    .resize({ width: target.width, withoutEnlargement: true })
    .webp({ quality: target.quality, effort: 5 })
    .toBuffer();
  await fs.promises.writeFile(target.file, output);
  optimized += 1;
}

console.log(`Optimized ${optimized} critical hero images`);
