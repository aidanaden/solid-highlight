import { defineConfig } from "@solidjs/start/config";
import uno from "unocss/vite";

export default defineConfig({
  start: {
    ssr: true,
    server: {
      preset: "cloudflare-pages-static",
    },
  },
  ssr: {
    noExternal: ["prismjs"],
  },
  plugins: [
    uno(),
    // prismjs({
    //   languages: "all",
    //   plugins: ["line-numbers", "show-language"],
    //   theme: "okaidia",
    //   css: true,
    // }),
  ],
  optimizeDeps: {
    include: ["prismjs"],
  },
});
