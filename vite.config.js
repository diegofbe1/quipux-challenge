import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/quipux-challenge/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./scss/custom.scss";`,
      },
    },
  },
});
