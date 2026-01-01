"use client";

import { useLanguageContext } from '@/context/LanguageContext';
import { translations, TranslationKeys } from '@/i18n/translations';

export const useTranslation = () => {
  const { currentLanguage } = useLanguageContext();

  const t = (key: TranslationKeys) => {
    return translations[currentLanguage][key] || key; // Fallback to key if translation not found
  };

  return { t, currentLanguage };
};