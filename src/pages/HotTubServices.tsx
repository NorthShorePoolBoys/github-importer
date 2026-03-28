import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Hot Tub Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Hot tub maintenance including routine visits, drain and fill service, spa cleanouts, chemical testing, winterization, and hands-on owner education."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What hot tub services do you offer?","acceptedAnswer":{"@type":"Answer","text":"Routine maintenance visits, drain and fill service, full spa cleanouts, chemical testing and balancing, winterization, and hands-on owner education."}},{"@type":"Question","name":"How often should a hot tub be serviced?","acceptedAnswer":{"@type":"Answer","text":"We recommend a professional service visit every 2-4 weeks for chemical balancing, and a full drain and fill every 3-4 months depending on usage."}},{"@type":"Question","name":"Do you winterize hot tubs?","acceptedAnswer":{"@type":"Answer","text":"Yes. We offer full spa winterization including draining, blowing out lines, adding antifreeze, and securing the cover."}},{"@type":"Question","name":"What areas do you serve for hot tub service?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Hot Tub"},{"@type":"ListItem","position":3,"name":"Maintenance","item":"https://www.northshorepoolboys.com/hot-tub-services.html"}]};

const services = [
  { emoji: "🔄", title: "Routine Visits", desc: "Regular check-ins to test water, adjust chemicals, inspect jets and equipment, and keep everything running right." },
  { emoji: "💧", title: "Drain & Fill", desc: "Complete water replacement every 3–4 months. We drain, clean the shell, refill, and rebalance from scratch." },
  { emoji: "🧹", title: "Spa Cleanouts", desc: "Deep cleaning of the shell, jets, filters, and plumbing lines. Removes biofilm, calcium buildup, and grime." },
  { emoji: "🔬", title: "Chemical Testing", desc: "Professional Taylor test kit analysis — pH, alkalinity, sanitizer levels, and calcium hardness balanced precisely." },
  { emoji: "❄️", title: "Winterization", desc: "Full spa winterization — drain, blow out lines, antifreeze treatment, and cover securing to prevent freeze damage." },
  { emoji: "📚", title: "Owner Education", desc: "Hands-on teaching so you understand your spa's chemistry and can handle basic maintenance between our visits." },
];

const faqs = [
  { q: "How often should I have my hot tub serviced?", a: "We recommend professional service every 2–4 weeks for chemical balancing and equipment checks. A full drain and fill should happen every 3–4 months, or more often with heavy use." },
  { q: "What's included in a routine hot tub visit?", a: "Water testing, chemical adjustment, filter inspection and cleaning, jet check, cover condition assessment, and a visual equipment inspection. We leave a service report so you know exactly what was done." },
  { q: "Do you service all hot tub brands?", a: "Yes — we maintain and service all major hot tub and spa brands including Jacuzzi, Hot Spring, Sundance, Bullfrog, Caldera, and more." },
  { q: "Can you winterize my hot tub?", a: "Absolutely. We offer full spa winterization including draining, blowing out all lines, antifreeze treatment, and securing the cover. Essential if you're not running the spa through winter." },
  { q: "Do you also service pools?", a: null },
  { q: "What towns do you serve?", a: null },
];

const HotTubServices = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Hot Tub Service & Maintenance in Peabody, MA | North Shore Pool Boys"
        description="Hot tub maintenance in Peabody & the North Shore. Drain & fill, chemical testing, winterization & owner education. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/hot-tub-services.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* VIDEO HERO */}
      <section className="hero-video" style={{ minHeight: "70vh" }}>
        <div className="hero-video__bg">
          <video autoPlay muted loop playsInline preload="auto" poster="/hot-tub-poster.jpg" id="heroVid">
            <source src="/hot-tub-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video__overlay"></div>
        </div>
        <div className="wrap hero-video__content">
          <div className="hero-video__text">
            <div className="hero-video__badge">
              <span className="hero-video__stars">★★★★★</span>
              <span>4.8 on Google · Best of 2025 &amp; 2026</span>
            </div>
            <h1>Hot Tub Service That Keeps Your Spa Crystal Clear</h1>
            <p className="hero-video__sub">Professional maintenance, drain &amp; fill, chemical balancing, cleanouts, and winterization for hot tub owners across Peabody, Danvers, Beverly, Salem &amp; the North Shore.</p>
            <div className="hero-video__ctas">
              <Link to="/contact" className="btn btn--teal btn--xl">Schedule Hot Tub Service</Link>
              <a href="tel:9788825932" className="btn btn--glass btn--xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (978) 882-5932
              </a>
            </div>
            <div className="hero-video__proof">
              <span>CPO CERTIFIED</span>
              <span>FULLY INSURED</span>
              <span>ALL BRANDS</span>
              <span>16+ TOWNS</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d45b02d6-902f-447f-88ae-a4f6d340a5b2/Jacuzzi.jpeg" alt="Hot tub service in Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Why Professional Service Matters</div>
              <h2>A neglected hot tub is a breeding ground for problems</h2>
              <p>Hot tubs operate at higher temperatures than pools, which means bacteria, biofilm, and chemical imbalances develop faster. Without proper spa maintenance, you're soaking in water that's working against you — not for you. A professional hot tub cleaning service catches these issues before they become health risks or equipment failures.</p>
              <p>Our CPO-certified technicians test your water with the same professional-grade equipment we use on pools, balance your chemistry precisely, and inspect your equipment for signs of wear before they become expensive failures.</p>
              <p>Whether you use your jacuzzi daily or just on weekends, we'll build a spa service schedule that keeps your water crystal clear and your components running efficiently.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Our Services</div>
            <h2 className="stitle">Everything your hot tub needs</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.emoji}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Need hot tub repair instead?</h2>
            <p>We also diagnose and fix pump, heater, jet, and electrical issues.</p>
          </div>
          <div className="cta-band__btns">
            <Link to="/hot-tub-repair" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Hot Tub Repair →</Link>
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Hot tub maintenance questions</h2></div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{f.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a">
                  {i === 4 ? (
                    <p>Yes — we offer the full range of <Link to="/pool-maintenance" style={{ color: "var(--teal)" }}>pool maintenance</Link>, <Link to="/pool-openings" style={{ color: "var(--teal)" }}>openings</Link>, <Link to="/pool-closings" style={{ color: "var(--teal)" }}>closings</Link>, <Link to="/pool-repair" style={{ color: "var(--teal)" }}>repairs</Link>, and <Link to="/pool-chemistry" style={{ color: "var(--teal)" }}>chemistry services</Link>. Many customers bundle pool + hot tub service.</p>
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

export default HotTubServices;
