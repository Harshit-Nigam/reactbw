
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DiscoverPage from "./pages/DiscoverPage";
import ProfilePage from "./pages/ProfilePage";
// Placeholder pages for other nav items
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="flex flex-col min-h-screen bg-gray-100 max-w-md mx-auto shadow-lg">
    <AppHeader />
    <main className="flex-grow flex items-center justify-center">
      <h1 className="text-2xl">{title} Page</h1>
    </main>
    <BottomNav />
  </div>
);
import AppHeader from "./components/AppHeader";
import BottomNav from "./components/BottomNav";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="bg-slate-300"> {/* This outer div helps constrain the mobile view in the iframe */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/discover" element={<DiscoverPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* Placeholder routes for other nav items */}
            <Route path="/local" element={<PlaceholderPage title="Local" />} />
            <Route path="/add" element={<PlaceholderPage title="Add Content" />} />
            <Route path="/alerts" element={<PlaceholderPage title="Alerts" />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
