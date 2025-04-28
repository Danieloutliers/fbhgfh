import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean), // <-- aqui fecha o array plugins certinho
  base: "/fbhgfh", // <-- aqui está fora do plugins, certinho
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
