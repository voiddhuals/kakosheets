"use client";

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useProductContext } from "@/context/ProductContext";
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '@/components/ui/skeleton'; // Importujemy komponent Skeleton

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const { products, loadingProducts } = useProductContext(); // Pobieramy loadingProducts
  const { t } = useTranslation();

  const getCategoryNameFromSlug = (slug: string) => {
    switch (slug) {
      case "shoes": return t("shoes");
      case "hoodies-sweaters": return t("hoodiesSweaters");
      case "t-shirts": return t("tShirts");
      case "jackets": return t("jackets");
      case "pants-shorts": return t("pantsShorts");
      case "headwear": return t("headwear");
      case "accessories": return t("accessories");
      case "other-stuff": return t("otherStuff");
      default: return t("categoryNotFound");
    }
  };

  const categoryDisplayName = categorySlug ? getCategoryNameFromSlug(categorySlug) : t("categoryNotFound");

  const filteredProducts = categorySlug
    ? products.filter((product) => product.category.toLowerCase().replace(/\s|\//g, '-') === categorySlug)
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center my-8 text-foreground">
          {categoryDisplayName}
        </h1>
        {loadingProducts ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <Skeleton key={index} className="h-64 w-full rounded-lg bg-muted" />
            ))}
          </div>
        ) : filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                image={product.image}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">{t("noProductsInCategory")}</p>
        )}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default CategoryPage;