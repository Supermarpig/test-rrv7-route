import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export default function Products() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{t('products.title')} | React i18n App</title>
        <meta name="description" content={t('products.metaDescription')} />
        <meta property="og:title" content={t('products.title')} />
        <meta property="og:description" content={t('products.metaDescription')} />
        <link rel="canonical" href={`https://example.com/${i18n.language}/products`} />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('products.title')}</h1>
        <p className="text-lg text-gray-600 mb-8">{t('products.description')}</p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">{t('products.listTitle')}</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span className="text-gray-700">{t('products.product1')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span className="text-gray-700">{t('products.product2')}</span>
            </li>
            <li className="flex items-start">
              <span className="text-indigo-600 mr-2">•</span>
              <span className="text-gray-700">{t('products.product3')}</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

