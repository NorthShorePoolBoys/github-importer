import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Service Locations - North Shore MA","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Professional pool service across 7 towns on the North Shore of Massachusetts."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What towns do you serve on the North Shore?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}},{"@type":"Question","name":"How do I schedule pool service in my town?","acceptedAnswer":{"@type":"Answer","text":"Call (978) 882-5932 or fill out our contact form. We serve all 7 towns on regular weekly routes and respond within 48 hours."}}]};
const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Locations","item":"https://www.northshorepoolboys.com/locations.html"}]};

const towns = [
  { slug: 'peabody', name: 'Peabody, MA', badge: '📍 Home Base', desc: 'Our headquarters — fastest response times, most flexible scheduling. Serving South Peabody, West Peabody, downtown, and the 01960 zip code.' },
  { slug: 'danvers', name: 'Danvers, MA', desc: 'Heavy tree cover and established neighborhoods. Serving Danversport, Tapleyville, Hathorne, and all of 01923.' },
  { slug: 'middleton', name: 'Middleton, MA', desc: 'Larger properties, well water challenges. Serving Route 114, Route 62, East Street, and all of 01949.' },
  { slug: 'beverly', name: 'Beverly, MA', desc: 'Coastal salt air expertise. Serving Beverly Farms, Montserrat, Ryal Side, Centerville, and all of 01915.' },
  { slug: 'salem', name: 'Salem, MA', desc: 'Historic neighborhoods and older pool systems. Serving Salem Neck, North Salem, the Willows, and all of 01970.' },
  { slug: 'saugus', name: 'Saugus, MA', desc: 'Growing above-ground pool market. Serving Cliftondale, East Saugus, North Saugus, Route 1, and all of 01906.' },
  { slug: 'lynnfield', name: 'Lynnfield, MA', desc: 'Premium pools and complex equipment. Serving Pillings Pond, Reedy Meadow, MarketStreet, and all of 01940.' },
  { slug: 'marblehead', name: 'Marblehead, MA', desc: 'Coastal properties with salt air expertise. Marblehead Neck, Old Town, Village area, and all of 01945.' },
  { slug: 'swampscott', name: 'Swampscott, MA', desc: 'Beach communities and family neighborhoods. Beach Bluff, Phillips Beach, and all of 01907.' },
  { slug: 'lynn', name: 'Lynn, MA', desc: 'Growing pool market. West Lynn, East Lynn, Wyoma, Diamond District, and all of 01901.' },
  { slug: 'wakefield', name: 'Wakefield, MA', desc: 'Lake Quannapowitt neighborhoods. Greenwood, lakeside areas, and all of 01880.' },
  { slug: 'reading', name: 'Reading, MA', desc: 'Family neighborhoods. Downtown, West Side, Birch Meadow, and all of 01867.' },
  { slug: 'north-reading', name: 'North Reading, MA', desc: 'Spacious properties with larger pools. Route 62, Haverhill St, and all of 01864.' },
  { slug: 'topsfield', name: 'Topsfield, MA', desc: 'Estate properties and premium pools. Route 1, Route 97, and all of 01983.' },
  { slug: 'wenham', name: 'Wenham, MA', desc: 'Wooded neighborhoods, tree-shaded pools. Pleasant Pond, Route 1A, and all of 01984.' },
  { slug: 'hamilton', name: 'Hamilton, MA', desc: 'Equestrian country, expansive properties. Bay Road, Asbury St, and all of 01936.' },
  { slug: 'nahant', name: 'Nahant, MA', desc: 'Coastal peninsula south of Lynn. Nahant Road, Short Beach, and all of 01908.' },
  { slug: 'georgetown', name: 'Georgetown, MA', desc: 'Growing community north of the North Shore. East Main St, Central, and all of 01833.' },
  { slug: 'boxford', name: 'Boxford, MA', desc: 'Spacious wooded properties with pools. Main St, Georgetown Rd, and all of 01921.' },
  { slug: 'essex', name: 'Essex, MA', desc: 'Charming coastal town on the Essex River. Western Ave, Main St, and all of 01929.' },
  { slug: 'ipswich', name: 'Ipswich, MA', desc: 'Historic North Shore town near Crane Beach. Central St, High St, and all of 01938.' },
];

