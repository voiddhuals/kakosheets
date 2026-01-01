"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface GradientButtonProps extends React.ComponentPropsWithoutRef<typeof Button> {
  children: React.ReactNode;
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, children, asChild, ...props }, ref) => {
    return (
      <Button
        className={cn(
          "bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 hover:scale-105", // Uproszczone style
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
GradientButton.displayName = "GradientButton";

export default GradientButton;