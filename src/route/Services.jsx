import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../component/ui/card';

export default function Services() {
  const { t, i18n } = useTranslation();

  const services = [
    { key: 'service1', icon: '🎨' },
    { key: 'service2', icon: '💻' },
    { key: 'service3', icon: '📱' },
  ];

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{t('services.title')} | React i18n App</title>
        <meta name="description" content={t('services.metaDescription')} />
        <meta property="og:title" content={t('services.title')} />
        <meta property="og:description" content={t('services.metaDescription')} />
        <link rel="canonical" href={`https://example.com/${i18n.language}/services`} />
      </Helmet>
      <div className="p-8 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('services.title')}</h1>
        <p className="text-lg text-gray-600 mb-12">{t('services.description')}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(service => (
            <Card key={service.key} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-5xl mb-4">{service.icon}</div>
                <CardTitle>{t(`services.${service.key}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {t(`services.${service.key}.description`)}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

