import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CategoryPage from "./pages/CategoryPage"; // Import CategoryPage
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
          <Route path="/signup" element={<NotFound />} /> {/* Placeholder for signup */}
          <Route path="/report-dead-link" element={<NotFound />} /> {/* Placeholder for report dead link */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;