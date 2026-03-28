import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Opening Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Professional pool opening service including cover removal, system startup, chemical balancing and full cleaning.","offers":[{"@type":"Offer","name":"Basic Pool Opening","price":"125","priceCurrency":"USD"},{"@type":"Offer","name":"Half Service Pool Opening","price":"200","priceCurrency":"USD"},{"@type":"Offer","name":"Full Service Pool Opening","price":"250","priceCurrency":"USD"}]};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When should I open my pool in Massachusetts?","acceptedAnswer":{"@type":"Answer","text":"On the North Shore, most pool owners open between late April and mid-May, before temperatures consistently hit 70°F."}},{"@type":"Question","name":"How much does a pool opening cost in Peabody MA?","acceptedAnswer":{"@type":"Answer","text":"Basic openings start at $125, Half Service at $200, and Full Service at $250. Pricing varies by pool type and size."}},{"@type":"Question","name":"How long does a pool opening take?","acceptedAnswer":{"@type":"Answer","text":"Most openings take 1-2 hours. Full Service with heavy debris can take up to 3 hours."}},{"@type":"Question","name":"Do you open above-ground and in-ground pools?","acceptedAnswer":{"@type":"Answer","text":"Yes, we open both above-ground and in-ground pools of all sizes across the North Shore."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Pool"},{"@type":"ListItem","position":3,"name":"Openings","item":"https://www.northshorepoolboys.com/pool-openings.html"}]};

const faqs = [
  { q: "When should I open my pool?", a: <p>On the North Shore, most pool owners open between late April and mid-May. We recommend opening before temperatures consistently hit 70°F to prevent algae growth under the cover. Read our complete guide on <Link to="/blog-when-to-open-pool-massachusetts" style={{ color: "var(--teal)", fontWeight: 600 }}>when to open your pool in Massachusetts</Link>.</p> },
  { q: "Which package should I choose?", a: <p>If your pool was properly closed and you handle chemicals yourself, Basic works great. Half Service is our most popular — it covers everything plus initial shock treatment. Full Service is ideal if you want a swim-ready pool with zero effort.</p> },
  { q: "How long does a pool opening take?", a: <p>Most openings take 1–2 hours depending on pool size, condition, and package. Full Service with heavy debris can take up to 3 hours.</p> },
  { q: "Do you open above-ground and in-ground pools?", a: <p>Yes — we open both above-ground and in-ground pools of all sizes. Pricing varies based on pool type and equipment.</p> },
  { q: "What areas do you serve?", a: <p>We serve Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities.</p> },
  { q: "How do I schedule my pool opening?", a: <p>Call (978) 882-5932 or use our contact form. We book on a first-come, first-served basis, so scheduling early is recommended.</p> },
];

const PoolOpenings = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Opening Service in Peabody, MA | North Shore Pool Boys"
        description="Professional pool opening service in Peabody & the North Shore. Cover removal, system startup, chemical balancing. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pool-openings.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* HERO — VIDEO BACKGROUND */}
      <section className="hero-video" style={{ minHeight: "70vh" }}>
        <div className="hero-video__bg">
          <video autoPlay muted loop playsInline preload="auto" poster="/hero-poster.jpg" id="heroVid">
            <source src="/pool-openings-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video__overlay"></div>
        </div>
        <div className="wrap hero-video__content">
          <div className="hero-video__text">
            <div className="hero-video__badge">
              <span className="hero-video__stars">★★★★★</span>
              <span>4.8 on Google · Best of 2025 &amp; 2026</span>
            </div>
            <h1>Start your season right with a professional pool opening</h1>
            <p className="hero-video__sub">A proper opening avoids weeks of headaches. We handle cover removal, system startup, chemical balancing, and cleaning — so your pool is swim-ready from day one.</p>
            <div className="hero-video__ctas">
              <Link to="/contact" className="btn btn--teal btn--xl">Book Your Opening</Link>
              <a href="tel:9788825932" className="btn btn--glass btn--xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (978) 882-5932
              </a>
            </div>
            <div className="hero-video__proof">
              <span>CPO CERTIFIED</span>
              <span>FULLY INSURED</span>
              <span>PACKAGES FROM $125</span>
              <span>21 TOWNS</span>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS A POOL OPENING */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1705285892127-EO97E4FI93I2K0KXZBLO/image-asset.jpeg" alt="Professional pool opening service in Peabody MA - North Shore Pool Boys" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Why It Matters</div>
              <h2>Why a professional pool opening makes all the difference</h2>
              <p>A pool opening is the process of preparing your swimming pool after it's been closed for the winter — removing the cover, cleaning the pool, refilling water, and restarting filtration and circulation. It's often called a spring pool startup, and it's the most important seasonal pool service of the year.</p>
              <p>We also check and adjust water chemistry, inspect equipment, and install accessories like ladders and handrails. Done right, it means crystal-clear water and zero surprises all season.</p>
              <p>Done wrong — or skipped — and you're dealing with algae, damaged equipment, and weeks of frustration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section className="sec sec--gray" id="packages">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div className="slabel">Packages</div>
            <h2 className="stitle">Three packages to fit your budget</h2>
            <p style={{ color: "var(--stone)", fontSize: 15, marginTop: 8 }}>Every pool is different. Pick the level of service that works for you.</p>
          </div>
          <div className="packages__grid">
            <div className="pkg">
              <div className="pkg__name">Basic</div>
              <div className="pkg__price">$125 – $300</div>
              <ul className="pkg__list">
                <li>Remove plugs &amp; gizmos</li>
                <li>Install return fittings</li>
                <li>Install ladders &amp; handrails</li>
                <li>Full system start-up</li>
                <li className="pkg__excluded">Chemicals not included</li>
                <li className="pkg__excluded">Cover removal not included</li>
              </ul>
              <Link to="/contact" className="btn btn--outline btn--lg btn--full" style={{ borderColor: "var(--fog)", color: "var(--teal)" }}>Book Basic</Link>
            </div>
            <div className="pkg pkg--featured">
              <div className="pkg__badge">Most Popular</div>
              <div className="pkg__name">Half Service</div>
              <div className="pkg__price">$200 – $400</div>
              <ul className="pkg__list">
                <li>Removal &amp; storage of pool cover</li>
                <li>Remove plugs &amp; gizmos</li>
                <li>Install return fittings</li>
                <li>Install ladders &amp; handrails</li>
                <li>Full system start-up</li>
                <li>Algaecide &amp; 5 gal shock included</li>
              </ul>
              <Link to="/contact" className="btn btn--teal btn--lg btn--full">Book Half Service</Link>
            </div>
            <div className="pkg">
              <div className="pkg__name">Full Service</div>
              <div className="pkg__price">$250 – $500</div>
              <ul className="pkg__list">
                <li>Removal &amp; storage of pool cover</li>
                <li>Remove plugs &amp; gizmos</li>
                <li>Install return fittings</li>
                <li>Install ladders &amp; handrails</li>
                <li>Full system start-up</li>
                <li>Full chemical balance</li>
                <li>Full vacuum of pool</li>
              </ul>
              <Link to="/contact" className="btn btn--outline btn--lg btn--full" style={{ borderColor: "var(--fog)", color: "var(--teal)" }}>Book Full Service</Link>
            </div>
          </div>
          <p className="pkg__note">Prices vary based on pool type, size, number of pumps, filters, chemical feeders, heaters, and spa equipment.<br />For an accurate quote, call us at <a href="tel:9788825932" style={{ color: "var(--teal)", fontWeight: 600 }}>(978) 882-5932</a></p>
        </div>
      </section>

      {/* OUR PROCESS */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: "rtl" }}>
            <div className="content-block__img" style={{ direction: "ltr" }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/9435a277-71e5-4946-961a-519fd69fff83/IMG_9326.jpeg" alt="Full service pool opening" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: "ltr" }}>
              <div className="slabel">Our Process</div>
              <h2>What happens during your pool opening</h2>
              <p>We don't just pull off the cover and flip a switch. Every opening follows a careful process to protect your equipment and keep your water safe.</p>
              <p>We inspect every component — pump, filter, heater, skimmer — before starting. Chemical balancing is based on actual water tests, not guesswork. If we spot a problem, we'll tell you honestly before it gets expensive.</p>
              <p>The result: a pool that's swim-ready, equipment that runs right, and a season without surprises.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool opening questions</h2></div>
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

      <ServiceAreaLinks />
    </Layout>
  );
};

export default PoolOpenings;
