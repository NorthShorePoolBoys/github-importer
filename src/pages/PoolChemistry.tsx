import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Water Chemistry Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Professional pool water chemistry testing and balancing using Taylor test kits and photometer testing. pH, alkalinity, LSI, ORP, and phosphate management."};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What pool chemistry parameters do you test?","acceptedAnswer":{"@type":"Answer","text":"pH, alkalinity, phosphates, CYA, calcium hardness, Langelier Saturation Index (LSI), and Oxidation-Reduction Potential (ORP)."}},{"@type":"Question","name":"Why is pool water chemistry important?","acceptedAnswer":{"@type":"Answer","text":"Proper chemistry prevents corrosion, scaling, algae growth, and bacteria buildup. It keeps water safe for swimmers and extends the life of your pool equipment."}},{"@type":"Question","name":"What is the Langelier Saturation Index?","acceptedAnswer":{"@type":"Answer","text":"LSI measures whether your water is corrosive or scale-forming. We balance all chemistry parameters to keep your LSI in the ideal range, protecting your pool surfaces and equipment."}},{"@type":"Question","name":"Do you offer chemistry-only service visits?","acceptedAnswer":{"@type":"Answer","text":"Yes. Chemistry testing and balancing is included in our Deluxe maintenance plan, or available as a standalone service call."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Pool"},{"@type":"ListItem","position":3,"name":"Chemistry","item":"https://www.northshorepoolboys.com/pool-chemistry.html"}]};

const faqs = [
  { q: "What parameters do you test at each visit?", a: <p>pH, alkalinity, phosphates, CYA (cyanuric acid/stabilizer), calcium hardness, and the Langelier Saturation Index. For commercial and high-end pools, we also monitor ORP.</p> },
  { q: "What testing equipment do you use?", a: <p>Professional Taylor test kits for reagent-based testing and photometer analysis for precise digital readings. We don't use test strips — they're not accurate enough for proper balancing.</p> },
  { q: "What is the Langelier Saturation Index?", a: <p>LSI is a calculation that factors pH, alkalinity, calcium, temperature, and TDS to determine if your water is corrosive (damaging equipment) or scale-forming (clogging pipes). We target a balanced LSI at every visit.</p> },
  { q: "My pool keeps turning green — can you fix it?", a: <p>Yes. Persistent algae usually means an underlying chemistry imbalance — often high phosphates or inadequate sanitizer levels. We diagnose the root cause and correct it, not just dump shock and hope for the best. See our step-by-step guide on <Link to="/blog-green-pool-water-fix" style={{ color: "var(--teal)", fontWeight: 600 }}>how to fix green pool water</Link>.</p> },
  { q: "Is chemistry included in weekly maintenance?", a: <p>Full chemical testing and balancing is included in our <Link to="/pool-maintenance" style={{ color: "var(--teal)" }}>Deluxe maintenance plan</Link> ($130+/week). It's also available as a standalone service call.</p> },
  { q: "Do you service pools in Peabody, Danvers, and Beverly?", a: <p>Yes — we serve Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities.</p> },
];

const chemParams = [
  { title: "pH: 7.4 – 7.6", desc: "Keeps water comfortable and ensures sanitizer works effectively." },
  { title: "Alkalinity: 80 – 120 ppm", desc: "Buffers pH from swinging wildly with every rainstorm or chemical addition." },
  { title: "Phosphates", desc: "Algae food source. We keep levels low to prevent blooms before they start." },
  { title: "CYA (Stabilizer)", desc: "Protects chlorine from UV breakdown. Too much and chlorine stops working." },
  { title: "LSI (Saturation Index)", desc: "The master metric — tells us if water is corrosive or scale-forming." },
  { title: "ORP (Oxidation-Reduction)", desc: "Measures sanitizer effectiveness in real-time. Used for high-end and commercial pools." },
];

const PoolChemistry = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Water Chemistry & Testing in Peabody, MA | North Shore Pool Boys"
        description="Pool water chemistry in Peabody & North Shore. Taylor test kit & photometer testing, LSI balancing, pH & alkalinity. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pool-chemistry.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Water Chemistry · Peabody &amp; North Shore</div>
          <h1>Pool water chemistry that's precise, not guesswork</h1>
          <p>We use Taylor test kits and photometer testing to balance your water to the Langelier Saturation Index — the gold standard. No test strips, no eyeballing. Just science-backed chemistry that protects your pool and your swimmers.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Schedule a Water Test</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/193b96cd-06d7-4aa6-914c-549427abfd11/istockphoto-682912696-612x612.jpg" alt="Pool water chemistry testing" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Our Approach</div>
              <h2>Water quality is more complicated than you think</h2>
              <p>Most pool owners think chemistry is just "add chlorine." In reality, proper pool chemical balance involves a dozen interacting parameters that all need to be in range — and when one drifts, the rest follow. Our professional pool water testing service goes far beyond what a test strip can tell you.</p>
              <p>We test at every visit using professional-grade Taylor test kits and photometer analysis. We balance according to the Langelier Saturation Index (LSI), which tells us whether your water is corrosive (eating your equipment) or scale-forming (clogging everything).</p>
              <p>For pools with persistent chemistry challenges, we offer advanced solutions including Blue Ray XL UV treatment, borate balancing, and ORP monitoring — the same technology used in commercial pools.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">What We Test</div>
            <h2 className="stitle">The parameters that keep your water safe</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {chemParams.map((p) => (
              <div key={p.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "var(--teal)", marginBottom: 4 }}>{p.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.5 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Water chemistry questions</h2></div>
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

export default PoolChemistry;
