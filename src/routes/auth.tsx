import { createFileRoute, useNavigate, useSearch } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import amabotIcon from "@/assets/amabot-icon.png";

type AuthSearch = { next?: string };

export const Route = createFileRoute("/auth")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>): AuthSearch => ({
    next: typeof s.next === "string" ? s.next : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Sign in — amabot" },
      { name: "description", content: "Sign in to your amabot account to manage tracked drops and connect external tools." },
      { property: "og:title", content: "Sign in — amabot" },
      { property: "og:description", content: "Sign in to your amabot account to manage tracked drops and connect external tools." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

// Only allow same-origin relative paths as the post-auth return target.
function safeNext(next: string | undefined): string {
  if (!next) return "/";
  try {
    if (next.startsWith("/") && !next.startsWith("//")) return next;
  } catch { /* fall through */ }
  return "/";
}

function AuthPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/auth" });
  const next = safeNext(search.next);

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);

  // If already signed in, bounce.
  useEffect(() => {
    let cancelled = false;
    supabase.auth.getSession().then(({ data }) => {
      if (!cancelled && data.session) window.location.href = next;
    });
    return () => { cancelled = true; };
  }, [next]);

  async function onEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true); setError(null); setInfo(null);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: { emailRedirectTo: window.location.origin + next },
        });
        if (error) throw error;
        setInfo("Check your inbox to confirm your email, then sign in.");
        setMode("signin");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        window.location.href = next;
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  async function onGoogle() {
    setLoading(true); setError(null);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin + next,
      });
      if (result.error) throw result.error;
      if (result.redirected) return;
      window.location.href = next;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Google sign-in failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-16">
        <a href="/" className="mb-8 flex items-center gap-3">
          <img src={amabotIcon} alt="AmaBot" className="h-14 w-14 drop-shadow-[0_0_24px_oklch(0.85_0.17_88/0.55)]" />
          <span className="text-2xl font-bold">amabot</span>
        </a>

        <div className="glass w-full rounded-3xl p-8">
          <h1 className="text-2xl font-bold">
            {mode === "signin" ? "Welcome back" : "Create your account"}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {mode === "signin"
              ? "Sign in to manage drops and connect external tools."
              : "Get instant alerts on Pokémon drops."}
          </p>

          <button
            type="button"
            onClick={onGoogle}
            disabled={loading}
            className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-white/5 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10 disabled:opacity-50"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" aria-hidden>
              <path fill="#EA4335" d="M12 10.2v3.9h5.5c-.24 1.4-1.7 4.1-5.5 4.1-3.3 0-6-2.7-6-6.1s2.7-6.1 6-6.1c1.9 0 3.1.8 3.8 1.5l2.6-2.5C16.7 3.3 14.5 2.3 12 2.3 6.7 2.3 2.4 6.6 2.4 12s4.3 9.7 9.6 9.7c5.5 0 9.2-3.9 9.2-9.4 0-.6-.1-1.1-.2-1.6H12z" />
            </svg>
            Continue with Google
          </button>

          <div className="my-6 flex items-center gap-3 text-xs text-muted-foreground">
            <div className="h-px flex-1 bg-border/60" />
            or
            <div className="h-px flex-1 bg-border/60" />
          </div>

          <form onSubmit={onEmailSubmit} className="space-y-3">
            <input
              type="email" required autoComplete="email" placeholder="trainer@email.com"
              value={email} onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-primary/30 backdrop-blur transition focus:ring-2"
            />
            <input
              type="password" required minLength={6}
              autoComplete={mode === "signup" ? "new-password" : "current-password"}
              placeholder="Password"
              value={password} onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm outline-none ring-primary/30 backdrop-blur transition focus:ring-2"
            />
            {error && <p className="text-xs text-destructive" role="alert">{error}</p>}
            {info && <p className="text-xs text-success">{info}</p>}
            <button
              type="submit" disabled={loading}
              className="w-full rounded-xl bg-gradient-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:opacity-50"
            >
              {loading ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            {mode === "signin" ? "New here?" : "Already have an account?"}{" "}
            <button
              type="button"
              onClick={() => { setMode(mode === "signin" ? "signup" : "signin"); setError(null); setInfo(null); }}
              className="font-semibold text-primary hover:underline"
            >
              {mode === "signin" ? "Create an account" : "Sign in"}
            </button>
          </p>
        </div>
      </div>
    </main>
  );
}
