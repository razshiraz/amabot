import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { useEffect, type ReactNode } from "react";
import { Logo, SiteFooter } from "@/components/site-chrome";

export function LegalLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="mx-auto mt-4 max-w-6xl px-4">
          <div className="glass flex items-center justify-between gap-2 rounded-2xl px-3 py-3 md:px-5 md:py-4">
            <Logo size="lg" />
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 rounded-xl border border-border/60 px-3 py-2 text-xs font-medium text-muted-foreground transition hover:text-foreground hover:border-primary/40 md:text-sm"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </div>
      </header>

      <section className="relative pt-40 pb-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(ellipse_at_top,oklch(0.85_0.17_88/0.10),transparent_60%)]"
        />
        <article className="mx-auto max-w-[900px] px-4">
          <div className="mb-10">
            <h1 className="text-balance text-4xl font-bold md:text-5xl">{title}</h1>
            <p className="mt-3 text-sm text-muted-foreground">Last updated: July 23, 2026</p>
          </div>
          <div className="legal-prose space-y-6 text-[15px] leading-relaxed text-foreground/90">
            {children}
          </div>

          <div className="mt-16 border-t border-border/50 pt-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-primary transition hover:text-primary/80"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to home
            </Link>
          </div>
        </article>
      </section>

      <SiteFooter />
    </main>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold text-foreground md:text-2xl">{title}</h2>
      <div className="space-y-3 text-muted-foreground">{children}</div>
    </section>
  );
}
