import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // Root
      "@": path.resolve(__dirname, "./src"),

      // Components (Atomic Design)
      "@components": path.resolve(__dirname, "./src/components"),
      "@atoms": path.resolve(__dirname, "./src/components/atoms"),
      "@molecules": path.resolve(__dirname, "./src/components/molecules"),
      "@organisms": path.resolve(__dirname, "./src/components/organisms"),
      "@templates": path.resolve(__dirname, "./src/components/templates"),

      // Logic
      "@lib": path.resolve(__dirname, "./src/lib"),
      "@constants": path.resolve(__dirname, "./src/lib/constants"),
      "@helpers": path.resolve(__dirname, "./src/lib/helpers"),
      "@hooks": path.resolve(__dirname, "./src/lib/hooks"),
      "@store": path.resolve(__dirname, "./src/lib/store"),
      "@types": path.resolve(__dirname, "./src/lib/types"),

      //Context
      "@context": path.resolve(__dirname, "./src/context"),

      // Services
      "@services": path.resolve(__dirname, "./src/services"),

      // Routes
      "@routes": path.resolve(__dirname, "./src/routes"),
      
      // Styles
      "@styles": path.resolve(__dirname, "./src/styles"),
    },
  },
});
