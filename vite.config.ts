import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import viteTsconfigPaths from "vite-tsconfig-paths";
import svgrPlugin from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteTsconfigPaths(), svgrPlugin()],
  build: {
    outDir: "dist",
  },
  server: {
    open: true,
    port: 3000,
  },
  test: {
    environment: "jsdom",
    setupFiles: "./setupTest.ts",
  },
});
