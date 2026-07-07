import { useState } from "react";
import { useIsProductSelected } from "../../../hooks";
import type { Product } from "../../../types";
import QuantityStepper from "../../ui/QuantityStepper";
import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";
import type { ProductVariant } from "../../../types";
import VariantSelector from "./VariantSelector";

interface ProductCardProps {
  product: Product;
}

export interface VariantSelectorProps {
  variants: ProductVariant[];

  selectedVariant: string;

  onSelect: (variantId: string) => void;
}

export default function ProductCard({ product }: ProductCardProps) {
  const selected = useIsProductSelected(product.id);

  const initialVariant =
    product.defaultVariant ?? product.variants?.[0]?.id ?? "";

  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  return (
    <article
      className={`
relative
flex
flex-col
rounded-2xl
border
bg-white
p-4
transition-all
duration-200

${selected ? "border-violet-600 shadow-lg" : "border-slate-200"}
`}
    >
      <ProductBadge badge={product.badge} />

      <ProductImage image={product.image} title={product.title} />

      <ProductInfo
        title={product.title}
        description={product.description}
        learnMoreUrl={product.learnMoreUrl}
      />

      {product.variants?.length ? (
        <VariantSelector
          variants={product.variants}
          selectedVariant={selectedVariant}
          onSelect={setSelectedVariant}
        />
      ) : null}

      <div className="mt-6 flex items-center justify-between">
        <QuantityStepper productId={product.id} variantId={selectedVariant} />

        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
      </div>
    </article>
  );
}
