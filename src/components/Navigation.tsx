import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ChevronSvg = () => (
  <svg className="nav__chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
);

const navItems = [
  {
    label: "Pool",
    children: [
      { label: "Maintenance", href: "/pool-maintenance" },
      { label: "Openings", href: "/pool-openings" },
      { label: "Closings", href: "/pool-closings" },
      { label: "Repair", href: "/pool-repair" },
      { label: "Chemistry", href: "/pool-chemistry" },
      { label: "Saltwater", href: "/salt-water-pool-service" },
      { label: "Above-Ground Builds", href: "/above-ground-pool-installation" },
    ],
  },
  {
    label: "Hot Tub",
    children: [
      { label: "Maintenance", href: "/hot-tub-services" },
      { label: "Repair", href: "/hot-tub-repair" },
    ],
  },
  {
    label: "Installation",
    children: [
      { label: "Liners", href: "/liner" },
      { label: "Pumps", href: "/pumps" },
      { label: "Filters", href: "/filter" },
      { label: "Heaters", href: "/heater-installation" },
      { label: "Safety Covers", href: "/safety-covers" },
    ],
  },
  {
    label: "Repair",
    children: [
      { label: "Pump", href: "/pool-pump-repair" },
      { label: "Heater", href: "/heater-repair" },
      { label: "Filter", href: "/filter-repair" },
      { label: "Liner", href: "/liner-repair" },
      { label: "Skimmer", href: "/skimmer-repair" },
    ],
  },
  {
    label: "Leak Detection",
    children: [
      { label: "Pool Leak Detection", href: "/leak-detection" },
      { label: "Residential Leak Detection", href: "/residential-leak-detection" },
      { label: "Trenchless Pipe Repair", href: "/trenchless-pipe-repair" },
    ],
  },
];

const locationItems = [
  { label: "All 21 Locations", href: "/locations", bold: true },
  { label: "Peabody", href: "/pool-service-peabody-ma" },
  { label: "Danvers", href: "/pool-service-danvers-ma" },
  { label: "Middleton", href: "/pool-service-middleton-ma" },
  { label: "Beverly", href: "/pool-service-beverly-ma" },
  { label: "Salem", href: "/pool-service-salem-ma" },
  { label: "Saugus", href: "/pool-service-saugus-ma" },
  { label: "Lynnfield", href: "/pool-service-lynnfield-ma" },
  { label: "Marblehead", href: "/pool-service-marblehead-ma" },
  { label: "Swampscott", href: "/pool-service-swampscott-ma" },
  { label: "Lynn", href: "/pool-service-lynn-ma" },
  { label: "Wakefield", href: "/pool-service-wakefield-ma" },
  { label: "Reading", href: "/pool-service-reading-ma" },
  { label: "North Reading", href: "/pool-service-north-reading-ma" },
  { label: "Topsfield", href: "/pool-service-topsfield-ma" },
  { label: "Wenham", href: "/pool-service-wenham-ma" },
  { label: "Hamilton", href: "/pool-service-hamilton-ma" },
  { label: "Nahant", href: "/pool-service-nahant-ma" },
  { label: "Georgetown", href: "/pool-service-georgetown-ma" },
  { label: "Boxford", href: "/pool-service-boxford-ma" },
  { label: "Essex", href: "/pool-service-essex-ma" },
  { label: "Ipswich", href: "/pool-service-ipswich-ma" },
];

const Navigation = () => {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
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
      </div>
    </nav>
  );
};

export { navItems, locationItems };
export default Navigation;
