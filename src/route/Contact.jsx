import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { usePageTitle } from '../hook/usePageTitle';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const title = t('contact.title');
  
  usePageTitle(title, 'React i18n App', i18n.language);

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{title} | React i18n App</title>
        <meta name="description" content={t('contact.metaDescription')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t('contact.metaDescription')} />
        <link rel="canonical" href={`https://example.com/${i18n.language}/contact`} />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{title}</h1>
        <p className="text-lg text-gray-600">{t('contact.description')}</p>
      </div>
    </>
  );
}

