
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import das páginas
import Index from "./pages/Index";
import Categories from "./pages/Categories";
import HowItWorks from "./pages/HowItWorks";
import BecomeProvider from "./pages/BecomeProvider";
import Login from "./pages/Login";
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
          <Route path="/categorias" element={<Categories />} />
          <Route path="/como-funciona" element={<HowItWorks />} />
          <Route path="/seja-prestadora" element={<BecomeProvider />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
