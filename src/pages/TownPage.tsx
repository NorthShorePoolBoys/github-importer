import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ContactForm from "../components/ContactForm";
import { townData } from "../data/townData";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "North Shore Pool Boys",
  url: "https://www.northshorepoolboys.com",
  telephone: "+19788825932",
  email: "northshorepoolboys@gmail.com",
  address: { "@type": "PostalAddress", streetAddress: "22 May St", addressLocality: "Peabody", addressRegion: "MA", postalCode: "01960", addressCountry: "US" },
  geo: { "@type": "GeoCoordinates", latitude: 42.5279, longitude: -70.9287 },
  openingHoursSpecification: [{ "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"], opens: "08:00", closes: "19:00" }],
  areaServed: ["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield","Marblehead","Swampscott","Lynn","Wakefield","Reading","North Reading","Topsfield","Wenham","Hamilton","Nahant","Georgetown","Boxford","Essex","Ipswich"].map(n => ({ "@type": "City", name: n })),
};

const services = [
  { emoji: "🏊", title: "Weekly Maintenance", desc: "Vacuuming, skimming, chemical balancing, and filter checks on a weekly, bi-weekly, or monthly schedule.", link: "/pool-maintenance.html" },
  { emoji: "☀️", title: "Pool Openings & Closings", desc: "Seasonal startup and winterization packages starting at $125. Three tiers to fit your budget.", link: "/pool-openings.html" },
  { emoji: "🔧", title: "Pool Repair", desc: "Crack repair, tile replacement, pipe fixes, leak detection, and equipment troubleshooting.", link: "/pool-repair.html" },
  { emoji: "🔬", title: "Water Chemistry", desc: "Taylor test kit and photometer testing. pH, alkalinity, phosphates, CYA, LSI, and ORP balancing.", link: "/pool-chemistry.html" },
  { emoji: "🛁", title: "Hot Tub Service", desc: "Routine maintenance, drain and fill, chemical testing, winterization, and repair for all hot tub brands.", link: "/hot-tub-services.html" },
  { emoji: "🏗️", title: "Installation", desc: "Liner installation, pump and filter installs, and above-ground pool builds.", link: "/liner.html" },
];

const blogTips = [
  { cat: "Seasonal Guide", title: "When to Open Your Pool in Massachusetts", href: "/blog-when-to-open-pool-massachusetts.html" },
  { cat: "Seasonal Guide", title: "Pool Closing Checklist for Massachusetts", href: "/blog-pool-closing-checklist-massachusetts.html" },
  { cat: "Maintenance", title: "The Complete Weekly Maintenance Checklist", href: "/blog-pool-maintenance-checklist.html" },
];

interface TownPageProps {
  slug: string;
}

