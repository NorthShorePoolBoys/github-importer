import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";
import ContactForm from "../components/ContactForm";
import ServiceAreaLinks from "../components/ServiceAreaLinks";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Service Contact - North Shore Pool Boys","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Contact form and phone line for scheduling pool maintenance, openings, closings, repairs, and installations across the North Shore."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"How do I schedule pool service?","acceptedAnswer":{"@type":"Answer","text":"Call (978) 882-5932 or fill out our contact form. We respond within 48 hours and can usually start service within a week."}},{"@type":"Question","name":"What are your hours?","acceptedAnswer":{"@type":"Answer","text":"Monday through Saturday, 8am to 7pm. Closed Sundays (in-office only)."}},{"@type":"Question","name":"Where are you located?","acceptedAnswer":{"@type":"Answer","text":"We are based at 22 May St, Peabody, MA 01960, serving Peabody, Danvers, Middleton, Beverly, Salem, Saugus, and Lynnfield."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Contact Us","item":"https://www.northshorepoolboys.com/contact.html"}]};

const Contact = () => {
  return (
    <Layout>
      <SEOHead
        title="Contact North Shore Pool Boys | Free Pool Service Quote | Peabody, MA"
        description="Contact North Shore Pool Boys for a free pool service quote. Call (978) 882-5932 or fill out our form. Peabody, Danvers, Beverly & the North Shore."
        canonical="https://www.northshorepoolboys.com/contact.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="wrap">
          <div className="slabel">Contact Us · Peabody, MA 01960</div>
          <h1>Get in touch — we respond within 48 hours</h1>
          <p>Whether you need a quote, have a question, or want to schedule service, we're here to help. Call us directly for the fastest response, or fill out the form below.</p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="sec" id="contact">
        <div className="wrap">
          <div className="contact__grid">
            <div className="contact__info">
              <div className="slabel">Reach Us</div>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 28, fontWeight: 400, color: 'var(--charcoal)', marginBottom: 16 }}>The fastest way to reach us is a phone call</h2>
              <p style={{ color: 'var(--stone)', marginBottom: 24 }}>We know how frustrating it is to fill out a form and never hear back. That's not us — we respond to every inquiry within 48 hours, usually same-day.</p>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                </div>
                <div><strong>Phone</strong><a href="tel:9788825932">(978) 882-5932</a></div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </div>
                <div><strong>Email</strong><a href="mailto:northshorepoolboys@gmail.com">northshorepoolboys@gmail.com</a></div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div><strong>Location</strong><span>22 May St, Peabody, MA 01960</span></div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div><strong>Hours</strong><span>Mon – Sat: 8am – 7pm · Sun: Closed</span></div>
              </div>
              <div style={{ marginTop: 24 }}>
                <img src="https://images.squarespace-cdn.com/content/v1/64f055a1c97ab02d785bfafe/d45b02d6-902f-447f-88ae-a4f6d340a5b2/Jacuzzi.jpeg" alt="Pool and hot tub service" style={{ borderRadius: 10, width: '100%', height: 200, objectFit: 'cover' }} loading="lazy" />
              </div>
            </div>
            <div className="contact__form-box">
              <h3>Send us a message</h3>
              <p>We'll get back to you within 48 hours.</p>
              <form name="quote-request" method="POST" data-netlify="true" action="/thank-you.html">
                <input type="hidden" name="form-name" value="quote-request" />
                <p style={{ display: 'none' }}><label>Don't fill this out: <input name="bot-field" /></label></p>
                <div className="fg-row">
                  <div className="fg"><label>First Name</label><input type="text" name="first-name" placeholder="First name" required /></div>
                  <div className="fg"><label>Last Name</label><input type="text" name="last-name" placeholder="Last name" required /></div>
                </div>
                <div className="fg-row">
                  <div className="fg"><label>Phone</label><input type="tel" name="phone" placeholder="(555) 000-0000" required /></div>
                  <div className="fg"><label>Email</label><input type="email" name="email" placeholder="you@email.com" required /></div>
                </div>
                <div className="fg">
                  <label>Service Needed</label>
                  <select name="service">
                    <option value="">Select a service...</option>
                    <option>Weekly Maintenance</option>
                    <option>Pool Opening / Closing</option>
                    <option>Pool Repair</option>
                    <option>Hot Tub Service</option>
                    <option>Liner Installation</option>
                    <option>Pump / Filter Install</option>
                    <option>Heater Install / Repair</option>
                    <option>Leak Detection</option>
                    <option>Filter Repair</option>
                    <option>Liner Repair</option>
                    <option>Skimmer Repair</option>
                    <option>Trenchless Pipe Repair</option>
                    <option>Saltwater Pool Service</option>
                    <option>Above-Ground Pool Install</option>
                    <option>Safety Cover Installation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="fg">
                  <label>Your Town</label>
                  <select name="town">
                    <option value="">Select your town...</option>
                    <option>Peabody</option>
                    <option>Danvers</option>
                    <option>Middleton</option>
                    <option>Beverly</option>
                    <option>Salem</option>
                    <option>Saugus</option>
                    <option>Lynnfield</option>
                    <option>Marblehead</option>
                    <option>Swampscott</option>
                    <option>Lynn</option>
                    <option>Wakefield</option>
                    <option>Reading</option>
                    <option>North Reading</option>
                    <option>Topsfield</option>
                    <option>Wenham</option>
                    <option>Hamilton</option>
                    <option>Nahant</option>
                    <option>Georgetown</option>
                    <option>Boxford</option>
                    <option>Essex</option>
                    <option>Ipswich</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="fg"><label>Message (optional)</label><textarea name="message" placeholder="Pool type, issues, or anything else..."></textarea></div>
                <button type="submit" className="btn btn--teal btn--lg btn--full">Submit Quote Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <ServiceAreaLinks serviceName="contact" />
    </Layout>
  );
};

export default Contact;
