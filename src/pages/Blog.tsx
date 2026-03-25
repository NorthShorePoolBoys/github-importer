import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import SEOHead from "../components/SEOHead";

const localBusinessSchema = {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]};
const serviceSchema = {"@context":"https://schema.org","@type":"Service","name":"Pool Care Blog - North Shore Pool Boys","provider":{"@type":"LocalBusiness","name":"North Shore Pool Boys","telephone":"+19788825932","address":{"@type":"PostalAddress","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960"}},"areaServed":["Peabody","Danvers","Middleton","Beverly","Salem","Saugus","Lynnfield"],"description":"Educational pool care content including maintenance tips, seasonal guides, and troubleshooting advice."};
const faqSchema = {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"When should I open my pool in Massachusetts?","acceptedAnswer":{"@type":"Answer","text":"Most North Shore pool owners open between late April and mid-May, before temperatures consistently hit 70°F."}},{"@type":"Question","name":"How do I fix green pool water?","acceptedAnswer":{"@type":"Answer","text":"Green water is caused by algae. Shock the pool, run the filter 24/7, brush walls and floor, and test phosphate levels. If it persists, call a professional."}}]};
const breadcrumbSchema = {"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://www.northshorepoolboys.com/"},{"@type":"ListItem","position":2,"name":"Blog","item":"https://www.northshorepoolboys.com/blog.html"}]};

const blogPosts = [
  { href: '/blog-pool-closing-checklist-massachusetts.html', cat: 'Seasonal Guide', title: "Pool Closing Checklist for Massachusetts: Don't Skip a Step", desc: 'The complete winterization checklist our CPO-certified team follows on every closing — and the one mistake that costs homeowners thousands.' },
  { href: '/blog-signs-pool-pump-needs-repair.html', cat: 'Troubleshooting', title: '5 Signs Your Pool Pump Needs Repair', desc: 'Grinding noises, lost prime, weak flow? How to spot pump trouble early — and when repair vs. replacement makes sense.' },
  { href: '/blog-how-to-tell-if-pool-has-leak.html', cat: 'Troubleshooting', title: 'How to Tell If Your Pool Has a Leak', desc: 'The bucket test, common leak signs, where pools leak most often, and when to call a professional.' },
  { href: '/blog-is-saltwater-pool-worth-it.html', cat: 'Pool Guide', title: 'Is a Saltwater Pool Worth It? Pros, Cons & Costs', desc: 'Honest pros, cons, maintenance costs, and what Massachusetts pool owners need to know before switching to salt.' },
  { href: '/blog-how-to-winterize-hot-tub.html', cat: 'Seasonal Guide', title: 'How to Winterize Your Hot Tub', desc: 'Complete winterization guide — drain, blow lines, antifreeze, and cover. Prevent freeze damage this winter.' },
  { href: '/blog-above-ground-pool-buying-guide.html', cat: 'Pool Guide', title: 'Above-Ground Pool Buying Guide for Massachusetts', desc: 'Size, material, cost, permits, and why installation matters more than the pool itself.' },
  { href: '/blog-pool-maintenance-cost-massachusetts.html', cat: 'Pricing', title: 'How Much Does Pool Maintenance Cost in Massachusetts?', desc: 'Honest pricing breakdown — basic vs deluxe, what\'s included, and the hidden cost of cheap pool service.' },
  { href: '/blog-vinyl-liner-vs-fiberglass-pool.html', cat: 'Comparison', title: 'Vinyl Liner vs Fiberglass Pool: Which Is Right for You?', desc: 'Cost, maintenance, durability, and what makes sense for Massachusetts homeowners.' },
  { href: '/blog-when-to-open-pool-massachusetts.html', cat: 'Seasonal Guide', title: 'When to Open Your Pool in Massachusetts: A Complete Guide', desc: 'Timing your pool opening right avoids algae, freeze damage, and wasted chemicals. Here\'s exactly when North Shore homeowners should open.' },
  { href: '/blog-green-pool-water-fix.html', cat: 'Troubleshooting', title: "Green Pool Water? Here's How to Fix It Fast", desc: "Woke up to a swamp? Green pool water is fixable — but you need to address the root cause, not just dump chlorine." },
  { href: '/blog-pool-maintenance-checklist.html', cat: 'Maintenance', title: 'The Complete Weekly Pool Maintenance Checklist', desc: 'What a proper weekly pool visit should include — and how to tell if your current service is cutting corners.' },
  { href: '/blog-best-pool-service-southern-new-england-2026.html', cat: 'Award · Best of 2026', title: 'North Shore Pool Boys Wins Best Pool Service in Southern New England — Again', desc: 'Back-to-back BusinessRate awards based on Google Reviews. What this recognition means and why our customers made it happen.' },
  { href: '/blog-best-pool-cleaning-service-massachusetts-2025-2026.html', cat: 'Guide · Choosing a Pool Service', title: 'How a Small Pool Company in Peabody Became the Best-Rated in Southern New England', desc: 'What we learned about trust, reliability, and running a pool service people actually recommend. Plus what to look for when hiring.' },
  { href: '/blog-best-pool-service-2025-businessrate-award.html', cat: 'Award · Best of 2025', title: 'Best Pool Cleaning Service 2025 — Our First Regional Award', desc: 'How a small team in Peabody earned the highest pool service rating across Massachusetts, Rhode Island, and Connecticut.' },
  { href: '/blog-best-pool-service-2026-businessrate-benchmark-award.html', cat: 'Award · Benchmark 2026', title: 'Best Pool Cleaning Service 2026 — The Benchmark Award', desc: 'Back-to-back winner. What the Benchmark Award means and how we maintained our rating while doubling our service area.' },
];

