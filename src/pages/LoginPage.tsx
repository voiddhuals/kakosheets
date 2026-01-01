"use client";

import React, { useState } from 'react';
import { useProductContext } from '@/context/ProductContext';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import { MadeWithDyad } from '@/components/made-with-dyad';
import { useTranslation } from '@/hooks/useTranslation'; // Import useTranslation

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useProductContext();
  const { t } = useTranslation(); // Użycie hooka tłumaczeń

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center p-4">
        <Card className="w-full max-w-md bg-card text-card-foreground border border-border shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-foreground">{t("loginToAdminPanel")}</CardTitle> {/* Użycie tłumaczenia */}
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="username" className="text-muted-foreground">{t("username")}</Label> {/* Użycie tłumaczenia */}
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  className="bg-input text-foreground border-border"
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-muted-foreground">{t("password")}</Label> {/* Użycie tłumaczenia */}
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-input text-foreground border-border"
                />
              </div>
              <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">{t("login")}</Button> {/* Użycie tłumaczenia */}
            </form>
            <p className="text-center text-sm text-muted-foreground mt-4">
              {t("useAdminPassword")} {/* Użycie tłumaczenia */}
            </p>
          </CardContent>
        </Card>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default LoginPage;