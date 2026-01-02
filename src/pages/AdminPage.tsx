"use client";

import React, { useState } from 'react';
import { useProductContext } from '@/context/ProductContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Header from '@/components/Header';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { useTranslation } from '@/hooks/useTranslation';
import { ALL_CATEGORIES } from '@/utils/categories'; // Importujemy ALL_CATEGORIES

const AdminPage = () => {
  const { addProduct, logout } = useProductContext();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('/placeholder.svg');
  const [categorySlug, setCategorySlug] = useState(''); // Zmieniono na categorySlug
  const [productLink, setProductLink] = useState('');
  const { t } = useTranslation();

  const formatPriceForInput = (input: string): string => {
    let cleanInput = input.replace(/\$/g, '');
    cleanInput = cleanInput.replace(/[^0-9.]/g, '');
    const parts = cleanInput.split('.');
    if (parts.length > 2) {
      cleanInput = parts[0] + '.' + parts.slice(1).join('');
    }
    if (cleanInput.includes('.')) {
      const [integerPart, decimalPart] = cleanInput.split('.');
      if (decimalPart && decimalPart.length > 2) {
        cleanInput = integerPart + '.' + decimalPart.slice(0, 2);
      }
    }
    if (!cleanInput) return '';
    if (cleanInput === '.') return '$0.';
    if (cleanInput.startsWith('.')) return `$0${cleanInput}`;
    if (cleanInput.endsWith('.')) {
      return `$${cleanInput}`;
    }
    const num = parseFloat(cleanInput);
    if (isNaN(num)) {
      return '';
    }
    return `$${num.toFixed(2)}`;
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedValue = formatPriceForInput(e.target.value);
    setPrice(formattedValue);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !price || !categorySlug) { // Używamy categorySlug
      alert(t("allFieldsRequired"));
      return;
    }
    // Przekazujemy slug do addProduct, a nie przetłumaczoną nazwę
    addProduct({ name, price, image, category: categorySlug, link: productLink });
    setName('');
    setPrice('');
    setImage('/placeholder.svg');
    setCategorySlug('');
    setProductLink('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">{t("adminPanel")}</h1>
          <Button onClick={logout} variant="destructive">{t("logout")}</Button>
        </div>

        <Card className="w-full max-w-2xl mx-auto bg-card text-card-foreground border border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">{t("addNewProduct")}</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-muted-foreground">{t("productName")}</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="bg-input text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="price" className="text-muted-foreground">{t("price")}</Label>
                <Input
                  id="price"
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  placeholder="$0.00"
                  className="bg-input text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="image" className="text-muted-foreground">{t("imageUrl")}</Label>
                <Input
                  id="image"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Np. /placeholder.svg"
                  className="bg-input text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="productLink" className="text-muted-foreground">{t("productLinkOptional")}</Label>
                <Input
                  id="productLink"
                  type="url"
                  value={productLink}
                  onChange={(e) => setProductLink(e.target.value)}
                  placeholder="Np. https://example.com/product-link"
                  className="bg-input text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="category" className="text-muted-foreground">{t("category")}</Label>
                <Select onValueChange={setCategorySlug} value={categorySlug} required> {/* Używamy setCategorySlug */}
                  <SelectTrigger id="category" className="bg-input text-foreground border-border">
                    <SelectValue placeholder={t("selectCategory")} />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-card-foreground border-border">
                    {ALL_CATEGORIES.map((cat) => ( // Mapujemy przez ALL_CATEGORIES
                      <SelectItem key={cat.slug} value={cat.slug}>{t(cat.translationKey)}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">{t("addProduct")}</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default AdminPage;