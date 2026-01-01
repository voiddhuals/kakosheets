"use client";

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Language } from '@/i18n/translations';

interface LanguageContextType {
  currentLanguage: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('pl'); // Domyślny język to polski

  const toggleLanguage = () => {
    setCurrentLanguage((prevLang) => (prevLang === 'pl' ? 'en' : 'pl'));
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguageContext must be used within a LanguageProvider');
  }
  return context;
};