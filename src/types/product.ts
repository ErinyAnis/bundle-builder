export interface ProductVariant {
  id: string;
  label: string;
  swatch: string;
}

export interface Product {
  id: string;

  stepId: string;

  category: string;

  title: string;

  description: string;

  image: string;

  badge?: string;

  compareAtPrice?: number;

  price: number;

  learnMoreUrl?: string;

  hasVariants: boolean;

  variants?: ProductVariant[];

  defaultVariant?: string;
}