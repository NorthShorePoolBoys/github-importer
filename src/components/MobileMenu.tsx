import { useState } from "react";
import { Link } from "react-router-dom";
import { navItems, locationItems } from "./Navigation";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChevronSvg = () => (
  <svg viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"/></svg>
);

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggle = (label: string) => {
    setOpenSections((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  if (!isOpen) return null;

  return (
    <div className="mmenu open">
      <div className="mmenu__top">
        <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d8f88117-bac6-41d7-a063-d2c5d2a2cdf7/plain+NSPB+text.png?format=1500w" alt="North Shore Pool Boys" style={{ height: 40 }} />
        <button className="mmenu__close" onClick={onClose}>✕</button>
      </div>

      {navItems.map((item) => (
        <div className={`mmenu__item${openSections.includes(item.label) ? " open" : ""}`} key={item.label}>
          <button className="mmenu__toggle" onClick={() => toggle(item.label)}>
            {item.label} <ChevronSvg />
          </button>
          <div className="mmenu__sub">
            {item.children.map((child) => (
              <Link to={child.href} key={child.href} onClick={onClose}>{child.label}</Link>
            ))}
          </div>
        </div>
      ))}

      <Link to="/about" className="mmenu__link" onClick={onClose}>About</Link>

      <div className={`mmenu__item${openSections.includes("Locations") ? " open" : ""}`}>
        <button className="mmenu__toggle" onClick={() => toggle("Locations")}>
          Locations <ChevronSvg />
        </button>
        <div className="mmenu__sub">
          {locationItems.map((loc) => (
            <Link to={loc.href} key={loc.href} onClick={onClose}>{loc.label}</Link>
          ))}
        </div>
      </div>

      <Link to="/contact" className="mmenu__link" onClick={onClose}>Contact Us</Link>
      <Link to="/blog" className="mmenu__link" onClick={onClose}>Blog</Link>

      <div className="mmenu__btns">
        <a href="tel:9788825932" className="btn btn--teal btn--lg btn--full">Call (978) 882-5932</a>
        <Link to="/contact" className="btn btn--ghost btn--lg btn--full" onClick={onClose}>Contact Us</Link>
      </div>
    </div>
  );
};

export default MobileMenu;
