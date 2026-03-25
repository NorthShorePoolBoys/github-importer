import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";
import ContactForm from "../components/ContactForm";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Above-Ground Pool Installation in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Above-ground pool installation, assembly, liner fitting, and equipment setup across the North Shore."};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How long does it take to install an above-ground pool?","acceptedAnswer":{"@type":"Answer","text":"Most above-ground pool installations are completed in 1-2 days."}},{"@type":"Question","name":"Do you level the ground for above-ground pool installation?","acceptedAnswer":{"@type":"Answer","text":"Yes. Proper ground leveling is a critical part of our installation process."}},{"@type":"Question","name":"What size above-ground pools do you install?","acceptedAnswer":{"@type":"Answer","text":"We install round pools from 12 to 33 feet and oval pools in various sizes."}},{"@type":"Question","name":"Do you set up the pump, filter, and equipment too?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our installation includes full equipment setup."}},{"@type":"Question","name":"What areas do you serve for above-ground pool installation?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding North Shore communities."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Installation"},{"@type":"ListItem","position":3,"name":"Above-Ground Builds","item":"https://www.northshorepoolboys.com/above-ground-pool-installation.html"}]};

const processCards = [
  { icon: "📐", title: "Site Assessment & Leveling", desc: "We assess your yard for the best placement, then level and prepare the ground. A proper base prevents structural problems and uneven water lines." },
  { icon: "🔩", title: "Pool Assembly", desc: "Frame rails, uprights, and wall panels assembled precisely according to manufacturer specs. No shortcuts, no missing hardware." },
  { icon: "💧", title: "Liner Fitting & Fill", desc: "New vinyl liner set and stretched for a wrinkle-free finish. We fill slowly and adjust as we go to ensure a perfect fit." },
  { icon: "⚙️", title: "Equipment Setup", desc: "Pump, filter, skimmer, and return fittings installed and tested. We make sure everything circulates properly before we leave." },
  { icon: "🧪", title: "Chemical Balance & Walkthrough", desc: "Initial water chemistry balanced and a full owner walkthrough — we teach you how to care for your new pool day to day." },
];

const faqs = [
  { q: "How long does it take to install an above-ground pool?", a: "Most installations are completed in 1–2 days depending on pool size, how much site preparation is needed, and weather conditions. Larger oval pools with extensive leveling may take a bit longer." },
  { q: "Do you level the ground as part of the installation?", a: "Yes. Proper ground leveling is a critical part of our process. An unlevel base causes structural stress, uneven water lines, and premature wear. We prepare the site before assembly begins." },
  { q: "What size above-ground pools do you install?", a: "We install round pools from 12 to 33 feet and oval pools in various sizes. We can help you choose the right size for your yard, budget, and how you plan to use it." },
  { q: "Do you set up the pump, filter, and all the equipment?", a: "Yes. Every installation includes full equipment setup — pump, filter, skimmer, return fittings, and hose connections. We make sure everything runs properly and teach you how to operate it." },
  { q: "Do I need a permit for an above-ground pool in Massachusetts?", a: "Requirements vary by town. Most North Shore communities require a building permit for pools over 24 inches deep. We recommend checking with your local building department before scheduling." },
  { q: "What areas do you serve for above-ground pool installation?", a: "Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding North Shore communities. Call (978) 882-5932 for availability in your area." },
];

const AboveGroundPoolInstallation = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Above-Ground Pool Installation in Peabody, MA | North Shore Pool Boys"
        description="Above-ground pool installation in Peabody & the North Shore. Site prep, assembly, liner fitting & equipment setup. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/above-ground-pool-installation.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Above-Ground Pool Builds · Peabody &amp; North Shore</div>
          <h1>Above-ground pool installation done right — from the ground up</h1>
          <p>Ready to add a pool to your backyard? We handle everything — site leveling, pool assembly, liner fitting, equipment hookup, and water fill. CPO-certified installation for round and oval above-ground pools across the North Shore.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Request an Installation Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="Above-ground pool installation in Peabody MA by North Shore Pool Boys" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Why Go Above Ground</div>
              <h2>A great pool doesn't require a massive budget</h2>
              <p>Above-ground pools are the most cost-effective way to get a real swimming pool in your backyard. They're faster to install than in-ground builds, require less permitting in most North Shore towns, and can last 10–20 years with proper care.</p>
              <p>But the difference between a pool that lasts and one that develops problems early is the installation. Unlevel ground, improper assembly, and rushed liner fitting cause the majority of above-ground pool issues we see on service calls.</p>
              <p>That's why we treat every installation like it's our own pool — proper site prep, careful assembly, and a clean finish that's ready to swim.</p>
            </div>
          </div>

          {/* Gallery */}
          <div style={{ marginTop: 56, textAlign: "center" }}>
            <div className="slabel">Recent Builds</div>
            <h2 className="stitle" style={{ marginBottom: 32 }}>Above-ground pools we've installed on the North Shore</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--fog)" }}>
                <img src="/above-ground-pool-oval-install.jpg" alt="Oval above-ground pool installation on the North Shore by North Shore Pool Boys" loading="lazy" style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "16px 20px", background: "var(--white)" }}>
                  <p style={{ fontSize: 14, color: "var(--stone)", margin: 0 }}>Oval above-ground pool — assembled, lined, and filled. Site leveled and frame set on a prepared base for long-term stability.</p>
                </div>
              </div>
              <div style={{ borderRadius: 14, overflow: "hidden", border: "1px solid var(--fog)" }}>
                <img src="/above-ground-pool-round-install.jpg" alt="Round above-ground pool installation in a Massachusetts backyard by North Shore Pool Boys" loading="lazy" style={{ width: "100%", height: 300, objectFit: "cover", display: "block" }} />
                <div style={{ padding: "16px 20px", background: "var(--white)" }}>
                  <p style={{ fontSize: 14, color: "var(--stone)", margin: 0 }}>Round above-ground pool — full build including ground prep, assembly, liner fitting, and equipment hookup. Ready to swim.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Our Installation Process</div>
            <h2 className="stitle">How we install your above-ground pool</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {processCards.map((card) => (
              <div key={card.title} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{card.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{card.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="CPO certified above-ground pool builders North Shore MA" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Why Choose Us</div>
              <h2>CPO-certified installation by a team that knows above-ground pools</h2>
              <p>We're not a general contractor who installs pools on the side. Pool service is all we do. Our CPO-certified team installs above-ground pools regularly and understands the details that matter — proper wall alignment, correct top rail tension, and liner positioning that prevents premature wear.</p>
              <p>Every installation includes a full equipment setup so you're not stuck figuring out plumbing connections yourself. And because we also provide <Link to="/pool-maintenance.html" style={{ color: "var(--teal)", fontWeight: 600 }}>weekly pool maintenance</Link>, we can keep your new pool clean and balanced all season long.</p>
              <p>Serving <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Salem</Link>, and the entire North Shore. <Link to="/locations.html" style={{ color: "var(--teal)", fontWeight: 600 }}>See all locations →</Link></p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Ready to add a pool to your backyard?</h2>
            <p>Call for a free installation estimate or fill out our contact form — we respond within 48 hours.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Request a Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Above-ground pool installation questions</h2></div>
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
      <ContactForm />
    </Layout>
  );
};

export default AboveGroundPoolInstallation;
