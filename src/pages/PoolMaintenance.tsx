import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Weekly Pool Maintenance in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Weekly, bi-weekly and monthly pool maintenance including vacuuming, skimming, chemical balancing and equipment checks.","offers":[{"@type":"Offer","name":"Basic Weekly Maintenance","price":"80","priceCurrency":"USD"},{"@type":"Offer","name":"Deluxe Weekly Maintenance","price":"130","priceCurrency":"USD"}]};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How often should I get my pool serviced?","acceptedAnswer":{"@type":"Answer","text":"During swim season (May-September), weekly service is ideal. Bi-weekly and monthly are options for lower-use pools or tighter budgets."}},{"@type":"Question","name":"How much does weekly pool maintenance cost?","acceptedAnswer":{"@type":"Answer","text":"Basic weekly service starts at $80, Deluxe at $130. Pricing depends on pool type, size, and equipment."}},{"@type":"Question","name":"Do I need to be home during pool service?","acceptedAnswer":{"@type":"Answer","text":"No. As long as we can access the pool area, we handle everything while you are out."}},{"@type":"Question","name":"What areas do you serve for pool maintenance?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Pool"},{"@type":"ListItem","position":3,"name":"Maintenance","item":"https://www.northshorepoolboys.com/pool-maintenance.html"}]};

const faqs = [
  { q: "How often should I get my pool serviced?", a: "During swim season (May–September), weekly service is ideal. It keeps chemistry stable, prevents algae, and catches problems early. Bi-weekly and monthly are options for lower-use pools or tighter budgets." },
  { q: "What's the difference between Basic and Deluxe?", a: "Basic covers cleaning — vacuum, skim, filter check. Deluxe adds full chemical balancing, a complete system check, and leaf blowing around the pool deck. If you don't want to deal with chemicals at all, Deluxe is the move." },
  { q: "Do I need to be home during service?", a: "Nope. As long as we can access the pool area, we'll handle everything while you're out. Many of our customers are at work during visits." },
  { q: "Can I switch between weekly and bi-weekly?", a: "Yes — we're flexible. Some customers go weekly in peak summer and switch to bi-weekly in the shoulder months. Just let us know and we'll adjust your schedule." },
  { q: "Do you service above-ground pools?", a: "Yes — we maintain both above-ground and in-ground pools. Same thorough service regardless of pool type." },
  { q: "What areas do you serve?", a: "Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities." },
];

