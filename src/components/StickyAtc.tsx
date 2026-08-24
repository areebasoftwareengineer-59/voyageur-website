import { useEffect, useState } from "react";

export function StickyAtc() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className={`sticky-atc ${visible ? "visible" : ""}`}>
      <div className="sticky-inner">
        <div className="sticky-product-info">
          <div className="sticky-img" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?auto=format&fit=crop&w=240&q=70)" }} />
          <div style={{ minWidth: 0 }}>
            <div className="sticky-title">Bali Spirit Retreat · 9 days</div>
            <div className="sticky-price">$2,495 <span style={{ color: "var(--text-muted)", fontSize: "0.8rem", fontWeight: 400, textDecoration: "line-through", marginLeft: 6, fontFamily: "var(--font-body)" }}>$3,290</span></div>
          </div>
        </div>
        <div className="sticky-actions">
          <button className="btn btn-primary">Reserve My Spot →</button>
        </div>
      </div>
    </div>
  );
}
