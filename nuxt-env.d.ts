import { DefaultLocaleMessageSchema } from "vue-i18n";

declare module "@nuxt/schema" {
  interface AppConfig {
    app: {
      version: string;
      language: string;
      available_locales: string[];
    };

    headers: {
      ALLOW_ORIGIN: "*" | string;
    };

    BASE_URL: string;
    STATIC_URL: string;
    API_URL: string;
  }
}

interface LocaleMessages extends DefaultLocaleMessageSchema {
  [key: string]: Record<string, string> | string;
}

declare module "#locale" {
  export default interface Locales {
    kz: LocaleMessages;
    ru: LocaleMessages;
    en: LocaleMessages;
  }
}
