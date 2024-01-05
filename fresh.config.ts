import { defineConfig } from "$fresh/server.ts";
// import tailwind from "$fresh/plugins/tailwind.ts";
import tailwindPlugin from "https://deno.land/x/fresh_tailwindcss/mod.ts";
import tailwindConfig from "./tailwind.config.ts";

export default defineConfig({
  plugins: [
    tailwindPlugin({
      mode: "development", // or 'production'
      input: "./style.css", // Relative path to the running script
      verbose: false,
      tailwindConfig,
    }),
  ],
});