const PoolMaintenance = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Weekly Pool Maintenance in Peabody, MA | North Shore Pool Boys"
        description="Weekly pool maintenance in Peabody & the North Shore. Vacuuming, skimming, chemical balancing & filter checks. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pool-maintenance.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO — VIDEO BACKGROUND */}
      <section className="hero-video" id="hero">
        <div className="hero-video__bg">
          <video autoPlay muted loop playsInline preload="auto" poster="/pool-maintenance-poster.jpg">
            <source src="/pool-maintenance-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video__overlay"></div>
        </div>
        <div className="wrap hero-video__content">
          <div className="hero-video__text">
            <div className="hero-video__badge">
              <span className="hero-video__stars">★★★★★</span>
              <span>CPO Certified · Best Pool Service 2025 &amp; 2026</span>
            </div>
            <h1>Weekly Pool Maintenance<br />You Can Actually Count On</h1>
            <p className="hero-video__sub">No missed visits, no mystery chemicals, no guessing games. Just a CPO-certified technician keeping your pool clean, balanced, and swim-ready — every single week. Serving Peabody &amp; 21 North Shore towns.</p>
            <div className="hero-video__ctas">
              <Link to="/contact" className="btn btn--teal btn--xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Get a Maintenance Quote
              </Link>
              <a href="tel:9788825932" className="btn btn--glass btn--xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (978) 882-5932
              </a>
            </div>
            <div className="hero-video__proof">
              <span>Based in Peabody, MA</span>
              <span>CPO Certified</span>
              <span>Fully Insured</span>
              <span>Plans from $80/week</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705289393275-GECHMU4AKN97QUWRZFW6/image-asset.jpeg" alt="Pool maintenance service" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">What We Do</div>
              <h2>Routine care that keeps your pool crystal clear</h2>
              <p>Owning a pool should be about enjoying it — not spending your weekends testing chemicals and scrubbing walls. Our residential pool cleaning service takes that off your plate completely.</p>
              <p>Every visit includes a thorough vacuum, skimmer emptying, waterline skimming, filter inspection, and (with our Deluxe plan) a full chemical balance. We catch small problems before they become expensive repairs. Want to know exactly what a proper visit should include? Check out our <Link to="/blog-pool-maintenance-checklist" style={{ color: "var(--teal)", fontWeight: 600 }}>complete weekly pool maintenance checklist</Link>.</p>
              <p>Choose weekly, bi-weekly, or monthly service depending on your pool usage and budget. Most homeowners on the North Shore go with a weekly pool care schedule during peak season to keep chemistry stable and prevent algae.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="sec sec--gray" id="packages">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div className="slabel">Packages</div>
            <h2 className="stitle">Choose your maintenance plan</h2>
            <p style={{ color: "var(--stone)", fontSize: 15, marginTop: 8 }}>Two levels of service, three scheduling options. Pick what works for your pool and your budget.</p>
          </div>
          <div className="packages__grid" style={{ gridTemplateColumns: "repeat(2, 1fr)", maxWidth: 800, marginLeft: "auto", marginRight: "auto", marginTop: 40 }}>
            <div className="pkg">
              <div className="pkg__name">Basic</div>
              <div className="pkg__price">$80+ <span>/ week</span></div>
              <ul className="pkg__list">
                <li>Vacuum of the entire pool</li>
                <li>Emptying of all skimmers</li>
                <li>Skimming the waterline</li>
                <li>Check filter &amp; clean if necessary</li>
                <li className="pkg__excluded">Chemicals not included</li>
                <li className="pkg__excluded">No system check</li>
                <li className="pkg__excluded">No leaf blowing</li>
              </ul>
              <div style={{ fontSize: 13, color: "var(--stone)", marginBottom: 18, lineHeight: 1.6, borderTop: "1px solid var(--fog)", paddingTop: 14 }}>
                <strong style={{ color: "var(--charcoal)" }}>Bi-Weekly:</strong> $100+ &nbsp;·&nbsp; <strong style={{ color: "var(--charcoal)" }}>Monthly:</strong> $120+
              </div>
              <Link to="/contact" className="btn btn--outline btn--lg btn--full" style={{ borderColor: "var(--fog)", color: "var(--teal)" }}>Get Basic Quote</Link>
            </div>
            <div className="pkg pkg--featured">
              <div className="pkg__badge">Recommended</div>
              <div className="pkg__name">Deluxe</div>
              <div className="pkg__price">$130+ <span>/ week</span></div>
              <ul className="pkg__list">
                <li>Vacuum of the entire pool</li>
                <li>Emptying of all skimmers</li>
                <li>Skimming the waterline</li>
                <li>Check filter &amp; clean if necessary</li>
                <li>Full chemical balance every visit</li>
                <li>Complete system check every visit</li>
                <li>Leaf blowing around the pool</li>
              </ul>
              <div style={{ fontSize: 13, color: "var(--stone)", marginBottom: 18, lineHeight: 1.6, borderTop: "1px solid var(--fog)", paddingTop: 14 }}>
                <strong style={{ color: "var(--charcoal)" }}>Bi-Weekly:</strong> $150+ &nbsp;·&nbsp; <strong style={{ color: "var(--charcoal)" }}>Monthly:</strong> $190+
              </div>
              <Link to="/contact" className="btn btn--teal btn--lg btn--full">Get Deluxe Quote</Link>
            </div>
          </div>
          <p className="pkg__note">Pricing depends on pool type, size, and equipment. "+" means starting price — we'll give you an exact quote after seeing your setup.<br />Call <a href="tel:9788825932" style={{ color: "var(--teal)", fontWeight: 600 }}>(978) 882-5932</a> or fill out our contact form for a free estimate.</p>
        </div>
      </section>

      {/* WHY ROUTINE MAINTENANCE */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705289533533-8RJEMUJG46ZPHPF7W6WJ/image-asset.jpeg" alt="Clean pool after maintenance visit" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Why It Matters</div>
              <h2>Skip a week, pay for it later</h2>
              <p>Algae doesn't take weekends off. Without consistent maintenance, your water chemistry drifts, bacteria builds up, and your equipment works overtime trying to compensate — shortening its lifespan and costing you more in the long run.</p>
              <p>Our routine visits keep everything in check: balanced water that's safe to swim in, clean filters that run efficiently, and equipment that lasts years longer because it's not being neglected.</p>
              <p>Most of our customers tell us the same thing — they wish they'd started sooner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT EVERY VISIT INCLUDES */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 40px" }}>
            <div className="slabel">Every Visit</div>
            <h2 className="stitle">What we do each time we show up</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[
              { icon: "🏊", title: "Full Vacuum", desc: "Floor, walls, and steps — we don't cut corners or rush through it." },
              { icon: "🧹", title: "Skim & Empty", desc: "Waterline skimming and all skimmer baskets emptied every visit." },
              { icon: "🔬", title: "Chemical Testing", desc: "Taylor test kit and photometer testing for precise water balance. (Deluxe)" },
              { icon: "⚙️", title: "Equipment Check", desc: "Pump, filter, heater, skimmer — inspected and cleaned as needed." },
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

      {/* BEFORE & AFTER */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 32px" }}>
            <div className="slabel">Before &amp; After</div>
            <h2 className="stitle">What a proper cleaning visit looks like</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, maxWidth: 900, margin: "0 auto" }}>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--fog)" }}>
              <img src="/maintenance-before.png" alt="In-ground pool before maintenance — cloudy water with debris and algae on bottom" loading="lazy" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "12px 16px", background: "var(--white)", textAlign: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#c0392b", textTransform: "uppercase", letterSpacing: 0.5 }}>Before</span>
              </div>
            </div>
            <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--fog)" }}>
              <img src="/maintenance-after.png" alt="In-ground pool after maintenance visit — clear water and clean bottom by North Shore Pool Boys" loading="lazy" style={{ width: "100%", height: 320, objectFit: "cover", display: "block" }} />
              <div style={{ padding: "12px 16px", background: "var(--white)", textAlign: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", textTransform: "uppercase", letterSpacing: 0.5 }}>After</span>
              </div>
            </div>
          </div>
          <p style={{ textAlign: "center", fontSize: 14, color: "var(--stone)", marginTop: 16, maxWidth: 600, marginLeft: "auto", marginRight: "auto" }}>Cloudy water with visible debris and algae buildup on the pool floor, cleaned and cleared in a single service visit. In-ground pool maintenance on the North Shore.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Maintenance questions</h2></div>
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

export default PoolMaintenance;
