export { metadata } from "../../products/indoor-led-display/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function IndoorLedDisplayPage() {
  const indoorProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("indoor_led_display")
  ).slice(0, 8);

  const productQuickChips = indoorProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["indoor_led_display"],
        filterCategoryIds: ["indoor_led_display"],
        categoryOrderIds: ["indoor_led_display"],
        showCategoryFilters: false,
      }}
    />
  );
}
