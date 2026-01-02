import { ProductCardProps } from "@/components/ProductCard";

export interface Product extends ProductCardProps {
  id: string; // Zmieniono na string, ponieważ UUID z Supabase jest stringiem
  category: string;
  link?: string;
  user_id?: string; // Dodano user_id
}

export const allProducts: Product[] = []; // Pusta tablica produktów, dane będą z Supabase