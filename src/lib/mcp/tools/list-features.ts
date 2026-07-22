import { defineTool } from "@lovable.dev/mcp-js";

const features = [
  { title: "Real-Time Restock Alerts", description: "Push, SMS, or Discord alerts the moment Amazon refills stock." },
  { title: "Instant Deal Notifications", description: "Price drops, lightning deals, and warehouse listings surfaced in milliseconds." },
  { title: "Ultra-Fast Auto Checkout", description: "Pre-loaded cart, address, and payment secures drops in under 800ms." },
  { title: "Pokémon Product Tracking", description: "Booster boxes, ETBs, collector tins, Crown Zenith, 151 — every SKU monitored." },
  { title: "Smart Price Monitoring", description: "Historical pricing data so you only buy when it's actually a deal." },
  { title: "Community Driven Drops", description: "Collectors share intel and drop tips in real time." },
];

export default defineTool({
  name: "list_features",
  title: "List AmaBot features",
  description: "Return the list of AmaBot product features shown on the landing page.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(features, null, 2) }],
    structuredContent: { features },
  }),
});
