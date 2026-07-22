import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Bell, Zap, ShoppingCart, Activity, SlidersHorizontal, Filter, LayoutDashboard,
  ArrowRight, Sparkles, MessageCircle, Send,
  ChevronDown, Download,
} from "lucide-react";
import dashboardAsset from "@/assets/amabot-dashboard-3d.png.asset.json";
const dashboardImg = dashboardAsset.url;
import heroGlow from "@/assets/hero-glow.jpg";
import amabotDemo from "@/assets/amabot-demo.mp4.asset.json";
import amabotDemoPoster from "@/assets/amabot-demo-poster.jpg.asset.json";
import { Logo, SiteFooter } from "@/components/site-chrome";
import amabotIcon from "@/assets/amabot-icon.png";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    ["What is amabot?", "amabot is a free Amazon auto checkout bot and Amazon restock bot designed to help users secure high-demand products as quickly as possible. It continuously checks product availability and pricing according to your settings and can either notify you or automatically place an order when an eligible offer matches your rules."],
    ["Why is amabot free?", "amabot is a free Amazon auto checkout bot because we may earn affiliate commissions from qualifying purchases made through Amazon, at no additional cost to you. These commissions help us develop new features, release updates, and improve the platform while keeping it free for users."],
    ["Do you store my personal information?", "amabot does not store your Amazon credentials or payment information on our servers. Your Amazon session runs locally on your computer through a separate browser session. Product links, buying rules, and preferences may be saved locally on your device."],
    ["What is Register Passkey?", "Register Passkey helps maintain a secure, persistent Amazon session inside amabot's separate browser. It reduces repeated sign-ins, although Amazon may occasionally request additional verification."],
    ["Can I monitor multiple products?", "Yes. You can add multiple Amazon products and configure different buying rules for each one. As an Amazon price tracker, amabot checks products in rotation, allowing approximately five seconds per product."],
    ["What's the difference between Monitor Only and Auto-buy?", "Monitor Only sends Amazon restock alerts when a product meets your conditions and never places orders. Auto-buy works as an Amazon auto buy tool that automatically places an order when an eligible offer matches your rules, continuing until your configured order target has been reached."],

    ["Which shipping address will amabot use?", "By default, amabot uses the default shipping address configured in your Amazon account. Make sure it is correct before enabling Auto-buy."],
    ["Which payment method will amabot use?", "amabot uses the default payment method configured in your Amazon account. If you have an available Amazon Gift Card balance, Amazon may apply that balance before charging your default payment method."],
    ["Can I switch Amazon accounts?", "Yes. You can sign out and switch Amazon accounts at any time from the Settings page. You may need to register a new passkey after connecting a different account."],
    ["Is my Amazon account at risk?", "Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. amabot follows safer automation practices but no tool can guarantee that an account will never be affected."],
    ["How do I update amabot?", "amabot updates automatically in the background. To verify that you are running the latest version, use the \"Check for Updates\" button on the Settings page."],
    ["Does amabot guarantee successful purchases?", "No. Product availability, checkout speed, Amazon restrictions, and competition from other buyers can affect the outcome. amabot can improve your chances but cannot guarantee a successful purchase."],
    ["Do I need to keep my computer running?", "Yes. Because amabot runs locally, your computer, internet connection, and amabot session must remain active while monitoring or automatic purchasing is enabled."],
    ["What happens after an order is placed?", "The order will appear directly in your Amazon account. Shipping changes, cancellations, returns, and refunds must be managed through Amazon and are subject to Amazon's policies."],
    ["Is amabot affiliated with Amazon?", "No. amabot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners."],
  ].map(([q, a]) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Free Amazon Auto Checkout Bot & Restock Monitor | amabot" },
      { name: "description", content: "Never miss an Amazon drop again. Set your price, quantity, and buying rules, then let amabot automatically purchase matching offers - completely free." },
      { property: "og:title", content: "Free Amazon Auto Checkout Bot & Restock Monitor | amabot" },
      { property: "og:description", content: "Never miss an Amazon drop again. Set your price, quantity, and buying rules, then let amabot automatically purchase matching offers - completely free." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://amabot.app/" },
    ],
    links: [{ rel: "canonical", href: "https://amabot.app/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
    ],
  }),
  component: Landing,
});



