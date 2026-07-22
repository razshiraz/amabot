import { createFileRoute, redirect } from "@tanstack/react-router";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import amabotIcon from "@/assets/amabot-icon.png";

// The Supabase JS client's OAuth namespace is beta and not yet in the public
// types. Wrap the three methods we call so the rest of the route stays typed.
type AuthorizationDetails = {
  client?: { name?: string; redirect_uri?: string } | null;
  scopes?: string[] | null;
  redirect_url?: string | null;
  redirect_to?: string | null;
};
type OAuthResult = { data: AuthorizationDetails | null; error: { message: string } | null };
type OAuthNamespace = {
  getAuthorizationDetails: (id: string) => Promise<OAuthResult>;
  approveAuthorization: (id: string) => Promise<OAuthResult>;
  denyAuthorization: (id: string) => Promise<OAuthResult>;
};
function oauth(): OAuthNamespace {
  return (supabase.auth as unknown as { oauth: OAuthNamespace }).oauth;
}

type ConsentSearch = { authorization_id: string };

export const Route = createFileRoute("/.lovable/oauth/consent")({
  ssr: false,
  validateSearch: (s: Record<string, unknown>): ConsentSearch => ({
    authorization_id: typeof s.authorization_id === "string" ? s.authorization_id : "",
  }),
  beforeLoad: async ({ search, location }) => {
    if (!search.authorization_id) throw new Error("Missing authorization_id");
    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      const next = location.pathname + location.searchStr;
      throw redirect({ to: "/auth", search: { next } });
    }
  },
  loader: async ({ location }) => {
    const authorizationId = new URLSearchParams(location.search).get("authorization_id")!;
    const { data, error } = await oauth().getAuthorizationDetails(authorizationId);
    if (error) throw new Error(error.message);
    const immediate = data?.redirect_url ?? data?.redirect_to;
    if (immediate && !data?.client) throw redirect({ href: immediate });
    return data;
  },
  component: Consent,
  errorComponent: ({ error }) => (
    <main className="mx-auto max-w-md p-8 text-center">
      <h1 className="text-xl font-bold">Could not load this authorization request</h1>
      <p className="mt-3 text-sm text-muted-foreground">{String((error as Error)?.message ?? error)}</p>
      <a href="/" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">Back to AmaBot</a>
    </main>
  ),
});

function Consent() {
  const details = Route.useLoaderData();
  const { authorization_id } = Route.useSearch();
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function decide(approve: boolean) {
    setBusy(true); setError(null);
    const { data, error } = approve
      ? await oauth().approveAuthorization(authorization_id)
      : await oauth().denyAuthorization(authorization_id);
    if (error) { setBusy(false); setError(error.message); return; }
    const target = data?.redirect_url ?? data?.redirect_to;
    if (!target) { setBusy(false); setError("No redirect returned by the authorization server."); return; }
    window.location.href = target;
  }

  const clientName = details?.client?.name ?? "an app";
  const scopes = details?.scopes ?? [];

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative mx-auto flex min-h-screen max-w-md flex-col items-center justify-center px-4 py-16">
        <img src={amabotIcon} alt="AmaBot" className="h-16 w-16 drop-shadow-[0_0_24px_oklch(0.85_0.17_88/0.55)]" />
        <div className="glass mt-6 w-full rounded-3xl p-8">
          <h1 className="text-2xl font-bold">Connect {clientName} to AmaBot</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            This lets <strong className="text-foreground">{clientName}</strong> call AmaBot tools while signed in as you.
          </p>

          {details?.client?.redirect_uri && (
            <p className="mt-4 break-all rounded-xl border border-border/60 bg-background/40 p-3 text-[11px] text-muted-foreground">
              Redirects to: {details.client.redirect_uri}
            </p>
          )}

          {scopes.length > 0 && (
            <div className="mt-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Requested access</div>
              <ul className="mt-2 space-y-1 text-sm">
                {scopes.map((s: string) => <li key={s}>• {s}</li>)}
              </ul>
            </div>
          )}

          <p className="mt-4 text-xs text-muted-foreground">
            This does not bypass AmaBot's permissions or backend policies.
          </p>

          {error && <p className="mt-4 text-xs text-destructive" role="alert">{error}</p>}

          <div className="mt-6 flex gap-3">
            <button
              onClick={() => decide(false)} disabled={busy}
              className="flex-1 rounded-xl border border-border bg-white/5 px-4 py-3 text-sm font-semibold backdrop-blur transition hover:bg-white/10 disabled:opacity-50"
            >
              Cancel connection
            </button>
            <button
              onClick={() => decide(true)} disabled={busy}
              className="flex-1 rounded-xl bg-gradient-gold px-4 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition hover:scale-[1.02] disabled:opacity-50"
            >
              {busy ? "…" : "Approve"}
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
