import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">Voyageur<sup>CO</sup></div>
          <p>Small-group curated journeys for travelers who want depth, design, and meaning — crafted by locals on five continents.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/product">Featured Tour</Link></li>
            <li><Link to="/product">Bali</Link></li>
            <li><Link to="/product">Iceland</Link></li>
            <li><Link to="/product">Japan</Link></li>
            <li><Link to="/product">Patagonia</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/shipping">Booking Info</Link></li>
            <li><Link to="/refund">Cancellation</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li><Link to="/privacy">Privacy</Link></li>
            <li><Link to="/refund">Refund Policy</Link></li>
            <li><Link to="/shipping">Travel Insurance</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom container">
        <span>© {new Date().getFullYear()} Voyageur Co. All rights reserved. ATOL Protected #6712.</span>
        <div className="payment-icons">
          <span className="pay-badge">VISA</span>
          <span className="pay-badge">MC</span>
          <span className="pay-badge">AMEX</span>
          <span className="pay-badge">PAYPAL</span>
          <span className="pay-badge">APPLE PAY</span>
        </div>
      </div>
    </footer>
  );
}
