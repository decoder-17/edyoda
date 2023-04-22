import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/https://decoder-17.github.io/edyoda/",
  plugins: [react()],
});
