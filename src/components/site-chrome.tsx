import { Link } from "@tanstack/react-router";
import amabotIcon from "@/assets/amabot-icon.png";
import amabotWordmark from "@/assets/amabot-wordmark.png";

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
  const iconCls = size === "lg" ? "h-11 w-11 md:h-24 md:w-24" : "h-14 w-14";
  const wordCls = size === "lg" ? "h-7 md:h-14 w-auto" : "h-10 w-auto";
  return (
    <Link to="/" className="flex items-center gap-2 md:gap-3" aria-label="amabot home">
      <img src={amabotIcon} alt="" className={`${iconCls} shrink-0 drop-shadow-[0_0_24px_oklch(0.85_0.17_88/0.55)]`} />
      <img src={amabotWordmark} alt="amabot wordmark" className={wordCls} />
    </Link>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Logo />
            <p className="mt-3 max-w-md text-xs text-muted-foreground">
              amabot is an independent tool and is not affiliated with, endorsed by, or sponsored by Amazon.
            </p>
            <p className="mt-2 max-w-md text-xs text-foreground/80">
              As an Amazon Associate I earn from qualifying purchases.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-sm">
            <Link to="/terms" className="text-muted-foreground transition hover:text-foreground">Terms</Link>
            <Link to="/privacy" className="text-muted-foreground transition hover:text-foreground">Privacy Policy</Link>
            <Link to="/affiliate-disclosure" className="text-muted-foreground transition hover:text-foreground">Affiliate Disclosure</Link>
            <a
              href="https://discord.gg/CT9F6ZYxhx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join amabot on Discord"
              title="Discord"
              className="text-muted-foreground transition hover:text-primary"
            >
              <DiscordIcon className="h-5 w-5" />
            </a>
            <a
              href="https://t.me/amabot_app"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Join amabot on Telegram"
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
