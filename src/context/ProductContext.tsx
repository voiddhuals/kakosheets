"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, allProducts as initialProducts } from "@/data/products";
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation'; // Import useTranslation

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  const { t } = useTranslation(); // Użycie hooka tłumaczeń

  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    const productWithId = { ...newProduct, id: products.length + 1 };
    setProducts((prevProducts) => [...prevProducts, productWithId]);
    toast.success(t("productAddedSuccessfully")); // Użycie tłumaczenia
  };

  const login = (username: string, password: string) => {
    // Zaktualizowane dane logowania
    if (username === "vo1dd" && password === "vo1dd2026") {
      setIsAuthenticated(true);
      toast.success(t("loggedInSuccessfully")); // Użycie tłumaczenia
      navigate('/admin');
      return true;
    }
    toast.error(t("invalidCredentials")); // Użycie tłumaczenia
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    toast.info(t("loggedOut")); // Użycie tłumaczenia
    navigate('/login');
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, isAuthenticated, login, logout }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};