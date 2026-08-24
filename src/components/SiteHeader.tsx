import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="announcement-bar">
        ✈ Book by Dec 31 — Save up to <span>30% on 2026 Departures</span> · Free Cancellation
      </div>
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo">
            Voyageur<sup>CO</sup>
          </Link>
          <nav className="nav-links" style={open ? { display: "flex", flexDirection: "column", position: "absolute", top: 68, left: 0, right: 0, background: "white", padding: "20px 24px", borderBottom: "1px solid #D8E1EA", zIndex: 999, boxShadow: "0 8px 24px rgba(12,35,64,0.1)" } : undefined}>
            <Link to="/">Home</Link>
            <Link to="/product">Tours</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <div className="nav-actions">
            <Link to="/product" className="btn btn-primary" style={{ padding: "10px 22px", fontSize: "0.85rem" }}>Book Now</Link>
            <button className="hamburger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
