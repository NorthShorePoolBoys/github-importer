import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool skimmer repair — stop leaks and restore prope","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Pool pump repair including impeller cleaning, gasket replacement, shaft seal repair, and motor diagnostics. $150 service call."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How much does pool skimmer repair cost?","acceptedAnswer":{"@type":"Answer","text":"Gasket replacements $75-$150. Crack sealing $100-$250. Full replacement for above-ground $200-$400. In-ground replacement including concrete $500-$1,200."}},{"@type":"Question","name":"Can a cracked pool skimmer be repaired?","acceptedAnswer":{"@type":"Answer","text":"Hairline cracks can be sealed with pool-grade epoxy. Structural cracks through the throat or bottom usually require full replacement."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Repair"},{"@type":"ListItem","position":3,"name":"Skimmer Repair","item":"https://www.northshorepoolboys.com/skimmer-repair.html"}]};

const faqs = [
  { q: "How much does skimmer repair cost?", a: <p>Gasket and weir door replacements run $75-$150. Epoxy crack sealing is $100-$250. Full skimmer replacement for above-ground pools is $200-$400. In-ground skimmer replacement including concrete work runs $500-$1,200 depending on accessibility.</p> },
  { q: "Can a cracked skimmer be repaired without replacement?", a: <p>Hairline cracks can often be sealed with pool-grade epoxy or fiberglass patching. If the crack is structural — through the throat or bottom — replacement is the safer long-term fix.</p> },
  { q: "How do I prevent skimmer damage in winter?", a: <p>Lower water below the skimmer opening, install a Gizzmo freeze plug in the skimmer body, and ensure proper winterization of all plumbing lines. Our pool closing service includes all of this.</p> },
  { q: "Is my skimmer leak causing my pool to lose water?", a: <p>Very likely. Skimmer gasket leaks are one of the top 3 causes of pool water loss. If your water level drops to the bottom of the skimmer and stabilizes, the leak is almost certainly at the skimmer. We can confirm with a dye test.</p> },
];

const SkimmerRepair = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Skimmer Repair in Peabody, MA | Cracks, Leaks & Replacement | North Shore Pool Boys"
        description="Pool skimmer cracked or leaking? Professional skimmer repair in Peabody & the North Shore. Gaskets, weir doors & baskets. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/skimmer-repair.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Repair · Pool Skimmers</div>
          <h1>Pool skimmer repair — stop leaks and restore proper circulation</h1>
          <p>A leaking or damaged skimmer can waste thousands of gallons and damage your pool structure. We repair cracked skimmer bodies, replace gaskets and weir doors, fix pipe connections, and install new skimmers when repair isn't enough.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Common Skimmer Problems</div>
              <h2>Signs your pool skimmer needs attention</h2>
              <p>The skimmer is one of the most failure-prone components on a pool — especially in Massachusetts where freeze-thaw cycles stress the plastic and concrete around it every winter. Here's what we fix:</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginTop: 32 }}>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Cracked skimmer body</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>Freeze damage is the #1 cause of cracked skimmers in Massachusetts. Hairline cracks can be sealed with epoxy. Larger cracks or full breaks usually need a skimmer replacement.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Leaking at the skimmer gasket</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>The gasket between the skimmer and the pool wall deteriorates over time. This is one of the most common <Link to="/leak-detection" style={{ color: "var(--teal)" }}>pool leak</Link> sources — and one of the easiest to fix. We replace the gasket and faceplate.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Broken weir door or basket</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>A missing or stuck weir door reduces skimming efficiency significantly. Broken baskets let debris reach your pump. Both are quick, affordable replacements.</p>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "24px 20px" }}>
              <h3 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>Pipe separation at skimmer</h3>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.6 }}>Ground settling can pull the underground pipe away from the skimmer body. This causes water loss and air in the pump. We can repair the connection or use <Link to="/trenchless-pipe-repair" style={{ color: "var(--teal)" }}>trenchless methods</Link> for buried pipe issues.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Massachusetts-Specific</div>
              <h2>Why North Shore pools need skimmer attention</h2>
              <p>Our freeze-thaw cycles are brutal on skimmers. Water that seeps behind the skimmer body freezes in winter, expands, and cracks the plastic. This is why proper <Link to="/pool-closings" style={{ color: "var(--teal)" }}>winterization</Link> includes lowering water below the skimmer and installing a Gizzmo freeze plug.</p>
              <p>If your skimmer wasn't properly winterized — or if it's been 15+ years without inspection — cracks may already be forming. We recommend checking skimmers during every <Link to="/pool-openings" style={{ color: "var(--teal)" }}>spring opening</Link> before filling the pool to operating level.</p>
              <p>We repair and replace skimmers from Hayward, Pentair, Waterway, and generic brands. For in-ground concrete pools, we also repair the concrete deck around the skimmer when frost heave has caused cracking or separation.</p>
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
            <Link to="/contact" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Quote</Link>
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

export default SkimmerRepair;
