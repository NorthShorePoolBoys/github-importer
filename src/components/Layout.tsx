import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import TopBar from "./TopBar";
import MobileMenu from "./MobileMenu";
import Footer from "./Footer";
import FloatingPhone from "./FloatingPhone";
import FinalCTA from "./FinalCTA";
import { navItems, locationItems } from "./Navigation";

const ChevronSvg = () => (
  <svg className="nav__chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
);

interface LayoutProps {
  children: React.ReactNode;
  hideFinalCTA?: boolean;
  finalCTATitle?: string;
  finalCTADescription?: string;
}

const Layout = ({ children, hideFinalCTA, finalCTATitle, finalCTADescription }: LayoutProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <TopBar />
      <nav className={`nav${stuck ? " stuck" : ""}`} id="nav">
        <div className="wrap">
          <Link to="/" className="nav__logo">
            <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d8f88117-bac6-41d7-a063-d2c5d2a2cdf7/plain+NSPB+text.png?format=1500w" alt="North Shore Pool Boys Logo" />
            <span className="nav__logo-text">North Shore Pool Boys – Pool Service in Peabody MA</span>
          </Link>
          <ul className="nav__menu">
            {navItems.map((item) => (
              <li className="nav__item" key={item.label}>
                <button type="button">{item.label} <ChevronSvg /></button>
                <div className="nav__dropdown">
                  {item.children.map((child) => (
                    <Link to={child.href} key={child.href}>{child.label}</Link>
                  ))}
                </div>
              </li>
            ))}
            <li className="nav__item"><Link to="/about">About</Link></li>
            <li className="nav__item">
              <button type="button">Locations <ChevronSvg /></button>
              <div className="nav__dropdown">
                {locationItems.map((loc) => (
                  <Link to={loc.href} key={loc.href}>
                    {loc.bold ? <strong>{loc.label}</strong> : loc.label}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav__item"><Link to="/contact">Contact Us</Link></li>
            <li className="nav__item"><Link to="/blog">Blog</Link></li>
          </ul>
          <div className="nav__right">
            <a href="tel:9788825932" className="nav__phone">(978) 882-5932</a>
            <Link to="/contact" className="btn btn--teal">Contact Us</Link>
          </div>
          <button className="hamburger" aria-label="Menu" onClick={() => setMobileMenuOpen(true)}>
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <MobileMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
      <main>{children}</main>
      {!hideFinalCTA && <FinalCTA title={finalCTATitle} description={finalCTADescription} />}
      <Footer />
      <FloatingPhone />
    </>
  );
};

export default Layout;
