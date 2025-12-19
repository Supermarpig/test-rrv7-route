import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';
import { Button } from './ui/button';
import { PREFERRED_LOCALES, LANGUAGE_NAMES } from '../i18n/config';

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="p-5 border-b border-gray-200 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <Languages className="h-5 w-5 text-indigo-600" />
        <h3 className="text-lg font-semibold">{t('common.changeLanguage')}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-3">
        {t('common.currentLanguage')}: {LANGUAGE_NAMES[i18n.language]}
      </p>
      <div className="flex gap-2 flex-wrap">
        {PREFERRED_LOCALES.map((lang) => (
          <Button
            key={lang}
            onClick={() => handleLanguageChange(lang)}
            variant={i18n.language === lang ? 'default' : 'outline'}
            size="sm"
          >
            {LANGUAGE_NAMES[lang]}
          </Button>
        ))}
      </div>
    </div>
  );
}

