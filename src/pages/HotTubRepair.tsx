import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Hot Tub Repair Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Hot tub and spa repair including pump repair, heater troubleshooting, jet replacement, control panel diagnostics, and plumbing fixes."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What hot tub problems do you repair?","acceptedAnswer":{"@type":"Answer","text":"Pump failures, heater issues, jet malfunctions, control panel errors, plumbing leaks, electrical problems, and cover replacements."}},{"@type":"Question","name":"How much does hot tub repair cost?","acceptedAnswer":{"@type":"Answer","text":"Costs vary by issue. Call (978) 882-5932 for a free diagnosis and honest quote. We only recommend repairs you actually need."}},{"@type":"Question","name":"Do you repair all hot tub brands?","acceptedAnswer":{"@type":"Answer","text":"Yes. We service all major brands including Jacuzzi, Hot Spring, Sundance, Bullfrog, Caldera, and more."}},{"@type":"Question","name":"Should I repair or replace my hot tub?","acceptedAnswer":{"@type":"Answer","text":"If the shell is intact and the issue is a pump, heater, or control board, repair is usually the smart choice. We will give you an honest assessment of whether repair makes sense for your situation."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Hot Tub"},{"@type":"ListItem","position":3,"name":"Repair","item":"https://www.northshorepoolboys.com/hot-tub-repair.html"}]};

const repairs = [
  { emoji: "⚙️", title: "Pump Repair & Replacement", desc: "Circulation pumps, jet pumps, and booster pumps. We repair seals, bearings, and impellers or replace the full unit when needed." },
  { emoji: "🔥", title: "Heater Troubleshooting", desc: "Won't heat, overheating, or error codes? We diagnose heating elements, thermostats, flow switches, and pressure sensors." },
  { emoji: "💨", title: "Jet & Air System Repair", desc: "Weak jets, stuck jets, or no air. We fix diverter valves, air controls, jet body replacements, and air lock issues." },
  { emoji: "🖥️", title: "Control Panel & Electrical", desc: "Error codes, unresponsive controls, GFCI tripping, and wiring issues. We diagnose and repair or replace control boards and sensors." },
  { emoji: "💧", title: "Plumbing & Leaks", desc: "Visible leaks, water loss, and wet equipment areas. We locate the leak source and repair unions, manifolds, and pipe connections." },
  { emoji: "🛡️", title: "Cover & Shell Repair", desc: "Waterlogged covers, cracked shells, broken hinges, and damaged cover lifters. We repair or replace to keep your spa insulated and protected." },
];

const faqs = [
  { q: "What hot tub problems do you repair?", a: "Pump failures, heater issues, jet malfunctions, control panel errors and error codes, plumbing leaks, electrical problems, GFCI tripping, cover damage, and shell repairs. We work on all major brands." },
  { q: "How do I know if my hot tub needs repair?", a: "Common signs: water won't heat, jets are weak or not working, pump makes unusual noises, error codes on the display, visible leaks, GFCI breaker keeps tripping, or water quality problems that don't respond to chemical treatment." },
  { q: "Should I repair or replace my hot tub?", a: "If the shell and frame are solid, most component failures (pumps, heaters, control boards) are worth repairing — it's significantly cheaper than replacement. We'll give you an honest assessment of your specific situation." },
  { q: "Do you repair all hot tub brands?", a: "Yes — Jacuzzi, Hot Spring, Sundance, Bullfrog, Caldera, Master Spas, and most other residential and commercial brands." },
  { q: "Do you also do pool repair?", a: null },
  { q: "What areas do you serve?", a: null },
];

const HotTubRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Hot Tub Repair in Peabody, MA | Pumps, Heaters, Jets | North Shore Pool Boys"
        description="Hot tub repair in Peabody & the North Shore. Pump, heater, jet & control panel repairs. CPO certified & insured. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/hot-tub-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Hot Tub Repair · Peabody &amp; North Shore</div>
          <h1>Hot tub repair — we diagnose the real problem and fix it right</h1>
          <p>Pump not running? Heater won't heat? Jets weak or dead? Error codes on the panel? We troubleshoot every component, find the actual cause, and fix it — not just the symptom.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Schedule Repair</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d45b02d6-902f-447f-88ae-a4f6d340a5b2/Jacuzzi.jpeg" alt="Hot tub repair service Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Our Approach</div>
              <h2>We find the root cause — not just the obvious symptom</h2>
              <p>Hot tub problems are often interconnected. A "heater issue" might actually be a flow switch problem. Weak jets could be a clogged filter, a failing pump, or an air lock in the plumbing. We don't guess — we systematically test each component to find the real cause.</p>
              <p>Once we know what's wrong, we give you an honest recommendation. If a $50 part fixes the problem, that's what we'll tell you. We don't push unnecessary replacements to inflate the bill.</p>
              <p>We service all major hot tub brands including Jacuzzi, Hot Spring, Sundance, Bullfrog, Caldera, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Common Repairs</div>
            <h2 className="stitle">What we fix most often</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {repairs.map((r) => (
              <div key={r.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{r.emoji}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{r.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Need routine maintenance instead?</h2>
            <p>We also offer regular hot tub service visits, drain and fill, and winterization.</p>
          </div>
          <div className="cta-band__btns">
            <Link to="/hot-tub-services" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Hot Tub Maintenance →</Link>
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Hot tub repair questions</h2></div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{f.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a">
                  {i === 4 ? (
                    <p>Yes — we handle all <Link to="/pool-repair" style={{ color: "var(--teal)" }}>pool repairs</Link> including cracks, tile, pipes, and equipment. We also do <Link to="/pool-pump-repair" style={{ color: "var(--teal)" }}>pump repair</Link> and <Link to="/pumps" style={{ color: "var(--teal)" }}>pump installation</Link>.</p>
                  ) : i === 5 ? (
                    <p><Link to="/pool-service-peabody-ma" style={{ color: "var(--teal)" }}>Peabody</Link>, <Link to="/pool-service-danvers-ma" style={{ color: "var(--teal)" }}>Danvers</Link>, <Link to="/pool-service-middleton-ma" style={{ color: "var(--teal)" }}>Middleton</Link>, <Link to="/pool-service-beverly-ma" style={{ color: "var(--teal)" }}>Beverly</Link>, <Link to="/pool-service-salem-ma" style={{ color: "var(--teal)" }}>Salem</Link>, <Link to="/pool-service-saugus-ma" style={{ color: "var(--teal)" }}>Saugus</Link>, and <Link to="/pool-service-lynnfield-ma" style={{ color: "var(--teal)" }}>Lynnfield</Link>.</p>
                  ) : (
                    <p>{f.a}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks />
    </Layout>
  );
};

export default HotTubRepair;
