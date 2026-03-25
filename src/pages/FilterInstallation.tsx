import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Filter Installation in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool filter installation and replacement including sand, cartridge, and diatomaceous earth (DE) filters for residential and commercial pools."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What type of pool filter is best?","acceptedAnswer":{"@type":"Answer","text":"Cartridge filters offer the best balance of filtration quality and low maintenance. DE filters provide the finest filtration. Sand filters are the most affordable. We recommend based on your specific pool."}},{"@type":"Question","name":"How often should a pool filter be replaced?","acceptedAnswer":{"@type":"Answer","text":"Sand filters last 5-7 years before needing new sand. Cartridge filters need element replacement every 1-3 years. Complete filter system replacement is typically every 10-15 years."}},{"@type":"Question","name":"How do I know if my filter is failing?","acceptedAnswer":{"@type":"Answer","text":"Signs include cloudy water despite proper chemistry, high pressure gauge readings, shortened filter cycles, and visible damage or cracks in the filter housing."}},{"@type":"Question","name":"Do you install all three filter types?","acceptedAnswer":{"@type":"Answer","text":"Yes. We install and service sand, cartridge, and DE filters for both above-ground and in-ground pools across the North Shore."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Installation"},{"@type":"ListItem","position":3,"name":"Filters","item":"https://www.northshorepoolboys.com/filter.html"}]};

const warningCards = [
  { emoji: "🌫️", title: "Persistent Cloudy Water", desc: "If chemistry is right but water won't clear, your filter likely can't keep up anymore." },
  { emoji: "📈", title: "High Pressure Reading", desc: "Pressure 8–10 PSI above normal even after cleaning means the filter media is exhausted." },
  { emoji: "🔄", title: "Short Filter Cycles", desc: "Needing to backwash or clean every few days instead of weekly signals a failing filter." },
  { emoji: "⚠️", title: "Visible Damage", desc: "Cracks in the housing, broken internal manifolds, or crumbling filter grids mean it's time." },
];

const faqs = [
  { q: "Which filter type is best for my pool?", a: "Cartridge filters are our most popular recommendation — they offer excellent filtration with minimal maintenance. DE is best for pools that demand the clearest water. Sand is the budget-friendly choice. We'll assess your pool and recommend the best match." },
  { q: "How often does a pool filter need replacing?", a: "Cartridge elements every 1–3 years, sand media every 5–7 years, DE grids every 7–10 years. The filter housing/system itself typically lasts 10–15 years before needing full replacement." },
  { q: "How long does filter installation take?", a: "Most filter replacements or new installations take 2–4 hours. If significant plumbing changes are needed, it may take a full day." },
  { q: "Can you upgrade my filter type?", a: "Yes — we can swap sand for cartridge, upgrade to DE, or change filter sizes. We'll assess your plumbing and make sure the new system is properly matched to your pump and pool volume." },
  { q: "Do you service filters in Peabody, Danvers, and surrounding towns?", a: "Yes — we install and service filters across Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and all of Essex County." },
];

const FilterInstallation = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Filter Installation in Peabody, MA | Sand, Cartridge & DE | North Shore Pool Boys"
        description="Pool filter installation & replacement in Peabody & North Shore. Sand, cartridge & DE filters. CPO-certified, expert sizing. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/filter.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Filter Installation · Peabody &amp; North Shore</div>
          <h1>Pool filter installation with expert sizing and setup</h1>
          <p>Sand, cartridge, or DE — each filter type has strengths. We help you choose the right one for your pool, size it correctly, and install it so your water stays crystal clear with minimal maintenance.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Filter Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <div className="slabel">Filter Types</div>
            <h2 className="stitle">Three filter types — and which one fits your pool</h2>
          </div>
          <div className="packages__grid">
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/93722f1e-2522-4bdf-b0ba-5df360ddda65/EC-140210---Triton-II-30-Side-Mount-Sand-In-Ground-Pool-Filter---Limited-Warranty-removebg-preview.png" alt="Sand pool filter" style={{ height: 110, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Sand Filter</div>
              <ul className="pkg__list">
                <li>Filters down to 20–40 microns</li>
                <li>Lowest maintenance — just backwash</li>
                <li>Most affordable option</li>
                <li>Sand replacement every 5–7 years</li>
                <li className="pkg__excluded">Least fine filtration</li>
              </ul>
            </div>
            <div className="pkg pkg--featured">
              <div className="pkg__badge">Most Popular</div>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/92c0957f-e9f2-446a-93b4-27ada745f589/EC-160301-Clean--Clear-Plus-420-sq.-ft-removebg-preview.png" alt="Cartridge pool filter" style={{ height: 110, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Cartridge Filter</div>
              <ul className="pkg__list">
                <li>Filters down to 10–15 microns</li>
                <li>No backwashing needed</li>
                <li>Energy efficient — lower pressure</li>
                <li>Easy element replacement</li>
                <li>Best balance of quality &amp; convenience</li>
              </ul>
            </div>
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/99023a25-3dbb-44e6-bdf2-cd778ae23ec2/EC-180009-FNS-Plus-60-sq.-ft-removebg-preview.png" alt="DE diatomaceous earth pool filter" style={{ height: 110, objectFit: "contain", marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">DE Filter</div>
              <ul className="pkg__list">
                <li>Filters down to 2–5 microns</li>
                <li>Finest filtration available</li>
                <li>Crystal-clear water quality</li>
                <li>Ideal for large or commercial pools</li>
                <li className="pkg__excluded">Requires more maintenance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Warning Signs</div>
            <h2 className="stitle">How to tell if your filter needs replacing</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {warningCards.map((c) => (
              <div key={c.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{c.emoji}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{c.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Filter installation questions</h2></div>
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

export default FilterInstallation;
