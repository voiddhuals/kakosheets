"use client";

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useProductContext } from "@/context/ProductContext";

const categoryMap: { [key: string]: string } = {
  "shoes": "Shoes",
  "hoodies-sweaters": "Hoodies/Sweaters",
  "t-shirts": "T-Shirts",
  "jackets": "Jackets",
  "pants-shorts": "Pants/Shorts",
  "headwear": "Headwear",
  "accessories": "Accessories",
  "other-stuff": "Other Stuff",
};

const CategoryPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const categoryName = categorySlug ? categoryMap[categorySlug] : undefined;
  const { products } = useProductContext();

  const filteredProducts = categoryName
    ? products.filter((product) => product.category === categoryName)
    : [];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center my-8 text-foreground">
          {categoryName || "Kategoria nie znaleziona"}
        </h1>
        {filteredProducts.length > 0 ? (
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
          <p className="text-center text-muted-foreground">Brak produktów w tej kategorii.</p>
        )}
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default CategoryPage;