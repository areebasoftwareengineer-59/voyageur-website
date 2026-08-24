import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Reviews } from "@/components/Reviews";
import { Faq } from "@/components/Faq";
import { StickyAtc } from "@/components/StickyAtc";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Bali Spirit Retreat — 9-Day Small Group Tour | Voyageur" },
      { name: "description", content: "Temples, rice paddies, surf and silence. A 9-day boutique journey across Ubud, Sidemen & Uluwatu. From $2,495. Free cancellation." },
      { property: "og:title", content: "Bali Spirit Retreat — 9 Days" },
      { property: "og:description", content: "Small-group boutique tour across Bali. From $2,495." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80" },
    ],
  }),
  component: ProductPage,
});

const images = [
  "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1604999333679-b86d54738315?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1555400038-63f5ba517a47?auto=format&fit=crop&w=1200&q=80",
];

const itinerary = [
  { d: "01", t: "Arrival in Denpasar → Ubud", p: "Met at the airport, drive to your boutique jungle villa in Ubud. Welcome dinner at a candlelit warung overlooking the rice paddies.", tags: ["Private transfer", "Welcome dinner"] },
  { d: "02", t: "Tegalalang & Sacred Monkey Forest", p: "Sunrise at the Tegalalang rice terraces, breakfast at a coconut-grove café, then a guided walk through the Sacred Monkey Forest.", tags: ["Breakfast", "Local guide"] },
  { d: "03", t: "Temple Day & Balinese Cooking Class", p: "Visit Tirta Empul water temple for a traditional purification, then hands-on cooking class with a local family.", tags: ["Cultural", "Cooking class"] },
  { d: "04", t: "Transfer to Sidemen Valley", p: "Drive east to the Sidemen Valley. Afternoon at leisure at your eco-resort. Sunset yoga overlooking Mount Agung.", tags: ["Yoga", "Free time"] },
  { d: "05", t: "Mount Batur Sunrise Trek", p: "Pre-dawn hike to the rim of an active volcano. Breakfast cooked by steam vents at the summit. Spa afternoon.", tags: ["Adventure", "Spa"] },
  { d: "06", t: "Transfer to Uluwatu · Surf Coast", p: "Drive to the southern cliffs. Cliff-side boutique stay, surf lesson at Padang Padang, sunset Kecak fire dance.", tags: ["Surf lesson", "Sunset show"] },
  { d: "07", t: "Hidden Beaches & Seafood Feast", p: "Boat day to Nusa Lembongan — snorkel with manta rays. Beach lunch, free afternoon, group seafood dinner on the sand.", tags: ["Snorkeling", "Group dinner"] },
  { d: "08", t: "Free Day · Spa, Surf or Shop", p: "Yours. Add an optional cooking class, hire a scooter, or just lie by the infinity pool. We're happy either way.", tags: ["Free day"] },
  { d: "09", t: "Farewell Brunch → Departure", p: "Final brunch overlooking the Indian Ocean. Private transfer to the airport. Hugs all around.", tags: ["Brunch", "Transfer"] },
];

