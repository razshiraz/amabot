import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { OptImage } from "@/components/opt-image";
import { iconImg } from "@/lib/optimized-images";
import { Breadcrumbs, DownloadButton } from "@/components/marketing/marketing-chrome";

export function PageHero({
  eyebrow,
  h1,
  intro,
  secondary,
  breadcrumb,
}: {
  eyebrow: string;
  h1: ReactNode;
  intro: ReactNode;
  secondary: { to: string; label: string } | { href: string; label: string };
  breadcrumb: string;
}) {
  return (
    <section className="relative pt-32 pb-10 md:pt-44 md:pb-16">
      <div className="mx-auto w-full max-w-4xl px-5 text-center md:px-4 md:text-left">
        <div className="flex justify-center md:block">
          <Breadcrumbs current={breadcrumb} />
        </div>
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 py-1 pl-1 pr-3 text-[11px] font-medium uppercase tracking-wider text-primary md:mx-0">
          <OptImage
            variants={iconImg}
            alt="AmaBot brand icon"
            width={128}
            height={128}
            sizes="20px"
            className="h-5 w-5 drop-shadow-[0_0_8px_oklch(0.85_0.17_88/0.6)]"
          />
          {eyebrow}
        </div>
        <h1 className="mt-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight md:text-6xl">{h1}</h1>
        <div className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-muted-foreground md:mx-0 md:text-lg">
          {intro}
        </div>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:items-center md:justify-start">
          <DownloadButton size="lg" />
          {"to" in secondary ? (
            <Link
              to={secondary.to}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {secondary.label}
            </Link>
          ) : (
            <a
              href={secondary.href}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {secondary.label}
            </a>
          )}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">Always free • No credit card required</p>
      </div>
    </section>
  );
}


export function Prose({ children }: { children: ReactNode }) {
  return <div className="mx-auto w-full max-w-3xl px-5 md:px-4">{children}</div>;
}

export function Section({
  id,
  title,
  children,
}: {
  id?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-32 py-8 md:py-12">
      <div className="mx-auto w-full max-w-3xl px-5 md:px-4">
        <h2 className="text-balance text-center text-2xl font-bold tracking-tight md:text-left md:text-3xl">
          {title}
        </h2>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted-foreground md:text-base">
          {children}
        </div>
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="pt-2 text-center text-lg font-semibold text-foreground md:text-left md:text-xl">{children}</h3>
  );
}


export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="glass-gold rounded-2xl p-5">
      <div className="flex items-start gap-3">
        <Info aria-hidden className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div>
          <p className="font-semibold text-foreground">{title}</p>
          <div className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{children}</div>
        </div>
      </div>
    </div>
  );
}

export function CardGrid({ children }: { children: ReactNode }) {
  return <div className="mx-auto grid w-full gap-4 sm:grid-cols-2">{children}</div>;
}


export function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group glass relative mx-auto w-full overflow-hidden rounded-2xl p-5 transition hover:border-primary/40">
      <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
      <div className="relative">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="mt-4 text-base font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{children}</p>
      </div>
    </div>
  );
}

export function CompareTable({
  caption,
  head,
  rows,
}: {
  caption: string;
  head: string[];
  rows: string[][];
}) {
  return (
    <div className="glass overflow-hidden rounded-2xl">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-border/60">
              {head.map((h) => (
                <th key={h} scope="col" className="px-4 py-3 text-xs font-semibold uppercase tracking-wider text-primary">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]} className="border-b border-border/40 last:border-0">
                {r.map((cell, i) => (
                  <td
                    key={i}
                    className={`px-4 py-3 align-top ${i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export type Faq = { q: string; a: string };

export function FaqList({ items, heading = "Frequently Asked Questions" }: { items: Faq[]; heading?: string }) {
  return (
    <section id="faq" className="scroll-mt-32 py-8 md:py-12">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="text-balance text-2xl font-bold tracking-tight md:text-3xl">{heading}</h2>
        <div className="mt-6 space-y-3">
          {items.map((f) => (
            <details key={f.q} className="glass group rounded-2xl transition hover:border-primary/30">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 font-semibold text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                <h3 className="text-base font-semibold">{f.q}</h3>
                <span
                  aria-hidden
                  className="shrink-0 text-primary transition group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBlock({ title, text }: { title: string; text: string }) {
  return (
    <section className="py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-4">
        <div className="glass-gold relative overflow-hidden rounded-3xl p-8 text-center md:p-12">
          <OptImage
            variants={iconImg}
            alt=""
            width={384}
            height={384}
            sizes="160px"
            className="pointer-events-none absolute -right-8 -bottom-8 h-40 w-40 opacity-[0.07]"
          />
          <h2 className="relative text-balance text-2xl font-bold md:text-3xl">{title}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">{text}</p>
          <div className="relative mt-6 flex justify-center">
            <DownloadButton size="lg" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function jsonLd(
  slug: string,
  name: string,
  faqs: Faq[],
  breadcrumbName: string,
) {
  const url = `https://amabot.app/${slug}`;
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "AmaBot",
      url: "https://amabot.app/",
      sameAs: ["https://x.com/amabot_app"],
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "AmaBot",
      url: "https://amabot.app/",
      applicationCategory: "ShoppingApplication",
      operatingSystem: "Windows, macOS",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      description: name,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://amabot.app/" },
        { "@type": "ListItem", position: 2, name: breadcrumbName, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
}

export function headMeta({
  slug,
  title,
  description,
}: {
  slug: string;
  title: string;
  description: string;
}) {
  const url = `https://amabot.app/${slug}`;
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: url },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
  };
}
