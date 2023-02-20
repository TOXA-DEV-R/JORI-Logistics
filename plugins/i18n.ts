import { createI18n } from "vue-i18n";
import { useLocalStorage } from "@vueuse/core";
import { app } from "~~/bonny.config.json";
import { kz, ru, en } from "@@/locales";

export default defineNuxtPlugin(({ vueApp }) => {
  // Getting last selected language from storage
  const { value: lang } = useLocalStorage("language", app.language);

  // Plugin configuration
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: lang ?? "kz",
    availableLocales: app.available_locales,
    fallbackLocale: "kz",
    messages: { kz, ru, en },
  });

  // Register plugin
  vueApp.use(i18n);
});
