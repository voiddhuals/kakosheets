"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguageContext } from '@/context/LanguageContext';

const LanguageToggle = () => {
  const { currentLanguage, toggleLanguage } = useLanguageContext();

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="bg-transparent border-border text-foreground hover:bg-accent"
    >
      {currentLanguage.toUpperCase()}
    </Button>
  );
};

export default LanguageToggle;