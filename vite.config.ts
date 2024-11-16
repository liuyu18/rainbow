import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

function resolve(str: string) {
  return path.resolve(__dirname, str);
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "rainbow-ui": path.resolve(__dirname, "./src/index.ts"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
  },
  build: {
    outDir: "dist",
    lib: {
      entry: resolve("src/index.ts"),
      name: "rainbow-ui",
      fileName: (format) => `rainbow-ui.${format}.js`,
      formats: ["cjs", "es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        format: "cjs",
      },
    },
  },
});
