import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Faq } from "@/components/Faq";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Voyageur Travel" },
      { name: "description", content: "Answers about bookings, cancellation, group sizes, dietary needs, and what's included in every Voyageur tour." },
    ],
  }),
  component: () => (
    <>
      <SiteHeader />
      <div className="page-hero">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know before you pack.</p>
        </div>
      </div>
      <Faq />
      <SiteFooter />
    </>
  ),
});
