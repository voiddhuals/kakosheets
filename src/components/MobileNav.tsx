"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, Home, Footprints, Shirt, Coat, Trousers, Hat, Gem, Package, LogIn } from 'lucide-react'; // Importowanie ikonek
import { Separator } from '@/components/ui/separator';
import LanguageToggle from './LanguageToggle';
import { useTranslation } from '@/hooks/useTranslation';

const MobileNav = () => {
  const { t } = useTranslation();

  const navLinks = [
    { name: t("home"), path: "/", icon: Home },
    { name: t("shoes"), path: "/category/shoes", icon: Footprints },
    { name: t("hoodiesSweaters"), path: "/category/hoodies-sweaters", icon: Shirt },
    { name: t("tShirts"), path: "/category/t-shirts", icon: Shirt },
    { name: t("jackets"), path: "/category/jackets", icon: Coat },
    { name: t("pantsShorts"), path: "/category/pants-shorts", icon: Trousers },
    { name: t("headwear"), path: "/category/headwear", icon: Hat },
    { name: t("accessories"), path: "/category/accessories", icon: Gem },
    { name: t("otherStuff"), path: "/category/other-stuff", icon: Package },
  ];

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
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
            >
              <link.icon className="h-5 w-5" /> {/* Renderowanie ikonki */}
              {link.name}
            </Link>
          ))}
          <Separator className="my-2 bg-border" />
          <Link
            to="/login"
            className="flex items-center gap-2 px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
          >
            <LogIn className="h-5 w-5" /> {/* Ikonka dla Logowania */}
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