import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { Download, Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "@/components/site-chrome";
import { ComingSoonProvider, useComingSoon } from "@/components/coming-soon-modal";

export const MARKETING_LINKS = [
  { to: "/what-is-amabot", label: "What Is AmaBot" },
  { to: "/amazon-price-tracker", label: "Price Tracker" },
  { to: "/amazon-restock-alerts", label: "Restock Alerts" },
  { to: "/pokemon-restock-alerts", label: "Pokémon Alerts" },
] as const;

export function DownloadButton({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const { open } = useComingSoon();
  const sizes = {
    sm: "px-3 py-2 text-xs md:px-4 md:py-2.5 md:text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-sm",
  } as const;
  return (
    <button
      type="button"
      onClick={open}
      aria-label="Download amabot desktop application (free)"
      className={`group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-gold font-semibold text-primary-foreground shadow-glow-sm transition hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black ${sizes[size]} ${className}`}
    >
      Free Download
      <Download aria-hidden className="h-4 w-4 transition group-hover:translate-y-0.5" />
    </button>
  );
}

function MarketingHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass rounded-2xl px-3 py-3 md:px-5 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <Logo size="lg" />

            <nav aria-label="Main" className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
              <Link
                to="/"
                activeOptions={{ exact: true }}
                className="cursor-pointer transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                activeProps={{ className: "text-primary" }}
              >
                Home
              </Link>
              {MARKETING_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="cursor-pointer transition hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex shrink-0 items-center gap-2">
              <div className="hidden sm:block">
                <DownloadButton size="sm" />
              </div>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-expanded={menuOpen}
                aria-controls="marketing-mobile-menu"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-border/60 p-2 text-muted-foreground transition hover:border-primary/40 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
              >
                {menuOpen ? <X aria-hidden className="h-5 w-5" /> : <Menu aria-hidden className="h-5 w-5" />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav
              id="marketing-mobile-menu"
              aria-label="Mobile"
              className="mt-3 flex flex-col gap-1 border-t border-border/50 pt-3 lg:hidden"
            >
              <Link
                to="/"
                activeOptions={{ exact: true }}
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                activeProps={{ className: "text-primary" }}
              >
                Home
              </Link>
              {MARKETING_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer rounded-xl px-3 py-2.5 text-sm text-muted-foreground transition hover:bg-white/5 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  activeProps={{ className: "text-primary" }}
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 sm:hidden">
                <DownloadButton size="md" className="w-full justify-center" />
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

function MarketingFooter() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-xs text-muted-foreground">
              AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or
              officially connected to Amazon.
            </p>
            <p className="mt-2 max-w-md text-xs text-foreground/80">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
          <nav aria-label="Footer" className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <Link to="/" className="cursor-pointer text-muted-foreground transition hover:text-foreground">
              Home
            </Link>
            {MARKETING_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="cursor-pointer text-muted-foreground transition hover:text-foreground"
              >
                {l.to === "/amazon-price-tracker"
                  ? "Amazon Price Tracker"
                  : l.to === "/amazon-restock-alerts"
                    ? "Amazon Restock Alerts"
                    : l.to === "/pokemon-restock-alerts"
                      ? "Pokémon Restock Alerts"
                      : l.label}
              </Link>
            ))}
            <a
              href="https://x.com/amabot_app"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted-foreground transition hover:text-foreground"
            >
              X profile
            </a>
          </nav>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} amabot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-muted-foreground">
        <li>
          <Link to="/" className="cursor-pointer transition hover:text-foreground">
            Home
          </Link>
        </li>
        <li aria-hidden>
          <ChevronRight className="h-3.5 w-3.5" />
        </li>
        <li aria-current="page" className="text-foreground/80">
          {current}
        </li>
      </ol>
    </nav>
  );
}

export function MarketingLayout({ children }: { children: ReactNode }) {
  return (
    <ComingSoonProvider>
      <div className="relative min-h-screen overflow-x-hidden">
        <MarketingHeader />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.17_88/0.12),transparent_65%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] grid-pattern opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
        />
        <main className="relative">{children}</main>
        <MarketingFooter />
      </div>
    </ComingSoonProvider>
  );
}
