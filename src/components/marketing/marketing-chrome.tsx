import { Link } from "@tanstack/react-router";
import { useCallback, useEffect, useState, type ReactNode } from "react";
import { Download, Menu, X, ChevronRight } from "lucide-react";
import { Logo } from "@/components/site-chrome";
import { ComingSoonProvider, useComingSoon } from "@/components/coming-soon-modal";
import { trackDownloadButtonClick } from "@/lib/analytics";

export const MARKETING_LINKS = [
  { to: "/what-is-amabot", label: "What Is AmaBot" },
  { to: "/amazon-auto-buy", label: "Auto Buy" },
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
  const handleClick = useCallback(() => {
    trackDownloadButtonClick("Free Download");
    open();
  }, [open]);
  const sizes = {
    sm: "px-3 py-2 text-xs md:px-4 md:py-2.5 md:text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3.5 text-sm",
  } as const;
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Download AmaBot desktop application (free)"
      className={`group inline-flex shrink-0 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-gradient-gold text-center font-semibold text-primary-foreground shadow-glow-sm transition hover:shadow-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black ${sizes[size]} ${className}`}
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
      <div className="mx-auto mt-4 max-w-6xl px-4 lg:max-w-7xl 2xl:max-w-[1400px]">
        <div className="rounded-2xl border border-white/10 bg-background/25 px-3 py-3 backdrop-blur-2xl md:px-5 md:py-4">
          <div className="flex items-center justify-between gap-2">
            <Logo size="lg" />

            <nav aria-label="Main" className="hidden items-center gap-3 text-base text-white lg:ml-16 lg:mr-12 lg:gap-5 xl:ml-20 xl:mr-16 2xl:ml-24 2xl:mr-20 lg:flex lg:font-medium lg:whitespace-nowrap">
              <Link
                to="/"
                activeOptions={{ exact: true }}
                className="cursor-pointer transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
                activeProps={{ className: "text-primary" }}
              >
                Home
              </Link>
              {MARKETING_LINKS.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="cursor-pointer transition-colors duration-200 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
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

// Internal pages use the exact homepage footer (SiteFooter) as the visual source of truth.

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
        <main className="mobile-centered relative">{children}</main>
        <MarketingFooter />
      </div>
    </ComingSoonProvider>
  );
}
