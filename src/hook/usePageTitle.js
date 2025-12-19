import { useEffect } from 'react';

export function usePageTitle(title, suffix = 'React i18n App', lang) {
  useEffect(() => {
    // 更新 title
    document.title = suffix ? `${title} | ${suffix}` : title;
    
    // 更新 html lang 屬性
    if (lang) {
      document.documentElement.lang = lang;
    }
  }, [title, suffix, lang]);
}

