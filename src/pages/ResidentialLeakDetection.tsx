import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ServiceAreaLinks from "../components/ServiceAreaLinks";
import ContactForm from "../components/ContactForm";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Residential Leak Detection in Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield","Marblehead","Swampscott","Lynn","Wakefield","Reading","North Reading"],"description":"Residential leak detection for homes, slab foundations, underground pipes, irrigation systems, and plumbing. Uses acoustic listening devices, video scope with 512Hz sonde and pipe locator, soil probes, thermal cameras, and UV dye testing. Trenchless epoxy pipe repair for copper, galvanized, poly, and PVC pipes."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do you detect water leaks inside a house?","acceptedAnswer":{"@type":"Answer","text":"We use a combination of acoustic listening devices to hear water escaping behind walls or under floors, thermal imaging to detect temperature differences caused by moisture, and soil probes to check for saturation along pipe runs. Our video scope camera with 512Hz sonde transmitter lets us see inside pipes and pinpoint the exact leak location from above ground using a pipe locator."}},{"@type":"Question","name":"Can you find a leak under a concrete slab without breaking the floor?","acceptedAnswer":{"@type":"Answer","text":"Yes. Our acoustic listening equipment and thermal cameras can detect slab leaks without any demolition. Once located, we can often repair the pipe using trenchless epoxy methods — no jackhammering required."}},{"@type":"Question","name":"What types of pipes can you repair with trenchless epoxy?","acceptedAnswer":{"@type":"Answer","text":"Our trenchless epoxy repair works on copper, galvanized metal, poly (polyethylene), and various PVC types. The epoxy creates a seamless lining inside the existing pipe, sealing leaks and preventing future corrosion."}},{"@type":"Question","name":"How much does residential leak detection cost?","acceptedAnswer":{"@type":"Answer","text":"Cost depends on the complexity of the leak and accessibility. We provide a full diagnostic with a detailed report of findings and repair options. Call (978) 882-5932 for current rates and availability."}},{"@type":"Question","name":"Do you detect leaks in irrigation and sprinkler systems?","acceptedAnswer":{"@type":"Answer","text":"Yes. We locate leaks in irrigation lines, sprinkler zones, and underground supply pipes using the same professional equipment we use for home plumbing and pool systems."}},{"@type":"Question","name":"What areas do you serve for residential leak detection?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, Marblehead, Swampscott, Lynn, Wakefield, Reading, North Reading, and surrounding North Shore communities."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Leak Detection","item":"https://www.northshorepoolboys.com/leak-detection.html"},{"@type":"ListItem","position":3,"name":"Residential Leak Detection","item":"https://www.northshorepoolboys.com/residential-leak-detection.html"}]};

const detectCards = [
  { icon: "🏠", title: "Inside the Home", desc: "Leaks behind walls, under floors, at pipe joints, around fixtures, and in ceilings. We pinpoint the source so your plumber or contractor knows exactly where to work." },
  { icon: "🪨", title: "Slab Foundations", desc: "Slab leaks are among the most damaging because they're invisible until water surfaces or your bill spikes. Our acoustic and thermal equipment detects them without cutting into concrete." },
  { icon: "🌿", title: "Underground Pipes", desc: "Water supply lines, sewer laterals, and service connections that run underground from the street to your home. Wet spots in the yard, sinkholes, or unexplained green patches are all red flags." },
  { icon: "💦", title: "Irrigation & Sprinkler Systems", desc: "Leaking sprinkler zones, cracked irrigation lines, and failed valve connections. These leaks waste water quietly and can erode your landscape over time." },
  { icon: "🏊", title: "Pool & Spa Equipment", desc: "Leaking pool plumbing, spa jets, heater connections, and underground return or skimmer lines." },
  { icon: "🔧", title: "Home Plumbing Systems", desc: "Supply lines, drain pipes, water heater connections, and shut-off valves. We identify the failing component so repairs are targeted and efficient — no exploratory demolition." },
];

const equipmentCards = [
  { icon: "🎧", title: "Acoustic Listening Devices", desc: "Our hydrophone and ground microphone systems amplify the sound of water escaping from pipes — even through concrete, soil, and walls. Different leak types produce distinct sound signatures, and we're trained to identify what we're hearing and isolate the exact location." },
  { icon: "📹", title: "Video Scope Camera with 512Hz Sonde", desc: "We send a camera into your pipes for live visual inspection — with audio to hear flow changes at the leak point. The camera has a built-in 512Hz sonde transmitter that sends a signal to our pipe locator above ground. The locator beeps when we're directly over the camera, so we can mark the exact leak location on your property without guessing." },
  { icon: "🌡️", title: "Thermal Imaging", desc: "Thermal cameras detect temperature differences in walls, floors, and ceilings caused by moisture from hidden leaks. Cold or warm water leaks show up as distinct thermal patterns — even when there's no visible water damage yet. This is especially useful for slab leaks and behind-wall pipe failures." },
  { icon: "📍", title: "Soil Probes", desc: "We probe the ground along suspected pipe runs to test for moisture saturation. When a pipe is leaking underground, the surrounding soil becomes wet in a telltale pattern. Soil probing confirms leak zones and helps us narrow down the break point before any digging happens." },
  { icon: "💜", title: "UV Dye Testing", desc: "For small or slow leaks that are hard to isolate, we introduce UV-reactive dye into the plumbing system and trace its path with ultraviolet light. The dye glows where water escapes — making even hairline cracks and micro-leaks visible." },
  { icon: "💨", title: "Pressure Testing", desc: "We pressurize individual plumbing lines and monitor for pressure drop over time. This tells us exactly which line is leaking — supply, drain, or a specific zone — before we ever open a wall or dig a hole." },
];

const pipeTypes = [
  { icon: "🟤", title: "Copper Pipes", desc: "Pinhole leaks and joint failures in copper supply lines — common in older North Shore homes. Epoxy lining seals active leaks and prevents future corrosion without full pipe replacement." },
  { icon: "⚙️", title: "Galvanized Metal", desc: "Rust, corrosion, and mineral buildup in galvanized pipes cause leaks and reduced water pressure over time. Epoxy lining restores flow and stops leaks without the cost and disruption of repiping." },
  { icon: "🔵", title: "Poly (Polyethylene)", desc: "Poly pipes are common in underground water supply lines and irrigation systems. Joint failures and cracks are repaired with epoxy without excavating your yard or driveway." },
  { icon: "⬜", title: "PVC & CPVC", desc: "Cracked PVC joints, failed glue connections, and freeze damage in PVC and CPVC lines. Trenchless repair is especially valuable when PVC runs under concrete, patios, or established landscaping." },
];

const faqs = [
  { q: "How do you detect water leaks inside a house?", a: <p>We use a combination of acoustic listening devices that amplify the sound of water escaping behind walls and under floors, thermal cameras that detect temperature differences caused by moisture, and pressure testing to isolate which line is leaking. For pipe inspection, our video scope camera with a 512Hz sonde transmitter lets us see inside the pipe while our pipe locator marks its exact position from above ground.</p> },
  { q: "Can you find a slab leak without breaking the concrete?", a: <p>Yes. Our acoustic equipment and thermal imaging can detect slab leaks through the concrete without any demolition. Once located, many slab leaks can be repaired using trenchless epoxy methods — no jackhammering required.</p> },
  { q: "What types of pipes can you repair with trenchless epoxy?", a: <p>Our trenchless epoxy repair works on copper, galvanized metal, poly (polyethylene), and various PVC types. The epoxy lining seals leaks and creates a corrosion-resistant barrier inside the existing pipe without digging or demolition.</p> },
  { q: "How much does residential leak detection cost?", a: <p>Cost depends on the complexity of the leak and accessibility. We provide a full diagnostic using our professional equipment and give you a detailed report of findings and repair options with clear pricing. Call <a href="tel:9788825932" style={{ color: "var(--teal)" }}>(978) 882-5932</a> for current rates.</p> },
  { q: "Do you detect leaks in irrigation and sprinkler systems?", a: <p>Yes. We locate leaks in irrigation lines, sprinkler zones, supply connections, and underground piping using the same professional equipment we use for home plumbing and pool systems.</p> },
  { q: "What are the signs of a hidden water leak?", a: <p>Common signs include an unexplained water bill increase, water meter spinning when nothing is running, damp spots on walls or floors, musty smells, warm spots on the floor (slab leak), bubbling or peeling paint, and soft or muddy patches in your yard near pipe runs.</p> },
  { q: "What areas do you serve for residential leak detection?", a: <p><Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)" }}>Peabody</Link>, <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)" }}>Danvers</Link>, <Link to="/pool-service-middleton-ma.html" style={{ color: "var(--teal)" }}>Middleton</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)" }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)" }}>Salem</Link>, <Link to="/pool-service-saugus-ma.html" style={{ color: "var(--teal)" }}>Saugus</Link>, <Link to="/pool-service-lynnfield-ma.html" style={{ color: "var(--teal)" }}>Lynnfield</Link>, and surrounding North Shore communities. Call <a href="tel:9788825932" style={{ color: "var(--teal)" }}>(978) 882-5932</a> for availability in your area.</p> },
];

