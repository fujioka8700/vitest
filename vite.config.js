import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [
        laravel({
            input: ["resources/css/app.css", "resources/js/app.ts"],
            refresh: true,
        }),
        vue(),
    ],
    server: {
        host: true,
        hmr: {
            host: "localhost",
        },
    },
    test: {
        globals: true,
        environment: "happy-dom",
    },
});
