import { Link } from "@tanstack/react-router";
import { OptImage } from "@/components/opt-image";
import { iconImg, wordmarkImg } from "@/lib/optimized-images";


// Discord brand icon
function DiscordIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M20.317 4.369A19.79 19.79 0 0 0 16.558 3c-.202.36-.44.847-.604 1.234a18.27 18.27 0 0 0-5.907 0A12.51 12.51 0 0 0 9.44 3 19.74 19.74 0 0 0 5.677 4.372C2.13 9.61 1.16 14.72 1.644 19.76a19.9 19.9 0 0 0 5.995 3.03c.482-.66.912-1.363 1.283-2.104a12.87 12.87 0 0 1-2.02-.977c.17-.125.335-.256.494-.39 3.9 1.812 8.12 1.812 11.973 0 .161.134.326.265.494.39-.646.386-1.325.712-2.023.978.372.74.802 1.444 1.283 2.104a19.87 19.87 0 0 0 6-3.03c.566-5.84-.968-10.9-4.006-15.393ZM8.02 16.75c-1.184 0-2.157-1.09-2.157-2.42s.955-2.42 2.157-2.42c1.203 0 2.176 1.09 2.157 2.42 0 1.33-.954 2.42-2.157 2.42Zm7.96 0c-1.183 0-2.156-1.09-2.156-2.42s.955-2.42 2.156-2.42c1.203 0 2.176 1.09 2.156 2.42 0 1.33-.953 2.42-2.156 2.42Z" />
    </svg>
  );
}

// Telegram brand icon
function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M9.78 15.79 9.6 19.6c.44 0 .63-.19.86-.41l2.06-1.97 4.28 3.13c.78.43 1.35.2 1.55-.72l2.82-13.22c.28-1.28-.46-1.78-1.22-1.5L2.36 10.14c-1.26.49-1.24 1.19-.22 1.5l4.4 1.38 10.22-6.44c.48-.31.92-.14.56.17" />
    </svg>
  );
}

export function Logo({ size = "md" }: { size?: "md" | "lg" }) {
  const iconCls = size === "lg" ? "h-[52px] w-[52px] md:h-24 md:w-24" : "h-11 w-11";
  const wordCls = size === "lg" ? "h-8 md:h-14 w-auto translate-y-[2px]" : "h-7 w-auto translate-y-[1px]";
  const gapCls = size === "lg" ? "gap-0.5 md:gap-1.5" : "gap-0.5";
  return (
    <Link to="/" className={`flex items-center ${gapCls}`} aria-label="AmaBot home">
      <OptImage
        variants={iconImg}
        alt="AmaBot logo"
        width={384}
        height={384}
        priority
        fetchPriority="auto"
        sizes={size === "lg" ? "(min-width: 768px) 96px, 52px" : "44px"}
        className={`${iconCls} shrink-0 drop-shadow-[0_0_24px_oklch(0.85_0.17_88/0.55)]`}
      />
      <OptImage
        variants={wordmarkImg}
        alt="AmaBot wordmark"
        width={400}
        height={135}
        priority
        fetchPriority="auto"
        sizes={size === "lg" ? "(min-width: 768px) 200px, 120px" : "100px"}
        className={wordCls}
      />
    </Link>
  );
}


export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-start">
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-xs text-muted-foreground">
              AmaBot is an independent tool and is not affiliated with, endorsed by, sponsored by or officially connected to Amazon.
            </p>
            <p className="mt-2 max-w-md text-xs text-foreground/80">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
          <nav aria-label="Resources" className="flex flex-col gap-3 text-sm">
            <h2 className="text-sm font-semibold text-foreground">Resources</h2>
            <Link to="/what-is-amabot" className="cursor-pointer text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">What Is AmaBot?</Link>
            <Link to="/amazon-price-tracker" className="cursor-pointer text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">Amazon Price Tracker</Link>
            <Link to="/amazon-restock-alerts" className="cursor-pointer text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">Amazon Restock Alerts</Link>
            <Link to="/pokemon-restock-alerts" className="cursor-pointer text-muted-foreground transition hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md">Pokémon Restock Alerts</Link>
          </nav>
          <div className="flex flex-wrap items-center gap-6 text-sm md:items-start">
            <Link to="/terms" className="text-muted-foreground transition hover:text-foreground">Terms</Link>
            <Link to="/privacy" className="text-muted-foreground transition hover:text-foreground">Privacy Policy</Link>
            <Link to="/affiliate-disclosure" className="text-muted-foreground transition hover:text-foreground">Affiliate Disclosure</Link>
            <a
              href="https://discord.gg/CT9F6ZYxhx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AmaBot on Discord"
              title="Discord"
              className="text-muted-foreground transition hover:text-primary"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/amabot_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join AmaBot on Telegram"
              title="Telegram"
              className="text-muted-foreground transition hover:text-primary"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-10 border-t border-border/50 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} amabot. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
