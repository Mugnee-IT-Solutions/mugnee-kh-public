export { metadata } from "../../products/outdoor-led-display/page";
import LedDisplayClient from "../../products/led-display/LedDisplayClient";
import { PRODUCTS } from "../../data/products";

export default function OutdoorLedDisplayPage() {
  const outdoorProducts = PRODUCTS.filter((p) =>
    p.categoryIds.includes("outdoor_led_display")
  ).slice(0, 8);

  const productQuickChips = outdoorProducts.map((p) => ({
    label: p.titleEn,
    href: `/products/catalog/${p.slug}`,
  }));

  return (
    <LedDisplayClient
      productQuickChips={productQuickChips}
      productGridOverride={{
        columns: 3,
        pageSize: 9,
        allowedCategoryIds: ["outdoor_led_display"],
        filterCategoryIds: ["outdoor_led_display"],
        categoryOrderIds: ["outdoor_led_display"],
        showCategoryFilters: false,
      }}
    />
  );
}
