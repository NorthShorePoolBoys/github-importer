import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool leak detection — find it fast, fix it right","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Professional pool leak detection using hydrophone listening devices, video scope cameras with 512Hz sonde and pipe locator, soil probes, deck plates, UV dye testing, and pressure testing. Serving the North Shore."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I know if my pool is leaking?","acceptedAnswer":{"@type":"Answer","text":"If you're adding water more than once a week, noticing wet spots in your yard near pool lines, seeing cracks in the pool deck, or your water bill has spiked, you likely have a leak. Normal evaporation is about 1/4 inch per day in summer."}},{"@type":"Question","name":"How much does leak detection cost?","acceptedAnswer":{"@type":"Answer","text":"Our leak detection service includes a full pressure test of all plumbing lines and visual/dye inspection of the shell and fittings. We provide a detailed report of findings and repair options with pricing. Call for current rates."}},{"@type":"Question","name":"What equipment do you use for leak detection?","acceptedAnswer":{"@type":"Answer","text":"We use professional-grade equipment including hydrophone listening devices, video scope cameras with 512Hz sonde and pipe locator, soil probes, deck plates, UV dye testing, and pressure testing to pinpoint leaks accurately."}},{"@type":"Question","name":"Can you repair the leak the same day?","acceptedAnswer":{"@type":"Answer","text":"Many leaks — fitting replacements, gasket swaps, small liner patches, and accessible pipe repairs — can be fixed the same day we find them. Underground pipe repairs may require scheduling a follow-up visit."}},{"@type":"Question","name":"Do you detect leaks in above-ground pools?","acceptedAnswer":{"@type":"Answer","text":"Yes. Above-ground pool leaks are typically at the skimmer, return fitting, or liner seam. We inspect all components and can usually repair the same day."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Leak Detection"},{"@type":"ListItem","position":3,"name":"Leak Detection","item":"https://www.northshorepoolboys.com/leak-detection.html"}]};

const equipment = [
  { icon: "🎧", title: "Hydrophone Listening Device", desc: "We use a professional hydrophone to listen for the sound of water escaping underground pipes. The hydrophone amplifies even the faintest leak noise, letting us narrow down the location before anything gets dug up." },
  { icon: "📹", title: "Video Scope with Audio & Dye Injection", desc: "Our video scope camera gives us a live visual inside your plumbing lines — with audio so we can hear flow changes at the leak point. We can also inject dye through the scope for visual confirmation of exactly where water is escaping. The camera operates on a 512Hz sonde that sends a signal to our pipe locator, which beeps when we're directly over the pipe — so we know the exact location of the leak above ground before any digging." },
  { icon: "🔍", title: "Soil Probe", desc: "A soil probe lets us check for moisture saturation around buried plumbing without digging. By probing the ground along suspected pipe runs, we can detect wet soil that confirms an underground leak in that area." },
  { icon: "🔧", title: "Deck Plate", desc: "We use deck plates to access plumbing lines beneath concrete pool decks without destroying the surrounding surface. This gives us direct access to test and inspect pipes that run under your deck." },
  { icon: "💜", title: "UV Dye Testing", desc: "For hard-to-find leaks, we add UV-reactive dye to the pool water and use a UV light to trace where it escapes. The dye glows under ultraviolet light, making even the smallest leak path visible — especially useful for liner seams and fitting gaskets." },
  { icon: "💨", title: "Pressure Testing", desc: "We pressurize each plumbing line individually — skimmer, returns, main drain — and monitor for pressure drop. This isolates which line is leaking without digging anything up." },
];

const faqs = [
  { q: "How do I know if my pool is leaking?", a: <p>If you're adding water more than once a week, noticing wet spots in your yard near pool lines, seeing cracks in the pool deck, or your water bill has spiked — you likely have a leak. Normal evaporation is about 1/4 inch per day in summer.</p> },
  { q: "How much does leak detection cost?", a: <p>Our leak detection service includes a full pressure test of all plumbing lines and visual/dye inspection of the shell and fittings. We provide a detailed report of findings and repair options with pricing. Call for current rates.</p> },
  { q: "Can you repair the leak the same day?", a: <p>Many leaks — fitting replacements, gasket swaps, small liner patches, and accessible pipe repairs — can be fixed the same day we find them. Underground pipe repairs may require scheduling a follow-up visit.</p> },
  { q: "Do you detect leaks in above-ground pools?", a: <p>Yes. Above-ground pool leaks are typically at the skimmer, return fitting, or liner seam. We inspect all components and can usually repair the same day.</p> },
  { q: "What equipment do you use for leak detection?", a: <p>We use professional-grade equipment including a hydrophone listening device for underground leaks, a video scope camera with audio and dye injection capability, soil probes for detecting moisture along pipe runs, deck plates for accessing lines under concrete, and UV dye testing for pinpointing hard-to-find leaks. Our camera operates on a 512Hz sonde that sends a signal to our pipe locator — it beeps when we're directly over the pipe, so we know exactly where to dig.</p> },
];

const LeakDetection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Leak Detection in Peabody, MA | North Shore Pool Boys"
        description="Professional pool leak detection on the North Shore. Pressure testing, dye testing, and electronic leak location. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/leak-detection.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Leak Detection · Pressure Testing</div>
          <h1>Pool leak detection — find it fast, fix it right</h1>
          <p>Losing water faster than evaporation explains? A pool leak wastes thousands of gallons, damages your yard, and can undermine your pool's structure. We use professional pressure testing and dye testing to pinpoint leaks accurately — no guesswork, no unnecessary digging.</p>
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
              <div className="slabel">How We Find Leaks</div>
              <h2>Professional equipment for precise leak detection</h2>
              <p>Not every leak is visible. Underground pipe leaks, shell cracks, and fitting failures can all cause water loss without obvious signs. We use specialized leak detection equipment and a systematic approach to pinpoint the exact source before any repair work begins. If you're not sure whether you have a leak or just normal evaporation, our guide on <Link to="/blog-how-to-tell-if-pool-has-leak" style={{ color: "var(--teal)", fontWeight: 600 }}>how to tell if your pool has a leak</Link> walks you through the bucket test and common warning signs.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, marginTop: 40 }}>
            {equipment.map((item, i) => (
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
              <div className="slabel">Common Leak Sources</div>
              <h2>Where pools typically leak</h2>
              <p>After years of detecting leaks across the North Shore, we've found the most common sources are underground return and skimmer pipes, especially at joints and elbows where frost movement and ground settling create stress. Light niche fittings, main drain connections, and shell cracks near the tile line are also frequent culprits.</p>
              <p>Above-ground pools most commonly leak at the skimmer gasket, return fitting, or liner seams. We check all of these during our inspection.</p>
              <p>Once we locate the leak, we'll explain your repair options with clear pricing. Many leaks can be fixed the same day — from pipe patches to fitting replacements to liner repairs. For more extensive underground pipe repairs, our <Link to="/trenchless-pipe-repair" style={{ color: "var(--teal)", fontWeight: 600 }}>trenchless pipe repair service</Link> fixes underground leaks without destroying your yard, deck, or landscaping.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Think you have a pool leak?</h2>
            <p>Don't wait — small leaks become big problems. Call for a same-week inspection.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>

      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Pool leak detection questions</h2></div>
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

export default LeakDetection;
