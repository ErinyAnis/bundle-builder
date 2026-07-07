import type { ProductVariant } from "../../../types";

export interface ProductCardProps {
  id: string;

  title: string;

  description: string;

  image: string;

  badge?: string;

  compareAtPrice?: number;

  price: number;
}

export interface VariantSelectorProps {
    variants: ProductVariant[];

    selectedVariant: string;

    onSelect: (variantId: string) => void;
}