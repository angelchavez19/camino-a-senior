// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/i18n",
  ],
  i18n: {
    // NOTE: If change locales, also update the ~/types/i18n.ts file
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "en", file: "en.json" },
      { code: "es", file: "es.json" },
    ],
    defaultLocale: "en",
    detectBrowserLanguage: false,
  },
});
