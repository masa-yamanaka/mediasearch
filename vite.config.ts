import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const base = "/mediasearch-app/";

export default defineConfig({
  base,
  plugins: [react()],
});
