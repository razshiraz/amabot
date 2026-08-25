import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Bell, Zap, ShoppingCart, Activity, SlidersHorizontal, Filter, LayoutDashboard,
  ArrowRight, Sparkles, MessageCircle, Send,
  ChevronDown, Download,
} from "lucide-react";

import amabotDemo from "@/assets/amabot-demo.mp4.asset.json";
import { Logo, SiteFooter } from "@/components/site-chrome";
import { ComingSoonProvider, useComingSoon } from "@/components/coming-soon-modal";
import { OptImage } from "@/components/opt-image";
import { dashImg, iconImg, posterImg, supportsImg, srcSet } from "@/lib/optimized-images";


const OG_IMAGE = "https://amabot.app/og-image.jpg";
const POSTER_SIZES = "(min-width: 1024px) 1024px, 100vw";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://amabot.app/#webpage",
  url: "https://amabot.app/",
  name: "AmaBot | Free Amazon Bot - Auto Checkout & Price Monitor",
  primaryImageOfPage: {
    "@type": "ImageObject",
    url: OG_IMAGE,
    contentUrl: OG_IMAGE,
  },
};

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "AmaBot demo - Amazon auto checkout bot and restock monitor",
  description: "Demo of AmaBot monitoring Amazon products, sending restock alerts, and automatically purchasing offers that match your buying rules.",
  thumbnailUrl: [OG_IMAGE],
  uploadDate: "2026-07-22T20:27:44Z",
  duration: "PT1M30S",
  contentUrl: amabotDemo.url,
  embedUrl: "https://amabot.app/",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["What is AmaBot?", "AmaBot is a free Amazon auto checkout bot and Amazon restock bot designed to help users secure high-demand products as quickly as possible. It continuously checks product availability and pricing according to your settings and can either notify you or automatically place an order when an eligible offer matches your rules."],
    ["What is an Amazon bot?", "An Amazon bot is a tool that monitors selected Amazon products and reacts when specific price or availability conditions are met. AmaBot is designed for consumers who want alerts or optional automatic purchasing without constantly refreshing product pages."],
    ["Is AmaBot an Amazon auto checkout bot?", "Yes. AmaBot can work as an Amazon auto checkout bot when automatic purchasing is enabled. It monitors the selected product and can attempt checkout when the price, quantity and availability match the user's settings."],
    ["How does Amazon auto buy work with AmaBot?", "Amazon auto buy allows AmaBot to attempt a purchase automatically after a monitored product matches the conditions selected by the user. A successful order is not guaranteed because inventory, prices, sellers, shipping eligibility and payment status can change."],
    ["What does Amazon auto purchase mean?", "Amazon auto purchase refers to the process of attempting to buy a monitored product automatically when it becomes available under the user's selected conditions. Users can also choose alert-only mode instead."],
    ["Why is AmaBot free?", "AmaBot is a free Amazon auto checkout bot because we may earn affiliate commissions from qualifying purchases made through Amazon, at no additional cost to you. These commissions help us develop new features, release updates, and improve the platform while keeping it free for users."],
    ["Do you store my personal information?", "AmaBot does not store your Amazon credentials or payment information on our servers. Your Amazon session runs locally on your computer through a separate browser session. Product links, buying rules, and preferences may be saved locally on your device."],
    ["What is Register Passkey?", "Register Passkey helps maintain a secure, persistent Amazon session inside AmaBot's separate browser. It reduces repeated sign-ins, although Amazon may occasionally request additional verification."],
    ["Can I monitor multiple products?", "Yes. You can add and monitor multiple Amazon products and configure different buying rules for each one. AmaBot intervals are dynamic, generally taking a few seconds between requests."],
    ["What's the difference between Monitor Only and Auto-buy?", "Monitor Only sends Amazon restock alerts when a product meets your conditions and never places orders. Auto-buy works as an Amazon auto buy tool that automatically places an order when an eligible offer matches your rules, continuing until your configured order target has been reached."],

    ["Which shipping address will AmaBot use?", "By default, AmaBot uses the default shipping address configured in your Amazon account. Make sure it is correct before enabling Auto-buy."],
    ["Which payment method will AmaBot use?", "AmaBot uses the default payment method configured in your Amazon account. If you have an available Amazon Gift Card balance, Amazon may apply that balance before charging your default payment method."],
    ["Can I switch Amazon accounts?", "No. For security purposes, each Amazon account is linked to a single AmaBot account. Once your Amazon account is connected, you cannot simply switch to a different Amazon account under the same AmaBot user. This helps keep account sessions consistent and provides a safer and more controlled connection between AmaBot and your Amazon account."],
    ["Does AmaBot know if I have Amazon Prime?", "Yes. AmaBot can recognize whether your connected Amazon account has an active Prime membership and will automatically work with the pricing, shipping costs, and Prime benefits available to your account. If you are not a Prime member, AmaBot will also account for the prices and shipping costs that apply specifically to your Amazon account."],
    ["Is my Amazon account at risk?", "Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. AmaBot follows safer automation practices but no tool can guarantee that an account will never be affected."],
    ["How do I update AmaBot?", "AmaBot updates automatically in the background. To verify that you are running the latest version, use the \"Check for Updates\" button on the Settings page."],
    ["Does AmaBot guarantee successful purchases?", "No. Product availability, checkout speed, Amazon restrictions, and competition from other buyers can affect the outcome. AmaBot can improve your chances but cannot guarantee a successful purchase."],
    ["Do I need to keep my computer running?", "Yes. Because AmaBot runs locally, your computer, internet connection, and AmaBot session must remain active while monitoring or automatic purchasing is enabled."],
    ["Do I need to use proxies?", "No. AmaBot does not support or require proxies. All Amazon activity is performed using your own internet connection and IP address. AmaBot is designed to operate conservatively and minimize unnecessary requests, using controlled and carefully managed request timing rather than routing your activity through external proxy networks."],
    ["What happens after an order is placed?", "The order will appear directly in your Amazon account. Shipping changes, cancellations, returns, and refunds must be managed through Amazon and are subject to Amazon's policies."],
    ["Is AmaBot affiliated with Amazon?", "No. AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners."],
  ].map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AmaBot | Free Amazon Bot - Auto Checkout & Price Monitor" },
      { name: "description", content: "AmaBot is a free Amazon bot for automatic purchases, price monitoring, restock alerts, and tracking high-demand Amazon products." },
      { property: "og:title", content: "AmaBot | Free Amazon Bot - Auto Checkout & Price Monitor" },
      { property: "og:description", content: "AmaBot is a free Amazon bot for automatic purchases, price monitoring, restock alerts, and tracking high-demand Amazon products." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amabot.app/" },
      { name: "twitter:title", content: "AmaBot | Free Amazon Bot - Auto Checkout & Price Monitor" },
      { name: "twitter:description", content: "AmaBot is a free Amazon bot for automatic purchases, price monitoring, restock alerts, and tracking high-demand Amazon products." },
    ],
    links: [
      { rel: "canonical", href: "https://amabot.app/" },
      {
        rel: "preload",
        as: "image",
        type: "image/avif",
        imageSrcSet: srcSet(posterImg.avif),
        imageSizes: POSTER_SIZES,
        fetchPriority: "high",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(webPageSchema) },
      { type: "application/ld+json", children: JSON.stringify(videoSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Landing,
});



function Nav() {
  const { open: openModal } = useComingSoon();
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="flex items-center justify-between gap-2 rounded-2xl border border-white/10 bg-background/25 px-3 py-3 backdrop-blur-2xl md:px-5 md:py-4">
          <Logo size="lg" />

          <nav className="hidden items-center gap-7 text-base text-white md:text-lg md:font-medium md:flex">
            <a href="#features" className="cursor-pointer transition-colors duration-200 hover:text-primary">Features</a>
            <a href="#how-it-works" className="cursor-pointer transition-colors duration-200 hover:text-primary">How it works</a>
            <a href="#community" className="cursor-pointer transition-colors duration-200 hover:text-primary">Community</a>
            <a href="#faq" className="cursor-pointer transition-colors duration-200 hover:text-primary">FAQ</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <button type="button" onClick={openModal} aria-label="Download AmaBot desktop application (free)" className="group inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-xl bg-gradient-gold px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow-sm transition hover:shadow-glow md:px-5 md:py-2.5 md:text-sm">
              Free Download
              <Download aria-hidden className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { open: openModal } = useComingSoon();
  const [playing, setPlaying] = useState(false);
  const [activated, setActivated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [failed, setFailed] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startPlayback = () => {
    const v = videoRef.current;
    if (!v) return;
    setFailed(false);
    setActivated(true);
    setLoading(true);
    if (!v.getAttribute("src")) {
      v.setAttribute("src", amabotDemo.url);
      v.load();
    }
    const attempt = v.play();
    if (attempt) attempt.catch(() => setLoading(false));
  };


  return (
    <section className="relative overflow-hidden pt-20 pb-10 md:pt-44 md:pb-20">
      {/* Premium ambient background: gold glow, faint tech lines, particles, grain, vignette */}
      <div aria-hidden className="ambient-stage">
        <div className="ambient-glow" />
        <div className="ambient-grid" />
        <div className="ambient-circuits hidden md:block">
          <svg viewBox="0 0 1440 1200" preserveAspectRatio="none">
            <path className="ambient-circuit-line" d="M0 210 H140 L200 270 V430 H120" />
            <path className="ambient-circuit-line" d="M0 520 H90 L150 580 V760" />
            <path className="ambient-circuit-line" d="M0 880 H190 L240 830" />
            <path className="ambient-circuit-line" d="M1440 260 H1310 L1250 320 V500 H1340" />
            <path className="ambient-circuit-line" d="M1440 620 H1360 L1300 680 V860" />
            <path className="ambient-circuit-line" d="M1440 940 H1260 L1210 890" />
            {/* mid-field traces */}
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M320 120 H520 L580 180 H760" />
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M1120 150 H960 L900 210 V330" />
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M300 1080 H540 L600 1020 H820" />
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M1140 1050 H980 L920 990" />
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M420 640 V760 L480 820 H640" />
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M1020 620 V740 L960 800 H820" />
            <circle className="ambient-circuit-dot" cx="200" cy="270" r="4" />
            <circle className="ambient-circuit-dot" cx="150" cy="760" r="4" />
            <circle className="ambient-circuit-dot" cx="1250" cy="320" r="4" />
            <circle className="ambient-circuit-dot" cx="1300" cy="860" r="4" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="580" cy="180" r="3" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="900" cy="210" r="3" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="600" cy="1020" r="3" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="920" cy="990" r="3" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="480" cy="820" r="3" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="960" cy="800" r="3" />
          </svg>
        </div>
        <div className="ambient-circuits ambient-circuits--mobile md:hidden">
          <svg viewBox="0 0 390 1400" preserveAspectRatio="none">
            {/* Mobile: sparse, refined traces pushed to outer edges and empty areas — never behind text */}
            {/* Top-left corner, above headline / in header margin */}
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M0 155 H60 L85 180" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="85" cy="180" r="2.5" />

            {/* Left margin, along video area */}
            <path className="ambient-circuit-line" d="M0 920 H52 L82 950 V1060" />
            <circle className="ambient-circuit-dot" cx="82" cy="950" r="3" />

            {/* Right margin, along video area */}
            <path className="ambient-circuit-line" d="M390 1000 H338 L308 1030 V1140" />
            <circle className="ambient-circuit-dot" cx="308" cy="1030" r="3" />

            {/* Bottom-right corner, below video */}
            <path className="ambient-circuit-line ambient-circuit-line--faint" d="M390 1320 H330 L300 1290" />
            <circle className="ambient-circuit-dot ambient-circuit-dot--sm" cx="300" cy="1290" r="2.5" />
          </svg>
        </div>


        <div className="ambient-grain" />
        <div className="ambient-vignette" />
        <div className="ambient-fade-bottom" />
      </div>





      <div className="relative mx-auto max-w-6xl px-4 text-center">


        <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Never Miss An <br className="hidden md:block" />
          <span className="text-gradient-gold">Amazon Drop</span> Again
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-neutral-300 md:text-lg">
          AmaBot is a free Amazon bot for automatic purchasing, price monitoring and restock tracking.
        </p>

        <OptImage
          variants={supportsImg}
          alt="Supports Windows and macOS"
          width={720}
          height={62}
          priority
          sizes="(min-width: 768px) 360px, 280px"
          className="mx-auto mt-7 h-auto w-auto max-w-[280px] md:max-w-[360px]"
        />


        <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row md:mt-8">
          <button type="button" onClick={openModal} aria-label="Download AmaBot desktop application (free)" className="group inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            Free Download
            <Download aria-hidden className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </button>
          <a href="#how-it-works" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10">
            See How It Works
          </a>
        </div>

        <p className="mt-4 text-xs text-neutral-300">Always free • No credit card required</p>

        {/* Product demo video */}
        <div className="relative mx-auto mt-10 max-w-5xl md:mt-16">
          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/5" style={{ aspectRatio: "16 / 9" }}>
              <video
                ref={videoRef}
                controls={activated}
                playsInline
                preload="none"
                onPlaying={() => {
                  setPlaying(true);
                  setLoading(false);
                }}
                onPlay={() => setPlaying(true)}
                onWaiting={() => setLoading(true)}
                onError={() => {
                  if (activated) {
                    setLoading(false);
                    setFailed(true);
                  }
                }}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {!playing && (
                <picture>
                  <source type="image/avif" srcSet={srcSet(posterImg.avif)} sizes={POSTER_SIZES} />
                  <source type="image/webp" srcSet={srcSet(posterImg.webp)} sizes={POSTER_SIZES} />
                  <img
                    src={posterImg.fallback.url}
                    alt="AmaBot Amazon auto checkout bot and product monitoring software"
                    width={1280}
                    height={853}
                    sizes={POSTER_SIZES}
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                    className="pointer-events-none absolute inset-0 h-full w-full object-cover"
                  />
                </picture>
              )}
              {!playing && !failed && (

                <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
                  {loading ? (
                    <span
                      aria-label="Loading video"
                      role="status"
                      className="block h-[52px] w-[52px] animate-spin rounded-full border-2 border-white/20 border-t-primary md:h-[64px] md:w-[64px]"
                    />
                  ) : (
                  <button
                    type="button"
                    onClick={startPlayback}
                    aria-label="Play AmaBot demo video"
                    style={{ aspectRatio: "1 / 1", boxSizing: "border-box", padding: 0, lineHeight: 0, flexShrink: 0 }}
                    className="pointer-events-auto group grid h-[60px] w-[60px] place-items-center rounded-full border border-primary/40 bg-black/50 text-white shadow-[0_0_30px_oklch(0.85_0.17_88_/_0.35)] backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_50px_oklch(0.85_0.17_88_/_0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-safe:animate-pulse-glow md:h-[74px] md:w-[74px]"
                  >
                    <span
                      aria-hidden
                      className="block h-0 w-0 translate-x-[2px] border-y-[9px] border-l-[14px] border-y-transparent border-l-white md:border-y-[11px] md:border-l-[17px]"
                    />
                  </button>
                  )}
                </div>
              )}
              {failed && (
                <div className="absolute inset-0 z-10 grid place-items-center">
                  <button
                    type="button"
                    onClick={startPlayback}
                    className="rounded-xl border border-primary/40 bg-black/60 px-4 py-2 text-sm font-semibold text-white backdrop-blur transition hover:bg-black/80"
                  >
                    Retry
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}







function DashboardShowcase() {
  return (
    <section className="relative overflow-x-clip pt-6 pb-2 md:pt-10 md:pb-6">
      <div className="mx-auto max-w-6xl px-4">
        <h2
          className="mx-auto text-balance text-center text-white px-2 mb-14 md:mb-16 lg:mb-24"
          style={{ maxWidth: "950px", fontSize: "clamp(28px, 3.2vw, 44px)", lineHeight: 1.2, fontWeight: 700 }}
        >
          AmaBot is a <span className="text-gradient-gold uppercase">FREE</span> <span className="text-gradient-gold">Amazon auto checkout bot</span> and <span className="text-gradient-gold">product monitor.</span>
        </h2>

        <div className="relative mx-auto max-w-5xl">

          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <OptImage
                variants={dashImg}
                alt="AmaBot Amazon auto checkout bot and product monitoring dashboard tracking Pokémon prices and restock alerts"
                width={1280}
                height={720}
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="w-full"
              />
            </div>
          </div>
          <FloatingAlert
            wrapperClassName="left-[8%] top-[-16px] -rotate-2 lg:left-[-32px] lg:right-auto lg:top-[20%] lg:bottom-auto lg:rotate-0"
            popDelay={0}
            floatDuration={3.4}
            floatDelay={0}
            icon={<Bell className="h-3 w-3 lg:h-4 lg:w-4" />}
            title="151 ETB"
            subtitle="In stock • $59.99"
          />
          <FloatingAlert
            wrapperClassName="right-[-14px] top-[22%] rotate-1 lg:left-auto lg:right-[-40px] lg:top-[38%] lg:bottom-auto lg:rotate-0"
            popDelay={350}
            floatDuration={4.1}
            floatDelay={-0.8}
            icon={<Zap className="h-3 w-3 lg:h-4 lg:w-4" />}
            title="Restock Alert"
            subtitle="Prismatic Evolutions • 3 units"
          />
          <FloatingAlert
            wrapperClassName="left-[-14px] bottom-[24%] rotate-[1.5deg] lg:left-[-24px] lg:right-auto lg:top-[62%] lg:bottom-auto lg:rotate-0"
            popDelay={700}
            floatDuration={3.7}
            floatDelay={-1.5}
            icon={<Sparkles className="h-3 w-3 lg:h-4 lg:w-4" />}
            title="ASCENDED HEROES"
            subtitle="Deal found • -22% off"
          />
          <FloatingAlert
            wrapperClassName="right-[10%] bottom-[-16px] -rotate-1 lg:left-auto lg:right-[-24px] lg:top-[76%] lg:bottom-auto lg:rotate-0"
            popDelay={1050}
            floatDuration={4.5}
            floatDelay={-2.2}
            icon={<ShoppingCart className="h-3 w-3 lg:h-4 lg:w-4" />}
            title="Auto-buy success"
            subtitle="Order #A28-91"
            success
          />
        </div>

        <div className="glass mx-auto mt-[72px] w-full max-w-3xl rounded-2xl p-6 text-center md:mt-20 lg:max-w-[940px] lg:px-9 lg:py-7">
          <p className="text-sm leading-relaxed text-muted-foreground">
            AmaBot combines&nbsp;<span className="font-semibold text-primary">Amazon auto buy</span>&nbsp;functionality with <span className="font-semibold text-primary">product price monitoring</span>. After adding a product, users can set a maximum price and quantity, then choose whether to receive an alert or allow the Amazon auto checkout bot to attempt the purchase when the selected conditions are met.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            An Amazon auto purchase is only attempted when the product matches the user's settings.
          </p>
        </div>
      </div>

    </section>
  );
}

function FloatingAlert({
  icon,
  title,
  subtitle,
  success,
  wrapperClassName = "",
  popDelay = 0,
  floatDuration = 4,
  floatDelay = 0,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  success?: boolean;
  wrapperClassName?: string;
  popDelay?: number;
  floatDuration?: number;
  floatDelay?: number;
}) {
  return (
    <div className={`pointer-events-none absolute z-10 ${wrapperClassName}`}>
      <div className="animate-pop-in" style={{ animationDelay: `${popDelay}ms` }}>
        <div
          className="animate-float [will-change:transform]"
          style={{ animationDuration: `${floatDuration}s`, animationDelay: `${floatDelay}s` }}
        >
          <div className="glass-gold flex min-w-[105px] max-w-[145px] items-center gap-2 rounded-full px-2.5 py-1.5 shadow-glow-sm lg:min-w-[180px] lg:max-w-[240px] lg:gap-3 lg:rounded-2xl lg:px-4 lg:py-3">
            <div className={`flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full lg:h-9 lg:w-9 ${success ? "bg-success/20 text-success" : "bg-primary/20 text-primary"}`}>
              {icon}
            </div>
            <div className="min-w-0 text-left">
              <div className="truncate text-[11px] font-semibold lg:text-sm">{title}</div>
              <div className="truncate text-[9px] text-muted-foreground lg:text-xs">{subtitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const features = [
  { icon: Activity, title: "Always-On Monitoring", desc: "Add your Amazon products and AmaBot continuously checks their latest prices and available offers." },
  { icon: SlidersHorizontal, title: "Custom Buying Rules", desc: "Set a maximum price, quantity, purchase limit, and buying preferences for every product." },
  { icon: ShoppingCart, title: "Amazon Auto Buy", desc: "AmaBot will attempt an Amazon auto purchase when the product matches your selected maximum price, quantity and availability conditions." },
  { icon: Bell, title: "Monitor-Only Alerts", desc: "Prefer to stay in control? Receive an update when a matching opportunity appears without making a purchase." },
  { icon: Filter, title: "Seller & Price Filters", desc: "Choose Amazon-only or any eligible seller while checking the complete price, including shipping." },
  { icon: LayoutDashboard, title: "Live Activity Dashboard", desc: "Follow prices, offers, eligibility, checks, and purchase status from one clear dashboard." },
];

function Features() {
  return (
    <section id="features" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Features" title={<>Set your rules.<br />AmaBot acts <span className="text-gradient-gold">when the price is right.</span></>} sub="Choose the products you want, define your buying rules, and let AmaBot monitor Amazon continuously. Get notified or buy automatically when the right offer appears." />







        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group glass relative overflow-hidden rounded-2xl p-6 text-center transition hover:border-primary/40">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative flex flex-col items-center">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  { n: "01", title: "Create your AmaBot account", desc: "Sign up for AmaBot to access your dashboard and begin the quick setup process." },
  { n: "02", title: "Connect your Amazon account", desc: "Securely connect your Amazon account and register a passkey for a reliable, persistent connection with fewer interruptions." },
  { n: "03", title: "Confirm shipping and payment", desc: "Make sure your default Amazon shipping address and payment method are the ones you want AmaBot to use." },
  { n: "04", title: "Add your product", desc: "Paste the Amazon link for the product you want AmaBot to monitor or purchase." },
  { n: "05", title: "Set your buying rules", desc: "Choose your target price, quantity, and whether AmaBot should notify you or purchase automatically." },
  { n: "06", title: "Press Start", desc: "Start the engine and you're done. AmaBot will monitor the product and act when all your rules are met." },
];

function HowItWorks() {
  return (
    <section id="how-it-works" className="relative scroll-mt-24 pt-14 pb-12 md:scroll-mt-28 md:pt-20 md:pb-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="How it works" title={<>Six simple steps.<br /><span className="text-gradient-gold">AmaBot handles the rest.</span></>} sub="Connect your Amazon account, set your buying rules, and start monitoring in just a few minutes." />

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Desktop row connectors */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="pointer-events-none absolute left-0 right-0 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" style={{ top: "calc(50% + 0.75rem + 3rem)" }} />
          {steps.map((s) => (
            <div key={s.n} className="glass group relative flex h-full flex-col items-center rounded-2xl p-6 text-center transition hover:border-primary/40 hover:shadow-glow-sm">
              <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-lg font-bold text-primary-foreground shadow-glow-sm">
                {s.n}
              </div>
              <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


function Community() {
  return (
    <section id="community" className="relative py-12 md:py-16">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Community" title={<>Built By Collectors, <br /> <span className="text-gradient-gold">For Collectors</span></>} sub="Connect with the AmaBot community, get help, and stay up to date through Discord and Telegram." />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <CommunityCard
            icon={<MessageCircle className="h-6 w-6" />}
            name="Discord"
            label="Community & Support"
            desc="Ask questions, get setup help, share feedback, and connect with other AmaBot users."
            cta="Join Discord"
            href="https://discord.gg/CT9F6ZYxhx"
          />
          <CommunityCard
            icon={<Send className="h-6 w-6" />}
            name="Telegram"
            label="News & Updates"
            desc="Follow AmaBot for product updates, announcements, and important news delivered directly to Telegram."
            cta="Join Telegram"
            href="https://t.me/amabot_app"
          />
        </div>
      </div>
    </section>
  );
}

function CommunityCard({ icon, name, label, desc, cta, href }: { icon: React.ReactNode; name: string; label: string; desc: string; cta: string; href: string }) {
  return (
    <div className="group glass relative overflow-hidden rounded-3xl p-8 transition hover:border-primary/40">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
            {icon}
          </div>
          <div>
            <div className="text-xl font-semibold">{name}</div>
          </div>
        </div>
        <span className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
          {label}
        </span>
      </div>
      <p className="relative mt-6 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${cta} (opens in a new tab)`}
        className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5"
      >
        {cta} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

type FaqAnswer = { paragraphs: Array<string | React.ReactNode> };
const faqs: Array<{ q: string; a: FaqAnswer }> = [
  {
    q: "What is AmaBot?",
    a: { paragraphs: ["AmaBot is a free Amazon auto checkout bot and Amazon restock bot designed to help users secure high-demand products as quickly as possible. It continuously checks product availability and pricing according to your settings and can either notify you or automatically place an order when an eligible offer matches your rules."] },
  },
  {
    q: "What is an Amazon bot?",
    a: { paragraphs: ["An Amazon bot is a tool that monitors selected Amazon products and reacts when specific price or availability conditions are met. AmaBot is designed for consumers who want alerts or automatic purchasing without constantly refreshing product pages."] },
  },
  {
    q: "Is AmaBot an Amazon auto checkout bot?",
    a: { paragraphs: ["Yes. AmaBot can work as an Amazon auto checkout bot when automatic purchasing is enabled. It monitors the selected product and can attempt checkout when the price, quantity and availability match the user's settings."] },
  },
  {
    q: "How does Amazon auto buy work with AmaBot?",
    a: { paragraphs: ["Amazon auto buy allows AmaBot to attempt a purchase automatically after a monitored product matches the conditions selected by the user. A successful order is not guaranteed because inventory, prices, sellers, shipping eligibility and payment status can change."] },
  },
  {
    q: "What does Amazon auto purchase mean?",
    a: { paragraphs: ["Amazon auto purchase refers to the process of attempting to buy a monitored product automatically when it becomes available under the user's selected conditions. Users can also choose alert-only mode instead."] },
  },
  {
    q: "Why is AmaBot free?",
    a: { paragraphs: ["AmaBot is a free Amazon auto checkout bot because we may earn affiliate commissions from qualifying purchases made through Amazon, at no additional cost to you. These commissions help us develop new features, release updates, and improve the platform while keeping it free for users."] },
  },
  {
    q: "Do you store my personal information?",
    a: { paragraphs: ["AmaBot does not store your Amazon credentials or payment information on our servers. Your Amazon session runs locally on your computer through a separate browser session. Product links, buying rules, and preferences may be saved locally on your device."] },
  },
  {
    q: "What is Register Passkey?",
    a: { paragraphs: ["Register Passkey helps maintain a secure, persistent Amazon session inside AmaBot's separate browser. It reduces repeated sign-ins, although Amazon may occasionally request additional verification."] },
  },
  {
    q: "Can I monitor multiple products?",
    a: { paragraphs: [
      "Yes. You can add multiple Amazon products and configure different buying rules for each one.",
      "As an Amazon price tracker, AmaBot checks products in rotation, allowing approximately five seconds per product. This means the interval between checks for the same product increases as you add more products: one product is checked about every 5 seconds, two products about every 10 seconds, three products about every 15 seconds, and so on.",
    ] },
  },
  {
    q: "What's the difference between Monitor Only and Auto-buy?",
    a: { paragraphs: [
      <><span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Monitor Only</span><span className="mt-2 block">AmaBot checks for matching offers and sends Amazon restock alerts when a product meets your configured conditions. Purchases are never made automatically.</span></>,
      <><span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Auto-buy</span><span className="mt-2 block">Working as an Amazon auto buy tool, AmaBot automatically places an order when an eligible offer matches your configured conditions. It continues purchasing until your configured order target has been reached.</span></>,
    ] },
  },

  {
    q: "Which shipping address will AmaBot use?",
    a: { paragraphs: ["By default, AmaBot uses the default shipping address configured in your Amazon account. Make sure it is correct before enabling Auto-buy."] },
  },
  {
    q: "Which payment method will AmaBot use?",
    a: { paragraphs: ["AmaBot uses the default payment method configured in your Amazon account. If you have an available Amazon Gift Card balance, Amazon may apply that balance before charging your default payment method."] },
  },
  {
    q: "Can I switch Amazon accounts?",
    a: { paragraphs: ["Yes. You can sign out and switch Amazon accounts at any time from the Settings page. You may need to register a new passkey after connecting a different account."] },
  },
  {
    q: "Is my Amazon account at risk?",
    a: { paragraphs: ["Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. AmaBot is designed with account safety as a priority and follows safer automation practices to reduce unnecessary activity, but no tool can guarantee that an account will never be affected."] },
  },
  {
    q: "How do I update AmaBot?",
    a: { paragraphs: ["AmaBot updates automatically in the background. To verify that you are running the latest version, use the \u201CCheck for Updates\u201D button on the Settings page."] },
  },
  {
    q: "Does AmaBot guarantee successful purchases?",
    a: { paragraphs: ["No. Product availability, checkout speed, Amazon restrictions, and competition from other buyers can affect the outcome. AmaBot can improve your chances of securing a product but cannot guarantee a successful purchase."] },
  },
  {
    q: "Do I need to keep my computer running?",
    a: { paragraphs: ["Yes. Because AmaBot runs locally, your computer, internet connection, and AmaBot session must remain active while monitoring or automatic purchasing is enabled."] },
  },
  {
    q: "What happens after an order is placed?",
    a: { paragraphs: ["The order will appear directly in your Amazon account. Shipping changes, cancellations, returns, and refunds must be managed through Amazon and are subject to Amazon's policies."] },
  },
  {
    q: "Is AmaBot affiliated with Amazon?",
    a: { paragraphs: ["No. AmaBot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners."] },
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="text-gradient-gold">answered</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const panelId = `faq-panel-${i}`;
            const btnId = `faq-btn-${i}`;
            return (
              <div key={f.q} className="glass rounded-2xl transition hover:border-primary/30">
                <button
                  id={btnId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full rounded-2xl px-6 py-5 text-left"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-semibold">{f.q}</span>
                    <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition ${isOpen ? "rotate-180 text-primary" : ""}`} />
                  </div>
                </button>
                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 pb-5 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {f.a.paragraphs.map((p, idx) => (
                        <p key={idx}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}


const Footer = SiteFooter;


function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 py-1 pl-1 pr-3 text-[11px] font-medium uppercase tracking-wider text-primary">
        <OptImage variants={iconImg} alt="AmaBot" width={128} height={128} sizes="20px" className="h-5 w-5 drop-shadow-[0_0_8px_oklch(0.85_0.17_88/0.6)]" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-4xl font-bold md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Landing() {
  return (
    <ComingSoonProvider>
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <Community />
      <FAQ />
      
      <Footer />
    </main>
    </ComingSoonProvider>
  );
}