const Blog = () => {
  return (
    <Layout>
      <SEOHead
        title="Pool Care Tips & Guides | North Shore Pool Boys Blog"
        description="Pool care tips, maintenance guides, and seasonal advice from North Shore Pool Boys. Learn when to open your pool, fix green water, and more."
        canonical="https://www.northshorepoolboys.com/blog.html"
        jsonLd={[localBusinessSchema, serviceSchema, faqSchema, breadcrumbSchema]}
      />

      {/* PAGE HERO */}
      <section className="page-hero" style={{ padding: '56px 0' }}>
        <div className="wrap">
          <div className="slabel">Pool Care Tips &amp; Guides</div>
          <h1>The North Shore Pool Boys Blog</h1>
          <p>Practical advice from CPO-certified technicians. Seasonal tips, troubleshooting guides, and everything you need to know about pool ownership in Massachusetts.</p>
        </div>
      </section>

      <section className="sec">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {blogPosts.map((post) => (
              <Link key={post.href} to={post.href} style={{ background: 'var(--white)', border: '1px solid var(--fog)', borderRadius: 14, overflow: 'hidden', textDecoration: 'none', transition: 'box-shadow 0.3s, transform 0.3s', display: 'block' }}>
                <div style={{ background: 'var(--charcoal)', padding: '32px 24px' }}>
                  <div style={{ fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--pool)', marginBottom: 8 }}>{post.cat}</div>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: 22, color: '#fff', fontWeight: 400, lineHeight: 1.3 }}>{post.title}</h2>
                </div>
                <div style={{ padding: '20px 24px' }}>
                  <p style={{ fontSize: 14, color: 'var(--stone)', lineHeight: 1.6, marginBottom: 12 }}>{post.desc}</p>
                  <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--teal)' }}>Read article →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band">
        <div className="wrap">
          <div>
            <h2>Rather have us handle it?</h2>
            <p>Skip the DIY — our CPO-certified team does it right every time.</p>
          </div>
          <div className="cta-band__btns">
            <a href="tel:9788825932" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>Call (978) 882-5932</a>
            <Link to="/contact.html" className="btn btn--outline btn--lg" style={{ borderColor: 'rgba(255,255,255,0.35)', color: '#fff' }}>Get a Free Quote</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
