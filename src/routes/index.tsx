import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Bell, Zap, ShoppingCart, Package, LineChart, Users,
  ArrowRight, Check, Sparkles, Shield, MessageCircle, Send,
  ChevronDown, Twitter, Github, Download, LogOut,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import dashboardImg from "@/assets/dashboard-mockup.jpg";
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

function AccountButton() {
  const [email, setEmail] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setEmail(data.session?.user.email ?? null);
      setReady(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setEmail(session?.user.email ?? null);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  if (!ready) return <div className="h-8 w-20 shrink-0" aria-hidden />;
  if (!email) {
    return (
      <a href="/auth" className="hidden shrink-0 items-center rounded-xl border border-border bg-white/5 px-3 py-2 text-xs font-semibold text-foreground backdrop-blur transition hover:bg-white/10 sm:inline-flex md:px-4 md:text-sm">
        Sign in
      </a>
    );
  }
  return (
    <button
      type="button"
      onClick={() => supabase.auth.signOut()}
      title={`Signed in as ${email} — click to sign out`}
      className="hidden shrink-0 items-center gap-1.5 rounded-xl border border-border bg-white/5 px-3 py-2 text-xs font-semibold text-foreground backdrop-blur transition hover:bg-white/10 sm:inline-flex md:px-4 md:text-sm"
    >
      <LogOut className="h-3.5 w-3.5" />
      Sign out
    </button>
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
            <AccountButton />
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
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs text-primary backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Live • 1,284 collectors online
        </div>


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
                autoPlay
                muted
                loop
                playsInline
                controls
                className="w-full"
              />
            </div>
          </div>
          {/* Floating alert cards */}
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
          <FloatingAlert className="hidden md:flex absolute -left-6 top-1/4 animate-float" icon={<Bell className="h-4 w-4" />} title="151 ETB" subtitle="In stock • $59.99" />
          <FloatingAlert className="hidden md:flex absolute -right-4 top-1/2 animate-float [animation-delay:1s]" icon={<ShoppingCart className="h-4 w-4" />} title="Auto-buy success" subtitle="Order #A28-91" success />
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
  { icon: Bell, title: "Real-Time Restock Alerts", desc: "The moment Amazon refills stock, you know. Push, SMS, Discord — your choice." },
  { icon: Zap, title: "Instant Deal Notifications", desc: "Price drops, lightning deals, and hidden warehouse listings surfaced in milliseconds." },
  { icon: ShoppingCart, title: "Ultra-Fast Auto Checkout", desc: "Pre-loaded cart, address, and payment. Secures the drop in under 800ms." },
  { icon: Package, title: "Pokémon Product Tracking", desc: "Booster boxes, ETBs, collector tins, Crown Zenith, 151 — every SKU monitored." },
  { icon: LineChart, title: "Smart Price Monitoring", desc: "Historical pricing data so you only buy when it's actually a deal." },
  { icon: Users, title: "Community Driven Drops", desc: "Collectors share intel. Get tipped off on drops before they hit feeds." },
];

function Features() {
  return (
    <section id="features" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Features" title={<>Built for the <span className="text-gradient-gold">fastest</span> collectors</>} sub="Every feature engineered to put you one step ahead of bots, scalpers, and sold-out signs." />

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

function CTA() {
  return (
    <section id="cta" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4">
        <div className="glass-gold relative overflow-hidden rounded-[2rem] p-10 text-center md:p-16">
          <div className="absolute inset-0 -z-10 bg-gradient-radial-glow" style={{ background: "var(--gradient-radial-glow)" }} />
          <img src={amabotIcon} alt="" aria-hidden className="pointer-events-none absolute -right-16 -bottom-16 h-72 w-72 opacity-[0.08]" />
          <img src={amabotIcon} alt="AmaBot" className="mx-auto h-20 w-20 drop-shadow-[0_0_30px_oklch(0.85_0.17_88/0.6)]" />
          <h2 className="mt-6 text-balance text-3xl font-bold md:text-5xl">
            The next drop is <span className="text-gradient-gold">already loading</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Join early access. Lock in founding-member pricing. Catch every Pokémon drop before it sells out.
          </p>
          <form className="mx-auto mt-8 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              required
              placeholder="trainer@email.com"
              className="flex-1 rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-primary/30 backdrop-blur transition focus:ring-2"
            />
            <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-gold px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02]">
              Free Download <Download className="h-4 w-4 transition group-hover:translate-y-0.5" />
            </button>
          </form>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> No card required</span>
            <span className="inline-flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-success" /> Cancel anytime</span>
            <span className="inline-flex items-center gap-1.5"><Shield className="h-3.5 w-3.5 text-success" /> Secure checkout</span>
          </div>
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
      <CTA />
      <Footer />
    </main>
  );
}
