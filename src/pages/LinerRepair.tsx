import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool liner repair — patch leaks and extend the lif","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does pool liner repair cost?","acceptedAnswer":{"@type":"Answer","text":"Underwater patch repairs typically run $75-$200. Seam repairs and fitting gasket replacements are similar. Full replacement starts at $1,500+ if repair isn't viable."}},{"@type":"Question","name":"Can you patch a pool liner underwater?","acceptedAnswer":{"@type":"Answer","text":"Yes. Most patches are done underwater using vinyl adhesive that cures in wet conditions. No need to drain the pool."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Repair"},{"@type":"ListItem","position":3,"name":"Liner Repair","item":"https://www.northshorepoolboys.com/liner-repair.html"}]};

const issues = [
  { title: "Tears and punctures", desc: "Sharp objects, pool toys, or even aggressive vacuuming can puncture a liner. Small tears up to 6 inches can usually be patched underwater without draining the pool." },
  { title: "Seam separations", desc: "Factory seams can separate over time, especially on older liners. We use vinyl-to-vinyl adhesive and professional patching to reseal seams that are still structurally sound." },
  { title: "Bead track issues", desc: "Liner popping out of the bead track? We reseat the bead, replace damaged track sections, and use liner lock where needed to prevent recurrence." },
  { title: "Fitting and gasket leaks", desc: "Leaks around the skimmer, return fittings, or light niche are often gasket failures — not liner problems. We replace the gaskets and faceplates to stop the leak without touching the liner itself." },
];

const faqs = [
  { q: "How much does liner repair cost?", a: <p>Underwater patch repairs typically run $75-$200 depending on the size and location of the tear. Seam repairs and fitting gasket replacements are similar. Full liner replacement starts at $1,500+ if repair isn't viable.</p> },
  { q: "Can you patch a liner underwater?", a: <p>Yes — most liner patches are done underwater using vinyl adhesive that cures in wet conditions. There's no need to drain the pool for most repairs, which saves time and protects the liner from shrinking.</p> },
  { q: "How long does a liner patch last?", a: <p>A properly applied vinyl patch can last 5-10 years. We use professional-grade vinyl cement and matching patch material — not the stick-on patches from the hardware store.</p> },
  { q: "Do you repair above-ground pool liners?", a: <p>Yes. We repair both above-ground and in-ground vinyl liners. Above-ground liners are especially cost-effective to repair since replacements involve more labor.</p> },
];

const LinerRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Liner Repair in Peabody, MA | Patches, Tears & Leaks | North Shore Pool Boys"
        description="Pool liner leaking or torn? CPO-certified liner repair in Peabody & the North Shore. Underwater patching & seam repair. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/liner-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Repair · Pool Liners</div>
          <h1>Pool liner repair — patch leaks and extend the life of your liner</h1>
          <p>A small tear or pinhole doesn't always mean you need a <Link to="/liner.html" style={{ color: "var(--teal)", fontWeight: 600 }}>full liner replacement</Link>. We repair above-ground and in-ground vinyl liners with professional underwater patches, seam fixes, and bead repairs that hold for years.</p>
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
              <div className="slabel">Common Liner Issues</div>
              <h2>When liner repair makes sense</h2>
              <p>Not every liner problem requires a $2,000+ replacement. Many tears, pinholes, and seam separations can be repaired professionally for a fraction of the cost — buying you years of additional life from your existing liner.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            {issues.map((item, i) => (
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
              <div className="slabel">Repair vs Replace</div>
              <h2>When to repair — and when to replace</h2>
              <p><strong>Repair makes sense when:</strong> The liner is under 10 years old, the damage is localized (one or two tears), the vinyl is still pliable and not brittle, and the overall liner is in good shape.</p>
              <p><strong>Replacement is better when:</strong> The liner is 12+ years old, multiple areas are failing, the vinyl is faded/brittle and cracking, or there's significant stretching and wrinkling. In those cases, a <Link to="/liner.html" style={{ color: "var(--teal)", fontWeight: 600 }}>full liner replacement</Link> is the smarter investment.</p>
              <p>We'll always be straight with you about which option makes more sense. If a $75 patch will hold for 3+ years, we'll tell you. If the liner is on its last legs and patching is throwing money away, we'll tell you that too.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Need a repair?</h2>
            <p>Honest diagnosis, fair pricing. We fix what's broken — nothing more.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <ServiceAreaLinks />

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Common questions</h2></div>
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
    </Layout>
  );
};

export default LinerRepair;
