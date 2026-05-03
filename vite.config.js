import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(({ mode }) => {
  // process.cwd() ab error nahi dega
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react(), tailwindcss()],
    base:
      mode === "production"
        ? env.VITE_DEPLOY_TARGET === "gh"
          ? "/TechCare-Dashboard-React.js/"
          : "/"
        : "/",
  };
});