const TownPage = ({ slug }: TownPageProps) => {
  const town = townData[slug];
  const [openFaq, setOpenFaq] = useState(0);

  if (!town) return <Navigate to="/locations.html" replace />;

  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Pool Service in ${town.name} MA`,
    provider: { "@type": "LocalBusiness", name: "North Shore Pool Boys", telephone: "+19788825932", address: { "@type": "PostalAddress", addressLocality: "Peabody", addressRegion: "MA", postalCode: "01960" } },
    areaServed: { "@type": "City", name: town.name, address: { "@type": "PostalAddress", addressLocality: town.name, addressRegion: "MA", postalCode: town.zip } },
    description: `Professional pool service in ${town.name}, MA including weekly maintenance, pool openings, closings, repairs, and chemical balancing.`,
  };

  const faqSchema = town.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: town.faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  } : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.northshorepoolboys.com/" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://www.northshorepoolboys.com/locations.html" },
      { "@type": "ListItem", position: 3, name: `${town.name}, MA`, item: `https://www.northshorepoolboys.com/pool-service-${slug}-ma.html` },
    ],
  };

  const jsonLd = [serviceSchema, localBusinessSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <Layout>
      <SEOHead
        title={town.title.replace(/&amp;/g, "&")}
        description={town.description.replace(/&amp;/g, "&")}
        canonical={`https://www.northshorepoolboys.com/pool-service-${slug}-ma.html`}
        jsonLd={jsonLd}
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Pool Service · {town.name}, MA {town.zip}</div>
          <h1>Professional pool service in {town.name}, Massachusetts</h1>
          <p>{town.heroSubtitle}</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* LOCAL INTRO */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705289533533-8RJEMUJG46ZPHPF7W6WJ/image-asset.jpeg" alt={`Professional pool maintenance and repair service in ${town.name} Massachusetts`} loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Serving {town.name}</div>
              <h2>Your local pool team in {town.name}, MA</h2>
              {town.introParas.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 40px" }}>
            <div className="slabel">What We Offer in {town.name}</div>
            <h2 className="stitle">Pool services available in {town.name}, MA</h2>
            {town.svcSubtitle && <p style={{ color: "var(--stone)", fontSize: 15, marginTop: 8 }}>{town.svcSubtitle}</p>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {services.map((s) => (
              <div key={s.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{s.emoji}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6, marginBottom: 12 }}>{s.desc}</p>
                <Link to={s.link} style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)" }}>Learn more →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt={`CPO certified pool service team serving ${town.name} Massachusetts - North Shore Pool Boys`} loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Why {town.name} Homeowners Choose Us</div>
              <h2>Local, certified, and honest — that's the difference</h2>
              {town.whyParas.map((p, i) => {
                if (p.includes("<a ")) {
                  return <p key={i} style={p.includes("margin-top") ? { marginTop: 16 } : undefined} dangerouslySetInnerHTML={{ __html: p }} />;
                }
                return <p key={i}>{p}</p>;
              })}
            </div>
          </div>
        </div>
      </section>

      {/* POOL TIPS */}
      <section className="sec">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="slabel">Pool Tips for {town.name} Homeowners</div>
          <h2 className="stitle">Helpful guides from our blog</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 16, textAlign: "left", marginTop: 24 }}>
            {blogTips.map((tip) => (
              <Link key={tip.href} to={tip.href} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 10, padding: 20, textDecoration: "none" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", marginBottom: 6 }}>{tip.cat}</div>
                <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", lineHeight: 1.4 }}>{tip.title}</h3>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 16 }}><Link to="/blog.html" style={{ fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>View all pool care tips →</Link></p>
        </div>
      </section>

      {/* CTA BAND */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Ready to get started in {town.name}?</h2>
            <p>Call for a free quote or fill out our contact form — we respond within 48 hours.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {town.faqs.length > 0 && (
        <section className="sec sec--gray" id="faq">
          <div className="wrap">
            <div style={{ textAlign: "center" }}>
              <div className="slabel">FAQ</div>
              <h2 className="stitle">Pool service questions for {town.name}, MA</h2>
            </div>
            <div className="faq__list">
              {town.faqs.map((faq, i) => (
                <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
                  <button className="faq-item__q" onClick={() => toggleFaq(i)}>
                    {faq.q}<span className="faq-item__plus"></span>
                  </button>
                  <div className="faq-item__a">
                    <p dangerouslySetInnerHTML={{ __html: faq.a }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* NEARBY SERVICE AREAS */}
      <section className="sec sec--gray">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="slabel">Nearby Service Areas</div>
          <h2 className="stitle">We also serve these North Shore towns</h2>
          <p style={{ color: "var(--stone)", fontSize: 15, margin: "8px auto 28px", maxWidth: 500 }}>Looking for pool service outside {town.name}? We cover the entire North Shore from our Peabody base.</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 20 }}>
            {town.nearby.map((n) => (
              <Link key={n.slug} to={`/pool-service-${n.slug}-ma.html`} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 8, padding: "10px 20px", fontWeight: 600, color: "var(--teal)", fontSize: 14, textDecoration: "none" }}>
                {n.label}, MA
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 16 }}><Link to="/locations.html" style={{ color: "var(--teal)", fontWeight: 600, fontSize: 14 }}>View all service locations →</Link></p>
        </div>
      </section>

      {/* CONTACT FORM */}
      <ContactForm />
    </Layout>
  );
};

export default TownPage;
