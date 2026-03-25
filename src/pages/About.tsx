import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"About North Shore Pool Boys - Peabody MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"CPO-certified pool and hot tub service company based in Peabody, MA serving residential and commercial properties across the North Shore."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"Who are the North Shore Pool Boys?","acceptedAnswer":{"@type":"Answer","text":"We are a CPO-certified pool service company based in Peabody, MA. Our team has 5+ years of experience serving residential and commercial properties across the North Shore."}},{"@type":"Question","name":"Are you licensed and insured?","acceptedAnswer":{"@type":"Answer","text":"Yes. We are CPO (Certified Pool Operator) certified and fully insured for both residential and commercial pool and hot tub work."}},{"@type":"Question","name":"What areas do you serve?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"About","item":"https://www.northshorepoolboys.com/about.html"}]};

const About = () => {
  return (
    <Layout>
      <SEOHead
        title="About North Shore Pool Boys | CPO Certified Pool Service | Peabody, MA"
        description="Meet the North Shore Pool Boys team. CPO-certified, fully insured pool service in Peabody, MA. Serving Danvers, Beverly, Salem & the North Shore."
        canonical="https://www.northshorepoolboys.com/about.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">About Us · Peabody, MA</div>
          <h1>Meet the team behind North Shore Pool Boys</h1>
          <p>CPO-certified, fully insured, and based right here in Peabody. We're not a franchise — we're your neighbors who happen to know pools inside and out.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* TEAM HERO IMAGE */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block">
            <div className="content-block__img">
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1704662865017-PRKQO94WIT8S0ATODNVV/image-asset.jpeg" alt="North Shore Pool Boys team in Peabody MA" loading="lazy" />
            </div>
            <div className="content-block__text">
              <div className="slabel">Our Story</div>
              <h2>Built on honest work and word of mouth</h2>
              <p>North Shore Pool Boys started with a simple idea: provide pool service the way it should be done — on time, fairly priced, and with real expertise. Based out of Peabody, Massachusetts, we've spent over 5 years building a reputation across the North Shore one pool at a time.</p>
              <p>Our team is CPO (Certified Pool Operator) certified, which means we don't guess at chemistry or wing it on equipment. Every decision we make is backed by training, experience, and a genuine commitment to doing the job right.</p>
              <p>We serve homeowners and commercial properties across Peabody, Danvers, Middleton, Beverly, Salem, Saugus, and Lynnfield — and most of our customers come from referrals. That's the best compliment we could ask for.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="sec sec--gray">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 560, margin: '0 auto 40px' }}>
            <div className="slabel">Why Us</div>
            <h2 className="stitle">What sets us apart from other pool companies</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20 }}>
            {[
              { emoji: '🎓', title: 'CPO Certified', desc: 'Certified Pool Operator trained — we use science, not guesswork, to maintain your water and equipment.' },
              { emoji: '🤝', title: 'Honest & Transparent', desc: 'We only recommend work you actually need. No upselling, no unnecessary repairs, no pressure tactics.' },
              { emoji: '📞', title: 'We Actually Answer', desc: 'No ghosting, no unreturned calls. Chris responds to every inquiry — usually the same day.' },
              { emoji: '📍', title: 'Locally Owned', desc: "We live and work right here on the North Shore. Your pool isn't a number to us — it's our neighbor's pool." },
            ].map((card) => (
              <div key={card.title} style={{ background: 'var(--white)', border: '1px solid var(--fog)', borderRadius: 14, padding: '28px 24px' }}>
                <div style={{ fontSize: 28, marginBottom: 10 }}>{card.emoji}</div>
                <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--charcoal)', marginBottom: 6 }}>{card.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECOND IMAGE + SERVICES */}
      <section className="sec">
        <div className="wrap">
          <div className="content-block" style={{ direction: 'rtl' }}>
            <div className="content-block__img" style={{ direction: 'ltr' }}>
              <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/1704663354063-2HD3ZX3ZEUC10258EO4K/image-asset.jpeg" alt="Pool service team Peabody Massachusetts" loading="lazy" />
            </div>
            <div className="content-block__text" style={{ direction: 'ltr' }}>
              <div className="slabel">Full-Service Pool Care</div>
              <h2>Everything your pool needs, under one roof</h2>
              <p>From <Link to="/pool-maintenance.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>weekly maintenance</Link> and <Link to="/pool-chemistry.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>water chemistry</Link> to <Link to="/pool-openings.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>seasonal openings</Link>, <Link to="/pool-closings.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>closings</Link>, <Link to="/pool-repair.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>repairs</Link>, and <Link to="/liner.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>installations</Link> — we handle it all.</p>
              <p>We also service <Link to="/hot-tub-services.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>hot tubs</Link>, install <Link to="/pumps.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>pumps</Link> and <Link to="/filter.html" style={{ color: 'var(--teal)', fontWeight: 600 }}>filters</Link>, and build above-ground pools. Whatever your pool needs, one call handles it.</p>
              <p>Our goal is simple: make pool ownership easy so you can focus on enjoying it.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Ready to work with a team that cares?</h2>
            <p>Call us today or fill out our contact form — we respond within 48 hours.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>Contact Us</Link>
          </div>
        </div>
      </section>

      {/* AWARDS & RECOGNITION */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 700, margin: '0 auto 40px' }}>
            <div className="slabel">Awards &amp; Recognition</div>
            <h2 className="stitle">Best Pool Cleaning Service — 2025 &amp; 2026</h2>
            <p style={{ color: 'var(--stone)', fontSize: 15, lineHeight: 1.7 }}>We're honored to be recognized by <a href="https://businessrate.com/report/7268405?geocatSerial=1482760766&scoreType=br" target="_blank" rel="noopener" style={{ color: 'var(--teal)', fontWeight: 600 }}>BusinessRate</a> as the Best Pool Cleaning Service in all of Southern New England — not just Massachusetts — for two consecutive years. This award is powered entirely by Google Reviews from our customers, which means everything to us.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, alignItems: 'center' }}>
            <div style={{ textAlign: 'center' }}>
              <a href="https://businessrate.com/report/7268405?geocatSerial=1482760766&scoreType=br" target="_blank" rel="noopener" style={{ display: 'inline-block' }}>
                <img src="/award-2025.png" alt="North Shore Pool Boys - Best Pool Cleaning Service 2025 BusinessRate Award Southern New England" style={{ maxWidth: 320, width: '100%', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} loading="lazy" />
              </a>
              <div style={{ marginTop: 16 }}>
                <h3 style={{ fontSize: 18, color: 'var(--charcoal)', marginBottom: 4 }}>Best of 2025</h3>
                <p style={{ fontSize: 13.5, color: 'var(--stone)' }}>BusinessRate · Pool Cleaning Service<br />Southern New England · Google Reviews July 2025</p>
              </div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <a href="https://businessrate.com/report/7268405?geocatSerial=1482760766&scoreType=br" target="_blank" rel="noopener" style={{ display: 'inline-block' }}>
                <img src="/award-2026.png" alt="North Shore Pool Boys - Best Pool Cleaning Service 2026 BusinessRate Benchmark Award Winner Southern New England" style={{ maxWidth: 320, width: '100%', borderRadius: 12, boxShadow: '0 8px 32px rgba(0,0,0,0.15)' }} loading="lazy" />
              </a>
              <div style={{ marginTop: 16 }}>
                <h3 style={{ fontSize: 18, color: 'var(--charcoal)', marginBottom: 4 }}>Best of 2026</h3>
                <p style={{ fontSize: 13.5, color: 'var(--stone)' }}>BusinessRate Benchmark · Award Winner<br />Southern New England · Powered by Google Reviews</p>
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <Link to="/blog-best-pool-service-southern-new-england-2026.html" style={{ fontSize: 14, fontWeight: 600, color: 'var(--teal)' }}>Read about what this award means to us →</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