function ProductPage() {
  const [img, setImg] = useState(0);
  const [departure, setDeparture] = useState("Apr 14, 2026");
  const [room, setRoom] = useState("Shared");
  const [qty, setQty] = useState(2);

  return (
    <>
      <SiteHeader />

      <section className="product-section">
        <div className="container">
          <div className="product-grid">
            <div className="product-gallery">
              <div className="main-image" style={{ backgroundImage: `url(${images[img]})` }} />
              <div className="thumbnail-row">
                {images.map((src, i) => (
                  <button key={i} className={`thumb ${i === img ? "active" : ""}`} onClick={() => setImg(i)} style={{ backgroundImage: `url(${src})` }} aria-label={`Image ${i + 1}`} />
                ))}
              </div>
            </div>

            <div className="product-info">
              <div className="product-category">Indonesia · Small Group</div>
              <h1 className="product-title">Bali Spirit Retreat — 9 Days</h1>
              <div className="rating-row">
                <span className="rating-stars">★★★★★</span>
                <span className="rating-count"><a href="#reviews">8,412 traveler reviews</a></span>
                <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>· Max 8 travelers</span>
              </div>

              <div className="price-row">
                <span className="price-current">$2,495</span>
                <span className="price-original">$3,290</span>
                <span className="price-save">SAVE $795</span>
              </div>
              <p style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>per person · or 4 interest-free payments of $623.75 with <strong>Affirm</strong></p>

              <div className="stock-warning">
                <span className="stock-dot" />
                Only <strong style={{ margin: "0 4px" }}>3 spots</strong> left on April 14 departure
              </div>

              <div className="variant-group">
                <div className="variant-label"><span>Departure: <strong>{departure}</strong></span><a href="#" style={{ color: "var(--coral)", fontSize: "0.78rem" }}>All Dates</a></div>
                <div className="variant-options">
                  {["Apr 14, 2026", "May 19, 2026", "Jun 23, 2026", "Sep 8, 2026"].map(d => (
                    <button key={d} className={`variant-btn ${d === departure ? "selected" : ""}`} onClick={() => setDeparture(d)}>{d}</button>
                  ))}
                </div>
              </div>

              <div className="variant-group">
                <div className="variant-label"><span>Room: <strong>{room}</strong></span></div>
                <div className="variant-options">
                  {["Shared", "Single (+$590)", "Couples Suite"].map(c => (
                    <button key={c} className={`variant-btn ${c === room ? "selected" : ""}`} onClick={() => setRoom(c)}>{c}</button>
                  ))}
                </div>
              </div>

              <div className="qty-cart-row">
                <div className="qty-selector">
                  <button className="qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                  <span className="qty-num">{qty}</span>
                  <button className="qty-btn" onClick={() => setQty(q => Math.min(8, q + 1))}>+</button>
                </div>
                <button className="btn btn-primary atc-main">Reserve — ${(2495 * qty).toLocaleString()}</button>
              </div>
              <button className="buy-now-btn">✦ Hold My Spot — $300 Deposit</button>

              <div className="trust-badges">
                <div className="badge-item"><span className="badge-icon">↻</span><span>Free Cancellation</span></div>
                <div className="badge-item"><span className="badge-icon">🛡</span><span>ATOL Protected</span></div>
                <div className="badge-item"><span className="badge-icon">🔒</span><span>Secure Checkout</span></div>
                <div className="badge-item"><span className="badge-icon">☎</span><span>24/7 Support</span></div>
              </div>

              <ul className="product-bullets">
                <li><span className="bullet-check">✓</span><span><strong>8 nights boutique accommodation</strong> — jungle villas, cliff-side suites, eco-resorts</span></li>
                <li><span className="bullet-check">✓</span><span><strong>All breakfasts + 6 group dinners</strong> — including a beach seafood feast</span></li>
                <li><span className="bullet-check">✓</span><span><strong>Expert local trip leader</strong> + private ground transport throughout</span></li>
                <li><span className="bullet-check">✓</span><span><strong>11 curated experiences</strong> — Mt Batur trek, cooking class, surf lesson, manta snorkel</span></li>
                <li><span className="bullet-check">✓</span><span><strong>Max 8 travelers</strong> — keeps it intimate, flexible, and real</span></li>
              </ul>

              <div className="guarantee-strip">
                <div className="guarantee-icon">🏆</div>
                <div className="guarantee-text">
                  <strong>Book With Confidence</strong>
                  <span>Free cancellation up to 60 days before departure. Full ATOL & ABTA protection.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Itinerary */}
      <section className="upsell-section">
        <div className="container">
          <div className="text-center" style={{ marginBottom: 8 }}>
            <span className="section-eyebrow">Day by Day</span>
            <h2>Your 9-day Bali itinerary</h2>
            <p className="section-sub" style={{ margin: "0 auto" }}>Hand-crafted by our Ubud-based trip designers. Balanced between iconic, off-grid, and quiet.</p>
          </div>

          <div className="itinerary-list">
            {itinerary.map((d) => (
              <div className="itinerary-day" key={d.d}>
                <div className="itin-day-num">
                  <small>Day</small>
                  {d.d}
                </div>
                <div className="itin-content">
                  <h4>{d.t}</h4>
                  <p>{d.p}</p>
                  <div className="itin-tags">
                    {d.tags.map((tg, i) => <span className="itin-tag" key={i}>{tg}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Reviews />
      <Faq />

      <section className="cta-strip">
        <div className="container-sm" style={{ position: "relative" }}>
          <h2>Ready when you are.</h2>
          <p>3 spots left on the April 14 departure. Hold yours for $300 — fully refundable for 60 days.</p>
          <Link to="/product" className="btn btn-primary btn-lg">Reserve My Spot →</Link>
        </div>
      </section>

      <SiteFooter />
      <StickyAtc />
    </>
  );
}
