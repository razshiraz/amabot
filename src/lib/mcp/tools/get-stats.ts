import { defineTool } from "@lovable.dev/mcp-js";

const stats = {
  alertsSent: "10,000+",
  collectorsJoined: "2,500+",
  dropsCaught: "4,800+",
  avgCheckoutTime: "<800ms",
};

export default defineTool({
  name: "get_stats",
  title: "Get AmaBot stats",
  description: "Return the public AmaBot community and performance stats.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(stats, null, 2) }],
    structuredContent: stats,
  }),
});
