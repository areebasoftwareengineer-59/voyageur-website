import { useState } from "react";

const items = [
  { q: "What's included in the tour price?", a: "All boutique accommodations, daily breakfast and most dinners, private ground transport, expert local guides, all entrance fees, and curated experiences. International flights and travel insurance are not included." },
  { q: "How large are the groups?", a: "Our small-group tours are capped at 12 travelers (most run with 6–10). This keeps the experience intimate, flexible, and lets us access boutique hotels and family-run spots big groups can't." },
  { q: "Can I travel solo?", a: "Absolutely — roughly 40% of our travelers come solo. We offer a no-single-supplement option on most departures and pair you with a roommate of the same gender if you'd like to save." },
  { q: "What's your cancellation policy?", a: "Full refund up to 60 days before departure. 50% refund between 60–30 days. Within 30 days, your deposit is non-refundable but transferable to another departure within 12 months." },
  { q: "Do I need travel insurance?", a: "Yes — comprehensive travel insurance is required for every tour. We partner with World Nomads and can recommend a plan, or you can use your own provider." },
  { q: "What about dietary restrictions?", a: "We accommodate vegetarian, vegan, gluten-free, and most allergies — just flag it on your booking form. Our trip leaders coordinate with every restaurant in advance." },
];

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section className="faq-section" id="faq">
      <div className="container-sm">
        <div className="text-center" style={{ marginBottom: 40 }}>
          <span className="section-eyebrow">Before You Book</span>
          <h2 className="section-title">Frequently Asked</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item ${openIdx === i ? "open" : ""}`}>
              <button className="faq-q" onClick={() => setOpenIdx(openIdx === i ? null : i)}>
                {item.q}
                <span className="faq-arrow">▼</span>
              </button>
              <div className="faq-a">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
