import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig, UserConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()],
    test: {
        environment: "jsdom",
        setupFiles: "./test/setup.js",
        global: true
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src")
        }
    }
} as UserConfig);
