import { createI18n } from "vue-i18n";
import { useLocalStorage } from "@vueuse/core";
import { app } from "@@/jori.config.json";
import { kz, ru, en } from "@@/locales";

export default defineNuxtPlugin(({ vueApp }) => {
  // Getting last selected language from storage
  const { value: lang } = useLocalStorage("language", app.language);

  // Plugin configuration
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: lang ?? "en",
    availableLocales: app.available_locales,
    fallbackLocale: "en",
    messages: { kz, ru, en },
  });

  // Register plugin
  vueApp.use(i18n);
});
