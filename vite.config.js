import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),

    VitePWA({
      registerType: "autoUpdate",

      manifest: {
        name: "디딤핏",
        short_name: "디딤핏",

        description:
          "장애인을 위한 체육시설 및 운동 추천 서비스",

        theme_color:
          "#FFFFFF",

        background_color:
          "#FFFFFF",

        display:
          "standalone",

        start_url:
          "/",

        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
        ],
      },
    }),
  ],
});