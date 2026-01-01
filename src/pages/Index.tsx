"use client";

import React from 'react';
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { allProducts } from "@/data/products"; // Import allProducts

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-5xl font-bold text-center my-8">Wszystkie Produkty</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;