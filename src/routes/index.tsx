import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Bell, Zap, ShoppingCart, Activity, SlidersHorizontal, Filter, LayoutDashboard,
  ArrowRight, Sparkles, MessageCircle, Send,
  ChevronDown, Twitter, Github, Download,
} from "lucide-react";
import dashboardAsset from "@/assets/amabot-dashboard-3d.png.asset.json";
const dashboardImg = dashboardAsset.url;
import heroGlow from "@/assets/hero-glow.jpg";
import amabotIcon from "@/assets/amabot-icon.png";
import amabotWordmark from "@/assets/amabot-wordmark.png";
import amabotDemo from "@/assets/amabot-demo.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AmaBot — Never Miss A Pokémon Drop Again" },
      { name: "description", content: "Real-time Amazon Pokémon deal alerts and ultra-fast auto checkout for collectors who refuse to miss rare drops." },
      { property: "og:title", content: "AmaBot — Never Miss A Pokémon Drop Again" },
      { property: "og:description", content: "Real-time Amazon Pokémon deal alerts and ultra-fast auto checkout for collectors." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Landing,
});

function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const iconCls = size === "lg" ? "h-11 w-11 md:h-24 md:w-24" : "h-14 w-14";
  const wordCls = size === "lg" ? "h-7 md:h-14 w-auto" : "h-10 w-auto";
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <img src={amabotIcon} alt="" className={`${iconCls} shrink-0 drop-shadow-[0_0_24px_oklch(0.85_0.17_88/0.55)]`} />
      <img src={amabotWordmark} alt="AmaBot" className={wordCls} />
    </div>
  );
}


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
            <a href="#cta" className="group inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-gradient-gold px-3 py-2 text-xs font-semibold text-primary-foreground shadow-glow-sm transition hover:shadow-glow md:px-5 md:py-2.5 md:text-sm">
              Free Download
              <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <img src={heroGlow} alt="" aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[700px] w-full object-cover opacity-30 mix-blend-screen" />

      <div className="relative mx-auto max-w-6xl px-4 text-center">


        <h1 className="mt-6 text-balance text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          Never Miss A <br className="hidden md:block" />
          <span className="text-gradient-gold">Pokémon Drop</span> Again
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
          Real-time Amazon Pokémon deal alerts and ultra-fast auto checkout for collectors who refuse to miss rare drops.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="#cta" className="group inline-flex items-center gap-2 rounded-xl bg-gradient-gold px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
            Free Download
            <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/5 px-6 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition hover:bg-white/10">
            See How It Works
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">Free during beta • No card required</p>

        {/* Product demo video */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <video
                src={amabotDemo.url}
                controls
                playsInline
                preload="metadata"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function DashboardShowcase() {
  return (
    <section className="relative py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="relative mx-auto max-w-5xl">
          <div className="absolute -inset-x-10 -inset-y-10 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
          <div className="glass overflow-hidden rounded-3xl p-2 shadow-card">
            <div className="overflow-hidden rounded-2xl border border-white/5">
              <img src={dashboardImg} alt="AmaBot dashboard showing Pokémon product tracking and alerts" width={1600} height={1100} className="w-full" />
            </div>
          </div>
          <FloatingAlert className="hidden md:flex absolute -left-6 top-[18%] animate-float" icon={<Bell className="h-4 w-4" />} title="151 ETB" subtitle="In stock • $59.99" />
          <FloatingAlert className="hidden md:flex absolute -right-8 top-[38%] animate-float [animation-delay:0.6s]" icon={<Zap className="h-4 w-4" />} title="Restock Alert" subtitle="Prismatic Evolutions • 3 units" />
          <FloatingAlert className="hidden md:flex absolute -left-4 top-[58%] animate-float [animation-delay:1.2s]" icon={<Sparkles className="h-4 w-4" />} title="ASCENDED HEROES" subtitle="Deal found • -22% off" />
          <FloatingAlert className="hidden md:flex absolute -right-4 bottom-[14%] animate-float [animation-delay:1.8s]" icon={<ShoppingCart className="h-4 w-4" />} title="Auto-buy success" subtitle="Order #A28-91" success />
        </div>
      </div>
    </section>
  );
}

function FloatingAlert({ icon, title, subtitle, success, className = "" }: { icon: React.ReactNode; title: string; subtitle: string; success?: boolean; className?: string }) {
  return (
    <div className={`glass-gold flex items-center gap-3 rounded-2xl px-4 py-3 shadow-glow-sm ${className}`}>
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${success ? "bg-success/20 text-success" : "bg-primary/20 text-primary"}`}>
        {icon}
      </div>
      <div className="text-left">
        <div className="text-xs font-semibold">{title}</div>
        <div className="text-[10px] text-muted-foreground">{subtitle}</div>
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
  { icon: LayoutDashboard, title: "Live Activity Dashboard", desc: "Follow prices, offers, eligibility, checks, blocks, and purchase status from one clear dashboard." },
];

function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Features" title={<>Set your rules.<br />Let amabot <span className="text-gradient-gold">do the watching.</span></>} sub="Choose the products you want, define your buying rules, and let amabot monitor Amazon continuously. Get notified or buy automatically when the right offer appears." />

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
  { n: "01", title: "Track Pokémon products", desc: "Pick the booster boxes, ETBs, and tins you want. Add as many as you like." },
  { n: "02", title: "Receive instant alerts", desc: "We watch Amazon 24/7. The moment something drops, you get pinged." },
  { n: "03", title: "AmaBot secures the drop", desc: "Auto-checkout fires in milliseconds — before it sells out." },
];

function HowItWorks() {
  return (
    <section id="how" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="How it works" title={<>Three steps from <span className="text-gradient-gold">tracked</span> to <span className="text-gradient-gold">secured</span></>} sub="No spreadsheets. No refresh-spamming. No FOMO." />

        <div className="relative mt-14 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block" />
          {steps.map((s) => (
            <div key={s.n} className="glass relative rounded-2xl p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-gold text-lg font-bold text-primary-foreground shadow-glow-sm">
                {s.n}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
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
    <section className="relative py-20">
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
    <section id="community" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Community" title={<>Built By Collectors, <br /> <span className="text-gradient-gold">For Collectors</span></>} sub="Join thousands of trainers trading intel, drop tips, and pulls in real-time." />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <CommunityCard
            icon={<MessageCircle className="h-6 w-6" />}
            name="Discord"
            members="1,840 members"
            desc="Live drop pings, pull threads, restock chatter, and direct line to the team."
            tagline="Most active channel"
          />
          <CommunityCard
            icon={<Send className="h-6 w-6" />}
            name="Telegram"
            members="690 members"
            desc="Lightweight, fast push alerts straight to your phone. Perfect for collectors on the move."
            tagline="Instant on mobile"
          />
        </div>
      </div>
    </section>
  );
}

function CommunityCard({ icon, name, members, desc, tagline }: { icon: React.ReactNode; name: string; members: string; desc: string; tagline: string }) {
  return (
    <div className="group glass relative overflow-hidden rounded-3xl p-8 transition hover:border-primary/40">
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition group-hover:bg-primary/20" />
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary ring-1 ring-primary/20">
            {icon}
          </div>
          <div>
            <div className="text-xl font-semibold">{name}</div>
            <div className="text-xs text-muted-foreground">{members}</div>
          </div>
        </div>
        <span className="rounded-full bg-success/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-success">
          {tagline}
        </span>
      </div>
      <p className="relative mt-6 text-sm leading-relaxed text-muted-foreground">{desc}</p>
      <button className="relative mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition group-hover:gap-2.5">
        Join {name} <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}

const faqs = [
  { q: "How fast are the alerts?", a: "Most alerts hit your device within 200–500ms of Amazon updating stock. Auto-checkout typically completes in under 800ms." },
  { q: "Which Amazon products are supported?", a: "All Pokémon TCG: booster boxes, ETBs, collector tins, special collections, Crown Zenith, 151, Surging Sparks, and any new sets the moment they list." },
  { q: "Is auto-buy safe?", a: "Yes. AmaBot uses your official Amazon session via secure browser extension — no password sharing, no third-party checkout. Same trust level as 1-Click ordering." },
  { q: "When does early access open?", a: "Early access is rolling out now. Join the waitlist and you'll get an invite within 1–2 weeks, along with founding-member pricing locked in." },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4">
        <SectionHeader eyebrow="FAQ" title={<>Questions, <span className="text-gradient-gold">answered</span></>} />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <button
              key={f.q}
              onClick={() => setOpen(open === i ? null : i)}
              className="glass w-full rounded-2xl px-6 py-5 text-left transition hover:border-primary/30"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold">{f.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition ${open === i ? "rotate-180 text-primary" : ""}`} />
              </div>
              {open === i && (
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground animate-fade-in">{f.a}</p>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}


function Footer() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-sm text-xs text-muted-foreground">
              AmaBot is an independent tool and is not affiliated with, endorsed by, or sponsored by Amazon.com, Inc. or The Pokémon Company. As an Amazon Associate we may earn from qualifying purchases.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <a href="#" className="text-muted-foreground transition hover:text-foreground">Terms</a>
            <a href="#" className="text-muted-foreground transition hover:text-foreground">Privacy Policy</a>
            <a href="#" className="text-muted-foreground transition hover:text-foreground">Affiliate Disclosure</a>
            <a href="#" aria-label="Twitter" className="text-muted-foreground transition hover:text-primary"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Discord" className="text-muted-foreground transition hover:text-primary"><MessageCircle className="h-4 w-4" /></a>
            <a href="#" aria-label="GitHub" className="text-muted-foreground transition hover:text-primary"><Github className="h-4 w-4" /></a>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} AmaBot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 py-1 pl-1 pr-3 text-[11px] font-medium uppercase tracking-wider text-primary">
        <img src={amabotIcon} alt="" className="h-5 w-5 drop-shadow-[0_0_8px_oklch(0.85_0.17_88/0.6)]" />
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
