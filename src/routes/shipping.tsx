import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/shipping")({
  head: () => ({
    meta: [
      { title: "Booking Info & Travel Insurance — Voyageur" },
      { name: "description", content: "How booking works, deposits, payment plans, travel insurance, and what's included in every Voyageur journey." },
    ],
  }),
  component: () => (
    <>
      <SiteHeader />
      <div className="page-hero">
        <div className="container">
          <h1>Booking Info & Travel Insurance</h1>
          <p>The clear, simple version of how a Voyageur trip comes together.</p>
        </div>
      </div>
      <div className="page-content">
        <div className="container-sm prose">
          <h2>Reserving your spot</h2>
          <p>Hold a place on any departure with a fully refundable $300 deposit per person. The remaining balance is due 60 days before departure. We accept all major credit cards, Apple Pay, PayPal, and 4-installment plans via Affirm.</p>

          <h2>What's included</h2>
          <ul>
            <li>All boutique accommodations (8+ nights depending on tour)</li>
            <li>Daily breakfast plus most dinners on group days</li>
            <li>Private ground transport from arrival to departure</li>
            <li>Expert local trip leader for the entire journey</li>
            <li>All experiences listed on the itinerary (entrance fees, guides, gear)</li>
            <li>24/7 in-country support line</li>
          </ul>

          <h2>What's not included</h2>
          <ul>
            <li>International flights to/from the trip start point</li>
            <li>Travel insurance (required — see below)</li>
            <li>Visa/entry fees where applicable</li>
            <li>Personal expenses, optional add-ons, and tips for your trip leader</li>
          </ul>

          <h2>Travel insurance (required)</h2>
          <p>Every traveler must carry a comprehensive travel insurance policy that covers medical emergencies, trip cancellation, and baggage. We partner with World Nomads — most travelers pay $80–$160 for a standard plan, but you're welcome to use your own provider.</p>

          <h2>Passport & visas</h2>
          <p>Your passport must be valid for at least 6 months past your return date. Visa requirements vary by destination — we'll send a destination-specific checklist as soon as you book.</p>

          <h2>Group sizes</h2>
          <p>Tours are capped at 12 travelers (most run with 6–10). Departures are confirmed once we hit 4 travelers, usually 60+ days in advance.</p>
        </div>
      </div>
      <SiteFooter />
    </>
  ),
});
