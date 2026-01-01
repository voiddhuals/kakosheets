"use client";

import React from 'react';
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import { MadeWithDyad } from "@/components/made-with-dyad";

const products = [
  {
    id: 1,
    name: "Lacoste Crew Neck Sweater (5 Variants)",
    price: "$27.42",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Lacoste Cable Knit Sweater (2 Variants)",
    price: "$34.31",
    image: "/placeholder.svg",
  },
  {
    id: 3,
    name: "Lacoste Big Logo Crew Neck Sweater (2 Variants)",
    price: "$30.53",
    image: "/placeholder.svg",
  },
  {
    id: 4,
    name: "Lacoste Javier Knit Sweater",
    price: "$84.00",
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Palace Facemask Zip-Up Hoodie Grey",
    price: "$49.28",
    image: "/placeholder.svg",
  },
  {
    id: 6,
    name: "Palace Facemask Zip-Up Hoodie Black",
    price: "$49.28",
    image: "/placeholder.svg",
  },
  {
    id: 7,
    name: "Palace x Arc'teryx Hoodie #1",
    price: "$12.02",
    image: "/placeholder.svg",
  },
  {
    id: 8,
    name: "Palace x Arc'teryx Hoodie #2",
    price: "$12.02",
    image: "/placeholder.svg",
  },
  {
    id: 9,
    name: "Palace x Arc'teryx Hoodie #3",
    price: "$12.02",
    image: "/placeholder.svg",
  },
  {
    id: 10,
    name: "Palace x Arc'teryx Hoodie #4",
    price: "$12.02",
    image: "/placeholder.svg",
  },
  {
    id: 11,
    name: "Palace x Arc'teryx Hoodie #5",
    price: "$12.02",
    image: "/placeholder.svg",
  },
  {
    id: 12,
    name: "Palace x Arc'teryx Hoodie #6",
    price: "$12.02",
    image: "/placeholder.svg",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-5xl font-bold text-center my-8">Hoodies/Sweaters</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
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