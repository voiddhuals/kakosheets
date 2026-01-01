"use client";

import React from 'react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: number;
  image: string;
  name: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, name, price }) => {
  return (
    <Link to={`/product/${id}`} className="block">
      <div className="border border-border rounded-lg p-4 flex flex-col items-center text-center bg-card text-card-foreground shadow-md hover:shadow-lg transition-all duration-200 hover:scale-[1.02]">
        <img src={image} alt={name} className="w-full h-auto object-contain mb-2 max-h-48 rounded-md" />
        <p className="text-sm text-muted-foreground mb-1">{name}</p>
        <p className="font-semibold text-foreground">{price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;