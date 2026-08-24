const reviews = [
  { name: "Emma & Daniel C.", initials: "EC", meta: "Iceland Ring Road · Sept 2026", stars: 5, text: "From the geothermal lagoon at sunset to chasing the northern lights in Vík — every single day felt like a postcard. Our guide Stefán was unreal. This was the trip of a lifetime." },
  { name: "Marcus T.", initials: "MT", meta: "Bali Spirit Retreat · July 2026", stars: 5, text: "I came back lighter than I left. Voyageur balanced temples, surf lessons, and an actual rice-paddy breakfast better than any itinerary I've ever booked. The boutique hotels were stunning." },
  { name: "Priya N.", initials: "PN", meta: "Kyoto & Hokkaido · April 2026", stars: 5, text: "Cherry blossoms in Kyoto and ramen in a Sapporo back-alley — they nailed both the iconic and the off-grid. Group of 8, perfect size, met friends I'll travel with again." },
];

export function Reviews() {
  return (
    <section className="reviews-section" id="reviews">
      <div className="container">
        <div className="text-center" style={{ marginBottom: 40 }}>
          <span className="section-eyebrow">Traveler Stories</span>
          <h2 className="section-title">Loved by 24,000+ Travelers</h2>
        </div>

        <div className="reviews-summary">
          <div className="summary-score">
            <div className="big-score">4.9</div>
            <div className="summary-stars">★★★★★</div>
            <div className="summary-count">Based on 8,412 reviews</div>
          </div>
          <div className="summary-divider" />
          <div className="bars-wrapper">
            {[
              { l: "5★", w: 94, c: "7,907" },
              { l: "4★", w: 4, c: "337" },
              { l: "3★", w: 1, c: "84" },
              { l: "2★", w: 0.5, c: "42" },
              { l: "1★", w: 0.5, c: "42" },
            ].map((b, i) => (
              <div className="bar-row" key={i}>
                <span className="bar-label">{b.l}</span>
                <div className="bar-track"><div className="bar-fill" style={{ width: `${b.w}%` }} /></div>
                <span className="bar-count">{b.c}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="reviews-grid">
          {reviews.map((r, i) => (
            <div className="review-card" key={i}>
              <div className="reviewer-info">
                <div className="reviewer-avatar">{r.initials}</div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-meta">{r.meta}</div>
                </div>
              </div>
              <div className="review-stars">{"★".repeat(r.stars)}</div>
              <p className="review-text">{r.text}</p>
              <div className="verified-badge">✓ Verified Traveler</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
