import { defineTool } from "@lovable.dev/mcp-js";

const faqs = [
  { question: "How fast are the alerts?", answer: "Most alerts hit your device within 200–500ms of Amazon updating stock. Auto-checkout typically completes in under 800ms." },
  { question: "Which Amazon products are supported?", answer: "All Pokémon TCG: booster boxes, ETBs, collector tins, special collections, Crown Zenith, 151, Surging Sparks, and any new sets the moment they list." },
  { question: "Is auto-buy safe?", answer: "Yes. AmaBot uses your official Amazon session via secure browser extension — no password sharing, no third-party checkout." },
  { question: "When does early access open?", answer: "Early access is rolling out now. Join the waitlist and you'll get an invite within 1–2 weeks with founding-member pricing locked in." },
];

export default defineTool({
  name: "list_faqs",
  title: "List AmaBot FAQs",
  description: "Return the frequently asked questions and answers about AmaBot.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(faqs, null, 2) }],
    structuredContent: { faqs },
  }),
});
