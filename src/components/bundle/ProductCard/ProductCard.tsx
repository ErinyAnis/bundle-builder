import { useIsProductSelected } from "../../../hooks";
import type { Product } from "../../../types";
import QuantityStepper from "../../ui/QuantityStepper";
import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const selected = useIsProductSelected(product.id);
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
      <div className="mt-6 flex items-center justify-between">
        <QuantityStepper
          productId={product.id}
          variantId={product.defaultVariant}
        />

        <ProductPrice
          price={product.price}
          compareAtPrice={product.compareAtPrice}
        />
      </div>
    </article>
  );
}
