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
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-600">
          KAKOSHEETS
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
          Twoje źródło najlepszych produktów streetwear. Odkryj unikalne kolekcje i bądź na bieżąco z najnowszymi trendami.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          {/* Zmieniono użycie: GradientButton jest owinięty przez Link */}
          <Link to="/category/shoes">
            <GradientButton>Przeglądaj Produkty</GradientButton>
          </Link>
          <Link to="/admin">
            <GradientButton variant="outline" className="bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-900">
              Panel Admina
            </GradientButton>
          </Link>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;