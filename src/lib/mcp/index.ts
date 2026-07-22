import { defineMcp } from "@lovable.dev/mcp-js";
import listFeaturesTool from "./tools/list-features";
import listFaqsTool from "./tools/list-faqs";
import getStatsTool from "./tools/get-stats";

export default defineMcp({
  name: "amabot-mcp",
  title: "AmaBot MCP",
  version: "0.1.0",
  instructions:
    "Public MCP server for AmaBot — a fast Amazon Pokémon deal monitor and auto-buy assistant. Use these tools to fetch product features, FAQs, and community stats shown on the landing page.",
  tools: [listFeaturesTool, listFaqsTool, getStatsTool],
});
