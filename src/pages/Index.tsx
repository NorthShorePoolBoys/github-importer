import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { useState } from "react";

const StarSvg = () => (
  <svg viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
);

const GoogleIcon = () => (
  <svg className="g-icon" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

const reviews = [
  { name: "Debbie Esolen", initial: "D", text: "Chris and Kyle did an excellent job on installing our new pool. Chris returned my calls all the time. He and his employees are very polite and knowledgeable. I am very happy with his service and highly recommend The Pool boys to handle all your pools needs." },
  { name: "Boston Alex", initial: "B", text: "After dealing with three different pool companies who dropped the ball, I finally found North Shore Pool Boys and I won't be going anywhere else! Their communication was excellent, they showed up on time, were completely transparent about pricing, and didn't try to upsell me. Chris was amazing, honest, straightforward, and always helpful. These guys are top notch!" },
  { name: "Valerie Bettencourt", initial: "V", text: "I highly recommend NS Pool Boys! Chris and his crew were amazing! Myliner was 11 years old and had a couple of holes so it was time to replace. The quote was reasonable and other than the parts being delayed, the boys got the job done quickly and the new liner looks great! Chris and his crew were super friendly and easy to talk to. Give Chris a call, you won't be disappointed." },
  { name: "Sophia Interrante", initial: "S", text: "North Shore Pool Boys did a great job setting up my 15 x 30 above ground pool. They took their time to make sure everything was done correctly, leveled the ground perfectly, and had Mark come in and dig up the area first. Everyone who worked on my yard was very kind and hard working. Chris was very responsive and straightforward about every part of the process. Highly recommend them!!" },
  { name: "Mary Justo", initial: "M", text: "North Shore Pool Boys, ROCK!!! They came to the rescue of old pool rotting out 1 week before the 4th of July holiday. Chris and his team came to my home to ensure I was able to have a new pool installed for my annual cookout/pool party. Chris & Kyle were here on the 4th for a double last minute touch up!!! Thank you for all your efforts in pulling it off! Looking forward to working with you in the future!!" },
  { name: "John Palmer", initial: "J", text: "Great job with one very dirty pool. Looks picture perfect. Will be coming on a monthly basis. Thanks again guys!!!" },
  { name: "Paul Michael", initial: "P", text: "I called Chris at the height of pool opening season looking for help with some failing equipment. He and his team were willing to extend an already full work day to come out at night and take care of it. Highly recommend North Shore Pool Boys!" },
  { name: "Brian Steeves", initial: "B", text: "I needed a liner replacement for my above ground pool. Calls to a number of local services left me frustrated — no callbacks, ghosting. NSPB responded promptly to my call, and set up a time that gave us a whole season of use. The crew were friendly and hard working. They were able to finish that day. I would highly recommend North Shore Pool Boys!" },
];

const faqItems = [
  { q: "What pool services do you offer in Peabody, MA?", a: "Weekly maintenance, pool openings and closings, water chemistry, pump and equipment repair, liner installation, leak detection, above-ground pool builds, and full hot tub service — for both residential and commercial properties." },
  { q: "What areas do you serve on the North Shore?", a: "We're based in Peabody, MA and serve 16 towns across Essex County and the North Shore: Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, Marblehead, Swampscott, Lynn, Wakefield, Reading, North Reading, Topsfield, Wenham, and Hamilton." },
  { q: "Are you CPO certified and insured?", a: "Yes. Our team holds Certified Pool Operator (CPO) certification and is fully insured for residential and commercial work." },
  { q: "How do I schedule pool service?", a: "Call (978) 882-5932 or use the contact form — we respond within 48 hours — phone calls are fastest." },
  { q: "Do you offer hot tub maintenance?", a: "Yes — routine visits, drain and fill, cleanouts, chemical testing, winterization, and hands-on owner education." },
  { q: "What does weekly maintenance include?", a: "Full vacuuming, skimmer emptying, waterline skimming, complete chemical testing and balancing, and filter check with cleaning as needed." },
];

const ReviewCard = ({ review }: { review: typeof reviews[0] }) => (
  <div className="review-card">
    <div className="review-card__stars">
      {[...Array(5)].map((_, i) => <StarSvg key={i} />)}
    </div>
    <p className="review-card__text">"{review.text}"</p>
    <div className="review-card__author">
      <div className="review-card__avatar">{review.initial}</div>
      <div>
        <div className="review-card__name">{review.name}</div>
        <div className="review-card__src"><GoogleIcon /> Google Review</div>
      </div>
    </div>
  </div>
);

const jsonLd = [
  {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","url":"https://www.northshorepoolboys.com","telephone":"+19788825932","email":"northshorepoolboys@gmail.com","address":{"@type":"PostalAddress","streetAddress":"22 May St","addressLocality":"Peabody","addressRegion":"MA","postalCode":"01960","addressCountry":"US"},"geo":{"@type":"GeoCoordinates","latitude":42.5279,"longitude":-70.9287},"openingHoursSpecification":[{"@type":"OpeningHoursSpecification","dayOfWeek":["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"opens":"08:00","closes":"19:00"}],"areaServed":[{"@type":"City","name":"Peabody"},{"@type":"City","name":"Danvers"},{"@type":"City","name":"Middleton"},{"@type":"City","name":"Beverly"},{"@type":"City","name":"Salem"},{"@type":"City","name":"Saugus"},{"@type":"City","name":"Lynnfield"},{"@type":"City","name":"Marblehead"},{"@type":"City","name":"Swampscott"},{"@type":"City","name":"Lynn"},{"@type":"City","name":"Wakefield"},{"@type":"City","name":"Reading"},{"@type":"City","name":"North Reading"},{"@type":"City","name":"Topsfield"},{"@type":"City","name":"Wenham"},{"@type":"City","name":"Hamilton"},{"@type":"City","name":"Nahant"},{"@type":"City","name":"Georgetown"},{"@type":"City","name":"Boxford"},{"@type":"City","name":"Essex"},{"@type":"City","name":"Ipswich"}]},
  {"@context":"https://schema.org","@type":"FAQPage","mainEntity":[{"@type":"Question","name":"What pool services do you offer in Peabody, MA?","acceptedAnswer":{"@type":"Answer","text":"Weekly maintenance, pool openings and closings, water chemistry, equipment repair, liner installation, hot tub service, leak detection, and above-ground pool builds."}},{"@type":"Question","name":"What areas do you serve?","acceptedAnswer":{"@type":"Answer","text":"Peabody, Danvers, Middleton, Beverly, Salem, Saugus, Lynnfield, and surrounding Essex County communities."}},{"@type":"Question","name":"Are you certified?","acceptedAnswer":{"@type":"Answer","text":"Yes. CPO (Certified Pool Operator) certified and fully insured for residential and commercial work."}},{"@type":"Question","name":"How do I schedule service?","acceptedAnswer":{"@type":"Answer","text":"Call (978) 882-5932 or use our contact form. We respond within 48 hours."}},{"@type":"Question","name":"Do you service hot tubs?","acceptedAnswer":{"@type":"Answer","text":"Yes — routine visits, drain and fill, cleanouts, chemical testing, winterization, and owner education."}}]},
  {"@context":"https://schema.org","@type":"LocalBusiness","name":"North Shore Pool Boys","aggregateRating":{"@type":"AggregateRating","ratingValue":"4.8","reviewCount":"25","bestRating":"5"},"review":[{"@type":"Review","author":{"@type":"Person","name":"Boston Alex"},"reviewRating":{"@type":"Rating","ratingValue":"5"},"reviewBody":"After dealing with three different pool companies who dropped the ball, I finally found North Shore Pool Boys. Their communication was excellent, they showed up on time, were completely transparent about pricing."},{"@type":"Review","author":{"@type":"Person","name":"Valerie Bettencourt"},"reviewRating":{"@type":"Rating","ratingValue":"5"},"reviewBody":"I highly recommend NS Pool Boys! Chris and his crew were amazing! The quote was reasonable and the new liner looks great!"},{"@type":"Review","author":{"@type":"Person","name":"Brian Steeves"},"reviewRating":{"@type":"Rating","ratingValue":"5"},"reviewBody":"NSPB responded promptly to my call. The crew were friendly and hard working. I would highly recommend North Shore Pool Boys!"}]},
];

const towns = [
  { name: "Peabody", href: "/pool-service-peabody-ma.html", active: true },
  { name: "Danvers", href: "/pool-service-danvers-ma.html" },
  { name: "Middleton", href: "/pool-service-middleton-ma.html" },
  { name: "Beverly", href: "/pool-service-beverly-ma.html" },
  { name: "Salem", href: "/pool-service-salem-ma.html" },
  { name: "Saugus", href: "/pool-service-saugus-ma.html" },
  { name: "Lynnfield", href: "/pool-service-lynnfield-ma.html" },
  { name: "Marblehead", href: "/pool-service-marblehead-ma.html" },
  { name: "Swampscott", href: "/pool-service-swampscott-ma.html" },
  { name: "Lynn", href: "/pool-service-lynn-ma.html" },
  { name: "Wakefield", href: "/pool-service-wakefield-ma.html" },
  { name: "Reading", href: "/pool-service-reading-ma.html" },
  { name: "North Reading", href: "/pool-service-north-reading-ma.html" },
  { name: "Topsfield", href: "/pool-service-topsfield-ma.html" },
  { name: "Wenham", href: "/pool-service-wenham-ma.html" },
  { name: "Hamilton", href: "/pool-service-hamilton-ma.html" },
];

const Index = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <Layout>
      <SEOHead
        title="Pool Service in Peabody, MA | North Shore Pool Boys"
        description="CPO-certified pool service in Peabody & the North Shore. Maintenance, openings, closings, repairs & hot tub service. Call (978) 882-5932."
        canonical="https://www.northshorepoolboys.com/"
        jsonLd={jsonLd}
      />

      {/* HERO — VIDEO BACKGROUND */}
      <section className="hero-video" id="hero">
        <div className="hero-video__bg">
          <video autoPlay muted loop playsInline preload="auto" poster="/hero-poster.jpg" id="heroVid">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="hero-video__overlay"></div>
        </div>
        <div className="wrap hero-video__content">
          <div className="hero-video__text">
            <div className="hero-video__badge">
              <span className="hero-video__stars">★★★★★</span>
              <span>4.8 Google Rating · Best of Southern New England 2025 & 2026</span>
            </div>
            <h1>Pool Service in Peabody, MA<br />& the North Shore</h1>
            <p className="hero-video__sub">The highest-rated pool service in Southern New England — two years running. Weekly maintenance, openings, closings, repairs, and hot tub service for 16+ towns across the North Shore.</p>
            <div className="hero-video__ctas">
              <Link to="/contact" className="btn btn--teal btn--xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Get a Free Quote
              </Link>
              <a href="tel:9788825932" className="btn btn--glass btn--xl">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                (978) 882-5932
              </a>
            </div>
            <div className="hero-video__proof">
              <span>Based in Peabody, MA</span>
              <span>CPO Certified</span>
              <span>Fully Insured</span>
              <span>Same-Day Response</span>
            </div>
          </div>
        </div>
        <div className="hero-video__trust">
          <div className="wrap">
            <div className="hero-video__trust-items">
              <div className="hero-video__trust-item"><strong>5+</strong> Years Serving the North Shore</div>
              <div className="hero-video__trust-item"><strong>CPO</strong> Certified Pool Operator</div>
              <div className="hero-video__trust-item"><strong>4.8★</strong> Google Rating</div>
              <div className="hero-video__trust-item"><strong>Best of 2025 & 2026</strong> BusinessRate Award</div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR SERVICES */}
      <section className="sec" id="services">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 560, margin: "0 auto 44px" }}>
            <div className="slabel">Our Services</div>
            <h2 className="stitle">Everything your pool and hot tub needs</h2>
          </div>
          <div className="services__grid">
            {[
              { icon: "🏊", title: "Weekly Maintenance", desc: "Vacuuming, skimming, chemical balancing, and filter checks on a weekly, bi-weekly, or monthly schedule.", href: "/pool-maintenance.html" },
              { icon: "☀️", title: "Pool Openings & Closings", desc: "Seasonal startup and winterization packages starting at $125. Three tiers to fit your budget.", href: "/pool-openings.html" },
              { icon: "🔧", title: "Pool Repair", desc: "Crack repair, tile replacement, pipe fixes, leak detection, and equipment troubleshooting.", href: "/pool-repair.html" },
              { icon: "🧪", title: "Water Chemistry", desc: "Taylor test kit and photometer testing. pH, alkalinity, phosphates, CYA, LSI, and ORP balancing.", href: "/pool-chemistry.html" },
              { icon: "🛁", title: "Hot Tub Service", desc: "Routine maintenance, drain and fill, chemical testing, winterization, and repair for all hot tub brands.", href: "/hot-tub-services.html" },
              { icon: "🏗️", title: "Installation", desc: "Liner installation, pump and filter installs, heaters, and above-ground pool builds for North Shore homeowners.", href: "/liner.html" },
              { icon: "💧", title: "Leak Detection", desc: "Pressure testing, dye testing, and electronic leak location. Find the leak fast — fix it the same day.", href: "/leak-detection.html" },
              { icon: "🔩", title: "Trenchless Pipe Repair", desc: "No-dig pipe repair and replacement. Fix underground pool plumbing without tearing up your yard or deck.", href: "/trenchless-pipe-repair.html" },
            ].map((svc) => (
              <Link to={svc.href} className="svc-card" key={svc.href}>
                <div className="svc-card__icon">{svc.icon}</div>
                <h3>{svc.title}</h3>
                <p>{svc.desc}</p>
                <span className="svc-card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="sec sec--gray" id="how">
        <div className="wrap">
          <div style={{ textAlign: "center", maxWidth: 520, margin: "0 auto" }}>
            <div className="slabel">How It Works</div>
            <h2 className="stitle">Getting started is simple</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="step__num">1</div><h4>Call or request a quote</h4><p>Reach out at (978) 882-5932 or use our contact form.</p></div>
            <div className="step"><div className="step__num">2</div><h4>We assess your pool</h4><p>We inspect your pool, test the water, and determine what you need.</p></div>
            <div className="step"><div className="step__num">3</div><h4>Get your custom plan</h4><p>Clear pricing and a schedule — weekly, bi-weekly, or one-time.</p></div>
            <div className="step"><div className="step__num">4</div><h4>Enjoy your pool</h4><p>We handle the work. You get crystal-clear water and zero headaches.</p></div>
          </div>
        </div>
      </section>

      {/* SERVICE AREAS */}
      <section className="areas">
        <div className="wrap">
          <div className="slabel">Service Areas</div>
          <h2 className="stitle">Pool service across 16 North Shore towns</h2>
          <div className="areas__tags">
            {towns.map((t) => (
              <Link to={t.href} className={`atag${t.active ? " atag--active" : ""}`} key={t.href}>{t.name}</Link>
            ))}
          </div>
          <p style={{ textAlign: "center", marginTop: 16 }}>
            <Link to="/locations" style={{ fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>View all 16 service areas →</Link>
          </p>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="sec" id="reviews">
        <div className="wrap">
          <div className="reviews__header">
            <div className="slabel">Customer Reviews</div>
            <h2 className="stitle">What our customers say</h2>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginTop: 14 }}>
              <span style={{ fontSize: 28, fontWeight: 700, color: "var(--charcoal)" }}>4.8</span>
              <div className="reviews__stars">
                {[...Array(5)].map((_, i) => <StarSvg key={i} />)}
              </div>
              <span style={{ fontSize: 14, color: "var(--stone)" }}>on Google</span>
            </div>
          </div>
        </div>
        <div className="reviews__scroll-wrapper">
          <div className="reviews__track">
            {/* Original + duplicate for seamless loop */}
            {[...reviews, ...reviews].map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* AWARDS */}
      <section className="sec sec--gray" id="awards">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="slabel">Award-Winning Service</div>
          <h2 className="stitle">Voted Best Pool Cleaning Service in Southern New England</h2>
          <p style={{ color: "var(--stone)", maxWidth: 600, margin: "0 auto 36px", fontSize: 15, lineHeight: 1.7 }}>
            North Shore Pool Boys has been recognized by <a href="https://businessrate.com/report/7268405?geocatSerial=1482760766&scoreType=br" target="_blank" rel="noopener" style={{ color: "var(--teal)", fontWeight: 600 }}>BusinessRate</a> as the Best Pool Cleaning Service in Southern New England for both 2025 and 2026 — based entirely on Google Reviews from real customers.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap", alignItems: "center" }}>
            <div style={{ textAlign: "center" }}>
              <a href="https://businessrate.com/report/7268405?geocatSerial=1482760766&scoreType=br" target="_blank" rel="noopener" style={{ display: "inline-block" }}>
                <img src="/award-2025.png" alt="North Shore Pool Boys - Best Pool Cleaning Service 2025 BusinessRate Award Southern New England" style={{ maxWidth: 260, width: "100%", borderRadius: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} loading="lazy" />
              </a>
              <p style={{ fontSize: 13, color: "var(--stone)", marginTop: 12, fontWeight: 600 }}>Best of 2025</p>
            </div>
            <div style={{ textAlign: "center" }}>
              <a href="https://businessrate.com/report/7268405?geocatSerial=1482760766&scoreType=br" target="_blank" rel="noopener" style={{ display: "inline-block" }}>
                <img src="/award-2026.png" alt="North Shore Pool Boys - Best Pool Cleaning Service 2026 BusinessRate Award Winner Southern New England" style={{ maxWidth: 260, width: "100%", borderRadius: 10, boxShadow: "0 8px 32px rgba(0,0,0,0.15)" }} loading="lazy" />
              </a>
              <p style={{ fontSize: 13, color: "var(--stone)", marginTop: 12, fontWeight: 600 }}>Best of 2026</p>
            </div>
          </div>
          <p style={{ marginTop: 28 }}>
            <Link to="/blog-best-pool-service-southern-new-england-2026" style={{ fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>Read about our 2026 award →</Link>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="sec sec--gray" id="faq">
        <div className="wrap">
          <div style={{ textAlign: "center" }}>
            <div className="slabel">FAQ</div>
            <h2 className="stitle">Common questions</h2>
          </div>
          <div className="faq__list">
            {faqItems.map((item, i) => (
              <div className={`faq-item${openFaq === i ? " open" : ""}`} key={i}>
                <button className="faq-item__q" onClick={() => toggleFaq(i)}>
                  {item.q}
                  <span className="faq-item__plus"></span>
                </button>
                <div className="faq-item__a"><p>{item.a}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOG TIPS */}
      <section className="sec" id="blog-tips">
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="slabel">Pool Care Tips</div>
          <h2 className="stitle">From the North Shore Pool Boys blog</h2>
          <p style={{ color: "var(--stone)", maxWidth: 560, margin: "0 auto 32px", fontSize: 15 }}>Seasonal advice, maintenance tips, and guides from our CPO-certified team.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, textAlign: "left" }}>
            {[
              { href: "/blog-when-to-open-pool-massachusetts.html", cat: "Seasonal Guide", title: "When to Open Your Pool in Massachusetts", desc: "Temperature benchmarks, timing tips, and why opening early beats opening late." },
              { href: "/blog-pool-maintenance-checklist.html", cat: "Maintenance", title: "The Complete Weekly Pool Maintenance Checklist", desc: "What a proper weekly visit should include — and how to spot a pool service cutting corners." },
              { href: "/blog-green-pool-water-fix.html", cat: "Troubleshooting", title: "How to Fix Green Pool Water Fast", desc: "Step-by-step algae treatment from CPO-certified pros — and when it's time to call for help." },
            ].map((post) => (
              <Link to={post.href} key={post.href} style={{ background: "var(--white)", border: "1px solid var(--fog)", borderRadius: 14, padding: "28px 24px", textDecoration: "none" }}>
                <div style={{ fontSize: 12, fontWeight: 600, color: "var(--teal)", textTransform: "uppercase", letterSpacing: "0.5px", marginBottom: 8 }}>{post.cat}</div>
                <h3 style={{ fontSize: 17, fontWeight: 600, color: "var(--charcoal)", marginBottom: 8, lineHeight: 1.4 }}>{post.title}</h3>
                <p style={{ fontSize: 14, color: "var(--stone)", lineHeight: 1.6, margin: 0 }}>{post.desc}</p>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: 24 }}>
            <Link to="/blog" style={{ fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>Read more pool care tips →</Link>
          </p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="sec" id="contact">
        <div className="wrap">
          <div className="contact__grid">
            <div className="contact__info">
              <div className="slabel">Get in Touch</div>
              <h3>Request a free pool service quote</h3>
              <p>CPO certified, fully insured, based in Peabody. Call or fill out the form — we respond within 48 hours.</p>
              <div className="contact__detail">
                <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c1.21.34 2 .57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
                <div><strong>Phone</strong><a href="tel:9788825932">(978) 882-5932</a></div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
                <div><strong>Email</strong><a href="mailto:northshorepoolboys@gmail.com">northshorepoolboys@gmail.com</a></div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
                <div><strong>Location</strong><span>Peabody, MA 01960</span></div>
              </div>
              <div className="contact__detail">
                <div className="contact__detail-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
                <div><strong>Hours</strong><span>Mon – Sat: 8am – 7pm · Sun: Closed</span></div>
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
                    <option>Peabody</option><option>Danvers</option><option>Middleton</option><option>Beverly</option><option>Salem</option><option>Saugus</option><option>Lynnfield</option><option>Marblehead</option><option>Swampscott</option><option>Lynn</option><option>Wakefield</option><option>Reading</option><option>North Reading</option><option>Topsfield</option><option>Wenham</option><option>Hamilton</option><option>Nahant</option><option>Georgetown</option><option>Boxford</option><option>Essex</option><option>Ipswich</option><option>Other</option>
                  </select>
                </div>
                <div className="fg"><label>Message (optional)</label><textarea name="message" placeholder="Pool type, issues, or anything else..."></textarea></div>
                <button type="submit" className="btn btn--teal btn--lg btn--full">Submit Quote Request</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