function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto mt-4 max-w-6xl px-4">
        <div className="glass flex items-center justify-between gap-2 rounded-2xl px-3 py-3 md:px-5 md:py-4">
          <Logo size="lg" />

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground transition">Features</a>
            <a href="#how" className="hover:text-foreground transition">How it works</a>
            <a href="#community" className="hover:text-foreground transition">Community</a>
            <a href="#faq" className="hover:text-foreground transition">FAQ</a>
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <a href="#cta" aria-label="Download amabot desktop application (free)" className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-gold px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow-sm transition hover:shadow-glow md:px-5 md:py-2.5 md:text-sm">
              Free Download
              <Download aria-hidden className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const startPlayback = () => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {
      /* ignore autoplay rejections */
    });
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-10 md:pt-44 md:pb-20">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <img src={heroGlow} alt="" aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] w-full object-cover opacity-30 mix-blend-screen" />

      <div className="relative mx-auto max-w-6xl px-4 text-center">


        <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Never Miss An <br className="hidden md:block" />
          <span className="text-gradient-gold">Amazon Drop</span> Again
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Track any product, set your target price, and choose between alerts or automatic purchasing.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#cta" aria-label="Download amabot desktop application (free)" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            Free Download
            <Download aria-hidden className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10">
            See How It Works
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">Always free • No credit card required</p>

        {/* Product demo video */}
        <div className="relative mx-auto mt-10 max-w-5xl md:mt-16">
          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="relative w-full overflow-hidden rounded-2xl border border-white/5" style={{ aspectRatio: "16 / 9" }}>
              <video
                ref={videoRef}
                src={amabotDemo.url}
                poster={amabotDemoPoster.url}
                controls
                playsInline
                preload="metadata"
                onPlay={() => setPlaying(true)}
                onPause={() => setPlaying(false)}
                onEnded={() => setPlaying(false)}
                className="absolute inset-0 h-full w-full object-cover"
              />
              {!playing && (
                <>
                  <img
                    src={amabotDemoPoster.url}
                    alt="Free Amazon auto checkout bot demo showing amabot dashboard, restock alerts, and buying rules"
                    aria-hidden
                    onClick={startPlayback}
                    className="absolute inset-0 h-full w-full cursor-pointer object-cover"
                  />
                  <div className="pointer-events-none absolute inset-0 z-10 grid place-items-center">
                    <button
                      type="button"
                      onClick={startPlayback}
                      aria-label="Play amabot demo video"
                      style={{ aspectRatio: "1 / 1", boxSizing: "border-box", padding: 0, lineHeight: 0, flexShrink: 0 }}
                      className="pointer-events-auto group grid h-[60px] w-[60px] place-items-center rounded-full border border-primary/40 bg-black/50 text-white shadow-[0_0_30px_oklch(0.85_0.17_88_/_0.35)] backdrop-blur-md transition-transform duration-200 hover:scale-110 hover:shadow-[0_0_50px_oklch(0.85_0.17_88_/_0.6)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-black motion-safe:animate-pulse-glow md:h-[74px] md:w-[74px]"
                    >
                      <span
                        aria-hidden
                        className="block h-0 w-0 translate-x-[2px] border-y-[9px] border-l-[14px] border-y-transparent border-l-white md:border-y-[11px] md:border-l-[17px]"
                      />
                    </button>
                  </div>
                </>
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
    <section className="relative overflow-x-clip pt-6 pb-12 md:pt-10 md:pb-20">
      <div className="mx-auto max-w-6xl px-4">
        <p
          className="mx-auto mb-10 text-pretty text-center font-medium text-white px-2 md:mb-14"
          style={{ maxWidth: "900px", fontSize: "clamp(17px, 1.4vw, 21px)", lineHeight: 1.6 }}
        >
          amabot is a <span className="text-gradient-gold font-semibold">free Amazon auto checkout bot</span> and <span className="text-gradient-gold font-semibold">product monitor</span>. Track product availability and prices, receive restock alerts, or enable automatic purchasing when an offer matches your rules.
        </p>
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <img src={dashboardImg} alt="amabot Amazon auto checkout bot and product monitoring dashboard tracking Pokémon prices and restock alerts" width={1600} height={1100} fetchPriority="high" decoding="async" className="w-full" />
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
  { icon: Activity, title: "Always-On Monitoring", desc: "Add your Amazon products and amabot continuously checks their latest prices and available offers." },
  { icon: SlidersHorizontal, title: "Custom Buying Rules", desc: "Set a maximum price, quantity, purchase limit, and buying preferences for every product." },
  { icon: ShoppingCart, title: "Automatic Purchasing", desc: "When an eligible offer matches all your rules, amabot can automatically place the order for you." },
  { icon: Bell, title: "Monitor-Only Alerts", desc: "Prefer to stay in control? Receive an update when a matching opportunity appears without making a purchase." },
  { icon: Filter, title: "Seller & Price Filters", desc: "Choose Amazon-only or any eligible seller while checking the complete price, including shipping." },
  { icon: LayoutDashboard, title: "Live Activity Dashboard", desc: "Follow prices, offers, eligibility, checks, and purchase status from one clear dashboard." },
];

function Features() {
  return (
    <section id="features" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Features" title={<>Set your rules.<br />amabot acts <span className="text-gradient-gold">when the price is right.</span></>} sub="Choose the products you want, define your buying rules, and let amabot monitor Amazon continuously. Get notified or buy automatically when the right offer appears." />




        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="group glass relative overflow-hidden rounded-2xl p-6 transition hover:border-primary/40">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-primary/10 opacity-0 blur-2xl transition group-hover:opacity-100" />
              <div className="relative">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
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
  { n: "01", title: "Create your amabot account", desc: "Sign up for amabot to access your dashboard and begin the quick setup process." },
  { n: "02", title: "Connect your Amazon account", desc: "Securely connect your Amazon account and register a passkey for a reliable, persistent connection with fewer interruptions." },
  { n: "03", title: "Confirm shipping and payment", desc: "Make sure your default Amazon shipping address and payment method are the ones you want amabot to use." },
  { n: "04", title: "Add your product", desc: "Paste the Amazon link for the product you want amabot to monitor or purchase." },
  { n: "05", title: "Set your buying rules", desc: "Choose your target price, quantity, and whether amabot should notify you or purchase automatically." },
  { n: "06", title: "Press Start", desc: "Start the engine and you're done. amabot will monitor the product and act when all your rules are met." },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="How it works" title={<>Six simple steps.<br /><span className="text-gradient-gold">amabot handles the rest.</span></>} sub="Connect your Amazon account, set your buying rules, and start monitoring in just a few minutes." />

        <div className="relative mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Desktop row connectors */}
          <div className="pointer-events-none absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" />
          <div className="pointer-events-none absolute left-0 right-0 bottom-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent lg:block" style={{ top: "auto", bottom: "calc(50% - 8rem)" }} />
          {/* Mobile vertical timeline */}
          <div className="pointer-events-none absolute left-10 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:hidden" />
          {steps.map((s) => (
            <div key={s.n} className="glass group relative flex h-full flex-col rounded-2xl p-6 transition hover:border-primary/40 hover:shadow-glow-sm">
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

const stats = [
  { n: "10,000+", l: "Alerts sent" },
  { n: "2,500+", l: "Collectors joined" },
  { n: "4,800+", l: "Drops caught" },
  { n: "<800ms", l: "Avg checkout time" },
];

function SocialProof() {
  return (
    <section className="relative py-10 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="glass-gold relative overflow-hidden rounded-3xl p-10 md:p-14">
          <img src={amabotIcon} alt="" aria-hidden className="pointer-events-none absolute -left-10 -top-10 h-48 w-48 opacity-[0.07]" />
          <img src={amabotIcon} alt="" aria-hidden className="pointer-events-none absolute -right-10 -bottom-10 h-48 w-48 opacity-[0.07]" />
          <div className="relative grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-3xl font-bold text-gradient-gold md:text-5xl">{s.n}</div>
                <div className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section id="community" className="relative py-14 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Community" title={<>Built By Collectors, <br /> <span className="text-gradient-gold">For Collectors</span></>} sub="Connect with the amabot community, get help, and stay up to date through Discord and Telegram." />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <CommunityCard
            icon={<MessageCircle className="h-6 w-6" />}
            name="Discord"
            label="Community & Support"
            desc="Ask questions, get setup help, share feedback, and connect with other amabot users."
            cta="Join Discord"
            href="https://discord.gg/CT9F6ZYxhx"
          />
          <CommunityCard
            icon={<Send className="h-6 w-6" />}
            name="Telegram"
            label="News & Updates"
            desc="Follow amabot for product updates, announcements, and important news delivered directly to Telegram."
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
    q: "What is amabot?",
    a: { paragraphs: ["amabot is a free Amazon auto checkout bot and Amazon restock bot designed to help users secure high-demand products as quickly as possible. It continuously checks product availability and pricing according to your settings and can either notify you or automatically place an order when an eligible offer matches your rules."] },
  },
  {
    q: "Why is amabot free?",
    a: { paragraphs: ["amabot is a free Amazon auto checkout bot because we may earn affiliate commissions from qualifying purchases made through Amazon, at no additional cost to you. These commissions help us develop new features, release updates, and improve the platform while keeping it free for users."] },
  },
  {
    q: "Do you store my personal information?",
    a: { paragraphs: ["amabot does not store your Amazon credentials or payment information on our servers. Your Amazon session runs locally on your computer through a separate browser session. Product links, buying rules, and preferences may be saved locally on your device."] },
  },
  {
    q: "What is Register Passkey?",
    a: { paragraphs: ["Register Passkey helps maintain a secure, persistent Amazon session inside amabot's separate browser. It reduces repeated sign-ins, although Amazon may occasionally request additional verification."] },
  },
  {
    q: "Can I monitor multiple products?",
    a: { paragraphs: [
      "Yes. You can add multiple Amazon products and configure different buying rules for each one.",
      "As an Amazon price tracker, amabot checks products in rotation, allowing approximately five seconds per product. This means the interval between checks for the same product increases as you add more products: one product is checked about every 5 seconds, two products about every 10 seconds, three products about every 15 seconds, and so on.",
    ] },
  },
  {
    q: "What's the difference between Monitor Only and Auto-buy?",
    a: { paragraphs: [
      <><span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Monitor Only</span><span className="mt-2 block">amabot checks for matching offers and sends Amazon restock alerts when a product meets your configured conditions. Purchases are never made automatically.</span></>,
      <><span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">Auto-buy</span><span className="mt-2 block">Working as an Amazon auto buy tool, amabot automatically places an order when an eligible offer matches your configured conditions. It continues purchasing until your configured order target has been reached.</span></>,
    ] },
  },

  {
    q: "Which shipping address will amabot use?",
    a: { paragraphs: ["By default, amabot uses the default shipping address configured in your Amazon account. Make sure it is correct before enabling Auto-buy."] },
  },
  {
    q: "Which payment method will amabot use?",
    a: { paragraphs: ["amabot uses the default payment method configured in your Amazon account. If you have an available Amazon Gift Card balance, Amazon may apply that balance before charging your default payment method."] },
  },
  {
    q: "Can I switch Amazon accounts?",
    a: { paragraphs: ["Yes. You can sign out and switch Amazon accounts at any time from the Settings page. You may need to register a new passkey after connecting a different account."] },
  },
  {
    q: "Is my Amazon account at risk?",
    a: { paragraphs: ["Any automated interaction with Amazon may carry some risk, and Amazon may occasionally request verification or restrict certain activity. amabot is designed with account safety as a priority and follows safer automation practices to reduce unnecessary activity, but no tool can guarantee that an account will never be affected."] },
  },
  {
    q: "How do I update amabot?",
    a: { paragraphs: ["amabot updates automatically in the background. To verify that you are running the latest version, use the \u201CCheck for Updates\u201D button on the Settings page."] },
  },
  {
    q: "Does amabot guarantee successful purchases?",
    a: { paragraphs: ["No. Product availability, checkout speed, Amazon restrictions, and competition from other buyers can affect the outcome. amabot can improve your chances of securing a product but cannot guarantee a successful purchase."] },
  },
  {
    q: "Do I need to keep my computer running?",
    a: { paragraphs: ["Yes. Because amabot runs locally, your computer, internet connection, and amabot session must remain active while monitoring or automatic purchasing is enabled."] },
  },
  {
    q: "What happens after an order is placed?",
    a: { paragraphs: ["The order will appear directly in your Amazon account. Shipping changes, cancellations, returns, and refunds must be managed through Amazon and are subject to Amazon's policies."] },
  },
  {
    q: "Is amabot affiliated with Amazon?",
    a: { paragraphs: ["No. amabot is an independent tool and is not endorsed by, sponsored by, or affiliated with Amazon. Amazon and its related trademarks belong to their respective owners."] },
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
                {isOpen && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className="px-6 pb-5 space-y-3 text-sm leading-relaxed text-muted-foreground animate-fade-in"
                  >
                    {f.a.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                )}
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
        <img src={amabotIcon} alt="amabot brand icon" className="h-5 w-5 drop-shadow-[0_0_8px_oklch(0.85_0.17_88/0.6)]" />
        {eyebrow}
      </div>
      <h2 className="mt-5 text-balance text-4xl font-bold md:text-5xl">{title}</h2>
      {sub && <p className="mx-auto mt-4 max-w-xl text-muted-foreground">{sub}</p>}
    </div>
  );
}

function Landing() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Features />
      <DashboardShowcase />
      <HowItWorks />
      <SocialProof />
      <Community />
      <FAQ />
      
      <Footer />
    </main>
  );
}
