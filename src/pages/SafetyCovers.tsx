import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";
import ContactForm from "../components/ContactForm";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Safety Cover Installation in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield","Marblehead","Swampscott","Lynn","Wakefield","Reading","North Reading","Topsfield","Wenham","Hamilton","Nahant","Georgetown","Boxford","Essex","Ipswich"],"description":"Pool safety cover installation, replacement, and repair across the North Shore. Mesh and solid covers for in-ground pools. CPO certified."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does a pool safety cover cost?","acceptedAnswer":{"@type":"Answer","text":"Safety covers for in-ground pools typically run $1,200–$3,500 installed depending on pool size, shape, and cover type (mesh vs solid). Custom shapes cost more. Call (978) 882-5932 for a quote specific to your pool."}},{"@type":"Question","name":"What's the difference between mesh and solid safety covers?","acceptedAnswer":{"@type":"Answer","text":"Mesh covers drain rainwater and snowmelt through the fabric, so no standing water collects on top. Solid covers block all light and debris but require a pump or drain panel to remove standing water. Mesh is lower maintenance; solid keeps the pool cleaner over winter."}},{"@type":"Question","name":"How long does a safety cover last?","acceptedAnswer":{"@type":"Answer","text":"Quality mesh safety covers last 10–15 years. Solid covers typically last 7–11 years. Lifespan depends on UV exposure, chemical contact, and how well the cover is handled during installation and removal."}},{"@type":"Question","name":"Do you install safety covers on any pool shape?","acceptedAnswer":{"@type":"Answer","text":"Yes. We measure your pool precisely and order a cover cut to your exact dimensions — including freeform, kidney, L-shaped, and custom shapes. Anchors are drilled into your deck and sit flush when not in use."}},{"@type":"Question","name":"Can a safety cover replace a winter cover?","acceptedAnswer":{"@type":"Answer","text":"Yes. Safety covers serve double duty — they protect your pool during winter and provide ASTM-certified safety year-round. Many homeowners switch from a standard winter cover to a safety cover for the added protection."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Installation"},{"@type":"ListItem","position":3,"name":"Safety Covers","item":"https://www.northshorepoolboys.com/safety-covers.html"}]};

const processCards = [
  { emoji: "📐", title: "Precise Measurement", desc: "We measure every dimension of your pool — including freeform curves, steps, and spa attachments. These measurements go to the manufacturer for a custom-cut cover." },
  { emoji: "🔩", title: "Anchor Installation", desc: "Brass anchors are drilled into your concrete, paver, or stone deck at precise intervals. When not in use, they sit flush with the deck surface — barely visible." },
  { emoji: "✅", title: "Cover Fitting & Tensioning", desc: "The cover is stretched across the pool and secured to each anchor with stainless steel springs. We adjust tension for a taut, safe fit with no sagging." },
  { emoji: "📋", title: "Owner Walkthrough", desc: "We show you how to install and remove the cover yourself for future seasons, how to store it properly, and how to use the included installation tool." },
];

const faqs = [
  { q: "How much does a pool safety cover cost?", a: null },
  { q: "What's the difference between mesh and solid safety covers?", a: "Mesh covers drain water through the fabric — no cover pump needed, but fine debris gets in. Solid covers block everything but require a pump to remove standing water. Mesh is lower maintenance; solid keeps the pool cleaner over winter." },
  { q: "How long does a safety cover last?", a: "Quality mesh covers last 10–15 years. Solid covers typically last 7–11 years. Lifespan depends on UV exposure, chemical contact, and how the cover is handled during installation and removal each season." },
  { q: "Do you install covers on any pool shape?", a: "Yes. We measure your pool precisely and order a cover cut to your exact dimensions — including freeform, kidney, L-shaped, and custom shapes with attached spas." },
  { q: "Can a safety cover replace my winter cover?", a: null },
];

const SafetyCovers = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Safety Cover Installation in Peabody, MA | Mesh & Solid | North Shore Pool Boys"
        description="Pool safety cover installation in Peabody & the North Shore. Mesh & solid covers for in-ground pools. Custom-fit, ASTM certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/safety-covers.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Safety Covers · Peabody &amp; North Shore</div>
          <h1>Pool safety cover installation — protect your pool and your family</h1>
          <p>A properly installed safety cover keeps children, pets, and debris out of your pool year-round. We measure precisely, order custom-fit covers, and install with flush-mount anchors that disappear into your deck. Mesh and solid options for every in-ground pool.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Request a Cover Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="Pool safety cover installation Peabody MA - North Shore Pool Boys" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Why Safety Covers</div>
              <h2>More than a winter cover — it's year-round protection</h2>
              <p>Standard winter covers keep debris out, but they don't prevent accidents. A safety cover is anchored into your pool deck with spring-loaded hardware and holds up to the ASTM F1346 safety standard — meaning it can support the weight of a child or pet that wanders onto it.</p>
              <p>Safety covers also serve as your winterization cover, so you're getting dual functionality: pool protection through the harsh New England winter and peace of mind every other day of the year. Many homeowners make the switch after their first child or first pet — and wish they'd done it sooner.</p>
              <p>We install safety covers across <Link to="/pool-service-peabody-ma" style={{ color: "var(--teal)", fontWeight: 600 }}>Peabody</Link>, <Link to="/pool-service-danvers-ma" style={{ color: "var(--teal)", fontWeight: 600 }}>Danvers</Link>, <Link to="/pool-service-beverly-ma" style={{ color: "var(--teal)", fontWeight: 600 }}>Beverly</Link>, <Link to="/pool-service-salem-ma" style={{ color: "var(--teal)", fontWeight: 600 }}>Salem</Link>, and the entire North Shore. <Link to="/locations" style={{ color: "var(--teal)", fontWeight: 600 }}>See all 21 locations →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* COVER TYPES */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Cover Types</div>
            <h2 className="stitle">Mesh vs solid safety covers</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "32px 28px" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🕸️</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--charcoal)", marginBottom: 10 }}>Mesh Safety Covers</h3>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.7, marginBottom: 12 }}>Mesh covers allow rainwater and snowmelt to drain through the fabric into the pool, so no standing water collects on top. This means no cover pump needed and less maintenance through winter. The tradeoff: fine particles like pollen and silt pass through too, so you'll need a more thorough <Link to="/pool-openings" style={{ color: "var(--teal)" }}>pool opening</Link> cleanup in spring.</p>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.7 }}><strong>Best for:</strong> Homeowners who want low winter maintenance and don't mind a bit more cleanup at opening. Lighter weight, easier to handle, and typically lasts 10–15 years.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "32px 28px" }}>
              <div style={{ fontSize: 28, marginBottom: 10 }}>🛡️</div>
              <h3 style={{ fontSize: 18, fontWeight: 600, color: "var(--charcoal)", marginBottom: 10 }}>Solid Safety Covers</h3>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.7, marginBottom: 12 }}>Solid covers block all sunlight, debris, and water from entering the pool. This keeps the water cleaner over winter and prevents algae growth entirely. You'll need a cover pump or built-in drain panel to remove standing water after rain and snowmelt.</p>
              <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.7 }}><strong>Best for:</strong> Homeowners who want the cleanest possible <Link to="/pool-openings" style={{ color: "var(--teal)" }}>spring opening</Link> and don't mind managing a cover pump. Heavier, typically lasts 7–11 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Our Process</div>
            <h2 className="stitle">How we install your safety cover</h2>
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

      {/* REVERSED CONTENT BLOCK */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="CPO certified safety cover installation North Shore Massachusetts" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Also Available</div>
              <h2>Safety cover replacement &amp; repairs</h2>
              <p>Existing cover worn out, torn, or no longer fitting properly? We replace safety covers on pools that already have anchors installed — often the anchors are still in great shape and just the fabric needs replacing. We also replace broken or missing springs, damaged straps, and worn anchor hardware.</p>
              <p>If your cover is still in decent condition but just needs a few fixes, we'll assess whether repair or replacement makes more financial sense. Pair your new cover with a <Link to="/pool-closings" style={{ color: "var(--teal)", fontWeight: 600 }}>professional pool closing</Link> for a complete winterization package.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Ready to protect your pool with a safety cover?</h2>
            <p>Call for a free measurement and quote — we respond within 48 hours.</p>
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
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Safety cover questions</h2></div>
          <div className="faq__list">
            {faqs.map((f, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{f.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a">
                  {i === 0 ? (
                    <p>Safety covers for in-ground pools typically run $1,200–$3,500 installed depending on pool size, shape, and cover type (mesh vs solid). Custom shapes and larger pools cost more. Call <a href="tel:9788825932" style={{ color: "var(--teal)" }}>(978) 882-5932</a> for a quote specific to your pool.</p>
                  ) : i === 4 ? (
                    <p>Yes. Safety covers are used for <Link to="/pool-closings" style={{ color: "var(--teal)" }}>winterization</Link> and provide ASTM-certified safety year-round. They're a direct upgrade from a standard winter cover.</p>
                  ) : (
                    <p>{f.a}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactForm />
      <ServiceAreaLinks />
    </Layout>
  );
};

export default SafetyCovers;
