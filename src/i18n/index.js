import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { DEFAULT_LANGUAGE, PREFERRED_LOCALES } from './config';

// Import all language files
import en from './locales/en.json';
import zhTW from './locales/zh-TW.json';
import zh from './locales/zh.json';
import ja from './locales/ja.json';
import th from './locales/th.json';
import vi from './locales/vi.json';
import ko from './locales/ko.json';

const resources = {
  en: { translation: en },
  'zh-TW': { translation: zhTW },
  zh: { translation: zh },
  ja: { translation: ja },
  th: { translation: th },
  vi: { translation: vi },
  ko: { translation: ko },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: DEFAULT_LANGUAGE,
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: PREFERRED_LOCALES,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

export default i18n;

