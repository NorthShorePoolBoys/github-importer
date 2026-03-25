import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Trenchless Pipe Repair - North Shore Pool Boys","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What is trenchless pipe repair?","acceptedAnswer":{"@type":"Answer","text":"Trenchless pipe repair is a no-dig method of fixing or replacing underground pool plumbing. Instead of excavating your yard, deck, or patio, we use specialized equipment to repair or reline pipes from access points at each end. Your landscaping stays intact."}},{"@type":"Question","name":"How much does trenchless pipe repair cost?","acceptedAnswer":{"@type":"Answer","text":"Cost varies based on pipe length, depth, and accessibility. Trenchless repair typically costs less than traditional excavation when you factor in landscape restoration, deck repair, and time. Call for a free assessment."}},{"@type":"Question","name":"How long does trenchless pipe repair take?","acceptedAnswer":{"@type":"Answer","text":"Most trenchless repairs are completed in one day. Traditional excavation can take 3-5 days plus weeks of landscape recovery. The time savings alone make trenchless the smart choice."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Leak Detection"},{"@type":"ListItem","position":3,"name":"Trenchless Pipe Repair","item":"https://www.northshorepoolboys.com/trenchless-pipe-repair.html"}]};

const benefits = [
  { icon: "🏡", title: "No Yard Damage", desc: "Your lawn, gardens, and landscaping stay exactly as they are. No trenches, no heavy machinery tracks, no replanting." },
  { icon: "🪨", title: "No Deck Demolition", desc: "Pipes running under concrete, pavers, or decking? Trenchless repair reaches them without jackhammering or removing any surface." },
  { icon: "⚡", title: "Done in One Day", desc: "Most trenchless repairs are completed in a single visit. Traditional excavation takes 3-5 days plus weeks of restoration work." },
];

const faqs = [
  { q: "What is trenchless pipe repair?", a: <p>Trenchless pipe repair is a no-dig method of fixing or replacing underground pool plumbing. Instead of excavating your yard, deck, or patio, we use specialized equipment to repair or reline pipes from access points at each end. Your landscaping stays intact.</p> },
  { q: "How much does trenchless pipe repair cost?", a: <p>Cost varies based on pipe length, depth, and accessibility. Trenchless repair typically costs less than traditional excavation when you factor in landscape restoration, deck repair, and time. Call for a free assessment and quote.</p> },
  { q: "How long does it take?", a: <p>Most trenchless repairs are completed in one day. Traditional excavation can take 3-5 days of work plus weeks of landscape and hardscape recovery.</p> },
  { q: "Is trenchless repair as durable as traditional pipe replacement?", a: <p>Yes — in many cases more durable. Pipe relining creates a seamless, jointless pipe inside the existing one. There are no joints to separate, and the smooth interior actually improves water flow compared to older pipes with rough or corroded interiors.</p> },
  { q: "Do you need to know where the leak is first?", a: <p>Yes — we always start with a <Link to="/leak-detection.html" style={{ color: "var(--teal)" }}>leak detection</Link> pressure test to identify the exact pipe and location before recommending any repair method. This prevents unnecessary work and ensures we fix the right problem.</p> },
];

const TrenchlessPipeRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Trenchless Pipe Repair in Peabody, MA | No-Dig Pool Plumbing | North Shore Pool Boys"
        description="Trenchless pipe repair for pools in Peabody & the North Shore. No-dig underground pipe replacement. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/trenchless-pipe-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Trenchless Repair · No-Dig Pipe Solutions</div>
          <h1>Trenchless pipe repair — fix underground leaks without destroying your yard</h1>
          <p>Traditional pipe repair means jackhammering your pool deck, digging up your lawn, and weeks of restoration. Trenchless repair fixes the same problem from two small access points — no excavation, no mess, no damage to your landscaping.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Free Assessment</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Why Trenchless</div>
              <h2>Save your yard, your deck, and your money</h2>
              <p>When an underground pool pipe starts leaking, the traditional fix involves heavy equipment, torn-up landscaping, broken concrete, and a recovery process that can take weeks. Trenchless pipe repair eliminates all of that.</p>
              <p>We access the damaged pipe from small entry points at each end, then repair or replace the pipe from the inside using modern lining technology. Your yard stays intact, your deck stays intact, and the job is typically done in a single day.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 }}>
            {benefits.map((item, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--charcoal)", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">How It Works</div>
              <h2>The trenchless repair process</h2>
              <p>First, we use our <Link to="/leak-detection.html" style={{ color: "var(--teal)", fontWeight: 600 }}>leak detection service</Link> to identify exactly where the pipe has failed — using pressure testing and camera inspection when needed. Once we know the location and extent of the damage, we determine the best trenchless approach.</p>
              <p>For most pool pipe repairs, we use pipe relining — inserting a flexible, resin-coated liner into the existing pipe and curing it in place. The result is essentially a new pipe inside the old one, with a smooth interior that actually improves flow compared to the original.</p>
              <p>For pipes that are too damaged or collapsed for relining, we use pipe bursting — pulling a new pipe through the old one while simultaneously breaking the old pipe outward. This replaces the pipe completely without digging.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Common Applications</div>
              <h2>When trenchless repair makes sense</h2>
              <p>Trenchless pipe repair is ideal for leaking return lines, broken skimmer pipes, damaged main drain connections, and any underground plumbing that runs under concrete, pavers, decking, or established landscaping. It's especially valuable when the alternative involves destroying expensive hardscaping or mature gardens to reach the pipe.</p>
              <p>We serve homeowners across <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)" }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)" }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)" }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)" }}>Salem</Link>, <Link to="/pool-service-marblehead-ma.html" style={{ color: "var(--teal)" }}>Marblehead</Link>, and all 16 towns across the North Shore. If you suspect a pipe leak — rising water bills, wet spots in the yard, air bubbles in the returns — call us for a pressure test before any digging happens.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Suspect an underground pipe leak?</h2>
            <p>Get a pressure test first — don't let anyone dig until you know exactly where the problem is.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Assessment</Link>
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Trenchless pipe repair questions</h2></div>
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

export default TrenchlessPipeRepair;
