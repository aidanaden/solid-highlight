import { defineConfig } from "@solidjs/start/config";
import prismjs from "vite-plugin-prismjs";

export default defineConfig({
  start: {
    ssr: false,
    server: {
      preset: "cloudflare-pages-static",
    },
  },
  plugins: [
    prismjs({
      languages: ["javascript", "typescript", "html", "css"],
      plugins: ["line-numbers", "show-language"],
      theme: "okaidia",
      css: true,
    }),
  ],
});
