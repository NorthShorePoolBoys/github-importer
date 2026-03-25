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
import HotTubServices from "./pages/HotTubServices.tsx";
import HotTubRepair from "./pages/HotTubRepair.tsx";
import LinerInstallation from "./pages/LinerInstallation.tsx";
import PumpInstallation from "./pages/PumpInstallation.tsx";
import FilterInstallation from "./pages/FilterInstallation.tsx";
import HeaterInstallation from "./pages/HeaterInstallation.tsx";
import SafetyCovers from "./pages/SafetyCovers.tsx";
import PoolPumpRepair from "./pages/PoolPumpRepair.tsx";
import HeaterRepair from "./pages/HeaterRepair.tsx";
import FilterRepair from "./pages/FilterRepair.tsx";
import LinerRepair from "./pages/LinerRepair.tsx";
import SkimmerRepair from "./pages/SkimmerRepair.tsx";
import LeakDetection from "./pages/LeakDetection.tsx";
import ResidentialLeakDetection from "./pages/ResidentialLeakDetection.tsx";
import TrenchlessPipeRepair from "./pages/TrenchlessPipeRepair.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Locations from "./pages/Locations.tsx";
import Blog from "./pages/Blog.tsx";

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
            <Route path="/hot-tub-services.html" element={<HotTubServices />} />
            <Route path="/hot-tub-repair.html" element={<HotTubRepair />} />
            <Route path="/liner.html" element={<LinerInstallation />} />
            <Route path="/pumps.html" element={<PumpInstallation />} />
            <Route path="/filter.html" element={<FilterInstallation />} />
            <Route path="/heater-installation.html" element={<HeaterInstallation />} />
            <Route path="/safety-covers.html" element={<SafetyCovers />} />
            <Route path="/pool-pump-repair.html" element={<PoolPumpRepair />} />
            <Route path="/heater-repair.html" element={<HeaterRepair />} />
            <Route path="/filter-repair.html" element={<FilterRepair />} />
            <Route path="/liner-repair.html" element={<LinerRepair />} />
            <Route path="/skimmer-repair.html" element={<SkimmerRepair />} />
            <Route path="/leak-detection.html" element={<LeakDetection />} />
            <Route path="/residential-leak-detection.html" element={<ResidentialLeakDetection />} />
            <Route path="/trenchless-pipe-repair.html" element={<TrenchlessPipeRepair />} />
            <Route path="/about.html" element={<About />} />
            <Route path="/contact.html" element={<Contact />} />
            <Route path="/locations.html" element={<Locations />} />
            <Route path="/blog.html" element={<Blog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
