"use client";

import React from 'react';
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import GradientButton from '@/components/GradientButton';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500 text-glow font-orbitron">
          KAKOSHEETS
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/category/shoes">
            <GradientButton>Przeglądaj Produkty</GradientButton>
          </Link>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;