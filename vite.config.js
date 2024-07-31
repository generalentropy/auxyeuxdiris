import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "framer-motion": ["framer-motion"],
          "react-loader-spinner": ["react-loader-spinner"],
          "canvas-confetti": ["canvas-confetti"],
        },
      },
    },
  },
});
