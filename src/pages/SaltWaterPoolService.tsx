import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";
import ContactForm from "../components/ContactForm";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Saltwater Pool Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Saltwater pool maintenance, salt cell cleaning, chemistry balancing, and salt system troubleshooting across the North Shore."};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Do saltwater pools need maintenance?","acceptedAnswer":{"@type":"Answer","text":"Yes. Saltwater pools still need weekly chemistry balancing, salt cell inspection, and regular equipment checks."}},{"@type":"Question","name":"How often should a salt cell be cleaned?","acceptedAnswer":{"@type":"Answer","text":"Every 3-6 months depending on usage and water chemistry."}},{"@type":"Question","name":"Can you convert my chlorine pool to saltwater?","acceptedAnswer":{"@type":"Answer","text":"Yes. A salt chlorine generator can be added to most existing pools."}},{"@type":"Question","name":"How much salt does a saltwater pool need?","acceptedAnswer":{"@type":"Answer","text":"Most systems require 3,200 ppm salt concentration."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Pool"},{"@type":"ListItem","position":3,"name":"Saltwater Pool Service","item":"https://www.northshorepoolboys.com/salt-water-pool-service.html"}]};

const serviceCards = [
  { icon: "🧪", title: "Salt System Chemistry", desc: "pH, alkalinity, calcium, CYA, and salt concentration testing and balancing. We manage the specific chemistry drift patterns that salt systems create." },
  { icon: "⚡", title: "Salt Cell Cleaning & Inspection", desc: "Scale removal from cell plates, output testing, and lifespan assessment. A clean cell produces chlorine efficiently; a scaled cell wastes energy and dies early." },
  { icon: "🔧", title: "Salt System Troubleshooting", desc: "Low chlorine output, error codes, flow sensor issues, and control board problems. We diagnose the actual cause — not just clear the error and hope it doesn't come back." },
  { icon: "🔄", title: "Salt Cell Replacement", desc: "When your cell reaches end of life (typically 3-7 years), we source the right replacement for your system and install it properly." },
  { icon: "🏊", title: "Weekly Maintenance", desc: "Full weekly pool maintenance adapted for saltwater systems. Includes all standard cleaning plus salt-specific chemistry management." },
  { icon: "🌡️", title: "Seasonal Openings & Closings", desc: "Saltwater pools need special attention during openings and closings. The salt cell must be properly shut down for winter and recalibrated in spring." },
];

const faqs = [
  { q: "Do saltwater pools need maintenance?", a: <p>Yes. Saltwater pools still need weekly chemistry balancing, salt cell inspection, and regular equipment checks. pH tends to drift high in salt systems and needs consistent adjustment. They're lower-hassle than chlorine pools, but not maintenance-free.</p> },
  { q: "How often should a salt cell be cleaned?", a: <p>Every 3–6 months depending on usage and water chemistry. Scale buildup on the cell plates reduces chlorine production and shortens cell life. We check the cell at every service visit.</p> },
  { q: "Can you convert my chlorine pool to saltwater?", a: <p>Yes. A salt chlorine generator can be added to most existing pools. We assess your equipment compatibility, handle the full installation, and dial in the initial chemistry.</p> },
  { q: "How long do salt cells last?", a: <p>Typically 3–7 years depending on the brand, water chemistry, and how well the cell is maintained. Regular cleaning extends cell life significantly.</p> },
  { q: "Is saltwater bad for pool equipment?", a: <p>Salt can accelerate corrosion on certain metals, natural stone coping, and some heater components. We assess your equipment during consultation and advise on any compatibility concerns. Read our full breakdown of <Link to="/blog-is-saltwater-pool-worth-it.html" style={{ color: "var(--teal)" }}>saltwater pool pros and cons</Link>.</p> },
];

const SaltWaterPoolService = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Saltwater Pool Service in Peabody, MA | North Shore Pool Boys"
        description="Saltwater pool maintenance & salt cell cleaning in Peabody & the North Shore. Chemistry, troubleshooting & conversions. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/salt-water-pool-service.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Saltwater Pool Service · Peabody &amp; North Shore</div>
          <h1>Saltwater pool service from a team that understands salt systems</h1>
          <p>Salt chlorine generators need different care than traditional chlorine pools. Our CPO-certified technicians service both — with the chemistry knowledge to keep your salt system running efficiently and your water feeling silky smooth.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="Saltwater pool service in Peabody MA - North Shore Pool Boys" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Salt System Expertise</div>
              <h2>Why saltwater pools need specialized service</h2>
              <p>Saltwater pools produce their own chlorine through electrolysis, but they're not maintenance-free. The salt cell needs regular inspection and cleaning, pH drifts high and requires consistent correction, and the salt concentration must stay in a precise range for the generator to work properly.</p>
              <p>Many pool companies treat salt pools the same as chlorine pools. We don't. Our CPO-certified team understands the unique chemistry of salt systems — including how salt interacts with your <Link to="/heater-installation.html" style={{ color: "var(--teal)", fontWeight: 600 }}>heater</Link>, <Link to="/filter.html" style={{ color: "var(--teal)", fontWeight: 600 }}>filter</Link>, and other equipment over time.</p>
              <p>Interested in switching? Read our honest breakdown of <Link to="/blog-is-saltwater-pool-worth-it.html" style={{ color: "var(--teal)", fontWeight: 600 }}>whether a saltwater pool is worth it</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">What We Do</div>
            <h2 className="stitle">Our saltwater pool services</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {serviceCards.map((card) => (
              <div key={card.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{card.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="CPO certified saltwater pool maintenance North Shore MA" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Conversions</div>
              <h2>Thinking about switching to saltwater?</h2>
              <p>We install salt chlorine generators on existing pools — both above-ground and in-ground. The process includes assessing your current equipment for salt compatibility, installing the generator and cell, adding the initial salt charge, and dialing in your chemistry.</p>
              <p>We'll also give you an honest assessment of whether salt is the right move for your specific pool setup. Some equipment combinations work great with salt; others lead to accelerated corrosion. We'll tell you straight.</p>
              <p>Serving <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Salem</Link>, and the entire North Shore. <Link to="/locations.html" style={{ color: "var(--teal)", fontWeight: 600 }}>See all locations →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Need service for your saltwater pool?</h2>
            <p>Call for a free quote or fill out our contact form — we respond within 48 hours.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Saltwater pool questions</h2></div>
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{faq.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks />
      <ContactForm />
    </Layout>
  );
};

export default SaltWaterPoolService;
