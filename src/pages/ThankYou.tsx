import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const ThankYou = () => (
  <Layout>
    <SEOHead
      title="Quote Request Received | North Shore Pool Boys"
      description="Your quote request has been received. North Shore Pool Boys will respond within 48 hours. Call (978) 882-5932 for immediate assistance."
      canonical="https://www.northshorepoolboys.com/thank-you.html"
      noIndex={true}
    />

    <section className="page-hero" style={{ padding: "80px 0 40px" }}>
      <div className="wrap" style={{ textAlign: "center", maxWidth: 640 }}>
        <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(92,200,230,0.15)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="var(--pool)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        </div>
        <h1 style={{ fontSize: 38, marginBottom: 12 }}>Quote request received!</h1>
        <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", maxWidth: 460, margin: "0 auto" }}>We've got your information and will get back to you within 48 hours. For immediate help, give us a call.</p>
      </div>
    </section>

    <section className="sec" style={{ padding: "56px 0 72px" }}>
      <div className="wrap" style={{ maxWidth: 700 }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div className="slabel">What Happens Next</div>
          <h2 className="stitle">Here's what to expect</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, marginBottom: 48 }}>
          {[
            { num: "1", title: "We review your request", desc: "Chris personally reads every submission and prepares a response." },
            { num: "2", title: "We reach out within 48 hours", desc: "Usually same-day. We'll call or email to discuss your pool's needs." },
            { num: "3", title: "You get a clear quote", desc: "Honest pricing with no surprises. We only recommend what you need." },
          ].map((step) => (
            <div key={step.num} style={{ textAlign: "center" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--teal-soft)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", fontSize: 20, fontWeight: 700, color: "var(--teal)" }}>{step.num}</div>
              <h4 style={{ fontSize: 15, fontWeight: 600, color: "var(--charcoal)", marginBottom: 4 }}>{step.title}</h4>
              <p style={{ fontSize: 13.5, color: "var(--stone)", lineHeight: 1.5 }}>{step.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ background: "var(--charcoal)", borderRadius: 14, padding: 36, textAlign: "center" }}>
          <h3 style={{ fontFamily: "var(--serif)", fontSize: 24, fontWeight: 400, color: "#fff", marginBottom: 8 }}>Can't wait? Call us now.</h3>
          <p style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>The fastest way to get started is a phone call.</p>
          <a href="tel:9788825932" className="btn btn--teal btn--lg" style={{ fontSize: 18, padding: "14px 32px" }}>(978) 882-5932</a>
          <div style={{ marginTop: 16, fontSize: 13, color: "rgba(255,255,255,0.35)" }}>Mon – Sat: 8am – 7pm</div>
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "var(--stone)", fontSize: 14, marginBottom: 16 }}>While you wait, explore our services:</p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
            {[
              { label: "Weekly Maintenance", href: "/pool-maintenance.html" },
              { label: "Pool Openings", href: "/pool-openings.html" },
              { label: "Pool Closings", href: "/pool-closings.html" },
              { label: "Pool Repair", href: "/pool-repair.html" },
              { label: "Hot Tub Service", href: "/hot-tub-services.html" },
              { label: "Service Areas", href: "/locations.html" },
            ].map((s) => (
              <Link key={s.href} to={s.href} className="btn btn--outline" style={{ borderColor: "var(--fog)", color: "var(--teal)", fontSize: 13, padding: "8px 16px" }}>{s.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default ThankYou;
