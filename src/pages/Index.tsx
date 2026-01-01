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
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600 text-glow">
          KAKOSHEETS
        </h1>
        {/* Usunięto paragraf z opisem */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/category/shoes">
            <GradientButton>Przeglądaj Produkty</GradientButton>
          </Link>
          {/* Usunięto przycisk 'Panel Admina' */}
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;