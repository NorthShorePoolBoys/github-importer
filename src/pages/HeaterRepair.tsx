import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool heater repair — diagnosed honestly, fixed right","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a pool pump repair cost?","acceptedAnswer":{"@type":"Answer","text":"Our standard pump service call is $150, which covers diagnosis and common repairs like impeller cleaning, gasket replacement, and shaft seal repair. Parts are additional if needed."}},{"@type":"Question","name":"What are signs my pool pump needs repair?","acceptedAnswer":{"@type":"Answer","text":"Loud grinding or humming, loss of prime, reduced water flow, leaking from the pump body, air bubbles in jets, or the motor tripping the breaker."}},{"@type":"Question","name":"Should I repair or replace my pool pump?","acceptedAnswer":{"@type":"Answer","text":"If the motor is less than 8 years old and the issue is a gasket, seal, or impeller, repair is usually the smart choice. If the motor is older and has multiple issues, replacement with a variable speed pump often makes more sense long-term."}},{"@type":"Question","name":"Do you repair pool pumps in Danvers, Beverly, and Salem?","acceptedAnswer":{"@type":"Answer","text":"Yes. We service pool pumps across Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Repair"},{"@type":"ListItem","position":3,"name":"Heater Repair","item":"https://www.northshorepoolboys.com/heater-repair.html"}]};

const heaterProblems = [
  { title: "Heater won't ignite", desc: "Pilot light issues, ignition control failure, gas valve problems, or blocked exhaust vents. We check all ignition components systematically." },
  { title: "Not reaching set temperature", desc: "Undersized unit, low gas pressure, dirty heat exchanger, or bypass valve issues. We measure actual BTU output to find the root cause." },
  { title: "Error codes / shutting off", desc: "Flow switch errors, high-limit trips, pressure switch faults, and board failures. We diagnose the specific error and replace only what's needed." },
  { title: "Leaking or corrosion", desc: "Heat exchanger leaks, header cracks, and corroded manifolds. We assess whether repair or replacement is the smarter investment." },
  { title: "Heat pump not heating", desc: "Low refrigerant, compressor failure, frozen coils, or fan motor issues. We service all heat pump brands including Hayward, Pentair, and AquaCal." },
  { title: "Strange noises or smells", desc: "Rumbling, whistling, or banging sounds usually indicate scale buildup, gas pressure problems, or failing components. A sulfur smell needs immediate attention." },
];

const faqs = [
  { q: "How much does pool heater repair cost?", a: <p>Most heater repairs run $150–$500 depending on the part. Common fixes like ignition modules, thermostats, and pressure switches are on the lower end. Heat exchanger replacements are more involved. We always quote before we start.</p> },
  { q: "Should I repair or replace my heater?", a: <p>If your heater is under 8 years old and the repair is under 50% of replacement cost, repair usually makes sense. Over 10 years old with a major failure? Replacement with a new, more efficient unit is often the better investment.</p> },
  { q: "What brands do you repair?", a: <p>All major brands — Hayward, Pentair, Raypak, Jandy, Rheem, Sta-Rite, and AquaCal. Both gas and heat pump models.</p> },
  { q: "How quickly can you come out?", a: <p>We respond to all service requests within 48 hours, usually same-day during the swim season. Call <a href="tel:9788825932" style={{ color: "var(--teal)" }}>(978) 882-5932</a> for the fastest response.</p> },
];

const HeaterRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Heater Repair in Peabody, MA | North Shore Pool Boys"
        description="Pool heater repair in Peabody and the North Shore. CPO-certified diagnostics for gas, electric, and heat pump heaters. All brands serviced. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/heater-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Repair · Pool &amp; Spa Heaters</div>
          <h1>Pool heater repair — diagnosed honestly, fixed right</h1>
          <p>Heater not firing? Not reaching temperature? Making strange noises? We troubleshoot all brands and types — gas, electric, and heat pump — and fix the actual problem, not just the symptom.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Common Heater Problems</div>
              <h2>Signs your pool heater needs repair</h2>
              <p>Pool heaters are complex systems with multiple failure points. Here are the most common issues we diagnose and repair on the North Shore:</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {heaterProblems.map((item, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{item.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Our Approach</div>
              <h2>Honest diagnostics, fair pricing</h2>
              <p>We never recommend replacing a heater that can be repaired. Our CPO-certified technicians diagnose the specific failure, explain what's wrong in plain language, and give you a clear price before starting any work. If replacement is the smarter long-term investment, we handle <Link to="/heater-installation.html" style={{ color: "var(--teal)", fontWeight: 600 }}>pool heater installation</Link> too.</p>
              <p>If a repair costs more than 50% of a replacement, we'll tell you — and apply your diagnostic fee toward the new installation. We service all major brands including Hayward, Pentair, Raypak, Jandy, Rheem, and AquaCal.</p>
              <p>Serving <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)" }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)" }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)" }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)" }}>Salem</Link>, and the entire North Shore.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Heater not working?</h2>
            <p>We'll diagnose it and give you a straight answer. No upselling.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool heater repair questions</h2></div>
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
    </Layout>
  );
};

export default HeaterRepair;
