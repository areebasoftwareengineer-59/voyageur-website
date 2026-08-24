import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Voyageur" },
      { name: "description", content: "How Voyageur collects, uses, and protects your information." },
    ],
  }),
  component: () => (
    <>
      <SiteHeader />
      <div className="page-hero">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>Last updated: January 2026</p>
        </div>
      </div>
      <div className="page-content">
        <div className="container-sm prose">
          <p>Voyageur Co. ("we", "our", or "us") respects your privacy. This policy explains what information we collect, how we use it, and your rights regarding your data.</p>

          <h2>What we collect</h2>
          <ul>
            <li>Contact details (name, email, phone) when you book or contact us</li>
            <li>Passport details and dietary requirements (only as needed for your trip)</li>
            <li>Payment info — processed by Stripe; we never store full card numbers</li>
            <li>Site analytics (pages visited, device type) via cookies</li>
          </ul>

          <h2>How we use it</h2>
          <ul>
            <li>To arrange and deliver your trip (hotels, transport, guides)</li>
            <li>To send booking confirmations, travel docs, and trip updates</li>
            <li>To send marketing emails (only if you opt in — unsubscribe anytime)</li>
            <li>To improve our site and tour experience</li>
          </ul>

          <h2>Who we share with</h2>
          <p>We share only what's necessary with hotels, ground operators, and trip leaders involved in your booking. We never sell your data to third-party advertisers.</p>

          <h2>Your rights</h2>
          <p>You can request a copy, correction, or deletion of your data at any time by emailing <strong>privacy@voyageur.co</strong>. We respond within 30 days.</p>

          <h2>Cookies</h2>
          <p>We use essential cookies for site function and analytics cookies (Google Analytics) to understand usage. You can disable non-essential cookies in your browser settings.</p>
        </div>
      </div>
      <SiteFooter />
    </>
  ),
});
