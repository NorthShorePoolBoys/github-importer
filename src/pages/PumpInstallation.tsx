import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Pump Installation in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump installation and replacement including single speed, dual speed, variable speed, and above-ground pump motors."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What type of pool pump do I need?","acceptedAnswer":{"@type":"Answer","text":"It depends on your pool size, plumbing, and budget. Variable speed pumps cost more upfront but save significantly on electricity. We assess your setup and recommend the best fit."}},{"@type":"Question","name":"How much does pool pump installation cost?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by pump type and installation complexity. Call (978) 882-5932 for a free assessment and quote."}},{"@type":"Question","name":"How long does a pool pump last?","acceptedAnswer":{"@type":"Answer","text":"Typically 8-12 years. Signs of failure include loud noises, loss of prime, reduced water flow, and visible leaking around the motor seal."}},{"@type":"Question","name":"Do you install variable speed pumps?","acceptedAnswer":{"@type":"Answer","text":"Yes. We install all pump types including variable speed, which are now required by law for new installations in many states and save up to 80% on energy costs."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Installation"},{"@type":"ListItem","position":3,"name":"Pumps","item":"https://www.northshorepoolboys.com/pumps.html"}]};

const faqs = [
  { q: "What type of pump do I need?", a: "It depends on your pool size, plumbing diameter, and budget. Variable speed pumps are our top recommendation — they save up to 80% on energy and are now required for new installations. We'll assess your setup and recommend the best fit." },
  { q: "How do I know if my pump is failing?", a: "Common signs: loud grinding or humming, loss of prime (pump runs but no water flow), weak jets, visible leaking around the motor seal, or tripping the breaker. If your pump is 8+ years old and showing these symptoms, replacement is usually smarter than repair." },
  { q: "Should I upgrade to a variable speed pump?", a: "In most cases, yes. The energy savings typically pay for the pump within 1–2 seasons. They're also quieter and last longer. If your current single-speed pump is dying, upgrading makes more sense than replacing with the same thing." },
  { q: "How long does pump installation take?", a: "Most pump swaps take 2–4 hours. If plumbing modifications are needed, it may take a full day." },
  { q: "Do you install pumps for above-ground pools?", a: "Yes — we install pumps for both above-ground and in-ground pools across Peabody, Danvers, Beverly, Salem, Saugus, Lynnfield, and Middleton." },
];

const PumpInstallation = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Pump Installation in Peabody, MA | Single, Dual & Variable Speed | North Shore Pool Boys"
        description="Pool pump installation in Peabody & North Shore. Single speed, dual speed & variable speed pumps. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pumps.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Pump Installation · Peabody &amp; North Shore</div>
          <h1>Pool pump installation and replacement by certified pros</h1>
          <p>Your pump is the heart of your pool. Whether you need a replacement for a dying motor or an upgrade to a variable-speed unit that cuts your energy bill, we size it right and install it properly.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Pump Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <div className="slabel">Pump Types</div>
            <h2 className="stitle">Four types of pool pumps — and which one you need</h2>
            <p style={{ color: "var(--stone)", fontSize: 15, marginTop: 8 }}>We install and service all four. Here's how they compare.</p>
          </div>
          <div className="packages__grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", maxWidth: 860, margin: "0 auto" }}>
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d7059a76-f111-4dc2-ae76-fdfd53a4311b/230V-removebg-preview.png" alt="Single speed pool pump" style={{ height: 100, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Single Speed</div>
              <ul className="pkg__list">
                <li>Runs at one constant speed</li>
                <li>Lowest upfront cost</li>
                <li>Simple, reliable design</li>
                <li className="pkg__excluded">Highest energy consumption</li>
                <li className="pkg__excluded">Being phased out by regulations</li>
              </ul>
            </div>
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/6e6e8bfb-b14f-45aa-a73b-be0598df2fba/-Switch-115V-removebg-preview.png" alt="Dual speed pool pump" style={{ height: 100, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Dual Speed</div>
              <ul className="pkg__list">
                <li>High and low speed settings</li>
                <li>Better energy efficiency than single</li>
                <li>Good balance of cost and savings</li>
                <li>Works well for most residential pools</li>
              </ul>
            </div>
            <div className="pkg pkg--featured">
              <div className="pkg__badge">Recommended</div>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/13bac89a-484b-44e2-b806-cbcf06e235e0/W3SP2603VSP-Super-Pump-Variable-Speed-Pool-Pump-1-removebg-preview.png" alt="Variable speed pool pump" style={{ height: 100, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Variable Speed</div>
              <ul className="pkg__list">
                <li>Adjustable RPM for any task</li>
                <li>Up to 80% energy savings</li>
                <li>Whisper-quiet operation</li>
                <li>Required for new installations</li>
                <li>Longest lifespan of any pump type</li>
              </ul>
            </div>
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/54e682f3-4809-44ad-a834-e16bf383a6d0/230V_1_-removebg-preview.png" alt="Above-ground pool pump" style={{ height: 100, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Above-Ground</div>
              <ul className="pkg__list">
                <li>Designed for above-ground pools</li>
                <li>Self-priming models available</li>
                <li>Compact, easy to install</li>
                <li>Matched to your pool's GPM needs</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pump installation questions</h2></div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{f.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a"><p>{f.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks />
    </Layout>
  );
};

export default PumpInstallation;
