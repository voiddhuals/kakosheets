"use client";

import React from 'react';

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, price }) => {
  return (
    <div className="border border-gray-200 p-4 flex flex-col items-center text-center bg-white">
      <img src={image} alt={name} className="w-full h-auto object-contain mb-2" />
      <p className="text-sm text-gray-700 mb-1">{name}</p>
      <p className="font-semibold text-gray-900">{price}</p>
    </div>
  );
};

export default ProductCard;