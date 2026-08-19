import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { OptImage } from "@/components/opt-image";
import { iconImg } from "@/lib/optimized-images";

type Ctx = { open: () => void };
const ComingSoonCtx = createContext<Ctx>({ open: () => {} });

export function useComingSoon() {
  return useContext(ComingSoonCtx);
}

export function ComingSoonProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLElement | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const open = useCallback(() => {
    triggerRef.current = (document.activeElement as HTMLElement) ?? null;
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus?.();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        close();
        return;
      }
      if (e.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const items = panel.querySelectorAll<HTMLElement>(
        'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])',
      );
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;
      if (e.shiftKey && (active === first || active === panel)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close]);

  return (
    <ComingSoonCtx.Provider value={{ open }}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={close}
        >
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md animate-in fade-in duration-200" />
          <div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="coming-soon-title"
            aria-describedby="coming-soon-desc"
            tabIndex={-1}
            onClick={(e) => e.stopPropagation()}
            className="glass relative w-full max-w-sm rounded-2xl border border-primary/25 p-6 text-center shadow-glow outline-none animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              type="button"
              onClick={close}
              aria-label="Close dialog"
              className="absolute right-3 top-3 cursor-pointer rounded-lg p-2 text-muted-foreground transition hover:bg-white/10 hover:text-foreground"
            >
              <X aria-hidden className="pointer-events-none h-4 w-4" />
            </button>

            <OptImage
              variants={iconImg}
              alt="AmaBot"
              width={384}
              height={384}
              sizes="64px"
              className="mx-auto h-16 w-16 drop-shadow-[0_0_24px_oklch(0.85_0.17_88/0.55)]"
            />

            <h2 id="coming-soon-title" className="mt-3 text-2xl font-bold tracking-tight text-gradient-gold">
              Coming Soon
            </h2>
            <p id="coming-soon-desc" className="mx-auto mt-3 max-w-xs text-sm text-muted-foreground">
              AmaBot is almost ready. Follow us on X to be the first to know when it launches.
            </p>

            <a
              href="https://x.com/amabot_app"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-gold px-5 py-3 text-sm font-semibold text-primary-foreground shadow-glow-sm transition hover:shadow-glow"
            >
              Follow us on X
            </a>
            <button
              type="button"
              onClick={close}
              className="mt-2 w-full cursor-pointer rounded-xl px-5 py-2.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </ComingSoonCtx.Provider>
  );
}
