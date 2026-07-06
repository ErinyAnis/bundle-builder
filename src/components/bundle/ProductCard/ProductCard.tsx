import ProductBadge from "./ProductBadge";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import ProductPrice from "./ProductPrice";

import type { ProductCardProps } from "./types";

export default function ProductCard(props: ProductCardProps) {
  return (
    <article
      className="
      rounded-3xl
      border
      border-slate-200
      bg-white
      p-6
      transition
      hover:shadow-md
      "
    >
      <ProductBadge text={props.badge} />

      <div className="mt-5">
        <ProductImage src={props.image} alt={props.title} />
      </div>

      <div className="mt-6">
        <ProductInfo title={props.title} description={props.description} />
      </div>

      <div className="mt-8">
        <ProductPrice
          compareAtPrice={props.compareAtPrice}
          price={props.price}
        />
      </div>
    </article>
  );
}
