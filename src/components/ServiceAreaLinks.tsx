import { Link } from "react-router-dom";

const towns = [
  { label: "Peabody", href: "/pool-service-peabody-ma.html" },
  { label: "Danvers", href: "/pool-service-danvers-ma.html" },
  { label: "Middleton", href: "/pool-service-middleton-ma.html" },
  { label: "Beverly", href: "/pool-service-beverly-ma.html" },
  { label: "Salem", href: "/pool-service-salem-ma.html" },
  { label: "Saugus", href: "/pool-service-saugus-ma.html" },
  { label: "Lynnfield", href: "/pool-service-lynnfield-ma.html" },
];

const ServiceAreaLinks = () => (
  <section className="sec sec--gray" style={{ padding: "40px 0" }}>
    <div className="wrap" style={{ textAlign: "center" }}>
      <p style={{ color: "var(--stone)", fontSize: 14, marginBottom: 14 }}>We provide this service across the North Shore:</p>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
        {towns.map((t) => (
          <Link
            key={t.href}
            to={t.href}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: "var(--teal)",
              padding: "6px 14px",
              border: "1px solid var(--fog)",
              borderRadius: 6,
              background: "var(--white)",
              textDecoration: "none",
            }}
          >
            {t.label}
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ServiceAreaLinks;
