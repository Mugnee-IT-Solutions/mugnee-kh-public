const fs = require("fs");
const path = require("path");
const vm = require("vm");
const ts = require("typescript");

function loadProductsModule(productsPath) {
  const source = fs.readFileSync(productsPath, "utf8");
  const transpiled = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
      esModuleInterop: true,
    },
    fileName: "products.ts",
  });

  const moduleRef = { exports: {} };
  const sandbox = {
    module: moduleRef,
    exports: moduleRef.exports,
    require,
    process,
    console,
  };

  vm.runInNewContext(transpiled.outputText, sandbox, {
    filename: "products.transpiled.js",
  });

  return moduleRef.exports;
}

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), "utf8");
}

function main() {
  const root = process.cwd();
  const productsPath = path.join(root, "app", "data", "products.ts");
  const outDir = path.join(root, "public", "data");

  const { PRODUCT_CATEGORIES, PRODUCTS } = loadProductsModule(productsPath);
  if (!Array.isArray(PRODUCT_CATEGORIES) || !Array.isArray(PRODUCTS)) {
    throw new Error("Could not read PRODUCT_CATEGORIES / PRODUCTS from app/data/products.ts");
  }

  const categories = PRODUCT_CATEGORIES.map((category) => ({
    id: category.id,
    parentId: category.parentId,
    labelEn: category.labelEn,
    labelKm: category.labelKm,
    slug: category.slug,
    descriptionEn: category.descriptionEn,
    descriptionKm: category.descriptionKm,
  }));

  const gridProducts = PRODUCTS.map((product) => ({
    id: product.id,
    slug: product.slug,
    categoryIds: product.categoryIds,
    primaryCategoryId: product.primaryCategoryId,
    titleEn: product.titleEn,
    titleKm: product.titleKm,
    shortDescEn: product.shortDescEn,
    shortDescKm: product.shortDescKm,
    heroImage: product.heroImage,
    tagsEn: product.tagsEn,
    tagsKm: product.tagsKm,
  }));

  const searchProducts = PRODUCTS.map((product) => ({
    slug: product.slug,
    titleEn: product.titleEn,
    titleKm: product.titleKm,
    tagsEn: product.tagsEn,
    tagsKm: product.tagsKm,
  }));

  ensureDir(outDir);
  writeJson(path.join(outDir, "products-grid-index.json"), {
    generatedAt: new Date().toISOString(),
    categories,
    products: gridProducts,
  });
  writeJson(path.join(outDir, "products-search-index.json"), {
    generatedAt: new Date().toISOString(),
    products: searchProducts,
  });

  console.log(
    `Generated product indices: ${gridProducts.length} products, ${categories.length} categories`
  );
}

main();
