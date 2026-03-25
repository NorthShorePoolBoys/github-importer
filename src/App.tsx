import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PoolMaintenance from "./pages/PoolMaintenance.tsx";
import PoolOpenings from "./pages/PoolOpenings.tsx";
import PoolClosings from "./pages/PoolClosings.tsx";
import PoolRepair from "./pages/PoolRepair.tsx";
import PoolChemistry from "./pages/PoolChemistry.tsx";
import SaltWaterPoolService from "./pages/SaltWaterPoolService.tsx";
import AboveGroundPoolInstallation from "./pages/AboveGroundPoolInstallation.tsx";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pool-maintenance.html" element={<PoolMaintenance />} />
            <Route path="/pool-openings.html" element={<PoolOpenings />} />
            <Route path="/pool-closings.html" element={<PoolClosings />} />
            <Route path="/pool-repair.html" element={<PoolRepair />} />
            <Route path="/pool-chemistry.html" element={<PoolChemistry />} />
            <Route path="/salt-water-pool-service.html" element={<SaltWaterPoolService />} />
            <Route path="/above-ground-pool-installation.html" element={<AboveGroundPoolInstallation />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
