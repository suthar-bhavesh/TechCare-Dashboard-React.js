import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  base:
    mode === "production"
      ? import.meta.env.VITE_DEPLOY_TARGET === "gh"
        ? "/TechCare-Dashboard-React.js/"
        : "/"
      : "/",
}));
