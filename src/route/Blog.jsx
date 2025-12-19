import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../component/ui/card';

export default function Blog() {
  const { t, i18n } = useTranslation();

  const blogPosts = [
    { id: 1, key: 'post1' },
    { id: 2, key: 'post2' },
    { id: 3, key: 'post3' },
  ];

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{t('blog.title')} | React i18n App</title>
        <meta name="description" content={t('blog.metaDescription')} />
        <meta property="og:title" content={t('blog.title')} />
        <meta property="og:description" content={t('blog.metaDescription')} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://example.com/${i18n.language}/blog`} />
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('blog.title')}</h1>
        <p className="text-lg text-gray-600 mb-8">{t('blog.description')}</p>
        <div className="space-y-6">
          {blogPosts.map(post => (
            <Card key={post.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">
                  <Link to={`/blog/${post.id}`} className="text-indigo-600 hover:text-indigo-800 transition-colors">
                    {t(`blog.${post.key}.title`)}
                  </Link>
                </CardTitle>
                <CardDescription className="text-base mt-2">
                  {t(`blog.${post.key}.excerpt`)}
                </CardDescription>
              </CardHeader>
              <CardFooter>
                <small className="text-gray-500">{t(`blog.${post.key}.date`)}</small>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
}

