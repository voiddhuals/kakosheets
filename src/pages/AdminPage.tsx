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
import { Link } from 'react-router-dom';

const AdminPage = () => {
  const { addProduct, logout } = useProductContext();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('/placeholder.svg');
  const [category, setCategory] = useState('');
  const [productLink, setProductLink] = useState('');

  const categories = [
    "Shoes", "Hoodies/Sweaters", "T-Shirts", "Jackets", "Pants/Shorts",
    "Headwear", "Accessories", "Other Stuff"
  ];

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
    if (!name || !price || !category) {
      alert("Wszystkie pola są wymagane!");
      return;
    }
    addProduct({ name, price, image, category, link: productLink });
    setName('');
    setPrice('');
    setImage('/placeholder.svg');
    setCategory('');
    setProductLink('');
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground">Panel Administracyjny</h1>
          <Button onClick={logout} variant="destructive">Wyloguj</Button>
        </div>

        <Card className="w-full max-w-2xl mx-auto bg-card text-card-foreground border-border">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-primary-foreground">Dodaj Nowy Produkt</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-muted-foreground">Nazwa Produktu</Label>
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
                <Label htmlFor="price" className="text-muted-foreground">Cena</Label>
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
                <Label htmlFor="image" className="text-muted-foreground">URL Obrazka</Label>
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
                <Label htmlFor="productLink" className="text-muted-foreground">Link do Produktu (opcjonalnie)</Label>
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
                <Label htmlFor="category" className="text-muted-foreground">Kategoria</Label>
                <Select onValueChange={setCategory} value={category} required>
                  <SelectTrigger id="category" className="bg-input text-foreground border-border">
                    <SelectValue placeholder="Wybierz kategorię" />
                  </SelectTrigger>
                  <SelectContent className="bg-card text-card-foreground border-border">
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Dodaj Produkt</Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-sm text-muted-foreground mt-8">
          Pamiętaj: Dodane produkty nie będą trwałe i znikną po odświeżeniu strony, ponieważ aplikacja działa tylko po stronie klienta.
        </p>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default AdminPage;