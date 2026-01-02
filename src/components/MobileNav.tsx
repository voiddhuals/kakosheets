"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, LogIn } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';
import { ALL_CATEGORIES } from '@/utils/categories'; // Importujemy ALL_CATEGORIES

const MobileNav = () => {
  const { t } = useTranslation();

  const navLinks = ALL_CATEGORIES.map(cat => ({
    name: t(cat.translationKey),
    path: `/category/${cat.slug}`
  }));

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-foreground">
          <Menu className="h-6 w-6" />
          <span className="sr-only">{t("openNavigationMenu")}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-card text-card-foreground border-r border-border p-4">
        <Link to="/" className="flex items-center mb-6">
          <span className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-black">
            Kakosheets
          </span>
        </Link>
        <Separator className="mb-6 bg-border" />
        <nav className="flex flex-col gap-3">
          <Link
            to="/"
            className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
          >
            {t("home")}
          </Link>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Separator className="my-2 bg-border" />
          <Link
            to="/login"
            className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
          >
            <LogIn className="h-5 w-5" />
            {t("login")}
          </Link>
          <div className="px-3 py-2">
            <LanguageToggle />
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;