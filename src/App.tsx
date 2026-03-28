import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "./components/ScrollToTop";
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

// Service/info pages: [clean path, component]
const serviceRoutes: [string, React.ReactNode][] = [
  ["/pool-maintenance", <PoolMaintenance />],
  ["/pool-openings", <PoolOpenings />],
  ["/pool-closings", <PoolClosings />],
  ["/pool-repair", <PoolRepair />],
  ["/pool-chemistry", <PoolChemistry />],
  ["/salt-water-pool-service", <SaltWaterPoolService />],
  ["/above-ground-pool-installation", <AboveGroundPoolInstallation />],
  ["/hot-tub-services", <HotTubServices />],
  ["/hot-tub-repair", <HotTubRepair />],
  ["/liner", <LinerInstallation />],
  ["/pumps", <PumpInstallation />],
  ["/filter", <FilterInstallation />],
  ["/heater-installation", <HeaterInstallation />],
  ["/safety-covers", <SafetyCovers />],
  ["/pool-pump-repair", <PoolPumpRepair />],
  ["/heater-repair", <HeaterRepair />],
  ["/filter-repair", <FilterRepair />],
  ["/liner-repair", <LinerRepair />],
  ["/skimmer-repair", <SkimmerRepair />],
  ["/leak-detection", <LeakDetection />],
  ["/residential-leak-detection", <ResidentialLeakDetection />],
  ["/trenchless-pipe-repair", <TrenchlessPipeRepair />],
  ["/about", <About />],
  ["/contact", <Contact />],
  ["/locations", <Locations />],
  ["/blog", <Blog />],
  ["/thank-you", <ThankYou />],
  ["/pool-service-cost-massachusetts", <PoolServiceCost />],
];

// Blog posts: [clean path, component]
const blogRoutes: [string, React.ReactNode][] = [
  ["/blog-green-pool-water-fix", <BlogGreenPoolWaterFix />],
  ["/blog-when-to-open-pool-massachusetts", <BlogWhenToOpenPoolMassachusetts />],
  ["/blog-pool-maintenance-checklist", <BlogPoolMaintenanceChecklist />],
  ["/blog-pool-closing-checklist-massachusetts", <BlogPoolClosingChecklistMassachusetts />],
  ["/blog-pool-maintenance-cost-massachusetts", <BlogPoolMaintenanceCostMassachusetts />],
  ["/blog-signs-pool-pump-needs-repair", <BlogSignsPoolPumpNeedsRepair />],
  ["/blog-how-to-tell-if-pool-has-leak", <BlogHowToTellIfPoolHasLeak />],
  ["/blog-how-to-winterize-hot-tub", <BlogHowToWinterizeHotTub />],
  ["/blog-is-saltwater-pool-worth-it", <BlogIsSaltwaterPoolWorthIt />],
  ["/blog-vinyl-liner-vs-fiberglass-pool", <BlogVinylLinerVsFiberglassPool />],
  ["/blog-above-ground-pool-buying-guide", <BlogAboveGroundPoolBuyingGuide />],
  ["/blog-best-pool-service-2025-businessrate-award", <BlogBestPoolService2025BusinessrateAward />],
  ["/blog-best-pool-service-2026-businessrate-benchmark-award", <BlogBestPoolService2026BusinessrateBenchmarkAward />],
  ["/blog-best-pool-cleaning-service-massachusetts-2025-2026", <BlogBestPoolCleaningServiceMassachusetts20252026 />],
  ["/blog-best-pool-service-southern-new-england-2026", <BlogBestPoolServiceSouthernNewEngland2026 />],
];

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Service/info pages — both /path.html and /path */}
            {serviceRoutes.map(([path, element]) => [
              <Route key={`${path}.html`} path={`${path}.html`} element={element} />,
              <Route key={path} path={path} element={element} />,
            ])}

            {/* Town pages — both /pool-service-{slug}-ma.html and clean */}
            {townSlugs.map((slug) => [
              <Route key={`${slug}.html`} path={`/pool-service-${slug}-ma.html`} element={<TownPage slug={slug} />} />,
              <Route key={slug} path={`/pool-service-${slug}-ma`} element={<TownPage slug={slug} />} />,
            ])}

            {/* Blog posts — both /path.html and /path */}
            {blogRoutes.map(([path, element]) => [
              <Route key={`${path}.html`} path={`${path}.html`} element={element} />,
              <Route key={path} path={path} element={element} />,
            ])}

            {/* Legacy blog redirects (non-blog-prefixed → blog-prefixed) */}
            <Route path="/green-pool-water-fix.html" element={<Navigate to="/blog-green-pool-water-fix.html" replace />} />
            <Route path="/green-pool-water-fix" element={<Navigate to="/blog-green-pool-water-fix.html" replace />} />
            <Route path="/when-to-open-pool-massachusetts.html" element={<Navigate to="/blog-when-to-open-pool-massachusetts.html" replace />} />
            <Route path="/pool-maintenance-checklist.html" element={<Navigate to="/blog-pool-maintenance-checklist.html" replace />} />
            <Route path="/best-pool-service-2025-businessrate-award.html" element={<Navigate to="/blog-best-pool-service-2025-businessrate-award.html" replace />} />
            <Route path="/best-pool-service-2026-businessrate-benchmark-award.html" element={<Navigate to="/blog-best-pool-service-2026-businessrate-benchmark-award.html" replace />} />
            <Route path="/best-pool-cleaning-service-massachusetts-2025-2026.html" element={<Navigate to="/blog-best-pool-cleaning-service-massachusetts-2025-2026.html" replace />} />
            <Route path="/best-pool-service-southern-new-england-2026.html" element={<Navigate to="/blog-best-pool-service-southern-new-england-2026.html" replace />} />

            {/* Blog sub-path redirects (e.g. /blog/green-pool-water-fix → blog-prefixed) */}
            <Route path="/blog/green-pool-water-fix" element={<Navigate to="/blog-green-pool-water-fix.html" replace />} />
            <Route path="/blog/when-to-open-pool-massachusetts" element={<Navigate to="/blog-when-to-open-pool-massachusetts.html" replace />} />
            <Route path="/blog/pool-maintenance-checklist" element={<Navigate to="/blog-pool-maintenance-checklist.html" replace />} />
            <Route path="/blog/best-pool-service-southern-new-england-2026" element={<Navigate to="/blog-best-pool-service-southern-new-england-2026.html" replace />} />
            <Route path="/blog/best-pool-cleaning-service-massachusetts-2025-2026" element={<Navigate to="/blog-best-pool-cleaning-service-massachusetts-2025-2026.html" replace />} />
            <Route path="/blog/best-pool-service-2025-businessrate-award" element={<Navigate to="/blog-best-pool-service-2025-businessrate-award.html" replace />} />
            <Route path="/blog/best-pool-service-2026-businessrate-benchmark-award" element={<Navigate to="/blog-best-pool-service-2026-businessrate-benchmark-award.html" replace />} />

            {/* Old Squarespace redirect */}
            <Route path="/service/recurring-services" element={<Navigate to="/pool-maintenance.html" replace />} />

            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
