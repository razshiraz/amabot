// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, nitro (build-only using cloudflare as a default target),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
  },
  vite: {
    plugins: [mcpPlugin()],
    build: {
      rollupOptions: {
        output: {
          // Keep the Supabase SDK out of the shared entry chunk: it is only
          // needed by the auth routes, not by the marketing pages.
          manualChunks(id: string) {
            if (id.includes("commonjsHelpers")) return "vendor";
            if (id.includes("node_modules/@supabase/")) return "supabase";
            if (id.includes("/src/integrations/supabase/")) return "supabase";
          },
        },
      },
    },
  },
});
