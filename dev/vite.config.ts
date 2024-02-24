import { defineConfig } from "@solidjs/start/config";
import uno from "unocss/vite";
import prismjs from "vite-plugin-prismjs";

export default defineConfig({
  start: {
    ssr: true,
    server: {
      preset: "cloudflare-pages-static",
    },
  },
  ssr: {
    optimizeDeps: {
      include: ["prismjs"],
    },
    noExternal: ["prismjs"],
  },
  plugins: [
    uno(),
    prismjs({
      languages: "all",
      plugins: ["line-numbers", "show-language"],
      theme: "okaidia",
      css: true,
    }),
  ],
  optimizeDeps: {
    include: ["prismjs"],
  },
});
