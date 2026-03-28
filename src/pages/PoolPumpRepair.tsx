import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Pump Repair Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a pool pump repair cost?","acceptedAnswer":{"@type":"Answer","text":"Our standard pump service call is $150, which covers diagnosis and common repairs like impeller cleaning, gasket replacement, and shaft seal repair. Parts are additional if needed."}},{"@type":"Question","name":"What are signs my pool pump needs repair?","acceptedAnswer":{"@type":"Answer","text":"Loud grinding or humming, loss of prime, reduced water flow, leaking from the pump body, air bubbles in jets, or the motor tripping the breaker."}},{"@type":"Question","name":"Should I repair or replace my pool pump?","acceptedAnswer":{"@type":"Answer","text":"If the motor is less than 8 years old and the issue is a gasket, seal, or impeller, repair is usually the smart choice. If the motor is older and has multiple issues, replacement with a variable speed pump often makes more sense long-term."}},{"@type":"Question","name":"Do you repair pool pumps in Danvers, Beverly, and Salem?","acceptedAnswer":{"@type":"Answer","text":"Yes. We service pool pumps across Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Repair"},{"@type":"ListItem","position":3,"name":"Pump Repair","item":"https://www.northshorepoolboys.com/pool-pump-repair.html"}]};

const faqs = [
  { q: "How much does a pool pump repair cost?", a: <p>Our standard pump service call is $150. That covers diagnosis plus common repairs like impeller cleaning, gasket replacement, and shaft seal repair. If additional parts are needed, we quote you before doing the work.</p> },
  { q: "Should I repair or replace my pool pump?", a: <p>If the motor is under 8 years old and the issue is a gasket, seal, or impeller — repair. If the motor is older with multiple problems, upgrading to a <Link to="/pumps" style={{ color: "var(--teal)" }}>variable speed pump</Link> usually saves more in the long run.</p> },
  { q: "How do I know if my pump needs repair?", a: <p>Loud noises, loss of prime, reduced flow, leaking from the pump body, air bubbles in the return jets, or the motor tripping the breaker. Any of these warrant a service call.</p> },
  { q: "How long does a pump repair take?", a: <p>Most pump repairs take 1–2 hours on-site. If we need to order a specific part, we'll schedule a follow-up as soon as it arrives.</p> },
  { q: "Do you repair above-ground pool pumps?", a: <p>Yes — we repair pumps for both above-ground and in-ground pools across the entire North Shore.</p> },
  { q: "What towns do you serve for pump repair?", a: <p>Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities.</p> },
];

const PoolPumpRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Pump Repair in Peabody, MA | $150 Service Call | North Shore Pool Boys"
        description="Pool pump repair in Peabody & the North Shore. Impeller cleaning, gasket & shaft seal repair. $150 service call. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pool-pump-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Pump Repair · Peabody &amp; North Shore</div>
          <h1>Pool pump repair — diagnosed honestly, fixed properly</h1>
          <p>Strange noises, leaking, lost prime, weak flow? We'll figure out exactly what's wrong and fix it — or tell you honestly if <Link to="/pumps" style={{ color: "var(--teal)", fontWeight: 600 }}>pump replacement</Link> makes more sense. $150 service call covers diagnosis and common repairs.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Schedule Pump Repair</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705305761630-ZIVESKKPAWHG7FZDJSD3/image-asset.jpeg" alt="Pool pump repair service Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">$150 Service Call</div>
              <h2>We diagnose the problem before recommending a fix</h2>
              <p>Too many pool companies jump straight to "you need a new pump" without actually troubleshooting. Our approach is different — we inspect the motor, check the impeller, test seals and gaskets, and verify electrical connections before making any recommendation.</p>
              <p>Most pump issues are fixable with a gasket, seal, or impeller cleaning — not a full replacement. Our $150 service call covers the diagnosis and most common repairs. If parts are needed, we'll quote you before proceeding. Not sure if your pump needs attention? Check out our guide on <Link to="/blog-signs-pool-pump-needs-repair" style={{ color: "var(--teal)", fontWeight: 600 }}>5 signs your pool pump needs repair</Link>.</p>
              <p>And if replacement really is the better option, we'll explain why and help you choose the right <Link to="/pumps" style={{ color: "var(--teal)", fontWeight: 600 }}>pump upgrade</Link> for your pool.</p>
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
          <div className="packages__grid">
            <div className="pkg" style={{ textAlign: "center" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/07572cab-d011-4f03-8d7d-dd6bf1736317/2HP-Impeller-for-Super-Pump-removebg-preview.png" alt="Pool pump impeller" style={{ height: 100, objectFit: "contain", margin: "0 auto 16px" }} loading="lazy" />
              <div className="pkg__name">Impeller Cleaning</div>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6, marginTop: 8 }}>Debris gets past the basket and clogs the impeller, reducing flow rate and straining the motor. We clear the blockage and restore full circulation. Never put your hand in an impeller yourself — let a pro handle it safely.</p>
            </div>
            <div className="pkg" style={{ textAlign: "center" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/45c1f66d-4a46-419a-9d04-48573f3a3f07/SPX1600S-Strainer-Cover-Pump-Lid-Gasket-for-Super-Pump-removebg-preview.png" alt="Pool pump gasket" style={{ height: 100, objectFit: "contain", margin: "0 auto 16px" }} loading="lazy" />
              <div className="pkg__name">Gasket Replacement</div>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6, marginTop: 8 }}>Your pump has three critical rubber gaskets that wear out from heat and debris: the housing gasket, diffuser gasket, and pump lid O-ring. Worn gaskets cause air leaks and loss of prime. We replace and lube all three.</p>
            </div>
            <div className="pkg" style={{ textAlign: "center" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/e253944c-e9c3-4ef3-bace-57f0c023c3ce/Pump-Shaft-Seal-and-Pump-Body-O-Ring-removebg-preview.png" alt="Pool pump shaft seal" style={{ height: 100, objectFit: "contain", margin: "0 auto 16px" }} loading="lazy" />
              <div className="pkg__name">Shaft Seal Repair</div>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6, marginTop: 8 }}>The shaft seal sits behind the impeller and prevents water from reaching the motor. When it overheats or wears out, you'll see water leaking from the middle of the pump. We replace it before it damages the motor bearings.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Warning Signs</div>
            <h2 className="stitle">How to tell if your pump needs attention</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "🔊", title: "Loud Grinding or Humming", desc: "Bad bearings, a stuck impeller, or a failing motor capacitor. Don't ignore it — it gets worse." },
              { icon: "💨", title: "Loss of Prime", desc: "Pump runs but no water flows — usually an air leak from a bad gasket, cracked lid, or suction-side issue." },
              { icon: "💧", title: "Visible Leaking", desc: "Water dripping from the pump body usually means a worn shaft seal or blown gasket." },
              { icon: "⚡", title: "Tripping the Breaker", desc: "Electrical issues, a shorted motor winding, or a seized impeller overloading the circuit." },
            ].map((item, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pump repair questions</h2></div>
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

export default PoolPumpRepair;
