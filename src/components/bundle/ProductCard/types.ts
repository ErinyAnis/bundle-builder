import type {
  Product,
  ProductVariant,
} from "../../../types";

export interface ProductCardProps {
  product: Product;
}

export interface VariantSelectorProps {
  variants: ProductVariant[];

  selectedVariant: string;

  onSelect: (variantId: string) => void;
}