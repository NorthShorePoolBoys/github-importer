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
import TownPage from "./pages/TownPage.tsx";
import ThankYou from "./pages/ThankYou.tsx";
import PoolServiceCost from "./pages/PoolServiceCost.tsx";

// Blog posts
import BlogGreenPoolWaterFix from "./pages/blog/BlogGreenPoolWaterFix.tsx";
import BlogWhenToOpenPoolMassachusetts from "./pages/blog/BlogWhenToOpenPoolMassachusetts.tsx";
import BlogPoolMaintenanceChecklist from "./pages/blog/BlogPoolMaintenanceChecklist.tsx";
import BlogPoolClosingChecklistMassachusetts from "./pages/blog/BlogPoolClosingChecklistMassachusetts.tsx";
import BlogPoolMaintenanceCostMassachusetts from "./pages/blog/BlogPoolMaintenanceCostMassachusetts.tsx";
import BlogSignsPoolPumpNeedsRepair from "./pages/blog/BlogSignsPoolPumpNeedsRepair.tsx";
import BlogHowToTellIfPoolHasLeak from "./pages/blog/BlogHowToTellIfPoolHasLeak.tsx";
import BlogHowToWinterizeHotTub from "./pages/blog/BlogHowToWinterizeHotTub.tsx";
import BlogIsSaltwaterPoolWorthIt from "./pages/blog/BlogIsSaltwaterPoolWorthIt.tsx";
import BlogVinylLinerVsFiberglassPool from "./pages/blog/BlogVinylLinerVsFiberglassPool.tsx";
import BlogAboveGroundPoolBuyingGuide from "./pages/blog/BlogAboveGroundPoolBuyingGuide.tsx";
import BlogBestPoolService2025BusinessrateAward from "./pages/blog/BlogBestPoolService2025BusinessrateAward.tsx";
import BlogBestPoolService2026BusinessrateBenchmarkAward from "./pages/blog/BlogBestPoolService2026BusinessrateBenchmarkAward.tsx";
import BlogBestPoolCleaningServiceMassachusetts20252026 from "./pages/blog/BlogBestPoolCleaningServiceMassachusetts20252026.tsx";
import BlogBestPoolServiceSouthernNewEngland2026 from "./pages/blog/BlogBestPoolServiceSouthernNewEngland2026.tsx";

const queryClient = new QueryClient();

const townSlugs = [
  "peabody", "danvers", "middleton", "beverly", "salem", "saugus", "lynnfield",
  "marblehead", "swampscott", "lynn", "wakefield", "reading", "north-reading",
  "topsfield", "wenham", "hamilton", "nahant", "georgetown", "boxford", "essex", "ipswich",
];

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
            <Route path="/thank-you.html" element={<ThankYou />} />
            <Route path="/pool-service-cost-massachusetts.html" element={<PoolServiceCost />} />

            {/* Town pages */}
            {townSlugs.map((slug) => (
              <Route key={slug} path={`/pool-service-${slug}-ma.html`} element={<TownPage slug={slug} />} />
            ))}

            {/* Blog posts */}
            <Route path="/blog-green-pool-water-fix.html" element={<BlogGreenPoolWaterFix />} />
            <Route path="/blog-when-to-open-pool-massachusetts.html" element={<BlogWhenToOpenPoolMassachusetts />} />
            <Route path="/blog-pool-maintenance-checklist.html" element={<BlogPoolMaintenanceChecklist />} />
            <Route path="/blog-pool-closing-checklist-massachusetts.html" element={<BlogPoolClosingChecklistMassachusetts />} />
            <Route path="/blog-pool-maintenance-cost-massachusetts.html" element={<BlogPoolMaintenanceCostMassachusetts />} />
            <Route path="/blog-signs-pool-pump-needs-repair.html" element={<BlogSignsPoolPumpNeedsRepair />} />
            <Route path="/blog-how-to-tell-if-pool-has-leak.html" element={<BlogHowToTellIfPoolHasLeak />} />
            <Route path="/blog-how-to-winterize-hot-tub.html" element={<BlogHowToWinterizeHotTub />} />
            <Route path="/blog-is-saltwater-pool-worth-it.html" element={<BlogIsSaltwaterPoolWorthIt />} />
            <Route path="/blog-vinyl-liner-vs-fiberglass-pool.html" element={<BlogVinylLinerVsFiberglassPool />} />
            <Route path="/blog-above-ground-pool-buying-guide.html" element={<BlogAboveGroundPoolBuyingGuide />} />
            <Route path="/blog-best-pool-service-2025-businessrate-award.html" element={<BlogBestPoolService2025BusinessrateAward />} />
            <Route path="/blog-best-pool-service-2026-businessrate-benchmark-award.html" element={<BlogBestPoolService2026BusinessrateBenchmarkAward />} />
            <Route path="/blog-best-pool-cleaning-service-massachusetts-2025-2026.html" element={<BlogBestPoolCleaningServiceMassachusetts20252026 />} />
            <Route path="/blog-best-pool-service-southern-new-england-2026.html" element={<BlogBestPoolServiceSouthernNewEngland2026 />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
