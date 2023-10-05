import { defineConfig } from "$fresh/server.ts";
import tailwindPlugin from "@tailwindcss";
import tailwindConfig from "@/tailwind.config.ts";

export default defineConfig({
  plugins: [tailwindPlugin({
    mode: "development", // or 'production'
    input: "./style.css", // Relative path to the running script
    verbose: false,
    tailwindConfig,
  })],
});
