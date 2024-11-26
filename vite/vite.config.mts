import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import deno from "@deno/vite-plugin";
import { dirname, fromFileUrl, join } from "@std/path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    react(),
  ],
  resolve: {
    alias: {
      // This is a workaround based on this issue: <https://github.com/denoland/deno-vite-plugin/issues/19>
      "@sample/package": join(
        dirname(fromFileUrl(import.meta.url)),
        "../package",
      ),
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
