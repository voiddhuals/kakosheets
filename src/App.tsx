import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import AdminPage from "./pages/AdminPage";   // Import AdminPage
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute
import { ProductProvider } from "./context/ProductContext"; // Import ProductProvider

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ProductProvider> {/* Wrap the entire app with ProductProvider */}
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="/shoes" element={<CategoryPage />} />
            <Route path="/hoodies-sweaters" element={<CategoryPage />} />
            <Route path="/t-shirts" element={<CategoryPage />} />
            <Route path="/jackets" element={<CategoryPage />} />
            <Route path="/pants-shorts" element={<CategoryPage />} />
            <Route path="/headwear" element={<CategoryPage />} />
            <Route path="/accessories" element={<CategoryPage />} />
            <Route path="/other-stuff" element={<CategoryPage />} />
            <Route path="/signup" element={<NotFound />} />
            <Route path="/report-dead-link" element={<NotFound />} />
            <Route path="/login" element={<LoginPage />} /> {/* Login page route */}
            
            {/* Protected Admin Route */}
            <Route element={<ProtectedRoute />}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>

            <Route path="*" element={<NotFound />} />
          </Routes>
        </ProductProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;