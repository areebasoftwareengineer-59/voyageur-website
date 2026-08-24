import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Voyageur — Talk to a Travel Designer" },
      { name: "description", content: "Speak with a real human trip designer. Phone, email, or chat — we usually reply within 2 hours." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <SiteHeader />
      <div className="page-hero">
        <div className="container">
          <h1>Let's plan something extraordinary</h1>
          <p>Speak with a real trip designer — most messages get a human reply within 2 hours.</p>
        </div>
      </div>
      <div className="page-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-cards">
              <div className="contact-card">
                <span className="contact-icon">📞</span>
                <div><h4>Call us</h4><p>+1 (415) 555-0149 · Mon–Sat, 7am–9pm PT</p></div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">✉</span>
                <div><h4>Email</h4><p>hello@voyageur.co · replies within 2 hours</p></div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">💬</span>
                <div><h4>Live chat</h4><p>Tap the bubble bottom-right · 24/7</p></div>
              </div>
              <div className="contact-card">
                <span className="contact-icon">📍</span>
                <div><h4>HQ</h4><p>2240 Hayes Street, San Francisco, CA 94117</p></div>
              </div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks — a trip designer will be in touch shortly."); }}>
              <div className="form-group"><label>Your name</label><input type="text" required placeholder="Jamie Rivera" /></div>
              <div className="form-group"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
              <div className="form-group">
                <label>I'm dreaming of...</label>
                <select defaultValue="">
                  <option value="" disabled>Pick a destination</option>
                  <option>Bali</option><option>Iceland</option><option>Japan</option>
                  <option>Patagonia</option><option>Morocco</option><option>Custom / Not sure</option>
                </select>
              </div>
              <div className="form-group"><label>Tell us more</label><textarea placeholder="Travel dates, group size, anything special..." /></div>
              <button type="submit" className="btn btn-primary btn-full" style={{ width: "100%" }}>Send Message →</button>
            </form>
          </div>
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