const faqs = [
  { q: 'What towns do you serve?', a: <>We serve <Link to="/pool-service-peabody-ma" style={{ color: 'var(--teal)' }}>Peabody</Link>, <Link to="/pool-service-danvers-ma" style={{ color: 'var(--teal)' }}>Danvers</Link>, <Link to="/pool-service-middleton-ma" style={{ color: 'var(--teal)' }}>Middleton</Link>, <Link to="/pool-service-beverly-ma" style={{ color: 'var(--teal)' }}>Beverly</Link>, <Link to="/pool-service-salem-ma" style={{ color: 'var(--teal)' }}>Salem</Link>, <Link to="/pool-service-saugus-ma" style={{ color: 'var(--teal)' }}>Saugus</Link>, and <Link to="/pool-service-lynnfield-ma" style={{ color: 'var(--teal)' }}>Lynnfield</Link> — plus surrounding Essex County communities.</> },
  { q: 'How far do you travel from Peabody?', a: 'All 7 towns are within a 15-minute drive of our Peabody base. We have regular weekly routes through each town and can usually schedule new service within a week.' },
  { q: 'Do you charge more for towns farther from Peabody?', a: 'No — our pricing is the same across all 7 service towns. Weekly maintenance starts at $80 (Basic) or $130 (Deluxe). Pool openings start at $125.' },
  { q: "What if my town isn't listed?", a: 'Give us a call at (978) 882-5932. We\'re expanding our service area and may be able to accommodate your location.' },
];

const Locations = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (i: number) => setOpenFaq(openFaq === i ? -1 : i);

  return (
    <Layout>
      <SEOHead
        title="Pool Service Locations | North Shore MA | Peabody, Danvers, Beverly, Salem | North Shore Pool Boys"
        description="Pool service across the North Shore. Serving 21 towns including Peabody, Danvers, Beverly, Salem & Lynnfield. CPO certified. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/locations.html"
        jsonLd={[serviceSchema, faqSchema, localBusinessSchema, breadcrumbSchema]}
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Service Areas · Essex County, MA</div>
          <h1>Pool service locations across the North Shore</h1>
          <p>We're based in Peabody and serve 21 towns across Essex County. CPO-certified maintenance, openings, closings, repairs, and installations — wherever your pool is on the North Shore.</p>
          <div className="page-hero__btns">
            <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
            <Link to="/contact" className="btn btn--outline btn--lg">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* LOCATION CARDS */}
      <section className="sec">
        <div className="wrap">
          <div style={{ textAlign: 'center', maxWidth: 600, margin: '0 auto 48px' }}>
            <div className="slabel">21 Towns Served</div>
            <h2 className="stitle">Find pool service in your town</h2>
            <p style={{ color: 'var(--stone)', fontSize: 15, marginTop: 8 }}>Click your town for local service details, pricing info, and neighborhood coverage.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20 }}>
            {towns.map((town) => (
              <Link
                key={town.slug}
                to={`/pool-service-${town.slug}-ma.html`}
                style={{ background: 'var(--white)', border: '1px solid var(--fog)', borderRadius: 14, padding: '32px 28px', textDecoration: 'none', transition: 'box-shadow 0.3s, transform 0.3s', display: 'block' }}
              >
                {town.badge && <div style={{ fontSize: 13, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--teal)', marginBottom: 6 }}>{town.badge}</div>}
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: 24, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 8 }}>{town.name}</h3>
                <p style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.6, marginBottom: 12 }}>{town.desc}</p>
                <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal)' }}>View {town.name.split(',')[0]} services →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Don't see your town? Give us a call.</h2>
            <p>We may still be able to serve you — our coverage area is expanding.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>Call (978) 882-5932</a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: 'center' }}><div className="slabel">FAQ</div><h2 className="stitle">Service area questions</h2></div>
          <div className="faq__list">
            {faqs.map((faq, i) => (
              <div className={`faq-item${openFaq === i ? ' open' : ''}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>{faq.q}<span className="faq-item__plus"></span></button>
                <div className="faq-item__a"><p>{faq.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Locations;
