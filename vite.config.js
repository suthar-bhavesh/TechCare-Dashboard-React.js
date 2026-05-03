import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

  return {
    plugins: [react(), tailwindcss()],
    base: isGitHubPages ? "/TechCare-Dashboard-React.js/" : "/",
  };
});
