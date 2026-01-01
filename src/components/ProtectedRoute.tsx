"use client";

import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useProductContext } from '@/context/ProductContext';

const ProtectedRoute = () => {
  const { isAuthenticated } = useProductContext();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;