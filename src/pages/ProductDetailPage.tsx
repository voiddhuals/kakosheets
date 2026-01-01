"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useProductContext } from "@/context/ProductContext";
import { Button } from '@/components/ui/button';

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products } = useProductContext();

  const product = products.find(p => p.id === Number(productId));

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Produkt nie znaleziony</h1>
            <p className="text-xl text-gray-600 mb-4">
              Przepraszamy, ale produkt o podanym ID nie istnieje.
            </p>
            <Link to="/" className="text-blue-500 hover:text-blue-700 underline">
              Wróć do strony głównej
            </Link>
          </div>
        </main>
        <MadeWithDyad />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto object-contain max-h-[500px] rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-gray-900 mb-6">{product.price}</p>
            <p className="text-lg text-gray-600 mb-4">Kategoria: <span className="font-medium">{product.category}</span></p>
            {product.link && (
              <div className="mt-6">
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full md:w-auto">Przejdź do produktu</Button>
                </a>
              </div>
            )}
            <div className="mt-8">
              <Link to={`/category/${product.category.toLowerCase().replace(/\s|\//g, '-')}`}>
                <Button variant="outline">Wróć do kategorii</Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default ProductDetailPage;