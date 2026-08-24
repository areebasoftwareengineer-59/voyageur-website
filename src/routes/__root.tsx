import { createRootRouteWithContext, HeadContent, Outlet, Scripts, useRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFound() {
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", background: "#F4F6FA", padding: "0 16px" }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <h1 style={{ fontSize: "5rem" }}>404</h1>
        <p style={{ marginTop: 12, color: "#7A7F96" }}>This page wandered off.</p>
        <a href="/" className="btn btn-primary" style={{ marginTop: 20 }}>Back to Home</a>
      </div>
    </div>
  );
}

function ErrorBoundary({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div style={{ display: "flex", minHeight: "100vh", alignItems: "center", justifyContent: "center", padding: 24 }}>
      <div style={{ textAlign: "center", maxWidth: 420 }}>
        <h2>Something went wrong</h2>
        <p style={{ marginTop: 8, color: "#7A7F96" }}>Try again or head home.</p>
        <div style={{ marginTop: 16, display: "flex", gap: 12, justifyContent: "center" }}>
          <button className="btn btn-primary" onClick={() => { router.invalidate(); reset(); }}>Try again</button>
          <a className="btn btn-secondary" href="/">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Voyageur — Small-Group Curated Travel | Bali, Iceland, Japan & More" },
      { name: "description", content: "Boutique small-group tours to 40+ destinations. Hand-crafted itineraries, expert local guides, free cancellation. Loved by 24,000+ travelers." },
      { name: "author", content: "Voyageur" },
      { property: "og:title", content: "Voyageur — Small-Group Curated Travel" },
      { property: "og:description", content: "Hand-crafted small-group journeys with expert local guides. Free cancellation up to 60 days." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Voyageur — Small-Group Curated Travel" },
      { name: "twitter:description", content: "Hand-crafted small-group journeys with expert local guides." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Fira+Sans:wght@300;400;500;600;700&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorBoundary,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
