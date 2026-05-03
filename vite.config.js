import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import process from "node:process";

export default defineConfig(({ mode }) => {
  const isVercel = process.env.VERCEL === "true";

  return {
    plugins: [react(), tailwindcss()],
    base:
      mode === "production" && !isVercel
        ? "/TechCare-Dashboard-React.js/"
        : "/",
  };
});

