"use client";

import React from 'react';
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import GradientButton from '@/components/GradientButton';
import { Link } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation'; // Import useTranslation

const Index = () => {
  const { t } = useTranslation(); // Użycie hooka tłumaczeń

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center text-center">
        <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black">
          KAKOSHEETS
        </h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link to="/category/shoes">
            <GradientButton>{t("browseProducts")}</GradientButton> {/* Użycie tłumaczenia */}
          </Link>
          <a href="https://ikako.vip/r/wojdd" target="_blank" rel="noopener noreferrer">
            <GradientButton>{t("kakobuyCoupons")}</GradientButton> {/* Nowy przycisk z tłumaczeniem */}
          </a>
        </div>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;