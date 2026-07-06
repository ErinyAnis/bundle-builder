export interface ProductCardProps {
  id: string;

  title: string;

  description: string;

  image: string;

  badge?: string;

  compareAtPrice?: number;

  price: number;

  hasVariants: boolean;
}