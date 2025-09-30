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
    vueI18n: "./i18n.configuration.ts",
    strategy: "prefix_except_default",
    locales: [
      { code: "en", file: "en.json" },
      { code: "es", file: "es.json" },
    ],
  },
});
