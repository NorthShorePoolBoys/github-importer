import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"}]};

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Closing Service in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Professional pool closing and winterization including pipe blowout, cover installation, antifreeze treatment, and chemical balancing."};

const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When should I close my pool in Massachusetts?","acceptedAnswer":{"@type":"Answer","text":"Most North Shore pool owners close between mid-September and late October, before the first hard freeze. Waiting too long risks burst pipes and costly damage."}},{"@type":"Question","name":"How much does a pool closing cost?","acceptedAnswer":{"@type":"Answer","text":"Basic closings start at $150, Half Service at $200, and Full Service at $250. Pricing varies by pool type and equipment."}},{"@type":"Question","name":"What happens if I dont close my pool properly?","acceptedAnswer":{"@type":"Answer","text":"Water left in pipes can freeze and burst underground lines, costing thousands to repair. A professional closing protects your investment."}},{"@type":"Question","name":"Do you close above-ground and in-ground pools?","acceptedAnswer":{"@type":"Answer","text":"Yes, we winterize both above-ground and in-ground pools across Peabody, Danvers, Beverly, Salem, and the entire North Shore."}}]};

const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Pool"},{"@type":"ListItem","position":3,"name":"Closings","item":"https://www.northshorepoolboys.com/pool-closings.html"}]};

const faqs = [
  { q: "When should I close my pool on the North Shore?", a: "Most Peabody and North Shore pool owners close between mid-September and late October. We recommend closing before the first hard freeze — don't wait until November." },
  { q: "What happens if I don't close my pool?", a: "Water in your pipes freezes, expands, and bursts underground plumbing — a repair that can cost thousands. Stagnant water also breeds algae and stains your liner or shell over winter." },
  { q: "Which closing package should I choose?", a: "Half Service is our most popular — it covers everything including winterizing chemicals. Full Service adds cover installation and complete equipment prep. Basic works if you handle chemicals and covers yourself." },
  { q: "Do you close above-ground pools?", a: "Yes — we winterize both above-ground and in-ground pools across Peabody, Danvers, Beverly, Salem, Saugus, Lynnfield, and Middleton." },
  { q: "How long does a pool closing take?", a: "Most closings take 1.5–2.5 hours depending on pool size and package. We schedule in advance to make sure your pool is closed before the first freeze." },
  { q: "How do I schedule my pool closing?", a: "Call (978) 882-5932 or use our contact form. We book closings on a first-come basis — scheduling in September is recommended." },
];

const PoolClosings = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Closing Service in Peabody, MA | Winterization | North Shore Pool Boys"
        description="Pool closing & winterization in Peabody & the North Shore. Pipe blowout, cover installation & chemical treatment. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/pool-closings.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Pool Closings · Peabody &amp; North Shore</div>
          <h1>Protect your pool this winter with a professional closing</h1>
          <p>A proper pool winterization prevents burst pipes, cracked shells, and thousands in spring repairs. We blow out every line, treat the water, and button everything up with a secure winter pool cover — so you open to a clean pool next season, not a disaster.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Book Your Closing</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/de942c29-f2bc-4348-b378-60247fde7a48/IMG_9263.jpg" alt="Pool closing service in Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Why It Matters</div>
              <h2>Why skipping a professional pool closing is a costly mistake</h2>
              <p>New England winters don't forgive shortcuts. Water left in your pipes freezes, expands, and bursts underground lines — a repair that can easily cost thousands of dollars to dig up and replace. Read our complete <Link to="/blog-pool-closing-checklist-massachusetts" style={{ color: "var(--teal)", fontWeight: 600 }}>pool closing checklist for Massachusetts</Link> to see every step involved.</p>
              <p>A professional closing ensures every drop of water is blown out of your plumbing, equipment is drained and protected, and your water is chemically treated to prevent algae and staining over the winter months.</p>
              <p>Our customers who close properly with us every fall consistently have smoother, cheaper openings in the spring. It's the single best investment you can make in your pool's longevity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="packages">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto" }}>
            <div className="slabel">Packages</div>
            <h2 className="stitle">Three closing packages for every budget</h2>
          </div>
          <div className="packages__grid">
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/4955edc0-1bd2-42e6-930c-d3e5732048ec/IMG_9456.jpeg" alt="Basic pool closing service" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Basic</div>
              <div className="pkg__price">$150 – $300</div>
              <ul className="pkg__list">
                <li>Skim leaves &amp; debris</li>
                <li>Brush walls &amp; floor</li>
                <li>Blow water out of all pool lines</li>
                <li>Remove return fittings, ladders &amp; handrails</li>
                <li>Install plugs &amp; gizmos</li>
                <li>Clean &amp; close filter</li>
                <li>3 gallons of antifreeze</li>
                <li className="pkg__excluded">Chemicals not included</li>
                <li className="pkg__excluded">Cover install not included</li>
              </ul>
              <Link to="/contact" className="btn btn--outline btn--lg btn--full" style={{ borderColor: "var(--fog)", color: "var(--teal)" }}>Book Basic</Link>
            </div>
            <div className="pkg pkg--featured">
              <div className="pkg__badge">Most Popular</div>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d6ca505c-6fbe-4789-a08f-185091fc5bfd/IMG_9439.jpeg" alt="Half service pool closing" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Half Service</div>
              <div className="pkg__price">$200 – $450</div>
              <ul className="pkg__list">
                <li>Skim leaves &amp; debris</li>
                <li>Brush walls &amp; floor</li>
                <li>Drain water below skimmer</li>
                <li>Blow water out of all pool lines</li>
                <li>Remove return fittings, ladders &amp; handrails</li>
                <li>Install plugs &amp; gizmos</li>
                <li>Clean &amp; close filter</li>
                <li>3 gallons of antifreeze</li>
                <li>Winterizing shock &amp; algaecide</li>
              </ul>
              <Link to="/contact" className="btn btn--teal btn--lg btn--full">Book Half Service</Link>
            </div>
            <div className="pkg">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/9e355974-3c36-49f0-8e1e-c959e9fca841/IMG_9263.jpeg" alt="Full service pool closing winterization" style={{ width: "100%", height: 180, objectFit: "cover", borderRadius: 8, marginBottom: 16 }} loading="lazy" />
              <div className="pkg__name">Full Service</div>
              <div className="pkg__price">$250 – $550</div>
              <ul className="pkg__list">
                <li>Everything in Half Service</li>
                <li>Full chemical winterization</li>
                <li>Cover installation &amp; securing</li>
                <li>Water bag or cable placement</li>
                <li>Full equipment winterization</li>
                <li>Heater &amp; salt system prep</li>
              </ul>
              <Link to="/contact" className="btn btn--outline btn--lg btn--full" style={{ borderColor: "var(--fog)", color: "var(--teal)" }}>Book Full Service</Link>
            </div>
          </div>
          <p className="pkg__note">Prices vary based on pool type, size, and equipment. For an accurate quote call <a href="tel:9788825932" style={{ color: "var(--teal)", fontWeight: 600 }}>(978) 882-5932</a></p>
        </div>
      </section>

      <section className="sec" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool closing questions</h2></div>
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

export default PoolClosings;
