const ContactForm = () => (
  <section className="sec" id="contact">
    <div className="wrap">
      <div className="contact__grid">
        <div className="contact__info">
          <div className="slabel">Get in Touch</div>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "var(--charcoal)", marginBottom: 12 }}>Request a free pool service quote</h3>
          <p style={{ color: "var(--stone)", marginBottom: 20 }}>CPO certified, fully insured, based in Peabody. Call or fill out the form — we respond within 48 hours.</p>
          <div className="contact__detail">
            <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
            <div><strong>Phone</strong><a href="tel:9788825932">(978) 882-5932</a></div>
          </div>
          <div className="contact__detail">
            <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <div><strong>Email</strong><a href="mailto:northshorepoolboys@gmail.com">northshorepoolboys@gmail.com</a></div>
          </div>
          <div className="contact__detail">
            <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div><strong>Hours</strong><span>Mon – Sat: 8am – 7pm</span></div>
          </div>
        </div>
        <div className="contact__form-box">
          <h3>Send us a message</h3>
          <p>We'll get back to you within 48 hours.</p>
          <form name="quote-request" method="POST" data-netlify="true" action="/thank-you.html">
            <input type="hidden" name="form-name" value="quote-request" />
            <p style={{ display: "none" }}><label>Don't fill this out: <input name="bot-field" /></label></p>
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
);

export default ContactForm;
