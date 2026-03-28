import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Repair Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool repair services including crack repair, tile replacement, pipe repair, and leak detection for residential and commercial pools."};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What types of pool repairs do you handle?","acceptedAnswer":{"@type":"Answer","text":"Crack repair, tile replacement, pipe repair and replacement, leak detection, pump repair, and general equipment troubleshooting."}},{"@type":"Question","name":"How do I know if my pool has a crack or leak?","acceptedAnswer":{"@type":"Answer","text":"Signs include unexplained water loss, wet spots in the yard near the pool, cracks in the shell or tile, and air bubbles in the return jets."}},{"@type":"Question","name":"How much does pool repair cost?","acceptedAnswer":{"@type":"Answer","text":"Costs vary widely based on the issue. Call (978) 882-5932 for a free assessment and honest quote."}},{"@type":"Question","name":"Do you repair above-ground pools?","acceptedAnswer":{"@type":"Answer","text":"Yes, we repair both above-ground and in-ground pools across Peabody and the North Shore."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Pool"},{"@type":"ListItem","position":3,"name":"Repair","item":"https://www.northshorepoolboys.com/pool-repair.html"}]};

const faqs = [
  { q: "What types of pool repairs do you handle?", a: "Crack repair, tile replacement, pipe repair and replacement, leak detection, pump repair, filter issues, and general equipment troubleshooting for both residential and commercial pools." },
  { q: "How do I know if my pool has a leak?", a: "Common signs include unexplained water loss (more than 1/4 inch per day), wet spots in the yard near the pool, air bubbles in return jets, cracks in the shell, and your pump losing prime frequently." },
  { q: "How much does pool repair cost?", a: "Costs vary widely depending on the issue. A simple tile fix is very different from a pipe replacement. Call us at (978) 882-5932 for a free assessment and honest quote — we don't charge for the diagnosis." },
  { q: "Can you repair above-ground pools?", a: "Yes — we repair both above-ground and in-ground pools. Common above-ground repairs include liner patches, pump replacements, and plumbing fixes." },
  { q: "Do you offer emergency pool repairs?", a: "We do our best to accommodate urgent situations. If you have a major leak or equipment failure, call us directly at (978) 882-5932 and we'll get to you as fast as we can." },
  { q: "What areas do you serve for pool repair?", a: "Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities." },
];

const PoolRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Repair Service in Peabody, MA | Cracks, Tile, Pipes | North Shore Pool Boys"
        description="Pool repair in Peabody & the North Shore — cracks, tile, pipe repair & leak detection. CPO certified & insured. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pool-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Pool Repair · Peabody &amp; North Shore</div>
          <h1>Pool repairs done right — before small problems get expensive</h1>
          <p>Cracks, leaks, broken tiles, busted pipes. We diagnose the issue honestly and fix it properly — no upselling, no unnecessary work. Just straightforward pool repair from a CPO-certified team.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Request a Repair Quote</Link>
          </div>
        </div>
      </section>

      {/* REPAIR SERVICES */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 48px" }}>
            <div className="slabel">Our Repair Services</div>
            <h2 className="stitle">We fix what other companies overlook</h2>
            <p style={{ color: "var(--stone)", fontSize: 15, marginTop: 8 }}>From hairline cracks to full pipe replacements, we've seen it all — and we fix it right the first time.</p>
          </div>

          {/* Crack Repair */}
          <div className="content-block" style={{ marginBottom: 64 }}>
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/768f8660-4a25-41a0-b965-53121090d1f6/Gunite-Pool-Crack.jpg" alt="Pool crack repair service in Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Structural</div>
              <h2>Crack repair</h2>
              <p>Cracks in your pool shell aren't just cosmetic — they signal potential structural problems. As the ground around your pool settles and shifts, walls and foundations can crack, leading to water leakage that undermines the surrounding soil.</p>
              <p>Left unaddressed, a small crack becomes a big problem: water loss, eroded soil, and damage to your pool deck and surrounding property. The longer you wait, the more expensive the fix. If you're losing water but can't see where, our <Link to="/leak-detection" style={{ color: "var(--teal)", fontWeight: 600 }}>professional leak detection service</Link> pinpoints the source before any digging begins.</p>
              <p>We assess every crack to determine whether it's surface-level or structural, then repair it properly to prevent further damage.</p>
            </div>
          </div>

          {/* Tile Repair */}
          <div className="content-block" style={{ direction: "rtl", marginBottom: 64 }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/94e3f8ab-de58-488e-b865-3226dcaf4cd6/IMG_8004.JPG" alt="Pool tile replacement and repair" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Tile &amp; Coping</div>
              <h2>Tile replacement &amp; repair</h2>
              <p>Cracked or missing pool tiles aren't just an eyesore — they allow water to seep behind the tile line and eat away at the structural integrity under your coping. Over time, this causes far more expensive damage.</p>
              <p>We remove damaged tiles and install new ones that match your existing pattern. Whether it's a single cracked tile or a full waterline replacement, the result is a clean, watertight finish that protects your pool's structure.</p>
              <p>We work with both in-ground gunite/concrete pools and tiled spa surrounds.</p>
            </div>
          </div>

          {/* Pipe Repair */}
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/eb1a3dc8-c36c-4dd3-9e65-8a5369d3d2f5/images.jpg" alt="Pool pipe repair and replacement service" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Plumbing</div>
              <h2>Pipe repair &amp; replacement</h2>
              <p>Leaky pipes, low pressure, clogged lines, dirt returning to the pool, air bubbles in the jets — these are all signs of a burst or damaged pipe, often caused by winter freeze damage.</p>
              <p>We locate the problem, assess the extent of the damage, and either repair or replace the affected line. Our goal is always the least invasive fix that solves the problem permanently.</p>
              <p>We also handle skimmer line repairs, return line replacements, and main drain plumbing issues.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WARNING SIGNS */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Warning Signs</div>
            <h2 className="stitle">How to tell if your pool needs repair</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "💧", title: "Unexplained Water Loss", desc: "Losing more than 1/4 inch per day? That's more than evaporation — it's likely a leak." },
              { icon: "🫧", title: "Air Bubbles in Jets", desc: "Air in the return lines usually means a cracked pipe or loose fitting on the suction side." },
              { icon: "🧱", title: "Visible Cracks or Chips", desc: "Cracks in the shell, loose tiles, or crumbling coping all indicate structural issues that worsen over time." },
              { icon: "🌊", title: "Wet Spots in Yard", desc: "Soggy areas near the pool or equipment pad suggest an underground pipe leak." },
            ].map((card) => (
              <div key={card.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{card.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Not sure what's wrong? We'll take a look.</h2>
            <p>Call for a free assessment — we'll diagnose the issue and give you an honest quote.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool repair questions</h2></div>
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{faq.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ServiceAreaLinks />
    </Layout>
  );
};

export default PoolRepair;
