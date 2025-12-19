import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { useParams, Link } from 'react-router-dom';

export default function BlogPost() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();

  const postKey = `post${id}`;
  const postExists = id >= 1 && id <= 3;

  if (!postExists) {
    return (
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('blog.notFound')}</h1>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 transition-colors">
          {t('blog.backToList')}
        </Link>
      </div>
    );
  }

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{t(`blog.${postKey}.title`)} | React i18n App</title>
        <meta name="description" content={t(`blog.${postKey}.excerpt`)} />
        <meta property="og:title" content={t(`blog.${postKey}.title`)} />
        <meta property="og:description" content={t(`blog.${postKey}.excerpt`)} />
        <meta property="og:type" content="article" />
        <link rel="canonical" href={`https://example.com/${i18n.language}/blog/${id}`} />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <Link to="/blog" className="inline-block mb-6 text-indigo-600 hover:text-indigo-800 transition-colors">
          ← {t('blog.backToList')}
        </Link>
        <article>
          <h1 className="text-4xl font-bold mb-3 text-gray-900">{t(`blog.${postKey}.title`)}</h1>
          <small className="text-gray-500">{t(`blog.${postKey}.date`)}</small>
          <p className="mt-6 text-gray-700 leading-relaxed">{t(`blog.${postKey}.content`)}</p>
        </article>
      </div>
    </>
  );
}