const ResidentialLeakDetection = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout finalCTATitle="Don't let a hidden leak become a costly disaster" finalCTADescription="Homeowners across Peabody, Danvers, Beverly, and the North Shore trust us to find and fix water leaks fast.">
      <SEOHead
        title="Residential Leak Detection in Peabody, MA | Slab, Underground & Plumbing Leaks"
        description="Residential leak detection in Peabody & the North Shore. We find hidden water leaks in homes, slabs, underground pipes & irrigation systems — no destruction. Trenchless epoxy pipe repair available. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/residential-leak-detection.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Residential Leak Detection · Peabody &amp; North Shore</div>
          <h1>Residential leak detection — find hidden water leaks without tearing up your home</h1>
          <p>Unexplained water bill spike? Damp spots on walls or floors? Soft ground in your yard? Hidden water leaks inside your home, under your slab, or in underground pipes can cause thousands of dollars in damage when left undetected. We use professional-grade equipment to locate leaks precisely — no guesswork, no unnecessary demolition.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <a href="#contact" className="btn btn--outline btn--lg">Request a Leak Inspection</a>
          </div>
        </div>
      </section>

      {/* What We Detect */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">What We Find</div>
              <h2>Hidden leaks in homes, foundations, and underground pipes</h2>
              <p>Water leaks don't always announce themselves. A pipe leaking behind a wall, under a concrete slab, or three feet underground can run for weeks before you notice — and by then, the damage is already done. Mold growth, foundation erosion, rotting subfloor, and sky-high water bills are all consequences of leaks that went undetected too long.</p>
              <p>We use the same professional leak detection equipment that we rely on for pool and plumbing systems to find leaks in residential settings — fast and accurately, without ripping open walls or breaking up concrete.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 20, marginTop: 40 }}>
            {detectCards.map((item, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--charcoal)", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{item.desc}{item.title === "Pool & Spa Equipment" && <> We also offer dedicated <Link to="/leak-detection.html" style={{ color: "var(--teal)", fontWeight: 600 }}>pool leak detection</Link> for full system diagnostics.</>}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 620, margin: "0 auto 40px" }}>
            <div className="slabel">Our Equipment</div>
            <h2 className="stitle">Professional-grade tools that locate leaks without destroying your property</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {equipmentCards.map((item, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--charcoal)", marginBottom: 8 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trenchless Repair */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Trenchless Pipe Repair</div>
              <h2>We don't just find leaks — we fix them without destroying your property</h2>
              <p>Once we locate the leak, we can often repair it on-site using trenchless epoxy pipe repair. Instead of digging up your yard, breaking through your basement floor, or tearing open walls, we repair the pipe from the inside by applying a structural epoxy lining that seals the leak and reinforces the pipe.</p>
              <p>Our trenchless epoxy method works on a wide range of residential pipe materials including copper, galvanized metal, poly (polyethylene), and various PVC types. The epoxy creates a seamless, corrosion-resistant lining inside the existing pipe — essentially building a new pipe within the old one.</p>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20, marginTop: 40 }}>
            {pipeTypes.map((item, i) => (
              <div key={i} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px" }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{item.icon}</div>
                <h4 style={{ fontSize: 16, fontWeight: 600, color: "var(--charcoal)", marginBottom: 6 }}>{item.title}</h4>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32, padding: "24px 28px", background: "linear-gradient(135deg, var(--teal), var(--pool))", borderRadius: 14, color: "#fff" }}>
            <p style={{ fontSize: 15, lineHeight: 1.7, margin: 0 }}>For larger pipe failures where epoxy lining isn't sufficient, we also offer full <Link to="/trenchless-pipe-repair.html" style={{ color: "#fff", fontWeight: 600, textDecoration: "underline" }}>trenchless pipe replacement</Link> using pipe bursting and relining methods — still no excavation, still done in a day.</p>
          </div>
        </div>
      </section>

      {/* Warning Signs */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Warning Signs</div>
              <h2>How to know if your home has a hidden water leak</h2>
              <p>Most homeowners don't discover a hidden leak until the damage is already underway. Here are the signs we see most often when we arrive on-site for residential leak detection calls across the North Shore:</p>
              <p>A sudden or unexplained increase in your water bill is the most common early indicator. Water meters that keep spinning when everything in the house is turned off, damp or warm spots on floors, musty smells in basements or crawl spaces, cracks in foundation walls, bubbling or peeling paint, and unexplained soft or muddy patches in your yard are all red flags.</p>
              <p>If you're seeing any of these signs, don't wait. A small leak caught early is a simple repair. A small leak ignored for weeks can mean thousands in water damage, mold remediation, and structural repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Band */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Suspect a hidden water leak in your home?</h2>
            <p>Don't wait for the damage to show. Call for a professional leak inspection — we'll find it fast and explain your repair options.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Call (978) 882-5932</a>
            <a href="#contact" className="btn btn--outline btn--lg" style={{ borderColor: "rgba(255,255,255,0.35)", color: "#fff" }}>Request a Leak Inspection</a>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__text">
              <div className="slabel">Why Choose Us</div>
              <h2>Leak detection specialists with the right equipment and experience</h2>
              <p>Most plumbers and general contractors don't carry dedicated leak detection equipment — they open walls and dig until they find the problem. We take the opposite approach. Our team uses acoustic listening devices, thermal imaging, video scope cameras with 512Hz sonde transmitters, soil probes, UV dye testing, and pressure testing to locate the leak precisely before any repair work begins.</p>
              <p>We've invested in this equipment because finding the leak accurately is the most important step. When you know exactly where the problem is, repairs are faster, cheaper, less invasive, and done right the first time.</p>
              <p>Based in <Link to="/pool-service-peabody-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Peabody, MA</Link> and serving homeowners across <Link to="/pool-service-danvers-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Danvers</Link>, <Link to="/pool-service-beverly-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Beverly</Link>, <Link to="/pool-service-salem-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Salem</Link>, <Link to="/pool-service-lynnfield-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Lynnfield</Link>, <Link to="/pool-service-marblehead-ma.html" style={{ color: "var(--teal)", fontWeight: 600 }}>Marblehead</Link>, and the entire North Shore. <Link to="/locations.html" style={{ color: "var(--teal)", fontWeight: 600 }}>See all service areas →</Link></p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}><div className="slabel">FAQ</div><h2 className="stitle">Residential leak detection questions</h2></div>
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
      <ContactForm />
    </Layout>
  );
};

export default ResidentialLeakDetection;
