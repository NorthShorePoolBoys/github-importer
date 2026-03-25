import { useState } from "react";
import TopBar from "./TopBar";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import FloatingPhone from "./FloatingPhone";
import FinalCTA from "./FinalCTA";

interface LayoutProps {
  children: React.ReactNode;
  hideFinalCTA?: boolean;
  finalCTATitle?: string;
  finalCTADescription?: string;
}

const Layout = ({ children, hideFinalCTA, finalCTATitle, finalCTADescription }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <TopBar />
      <div style={{ position: "relative" }}>
        <Navigation />
        {/* Hamburger button needs to trigger mobile menu */}
        <button
          className="hamburger"
          aria-label="Menu"
          onClick={() => setMobileMenuOpen(true)}
          style={{ position: "absolute", right: 24, top: "50%", transform: "translateY(-50%)", zIndex: 1001 }}
        >
          <span></span><span></span><span></span>
        </button>
      </div>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>{children}</main>
      {!hideFinalCTA && <FinalCTA title={finalCTATitle} description={finalCTADescription} />}
      <Footer />
      <FloatingPhone />
    </>
  );
};

export default Layout;
