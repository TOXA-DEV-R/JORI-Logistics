import { PluginOptions } from "@intlify/unplugin-vue-i18n";
import ViteI18nPlugin from "@intlify/unplugin-vue-i18n/vite";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "url";

const i18nConfig: PluginOptions = {
  include: [
    resolve(dirname(fileURLToPath(import.meta.url)), "./locales/*.json"),
  ],
};

export default defineNuxtConfig({
  buildDir: ".nuxt",
  modules: ["nuxt-swiper", "nuxt-headlessui", "@nuxt/image-edge"],

  vite: {
    plugins: [ViteI18nPlugin({ ...i18nConfig })],
    resolve: {
      alias: {
        "vue-i18n": "vue-i18n/dist/vue-i18n.runtime.esm-bundler.js",
      },
    },
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Bonny",
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/icons/brand-logo.svg" },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800;900&family=Outfit:wght@300;400;500;600;700;800;900&family=Oxanium:wght@400;500&display=swap",
        },
      ],
      script: [
        {
          src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js",
        },
      ],
    },
  },
  typescript: {
    strict: true,
    shim: false,
  },
  swiper: {
    modules: ["navigation", "autoplay"],
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  css: ["@/assets/css/main.css"],
  build: {
    analyze: true,
  },
});
