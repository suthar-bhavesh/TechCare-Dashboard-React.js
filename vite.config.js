import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const currentMode = mode || "development";

  const env = loadEnv(currentMode, process.cwd(), "");

  const isVercel = env.VERCEL === "1" || env.VERCEL === "true";
  const isGithubPages = env.IS_GH_PAGES === "true";

  console.log(
    `Building for: ${currentMode} | isVercel: ${isVercel} | isGH: ${isGithubPages}`,
  );

  return {
    plugins: [react(), tailwindcss()],
    base: isGithubPages && !isVercel ? "/TechCare-Dashboard-React.js/" : "/",
  };
});
