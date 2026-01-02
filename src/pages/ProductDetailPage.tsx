"use client";

import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";
import { useProductContext } from "@/context/ProductContext";
import { Button } from '@/components/ui/button';
import GradientButton from '@/components/GradientButton';
import { useTranslation } from '@/hooks/useTranslation';
import { Skeleton } from '@/components/ui/skeleton';
import { getCategoryTranslationKey } from '@/utils/categories'; // Importujemy getCategoryTranslationKey

const ProductDetailPage = () => {
  const { productId } = useParams<{ productId: string }>();
  const { products, loadingProducts } = useProductContext();
  const { t } = useTranslation();

  const product = products.find(p => p.id === productId);

  if (loadingProducts) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-8">
          <div className="bg-card text-card-foreground shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-8 border border-border">
            <div className="md:w-1/2 flex justify-center">
              <Skeleton className="max-w-full h-[500px] w-full rounded-md shadow-md bg-muted" />
            </div>
            <div className="md:w-1/2 text-center md:text-left space-y-4">
              <Skeleton className="h-10 w-3/4 bg-muted" />
              <Skeleton className="h-8 w-1/2 bg-muted" />
              <Skeleton className="h-6 w-2/3 bg-muted" />
              <Skeleton className="h-12 w-full md:w-auto bg-muted" />
              <Skeleton className="h-10 w-1/2 md:w-auto bg-muted" />
            </div>
          </div>
        </main>
        <MadeWithDyad />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4 text-foreground">{t("productNotFound")}</h1>
            <p className="text-xl text-muted-foreground mb-4">
              {t("productNotFoundMessage")}
            </p>
            <Link to="/" className="text-primary hover:text-primary/90 underline">
              {t("returnToHomepage")}
            </Link>
          </div>
        </main>
        <MadeWithDyad />
      </div>
    );
  }

  // Pobieramy przetłumaczoną nazwę kategorii na podstawie sluga
  const translatedCategoryName = t(getCategoryTranslationKey(product.category));

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-8">
        <div className="bg-card text-card-foreground shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center md:items-start gap-8 border border-border">
          <div className="md:w-1/2 flex justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full h-auto object-contain max-h-[500px] rounded-md shadow-md"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
            <p className="text-3xl font-semibold text-primary mb-6">{product.price}</p>
            <p className="text-lg text-muted-foreground mb-4">{t("category")}: <span className="font-medium text-foreground">{translatedCategoryName}</span></p>
            {product.link && (
              <div className="mt-6">
                <a href={product.link} target="_blank" rel="noopener noreferrer">
                  <GradientButton className="w-full md:w-auto">{t("goToProduct")}</GradientButton>
                </a>
              </div>
            )}
            <div className="mt-8">
              <Link to={`/category/${product.category}`}> {/* Link używa sluga */}
                <Button variant="outline" className="bg-transparent border-border text-foreground hover:bg-accent">{t("returnToCategory")}</Button>
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