import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool heater installation — extend your swim season by months","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a pool pump repair cost?","acceptedAnswer":{"@type":"Answer","text":"Our standard pump service call is $150, which covers diagnosis and common repairs like impeller cleaning, gasket replacement, and shaft seal repair. Parts are additional if needed."}},{"@type":"Question","name":"What are signs my pool pump needs repair?","acceptedAnswer":{"@type":"Answer","text":"Loud grinding or humming, loss of prime, reduced water flow, leaking from the pump body, air bubbles in jets, or the motor tripping the breaker."}},{"@type":"Question","name":"Should I repair or replace my pool pump?","acceptedAnswer":{"@type":"Answer","text":"If the motor is less than 8 years old and the issue is a gasket, seal, or impeller, repair is usually the smart choice. If the motor is older and has multiple issues, replacement with a variable speed pump often makes more sense long-term."}},{"@type":"Question","name":"Do you repair pool pumps in Danvers, Beverly, and Salem?","acceptedAnswer":{"@type":"Answer","text":"Yes. We service pool pumps across Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Installation"},{"@type":"ListItem","position":3,"name":"Heaters","item":"https://www.northshorepoolboys.com/heater-installation.html"}]};

const heaterTypes = [
  { emoji: "🔥", title: "Gas Heaters", desc: "Fastest heat-up time. Ideal for pools that aren't used daily — heats on demand in hours, not days. Runs on natural gas or propane. Best for quick temperature boosts and spa use." },
  { emoji: "⚡", title: "Electric Heat Pumps", desc: "Most energy-efficient option. Uses ambient air temperature to heat water — costs a fraction of gas to operate. Slower initial heat-up but maintains temperature cheaply. Best for daily swimmers." },
  { emoji: "☀️", title: "Solar Heating", desc: "Zero operating cost once installed. Solar panels on your roof or ground-mounted heat your pool using the sun. Best as a supplement to extend the season a few extra weeks." },
];

const faqs = [
  { q: "How much does a pool heater cost to install?", a: "Gas heaters typically run $1,500–$3,500 installed. Heat pumps range from $2,500–$5,000 installed. The final price depends on your pool size, heater brand, and any gas line or electrical work needed. We provide free quotes with no surprise fees." },
  { q: "Which heater type is best for Massachusetts?", a: "For most North Shore homeowners, a gas heater is the best choice — it heats fast regardless of outside temperature, which matters during our cooler spring and fall months. Heat pumps work great from May through September but lose efficiency when air temps drop below 50°F." },
  { q: "How long does installation take?", a: "Most heater installations are completed in a single day. If gas line work or electrical upgrades are needed, it may take an additional visit. We'll let you know the full timeline during your free consultation." },
  { q: "Can you add a heater to my existing pool?", a: "Yes — we retrofit heaters to existing pools and spas all the time. We'll assess your current plumbing, electrical capacity, and pad space to determine the best setup." },
];

const HeaterInstallation = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Heater Installation in Peabody, MA | North Shore Pool Boys"
        description="Pool heater installation in Peabody & the North Shore. Gas, electric & heat pump options sized for your pool. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/heater-installation.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Installation · Pool &amp; Spa Heaters</div>
          <h1>Pool heater installation — extend your swim season by months</h1>
          <p>A properly sized and installed heater lets you open earlier, close later, and swim comfortably from April through October. We install gas, electric, and heat pump systems for pools and hot tubs across the North Shore.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Heater Types</div>
              <h2>Three ways to heat your pool</h2>
              <p>The right heater depends on your pool size, budget, and how quickly you want the water warm. We'll help you choose the best option and install it properly.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 }}>
            {heaterTypes.map((h) => (
              <div key={h.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{h.emoji}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--charcoal)", marginBottom: 8 }}>{h.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Professional Installation</div>
              <h2>Why proper heater installation matters</h2>
              <p>A heater that's undersized won't warm your pool. One that's oversized wastes energy. Improper gas connections are a safety hazard, and incorrect plumbing reduces efficiency and lifespan.</p>
              <p>Our CPO-certified technicians calculate the exact BTU output your pool needs based on surface area, volume, and desired temperature rise. We handle gas line connections, electrical hookups, plumbing integration with your existing filtration system, and ensure everything meets Massachusetts building codes.</p>
              <p>We install heaters from all major brands including Hayward, Pentair, Raypak, and Jandy. Whether you're adding heat to an existing pool or planning a new installation, we'll recommend the right system for your setup and budget.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Ready to heat your pool?</h2>
            <p>Free consultation and sizing. CPO certified, fully insured.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool heater installation questions</h2></div>
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

export default HeaterInstallation;
