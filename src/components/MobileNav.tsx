"use client";

import React from 'react';
import { Link } from 'react-router-dom';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shoes", path: "/category/shoes" },
  { name: "Hoodies/Sweaters", path: "/category/hoodies-sweaters" },
  { name: "T-Shirts", path: "/category/t-shirts" },
  { name: "Jackets", path: "/category/jackets" },
  { name: "Pants/Shorts", path: "/category/pants-shorts" },
  { name: "Headwear", path: "/category/headwear" },
  { name: "Accessories", path: "/category/accessories" },
  { name: "Other Stuff", path: "/category/other-stuff" },
];

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-foreground">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Otwórz menu nawigacyjne</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[250px] sm:w-[300px] bg-card text-card-foreground border-r border-border p-4">
        <Link to="/" className="flex items-center mb-6">
          <span className="font-orbitron text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-red-600 text-glow">
            Kakosheets
          </span>
        </Link>
        <Separator className="mb-6 bg-border" />
        <nav className="flex flex-col gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="block px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
            >
              {link.name}
            </Link>
          ))}
          <Separator className="my-2 bg-border" />
          <Link
            to="/login"
            className="block px-3 py-2 text-lg font-medium text-muted-foreground hover:text-primary hover:bg-accent rounded-md transition-colors duration-200"
          >
            Login
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;