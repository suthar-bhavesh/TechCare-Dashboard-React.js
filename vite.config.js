import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  const isGitHub = env.VITE_DEPLOY_TARGET === "gh";

  return {
    plugins: [react(), tailwindcss()],

    base: isGitHub ? "/TechCare-Dashboard-React.js/" : "/",
  };
});
