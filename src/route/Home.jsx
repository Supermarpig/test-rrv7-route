import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Button } from '../component/ui/button';
import { usePageTitle } from '../hook/usePageTitle';

export default function Home() {
  const { t, i18n } = useTranslation();
  const [count, setCount] = useState(0);
  
  const title = t('home.title');
  usePageTitle(title, 'React i18n App', i18n.language);

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{title} | React i18n App</title>
        <meta name="description" content={t('home.metaDescription')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t('home.metaDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://example.com/${i18n.language}`} />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600 mb-8">{t('home.description')}</p>
        <div className="mt-8">
          <Button
            onClick={() => setCount((count) => count + 1)}
            size="lg"
            className="text-lg"
          >
            {t('home.counter', { count })}
          </Button>
          <p className="mt-4 text-gray-600">{t('home.clickButton')}</p>
        </div>
      </div>
    </>
  );
}

