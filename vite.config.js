import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// Sahi: Arrow function ka use kiya
export default defineConfig(({ mode }) => {
  console.log("Mera mode hai:", mode);

  return {
    plugins: [react(), tailwindcss()],
    base: mode === "production" ? "/TechCare-Dashboard-React.js/" : "/",
  };
});
