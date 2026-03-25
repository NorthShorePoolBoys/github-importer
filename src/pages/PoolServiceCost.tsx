import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ContactForm from "../components/ContactForm";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const faqs = [
  { q: "How much does weekly pool maintenance cost?", a: 'On the North Shore, basic weekly pool service starts around $80/week. Our Deluxe plan with full Taylor test kit chemical balancing starts at $130/week. Pricing varies by pool size and service frequency. <a href="/pool-maintenance.html" style="color:var(--teal);">View our maintenance plans.</a>' },
  { q: "How much does a pool opening cost?", a: 'Pool openings range from $125 (basic startup) to $250 (full service with cleaning and complete chemical balancing). <a href="/pool-openings.html" style="color:var(--teal);">See our three opening packages.</a>' },
  { q: "How much does pool closing / winterization cost?", a: 'Professional winterization runs $175–$350 depending on pool size and the service tier. Every closing includes pipe blowout, chemical treatment, and cover installation. <a href="/pool-closings.html" style="color:var(--teal);">View closing packages.</a>' },
  { q: "Why does pool service cost vary so much?", a: "Pool size, equipment condition, chemical demand, service frequency, and whether repairs are needed all affect the price. A well-maintained pool costs less to service than one that's been neglected. That's why consistent weekly service is the most cost-effective approach long-term." },
  { q: "Do you offer free estimates?", a: 'Yes. Call <a href="tel:9788825932" style="color:var(--teal);">(978) 882-5932</a> or <a href="/contact.html" style="color:var(--teal);">submit a quote request</a> and we\'ll give you a price specific to your pool within 48 hours.' },
];

const pricingCards = [
  { label: "Weekly Maintenance", price: "$80 – $180", unit: "/week", desc: "Depends on pool size, service level (Basic vs Deluxe), and frequency (weekly, bi-weekly, or monthly). Basic includes vacuum, skim, and chemical check. Deluxe adds full Taylor test kit balancing and system diagnostics.", link: "/pool-maintenance.html", linkText: "View maintenance plans →" },
  { label: "Pool Opening", price: "$125 – $250", unit: "", desc: "Three tiers: Basic ($125) covers startup and inspection. Half Service ($200) adds chemical balancing. Full Service ($250) includes complete cleaning, balancing, and equipment check.", link: "/pool-openings.html", linkText: "View opening packages →" },
  { label: "Pool Closing", price: "$175 – $350", unit: "", desc: 'Full winterization including pipe blowout, chemical treatment, antifreeze, water lowering, and cover installation. Price varies by pool size and closing tier.', link: "/pool-closings.html", linkText: "View closing packages →" },
  { label: "Pump Repair", price: "$150", unit: " service call", desc: "Covers diagnosis and most common repairs (impeller cleaning, gasket/seal replacement). Additional parts quoted separately.", link: "/pool-pump-repair.html", linkText: "Learn about pump repair →" },
  { label: "Liner Replacement", price: "$1,500+", unit: "", desc: "Above-ground liner replacement starting at $1,500. In-ground vinyl liners from $3,000+. Includes measurement, removal, surface prep, and installation.", link: "/liner.html", linkText: "Learn about liner replacement →" },
  { label: "Hot Tub Service", price: "$80 – $150", unit: "/visit", desc: "Routine maintenance visits, drain and fill service, chemical testing, and winterization. Pricing depends on spa size and service type.", link: "/hot-tub-services.html", linkText: "Learn about hot tub service →" },
];

const PoolServiceCost = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="How Much Does Pool Service Cost in Massachusetts? | North Shore Pool Boys"
        description="Pool service pricing for Massachusetts. Weekly maintenance from $80, openings from $125, closings from $175. Transparent pricing, CPO certified."
        canonical="https://www.northshorepoolboys.com/pool-service-cost-massachusetts.html"
        jsonLd={[
          { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map(f => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a.replace(/<[^>]+>/g, "") } })) },
          { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://www.northshorepoolboys.com/" }, { "@type": "ListItem", position: 2, name: "Pool Service Cost", item: "https://www.northshorepoolboys.com/pool-service-cost-massachusetts.html" }] },
        ]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Pool Service Pricing · North Shore MA</div>
          <h1>How much does pool service cost in Massachusetts?</h1>
          <p>Transparent pricing from a CPO-certified team. No hidden fees, no surprise charges. Here's what pool service actually costs on the North Shore.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="Pool service pricing Peabody MA North Shore Pool Boys" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Honest Pricing</div>
              <h2>What determines pool service cost?</h2>
              <p>Pool service pricing depends on several factors: your pool size, how often you want service, the condition of your water and equipment, and what's included in each visit. A 15,000-gallon pool with balanced chemistry costs less to maintain than a 30,000-gallon pool that hasn't been touched in months.</p>
              <p>We don't believe in one-size-fits-all pricing or burying the real cost in fine print. Below are our actual ranges for the North Shore area — <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)" }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)" }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)" }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)" }}>Salem</Link>, and surrounding towns.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Service Pricing</div>
            <h2 className="stitle">Pool service costs on the North Shore</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
            {pricingCards.map((card) => (
              <div key={card.label} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "32px 28px" }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 12 }}>{card.label}</div>
                <div style={{ fontFamily: "var(--serif)", fontSize: 36, color: "var(--charcoal)", marginBottom: 4 }}>{card.price}{card.unit && <span style={{ fontSize: 16, color: "var(--stone)" }}>{card.unit}</span>}</div>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6, margin: "12px 0 16px" }}>{card.desc}</p>
                <Link to={card.link} style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)" }}>{card.linkText}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="Affordable pool maintenance North Shore MA" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Why We're Worth It</div>
              <h2>Cheap pool service costs you more in the long run</h2>
              <p>The lowest-priced pool company often cuts corners — skipping chemical tests, rushing visits, and missing equipment problems until they become expensive repairs. We've taken over dozens of accounts from bargain services where the pool was green, the equipment was failing, and the homeowner ended up paying more to fix the neglect than they saved.</p>
              <p>Our pricing reflects CPO-certified technicians, professional-grade Taylor test kits and photometer testing, thorough visits (30–60 minutes, not 10), and honest communication about what your pool actually needs.</p>
              <p>We serve <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Salem</Link>, and <Link to="/locations.html" style={{ color: "var(--teal)", fontWeight: 600 }}>21 towns across the North Shore</Link>.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Want an exact quote for your pool?</h2>
            <p>Call or fill out the form — we respond within 48 hours with a price specific to your pool.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool service pricing questions</h2></div>
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div key={i} className={`faq-item${openFaq === i ? " open" : ""}`}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{faq.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a"><p dangerouslySetInnerHTML={{ __html: faq.a }} /></div>
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

export default PoolServiceCost;
