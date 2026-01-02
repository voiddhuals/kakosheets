"use client";

import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Product } from "@/data/products"; // Nadal importujemy typ Product
import { toast } from "sonner";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from '@/hooks/useTranslation';
import { supabase } from '@/integrations/supabase/client'; // Importujemy klienta Supabase

interface ProductContextType {
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => Promise<void>;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  loadingProducts: boolean; // Dodajemy stan ładowania produktów
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loadingProducts, setLoadingProducts] = useState<boolean>(true); // Domyślnie true, bo ładujemy produkty
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Funkcja do pobierania produktów z Supabase
  const fetchProducts = async () => {
    setLoadingProducts(true);
    const { data, error } = await supabase
      .from('products')
      .select('*');

    if (error) {
      console.error('Error fetching products:', error);
      toast.error(t("errorFetchingProducts"));
    } else {
      setProducts(data || []);
    }
    setLoadingProducts(false);
  };

  // Sprawdzanie sesji użytkownika i ładowanie produktów przy starcie
  useEffect(() => {
    const checkUserSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        setIsAuthenticated(true);
      }
      fetchProducts(); // Ładujemy produkty niezależnie od statusu logowania
    };

    checkUserSession();

    // Nasłuchiwanie zmian stanu uwierzytelnienia
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'SIGNED_IN') {
        setIsAuthenticated(true);
        fetchProducts(); // Odśwież produkty po zalogowaniu (jeśli są jakieś specyficzne dla użytkownika)
      } else if (event === 'SIGNED_OUT') {
        setIsAuthenticated(false);
        fetchProducts(); // Odśwież produkty po wylogowaniu
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const addProduct = async (newProduct: Omit<Product, 'id'>) => {
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      toast.error(t("notAuthenticatedToAddProduct"));
      return;
    }

    const productToInsert = {
      ...newProduct,
      user_id: user.id, // Przypisujemy produkt do zalogowanego użytkownika
    };

    const { data, error } = await supabase
      .from('products')
      .insert([productToInsert])
      .select();

    if (error) {
      console.error('Error adding product:', error);
      toast.error(t("errorAddingProduct"));
    } else {
      setProducts((prevProducts) => [...prevProducts, data[0]]);
      toast.success(t("productAddedSuccessfully"));
    }
  };

  const login = (username: string, password: string) => {
    // Na razie pozostawiamy proste logowanie, ale w przyszłości można zintegrować z Supabase Auth
    if (username === "vo1dd" && password === "vo1dd2026") {
      setIsAuthenticated(true);
      toast.success(t("loggedInSuccessfully"));
      navigate('/admin');
      return true;
    }
    toast.error(t("invalidCredentials"));
    return false;
  };

  const logout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error);
      toast.error(t("errorLoggingOut"));
    } else {
      setIsAuthenticated(false);
      toast.info(t("loggedOut"));
      navigate('/login');
    }
  };

  return (
    <ProductContext.Provider value={{ products, addProduct, isAuthenticated, login, logout, loadingProducts }}>
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