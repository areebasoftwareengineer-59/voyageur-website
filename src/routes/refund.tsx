import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Cancellation & Refund Policy — Voyageur" },
      { name: "description", content: "Voyageur's transparent cancellation policy. Free cancellation up to 60 days before departure." },
    ],
  }),
  component: () => (
    <>
      <SiteHeader />
      <div className="page-hero">
        <div className="container">
          <h1>Cancellation & Refund Policy</h1>
          <p>Plans change. We try to make it easy.</p>
        </div>
      </div>
      <div className="page-content">
        <div className="container-sm prose">
          <h2>Voyageur cancellations</h2>
          <ul>
            <li><strong>60+ days before departure:</strong> Full refund, including deposit.</li>
            <li><strong>30–59 days before departure:</strong> 50% refund of the trip cost.</li>
            <li><strong>Less than 30 days:</strong> Non-refundable, but transferable to another departure within 12 months for a $150 admin fee.</li>
          </ul>

          <h2>If we cancel</h2>
          <p>If Voyageur cancels a departure (low traveler count, force majeure, safety), you receive a 100% refund or the option to transfer to any future departure with a $150 credit added.</p>

          <h2>Transfers between trips</h2>
          <p>You can transfer your booking to a different destination or date up to 45 days before your original departure, subject to availability and any difference in price.</p>

          <h2>Travel insurance claims</h2>
          <p>For cancellations within 30 days due to illness, family emergencies, or unforeseen events, your travel insurance will typically cover the non-refundable portion. We'll provide all documentation needed to file a claim.</p>

          <h2>How to cancel</h2>
          <p>Email <strong>hello@voyageur.co</strong> or call <strong>+1 (415) 555-0149</strong>. Refunds are processed within 7 business days to the original payment method.</p>
        </div>
      </div>
      <SiteFooter />
    </>
  ),
});
