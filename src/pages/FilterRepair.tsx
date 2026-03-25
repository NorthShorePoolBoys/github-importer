import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool filter repair — restore proper flow and water","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does pool filter repair cost?","acceptedAnswer":{"@type":"Answer","text":"Simple repairs run $50-$150. Sand changes $200-$400. Lateral or grid replacement $150-$350. We always quote before starting work."}},{"@type":"Question","name":"How often should filter sand be changed?","acceptedAnswer":{"@type":"Answer","text":"Every 5-7 years for standard silica sand. Glass media lasts 10+ years."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Repair"},{"@type":"ListItem","position":3,"name":"Filter Repair","item":"https://www.northshorepoolboys.com/filter-repair.html"}]};

const faqs = [
  { q: "How much does pool filter repair cost?", a: <p>Simple repairs like o-ring and seal replacements run $50-$150. Sand changes are $200-$400 depending on filter size. Lateral or grid replacement runs $150-$350. Full multiport valve replacement is $200-$500. We always quote before starting work.</p> },
  { q: "How do I know if my filter needs repair or replacement?", a: <p>If the tank is cracked, severely corroded, or the filter is 15+ years old with multiple failing components, replacement is usually smarter. For everything else — bad laterals, worn grids, stuck valves, o-ring leaks — repair is the better investment.</p> },
  { q: "How often should filter sand be changed?", a: <p>Every 5-7 years for standard silica sand. Glass media can last 10+ years. If your sand filter isn't clearing the water like it used to despite backwashing, it's likely time for a media change.</p> },
  { q: "What brands do you service?", a: <p>All major brands — Hayward, Pentair, Jandy, Sta-Rite, Waterway, and Intex. Both in-ground and above-ground pool filters.</p> },
];

const FilterRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Filter Repair in Peabody, MA | Sand, Cartridge & DE | North Shore Pool Boys"
        description="Pool filter not working? CPO-certified filter repair for sand, cartridge & DE filters in Peabody & the North Shore. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/filter-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Repair · Pool Filters</div>
          <h1>Pool filter repair — restore proper flow and water clarity</h1>
          <p>A failing filter means cloudy water, poor circulation, and strain on your pump. We diagnose and repair sand, cartridge, and DE filters — fixing the actual problem, not just the symptoms.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Common Filter Problems</div>
              <h2>Signs your pool filter needs repair</h2>
              <p>Filters are the unsung hero of your pool system. When they fail, everything else suffers — cloudy water, algae growth, pump strain, and rising chemical costs. Here's what we see most often:</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>High filter pressure</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>Pressure gauge reading 8-10 PSI above normal means the filter media is clogged, grids are damaged, or internals are broken. We diagnose whether it needs a deep clean, new media, or part replacement.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Sand or DE returning to pool</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>If you see sand on the pool floor or DE powder blowing back through the returns, the laterals, grids, or manifold are cracked. We replace the damaged internals.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Poor water clarity despite chemicals</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>If your <Link to="/pool-chemistry.html" style={{ color: "var(--teal)" }}>water chemistry</Link> is balanced but the water is still hazy, the filter isn't doing its job. Could be channeling in sand, worn cartridge elements, or torn DE grids.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Leaking filter tank</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>Cracks in the tank body, bad o-rings on the lid or multiport valve, or corroded clamp bands. We determine if it's a simple seal replacement or if the tank needs to be replaced. If a full <Link to="/filter.html" style={{ color: "var(--teal)", fontWeight: 600 }}>filter installation</Link> makes more sense, we'll size the right system for your pool.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">All Filter Types</div>
              <h2>We repair sand, cartridge, and DE filters</h2>
              <p><strong>Sand filters:</strong> Lateral replacement, sand changes (every 5-7 years), multiport valve rebuilds, and standpipe repairs. We use #20 silica sand or glass media depending on your preference.</p>
              <p><strong>Cartridge filters:</strong> Element replacement, manifold repair, tank crack assessment, and proper sizing verification. We carry elements for Hayward, Pentair, Jandy, and Sta-Rite.</p>
              <p><strong>DE filters (diatomaceous earth):</strong> Grid replacement, manifold rebuilds, standpipe repair, and proper DE recharging. We also clean and inspect the entire assembly during service.</p>
              <p>Not sure which filter type you have? No problem — we'll identify it on-site and explain your options in plain language. If a <Link to="/filter.html" style={{ color: "var(--teal)", fontWeight: 600 }}>new filter installation</Link> makes more sense than repair, we'll tell you honestly.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Need a repair?</h2>
            <p>Honest diagnosis, fair pricing. We fix what's broken — nothing more.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <ServiceAreaLinks />

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Common questions</h2></div>
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
    </Layout>
  );
};

export default FilterRepair;
