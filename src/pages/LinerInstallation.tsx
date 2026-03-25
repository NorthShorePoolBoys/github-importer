import { useState } from "react";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Liner Installation in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool liner replacement and installation for above-ground and in-ground pools across the North Shore."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I know if my pool liner needs replacing?","acceptedAnswer":{"@type":"Answer","text":"Signs include fading, wrinkles that wont smooth out, brittle texture, visible cracks, holes you keep patching, and water loss that isnt explained by a plumbing issue."}},{"@type":"Question","name":"How long does liner installation take?","acceptedAnswer":{"@type":"Answer","text":"Most above-ground liner replacements are completed in a single day. In-ground liners typically take 1-2 days depending on pool size and prep work needed."}},{"@type":"Question","name":"How much does a pool liner replacement cost?","acceptedAnswer":{"@type":"Answer","text":"Costs vary based on pool size, type (above-ground vs in-ground), and liner material. Call (978) 882-5932 for a free assessment and quote."}},{"@type":"Question","name":"Do you install liners for above-ground pools?","acceptedAnswer":{"@type":"Answer","text":"Yes. We replace liners for both above-ground and in-ground pools across Peabody, Danvers, Beverly, Salem, and the entire North Shore."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Installation"},{"@type":"ListItem","position":3,"name":"Liners","item":"https://www.northshorepoolboys.com/liner.html"}]};

const processCards = [
  { emoji: "📏", title: "Precise Measurement", desc: "We measure your pool exactly — no generic sizing. A proper fit prevents wrinkles and premature wear." },
  { emoji: "🧹", title: "Surface Prep", desc: "Old liner removed, walls and floor cleaned, and any damage repaired before the new liner goes in." },
  { emoji: "💧", title: "Expert Installation", desc: "Liner set, stretched, and secured. We fill slowly and adjust as we go for a wrinkle-free finish." },
  { emoji: "✅", title: "Final Inspection", desc: "Fittings reconnected, equipment checked, water treated, and a full walkthrough before we leave." },
];

const galleryImages = [
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/8b2c714d-dedb-4c5b-b38d-18d2e92358f9/IMG_7657.JPEG", alt: "Pool liner installation - before" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/92a7953c-3f11-4cd5-a263-4570fb63368d/IMG_7659.JPEG", alt: "Pool liner replacement in progress" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/247c1f88-ec6a-44c3-af77-cc9ca4142509/IMG_7681.JPEG", alt: "New pool liner installed" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d8b05548-ccd6-4faf-bab3-48464b5fbf12/IMG_7629.JPEG", alt: "Above ground pool liner work" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/4b8d6c6e-70c1-43b7-9e67-15dbad13c561/IMG_7633.JPEG", alt: "Pool liner fitting" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/68f7598d-db54-4f94-9b55-f58e6cd2c45d/IMG_7638.JPEG", alt: "Completed liner installation" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/f022a6eb-2f16-4d40-917b-7e347c8786c4/IMG_E7991.JPG", alt: "Pool liner replacement Peabody MA" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/148e18d2-57e9-48fa-bcb7-0db7b7f777b8/IMG_7671.JPEG", alt: "New liner filling with water" },
  { src: "https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/98873dad-f5a6-41d7-b774-c93d3d171bc4/IMG_7676.JPEG", alt: "Finished pool liner North Shore" },
];

const faqs = [
  { q: "How do I know if my liner needs replacing?", a: "Fading, wrinkles, brittle/cracking vinyl, frequent patching, and unexplained water loss are all signs. If your liner is 8+ years old and showing multiple symptoms, replacement is usually more cost-effective than continued repairs." },
  { q: "How long does liner replacement take?", a: "Most above-ground liners are done in a day. In-ground vinyl liners take 1–2 days depending on pool size and prep needed." },
  { q: "Do you replace above-ground and in-ground liners?", a: "Yes — we handle both. Above-ground liner replacements are our most common request, but we also do full in-ground vinyl liner installations." },
  { q: "Can I choose the liner pattern and color?", a: "Absolutely. We work with multiple liner manufacturers and can show you pattern and color options that fit your pool and your style." },
  { q: "What areas do you serve for liner installation?", a: "Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities." },
];

const LinerInstallation = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Liner Replacement & Installation in Peabody, MA | North Shore Pool Boys"
        description="Pool liner replacement & installation in Peabody & the North Shore. Above-ground & in-ground liners. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/liner.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Liner Installation · Peabody &amp; North Shore</div>
          <h1>Pool liner replacement that's done right the first time</h1>
          <p>Fading, wrinkles, leaks, or a liner that's just seen better days? We measure precisely, install carefully, and leave you with a pool that looks brand new. Above-ground and in-ground — we handle both.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <a href="/contact.html" className="btn btn--outline btn--lg">Request a Liner Quote</a>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705293161079-YETFVP876MGS36Z7ARHB/image-asset.jpeg" alt="Pool liner installation in Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">When to Replace</div>
              <h2>Signs your pool liner needs replacing</h2>
              <p>Pool liners don't last forever. Sun exposure, chemical wear, and New England's freeze-thaw cycles gradually break down the vinyl until patches aren't enough anymore.</p>
              <p>Common signs include: significant fading or discoloration, wrinkles that won't smooth out, brittle or cracking texture, holes that keep appearing despite patching, and unexplained water loss.</p>
              <p>Most above-ground liners last 7–12 years; in-ground vinyl liner pools typically get 10–15 years from their liner. Whether you have a beaded liner, overlap liner, or J-hook style, if yours is in that range and showing symptoms, a full replacement will save you more than constant patching.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Our Process</div>
            <h2 className="stitle">How we replace your pool liner</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {processCards.map((c) => (
              <div key={c.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{c.emoji}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{c.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE & AFTER */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 32px" }}>
            <div className="slabel">Before &amp; After</div>
            <h2 className="stitle">See the difference a new liner makes</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900, margin: "0 auto" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--fog)" }}>
              <img src="/liner-before.png" alt="Above-ground pool before liner replacement — old damaged liner with algae buildup" loading="lazy" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "12px 16px", background: "var(--white)", textAlign: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#c0392b", textTransform: "uppercase", letterSpacing: 0.5 }}>Before</span>
              </div>
            </div>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--fog)" }}>
              <img src="/liner-after.png" alt="Above-ground pool after liner replacement — brand new blue vinyl liner installed by North Shore Pool Boys" loading="lazy" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "12px 16px", background: "var(--white)", textAlign: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", textTransform: "uppercase", letterSpacing: 0.5 }}>After</span>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--stone)", marginTop: 16, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>Old liner covered in algae and debris, replaced with a brand new vinyl liner — same pool, completely transformed. Above-ground liner replacement on the North Shore.</p>
        </div>
      </section>

      {/* PHOTO GALLERY */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 32px" }}>
            <div className="slabel">Our Work</div>
            <h2 className="stitle">Recent liner installations</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
            {galleryImages.map((img) => (
              <div key={img.src} style={{ borderRadius: 10, overflow: "hidden" }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 220, objectFit: "cover", display: "block" }} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Liner installation questions</h2></div>
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

export default LinerInstallation;
