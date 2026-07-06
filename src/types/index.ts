export interface Variant {
  id: string;
  label: string;
  swatch: string;
}

export interface Product {
  id: string;
  stepId: string;
  category: 'Cameras' | 'Sensors' | 'Accessories' | 'Plan';
  title: string;
  description?: string;
  learnMoreUrl?: string;
  image: string;
  badge?: string;
  compareAtPrice?: number;
  price: number;
  hasVariants: boolean;
  variants?: Variant[];
  defaultVariant?: string;
}

export interface Step {
  id: string;
  title: string;
  icon: string;
  stepNumber: number;
}

// selections[productId][variantId] = quantity
export type Selections = Record<string, Record<string, number>>;
export type ActiveVariants = Record<string, string>;