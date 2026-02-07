export { metadata } from "../../products/led-display/power-supply/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function PowerSupplyPage() {
  const accessoryProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("led_accessories")
  ).slice(0, 8);

  const productQuickChips = accessoryProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["led_accessories"],
        filterCategoryIds: ["led_accessories"],
        categoryOrderIds: ["led_accessories"],
        showCategoryFilters: false,
      }}
    />
  );
}
