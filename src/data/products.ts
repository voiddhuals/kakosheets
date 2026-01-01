import { ProductCardProps } from "@/components/ProductCard";

export interface Product extends ProductCardProps {
  id: number;
  category: string;
  link?: string; // Dodano opcjonalne pole link
}

export const allProducts: Product[] = []; // Pusta tablica produktów