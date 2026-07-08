import { useState } from "react";
import { useIsProductSelected } from "../../../hooks";
import type { ProductCardProps } from "./types";
import QuantityStepper from "../../ui/QuantityStepper";
import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import VariantSelector from "./VariantSelector";

export default function ProductCard({ product }: ProductCardProps) {
  const isSelected = useIsProductSelected(product.id);

  const defaultVariantId =
    product.defaultVariant ?? product.variants?.[0]?.id ?? "";

  const [selectedVariant, setSelectedVariant] =
    useState<string>(defaultVariantId);
  return (
    <article
      className={`
group
relative
flex
flex-col
rounded-2xl
border
bg-white
p-5
lg:p-6
transition-all
duration-200

${
  isSelected
    ? "border-violet-600 shadow-lg"
    : "border-slate-200 hover:border-slate-300"
}
`}
    >
      <ProductBadge product={product} />

      <ProductImage product={product} />

      <ProductInfo product={product} />

      {product.variants?.length ? (
        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onSelect={setSelectedVariant}
        />
      ) : null}

      <footer
        className="
    mt-6
    flex
    items-center
    justify-between
    gap-4
  "
      >
        <QuantityStepper productId={product.id} variantId={selectedVariant} />

        <ProductPrice product={product} />
      </footer>
    </article>
  );
}
