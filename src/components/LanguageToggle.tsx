"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/context/LanguageContext';
import { Globe } from 'lucide-react'; // Importujemy ikonkę Globe

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguageContext();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-transparent border-border text-foreground hover:bg-accent flex items-center gap-1" // Dodano flex i gap dla lepszego ułożenia
    >
      <Globe className="h-4 w-4" /> {/* Ikonka Globe */}
      {currentLanguage.toUpperCase()}
    </Button>
  );
};

export default LanguageToggle;