import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voyageur — Small-Group Curated Travel | Bali, Iceland, Japan & More" },
      { name: "description", content: "Boutique small-group tours to 40+ destinations. Hand-crafted itineraries, expert local guides, free cancellation up to 60 days. Loved by 24,000+ travelers." },
    ],
  }),
  component: Home,
});

const tours = [
  { img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=900&q=80", tag: "Bestseller", loc: "Indonesia", name: "Bali Spirit Retreat", days: "9 days", group: "8 travelers", price: "$2,495", rate: "4.9" },
  { img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80", tag: "New 2026", loc: "Iceland", name: "Ring Road & Northern Lights", days: "10 days", group: "10 travelers", price: "$3,890", rate: "5.0" },
  { img: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&w=900&q=80", tag: "Limited", loc: "Japan", name: "Kyoto, Hakone & Tokyo", days: "12 days", group: "10 travelers", price: "$4,290", rate: "4.9" },
  { img: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=900&q=80&sat=-30", tag: "Adventure", loc: "Chile · Argentina", name: "Patagonia Trekking", days: "11 days", group: "8 travelers", price: "$3,690", rate: "4.8" },
  { img: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=900&q=80", tag: "Sold 80%", loc: "Morocco", name: "Marrakech & Sahara", days: "8 days", group: "12 travelers", price: "$1,990", rate: "4.9" },
  { img: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=900&q=80", tag: "Romance", loc: "France", name: "Paris & Provence", days: "9 days", group: "10 travelers", price: "$3,490", rate: "4.9" },
];

const destinations = [
  { name: "Santorini", country: "Greece", img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1200&q=80", large: true },
  { name: "Tokyo", country: "Japan", img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80" },
  { name: "Marrakech", country: "Morocco", img: "https://images.unsplash.com/photo-1597211684565-dca64d72bdfe?auto=format&fit=crop&w=800&q=80" },
  { name: "Reykjavík", country: "Iceland", img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=800&q=80" },
  { name: "Bali", country: "Indonesia", img: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=800&q=80" },
];

function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=1920&q=80)" }} />
        <div className="hero-grid">
          <div>
            <span className="hero-badge">✦ Voted #1 Boutique Tour Operator 2026</span>
            <h1>The world, <em>thoughtfully</em> arranged.</h1>
            <p className="hero-sub">Hand-crafted small-group journeys to 40+ destinations. Boutique stays, expert local guides, and the kind of moments you can't book on your own.</p>
            <div className="hero-cta-group">
              <Link to="/product" className="btn btn-primary btn-lg">Explore Tours →</Link>
              <a href="#reviews" className="btn btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}>See Reviews</a>
            </div>
            <div className="hero-trust">
              <div className="trust-item"><span className="icon">★</span> 4.9 / 5 (8k+ reviews)</div>
              <div className="trust-item"><span className="icon">✈</span> 24,000+ Travelers</div>
              <div className="trust-item"><span className="icon">↻</span> Free Cancellation</div>
            </div>
          </div>
          <div className="hero-search">
            <h3>Find Your Journey</h3>
            <div className="search-row">
              <div className="search-field">
                <label>Destination</label>
                <select defaultValue="">
                  <option value="" disabled>Where to?</option>
                  <option>Bali, Indonesia</option>
                  <option>Iceland</option>
                  <option>Japan</option>
                  <option>Patagonia</option>
                  <option>Morocco</option>
                  <option>France</option>
                </select>
              </div>
              <div className="search-field">
                <label>Travelers</label>
                <select defaultValue="2">
                  <option>1 Solo</option>
                  <option>2 Travelers</option>
                  <option>3 Travelers</option>
                  <option>4+ Travelers</option>
                </select>
              </div>
            </div>
            <div className="search-row">
              <div className="search-field">
                <label>Depart</label>
                <input type="month" defaultValue="2026-04" />
              </div>
              <div className="search-field">
                <label>Duration</label>
                <select defaultValue="7-10">
                  <option>4–6 days</option>
                  <option>7–10 days</option>
                  <option>11–14 days</option>
                  <option>15+ days</option>
                </select>
              </div>
            </div>
            <Link to="/product" className="btn btn-primary btn-full" style={{ marginTop: 8, width: "100%" }}>Search 240+ Departures →</Link>
          </div>
        </div>
      </section>

      {/* Social proof */}
      <div className="social-proof-bar">
        <div className="proof-inner">
          <div className="proof-stat"><span className="proof-number">24,000+</span><span className="proof-label">Happy Travelers</span></div>
          <div className="proof-divider" />
          <div className="proof-stat"><span className="proof-number stars-display">★★★★★</span><span className="proof-label">4.9/5 on Trustpilot</span></div>
          <div className="proof-divider" />
          <div className="proof-stat"><span className="proof-number">40+</span><span className="proof-label">Destinations</span></div>
          <div className="proof-divider" />
          <div className="proof-stat"><span className="proof-number">12 max</span><span className="proof-label">Group Size</span></div>
        </div>
      </div>

      {/* Featured tours */}
      <section className="tours-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 8 }}>
            <span className="section-eyebrow">Featured Journeys</span>
            <h2 className="section-title">Tours travelers are loving right now</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>From temple sunrises in Bali to glacier hikes in Patagonia — each itinerary is crafted by locals and tested by us.</p>
          </div>
          <div className="tours-grid">
            {tours.map((t, i) => (
              <Link to="/product" key={i} className="tour-card">
                <div className="tour-image" style={{ backgroundImage: `url(${t.img})` }}>
                  <span className="tour-tag">{t.tag}</span>
                  <div className="tour-fav">♡</div>
                </div>
                <div className="tour-body">
                  <div className="tour-location">📍 {t.loc}</div>
                  <h3 className="tour-name">{t.name}</h3>
                  <div className="tour-meta">
                    <span>🗓 {t.days}</span>
                    <span>👥 Max {t.group}</span>
                  </div>
                  <div className="tour-footer">
                    <div>
                      <div className="tour-price">{t.price}<small> / person</small></div>
                    </div>
                    <div className="tour-rate">★ <b>{t.rate}</b></div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Destinations */}
      <section className="destinations">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">Where to next?</span>
            <h2 className="section-title">Iconic destinations, curated.</h2>
          </div>
          <div className="dest-grid">
            {destinations.map((d, i) => (
              <Link
                to="/product"
                key={i}
                className={`dest-card ${d.large ? "large" : ""}`}
                style={{ backgroundImage: `url(${d.img})` }}
              >
                <span>
                  <small>{d.country}</small>
                  {d.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="benefits">
        <div className="container">
          <div className="text-center">
            <span className="section-eyebrow">The Voyageur Difference</span>
            <h2 className="section-title">Travel the way it should feel</h2>
          </div>
          <div className="benefits-grid">
            {[
              { icon: "👥", t: "Truly Small Groups", d: "Capped at 12 travelers (most run 6–10). Access boutique hotels, hidden restaurants, and experiences groups of 40 simply can't." },
              { icon: "🗺", t: "Local Expert Guides", d: "Every itinerary is crafted and led by someone who actually lives there — not a script, not a chain." },
              { icon: "🛡", t: "Book With Confidence", d: "Free cancellation up to 60 days out. ATOL protected. 24/7 trip support from the moment you land." },
            ].map((b, i) => (
              <div className="benefit-card" key={i}>
                <div className="benefit-icon">{b.icon}</div>
                <h3>{b.t}</h3>
                <p>{b.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="how-it-works">
        <div className="container text-center">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">From dream to departure in three steps</h2>
          <p className="section-sub" style={{ margin: "0 auto 56px" }}>No endless emails, no decision fatigue. Just answer the door.</p>
          <div className="steps-grid">
            {[
              { n: "1", t: "Browse & Reserve", d: "Pick your destination and departure. Hold your spot with a refundable $300 deposit." },
              { n: "2", t: "We Plan Everything", d: "Flights, transfers, boutique stays, guides, dinners, surprises. You get a beautiful itinerary." },
              { n: "3", t: "Show Up & Travel", d: "Land at the airport. Your trip leader is waiting. The next 7–12 days are yours." },
            ].map((s) => (
              <div className="step-card" key={s.n}>
                <div className="step-num">{s.n}</div>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 56, position: "relative" }}>
            <Link to="/product" className="btn btn-gold btn-lg">Plan My Trip →</Link>
          </div>
        </div>
      </section>

      <Reviews />
      <Faq />

      {/* CTA strip */}
      <section className="cta-strip">
        <div className="container-sm" style={{ position: "relative" }}>
          <h2>Get $150 Off Your First Trip</h2>
          <p>Join 60,000+ travelers. Departure alerts, secret routes, and the kind of stories you save for the dinner party.</p>
          <form className="email-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email address" required />
            <button type="submit">GET $150 OFF</button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
