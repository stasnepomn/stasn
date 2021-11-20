import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import { minifyHtml } from "vite-plugin-html";

export default defineConfig({
  plugins: [preact(), minifyHtml()],
});
