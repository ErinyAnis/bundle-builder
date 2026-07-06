export interface Variant {
  id: string;
  label: string;
  swatch: string;
}

export interface Product {
  id: string;
  stepId: string;

  type: "camera" | "sensor" | "plan" | "accessory";

  title: string;
  description: string;

  image: string;

  learnMoreUrl: string;

  badge?: string;

  compareAtPrice?: number;

  price: number;

  variants?: Variant[];

  defaultVariant?: string;

  isRequired?: boolean;
}

export interface Step {
  id: string;
  title: string;
  icon: string;
  stepNumber: number;
}

export interface ProductSelection {
  selectedVariant: string;

  variants: Record<string, number>;
}

export type BundleSelections = Record<string, ProductSelection>;

export interface BundleData {
  steps: Step[];
  products: Product[];
  initialSelections: BundleSelections;
}