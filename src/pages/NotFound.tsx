import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout hideFinalCTA>
      <SEOHead
        title="Page Not Found | North Shore Pool Boys"
        description="Page not found. North Shore Pool Boys - CPO certified pool service in Peabody, MA and the North Shore."
        canonical="https://www.northshorepoolboys.com/"
        jsonLd={localBusinessSchema}
      />

      {/* 404 HERO */}
      <section className="page-hero" style={{ padding: '80px 0 40px' }}>
        <div className="wrap" style={{ textAlign: 'center', maxWidth: 600 }}>
          <h1 style={{ fontSize: 72, marginBottom: 12, opacity: 0.3 }}>404</h1>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, marginBottom: 12 }}>Page not found</h2>
          <p style={{ color: 'rgba(255,255,255,0.6)' }}>The page you're looking for doesn't exist or has been moved.</p>
        </div>
      </section>

      <section className="sec" style={{ padding: '56px 0' }}>
        <div className="wrap" style={{ maxWidth: 600, textAlign: 'center' }}>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: 22, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 24 }}>Here's where you probably wanted to go:</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 10, marginBottom: 32 }}>
            <Link to="/" className="btn btn--teal">Homepage</Link>
            <Link to="/pool-maintenance.html" className="btn btn--outline" style={{ borderColor: 'var(--fog)', color: 'var(--teal)' }}>Maintenance</Link>
            <Link to="/pool-openings.html" className="btn btn--outline" style={{ borderColor: 'var(--fog)', color: 'var(--teal)' }}>Pool Openings</Link>
            <Link to="/pool-repair.html" className="btn btn--outline" style={{ borderColor: 'var(--fog)', color: 'var(--teal)' }}>Repair</Link>
            <Link to="/contact.html" className="btn btn--outline" style={{ borderColor: 'var(--fog)', color: 'var(--teal)' }}>Contact Us</Link>
            <Link to="/locations.html" className="btn btn--outline" style={{ borderColor: 'var(--fog)', color: 'var(--teal)' }}>Locations</Link>
          </div>
          <p style={{ color: 'var(--stone)', fontSize: 14 }}>Or call us: <a href="tel:9788825932" style={{ color: 'var(--teal)', fontWeight: 600 }}>(978) 882-5932</a></p>
        </div>
      </section>
    </Layout>
  );
};

export default NotFound;
