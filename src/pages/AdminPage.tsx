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
  const [price, setPrice] = useState(''); // Będzie przechowywać sformatowaną cenę (np. "$12.34")
  const [image, setImage] = useState('/placeholder.svg'); // Default placeholder image
  const [category, setCategory] = useState('');
  const [productLink, setProductLink] = useState(''); // Nowe pole dla linku

  const categories = [
    "Shoes", "Hoodies/Sweaters", "T-Shirts", "Jackets", "Pants/Shorts",
    "Headwear", "Accessories", "Other Stuff"
  ];

  // Funkcja do formatowania ceny w polu input
  const formatPriceForInput = (input: string): string => {
    // Usuń istniejący '$' dla łatwiejszego przetwarzania
    let cleanInput = input.replace(/\$/g, '');

    // Pozwól tylko na cyfry i pojedynczy znak dziesiętny
    cleanInput = cleanInput.replace(/[^0-9.]/g, '');

    // Obsłuż wiele znaków dziesiętnych (zachowaj tylko pierwszy)
    const parts = cleanInput.split('.');
    if (parts.length > 2) {
      cleanInput = parts[0] + '.' + parts.slice(1).join('');
    }

    // Jeśli jest znak dziesiętny, ogranicz do dwóch cyfr po nim
    if (cleanInput.includes('.')) {
      const [integerPart, decimalPart] = cleanInput.split('.');
      if (decimalPart && decimalPart.length > 2) {
        cleanInput = integerPart + '.' + decimalPart.slice(0, 2);
      }
    }

    // Jeśli input jest pusty, zwróć pusty string
    if (!cleanInput) return '';

    // Jeśli input to tylko kropka lub zaczyna się od kropki, dodaj '0'
    if (cleanInput === '.') return '$0.';
    if (cleanInput.startsWith('.')) return `$0${cleanInput}`;

    // Jeśli kończy się kropką, zachowaj ją dla wygody pisania
    if (cleanInput.endsWith('.')) {
      return `$${cleanInput}`;
    }

    // Konwertuj na liczbę i sformatuj do dwóch miejsc po przecinku
    const num = parseFloat(cleanInput);
    if (isNaN(num)) {
      return ''; // Powinno być niemożliwe po wcześniejszej sanitacji
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
    addProduct({ name, price, image, category, link: productLink }); // Przekazanie sformatowanej ceny
    setName('');
    setPrice('');
    setImage('/placeholder.svg');
    setCategory('');
    setProductLink(''); // Wyczyszczenie pola linku
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-5xl font-bold">Panel Administracyjny</h1>
          <Button onClick={logout} variant="destructive">Wyloguj</Button>
        </div>

        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Dodaj Nowy Produkt</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="name">Nazwa Produktu</Label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <Label htmlFor="price">Cena</Label>
                <Input
                  id="price"
                  type="text"
                  value={price}
                  onChange={handlePriceChange}
                  required
                  placeholder="$0.00"
                />
              </div>
              <div>
                <Label htmlFor="image">URL Obrazka</Label>
                <Input
                  id="image"
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  placeholder="Np. /placeholder.svg"
                />
              </div>
              <div>
                <Label htmlFor="productLink">Link do Produktu (opcjonalnie)</Label>
                <Input
                  id="productLink"
                  type="url"
                  value={productLink}
                  onChange={(e) => setProductLink(e.target.value)}
                  placeholder="Np. https://example.com/product-link"
                />
              </div>
              <div>
                <Label htmlFor="category">Kategoria</Label>
                <Select onValueChange={setCategory} value={category} required>
                  <SelectTrigger id="category">
                    <SelectValue placeholder="Wybierz kategorię" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button type="submit" className="w-full">Dodaj Produkt</Button>
            </form>
          </CardContent>
        </Card>
        <p className="text-center text-sm text-gray-600 mt-8">
          Pamiętaj: Dodane produkty nie będą trwałe i znikną po odświeżeniu strony, ponieważ aplikacja działa tylko po stronie klienta.
        </p>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default AdminPage;