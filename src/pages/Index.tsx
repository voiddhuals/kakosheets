"use client";

import React from 'react';
import Header from "@/components/Header";
import { MadeWithDyad } from "@/components/made-with-dyad";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex items-center justify-center">
        <h1 className="text-5xl font-bold text-center my-8 text-gray-700">
          Witaj w Kakosheets!
        </h1>
      </main>
      <MadeWithDyad />
    </div>
  );
};

export default Index;