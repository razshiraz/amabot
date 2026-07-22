import { auth, defineMcp } from "@lovable.dev/mcp-js";
import listFeaturesTool from "./tools/list-features";
import listFaqsTool from "./tools/list-faqs";
import getStatsTool from "./tools/get-stats";

// The OAuth issuer MUST be the direct Supabase host. On publish, SUPABASE_URL
// is rewritten to the `.lovable.cloud` proxy, which mcp-js rejects (RFC 8414
// issuer mismatch). VITE_SUPABASE_PROJECT_ID is inlined by Vite at build time.
const projectRef = import.meta.env.VITE_SUPABASE_PROJECT_ID ?? "project-ref-unset";

export default defineMcp({
  name: "amabot-mcp",
  title: "AmaBot MCP",
  version: "0.1.0",
  instructions:
    "MCP server for AmaBot — a fast Amazon Pokémon deal monitor and auto-buy assistant. Users sign in with their AmaBot account; tools act as that user.",
  auth: auth.oauth.issuer({
    issuer: `https://${projectRef}.supabase.co/auth/v1`,
    acceptedAudiences: "authenticated",
  }),
  tools: [listFeaturesTool, listFaqsTool, getStatsTool],
});
