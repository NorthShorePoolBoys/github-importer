import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ChevronSvg = () => (
  <svg className="nav__chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
);

const navItems = [
  {
    label: "Pool",
    children: [
      { label: "Maintenance", href: "/pool-maintenance.html" },
      { label: "Openings", href: "/pool-openings.html" },
      { label: "Closings", href: "/pool-closings.html" },
      { label: "Repair", href: "/pool-repair.html" },
      { label: "Chemistry", href: "/pool-chemistry.html" },
      { label: "Saltwater", href: "/salt-water-pool-service.html" },
      { label: "Above-Ground Builds", href: "/above-ground-pool-installation.html" },
    ],
  },
  {
    label: "Hot Tub",
    children: [
      { label: "Maintenance", href: "/hot-tub-services.html" },
      { label: "Repair", href: "/hot-tub-repair.html" },
    ],
  },
  {
    label: "Installation",
    children: [
      { label: "Liners", href: "/liner.html" },
      { label: "Pumps", href: "/pumps.html" },
      { label: "Filters", href: "/filter.html" },
      { label: "Heaters", href: "/heater-installation.html" },
      { label: "Safety Covers", href: "/safety-covers.html" },
    ],
  },
  {
    label: "Repair",
    children: [
      { label: "Pump", href: "/pool-pump-repair.html" },
      { label: "Heater", href: "/heater-repair.html" },
      { label: "Filter", href: "/filter-repair.html" },
      { label: "Liner", href: "/liner-repair.html" },
      { label: "Skimmer", href: "/skimmer-repair.html" },
    ],
  },
  {
    label: "Leak Detection",
    children: [
      { label: "Pool Leak Detection", href: "/leak-detection.html" },
      { label: "Residential Leak Detection", href: "/residential-leak-detection.html" },
      { label: "Trenchless Pipe Repair", href: "/trenchless-pipe-repair.html" },
    ],
  },
];

const locationItems = [
  { label: "All 21 Locations", href: "/locations.html", bold: true },
  { label: "Peabody", href: "/pool-service-peabody-ma.html" },
  { label: "Danvers", href: "/pool-service-danvers-ma.html" },
  { label: "Middleton", href: "/pool-service-middleton-ma.html" },
  { label: "Beverly", href: "/pool-service-beverly-ma.html" },
  { label: "Salem", href: "/pool-service-salem-ma.html" },
  { label: "Saugus", href: "/pool-service-saugus-ma.html" },
  { label: "Lynnfield", href: "/pool-service-lynnfield-ma.html" },
  { label: "Marblehead", href: "/pool-service-marblehead-ma.html" },
  { label: "Swampscott", href: "/pool-service-swampscott-ma.html" },
  { label: "Lynn", href: "/pool-service-lynn-ma.html" },
  { label: "Wakefield", href: "/pool-service-wakefield-ma.html" },
  { label: "Reading", href: "/pool-service-reading-ma.html" },
  { label: "North Reading", href: "/pool-service-north-reading-ma.html" },
  { label: "Topsfield", href: "/pool-service-topsfield-ma.html" },
  { label: "Wenham", href: "/pool-service-wenham-ma.html" },
  { label: "Hamilton", href: "/pool-service-hamilton-ma.html" },
  { label: "Nahant", href: "/pool-service-nahant-ma.html" },
  { label: "Georgetown", href: "/pool-service-georgetown-ma.html" },
  { label: "Boxford", href: "/pool-service-boxford-ma.html" },
  { label: "Essex", href: "/pool-service-essex-ma.html" },
  { label: "Ipswich", href: "/pool-service-ipswich-ma.html" },
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

          <li className="nav__item"><Link to="/about.html">About</Link></li>

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

          <li className="nav__item"><Link to="/contact.html">Contact Us</Link></li>
          <li className="nav__item"><Link to="/blog.html">Blog</Link></li>
        </ul>

        <div className="nav__right">
          <a href="tel:9788825932" className="nav__phone">(978) 882-5932</a>
          <Link to="/contact.html" className="btn btn--teal">Contact Us</Link>
        </div>
      </div>
    </nav>
  );
};

export { navItems, locationItems };
export default Navigation;
