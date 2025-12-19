import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../component/ui/accordion';

export default function FAQ() {
  const { t, i18n } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { key: 'faq1' },
    { key: 'faq2' },
    { key: 'faq3' },
    { key: 'faq4' },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // 生成 JSON-LD 結構化資料 (對 SEO 很重要)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": t(`faq.${faq.key}.question`),
      "acceptedAnswer": {
        "@type": "Answer",
        "text": t(`faq.${faq.key}.answer`)
      }
    }))
  };

  return (
    <>
      <Helmet key={i18n.language}>
        <html lang={i18n.language} />
        <title>{t('faq.title')} | React i18n App</title>
        <meta name="description" content={t('faq.metaDescription')} />
        <meta property="og:title" content={t('faq.title')} />
        <meta property="og:description" content={t('faq.metaDescription')} />
        <link rel="canonical" href={`https://example.com/${i18n.language}/faq`} />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      <div className="p-8 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">{t('faq.title')}</h1>
        <p className="text-lg text-gray-600 mb-8">{t('faq.description')}</p>
        <Accordion>
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.key}>
              <AccordionTrigger
                onClick={() => toggleFAQ(index)}
                isOpen={openIndex === index}
              >
                {t(`faq.${faq.key}.question`)}
              </AccordionTrigger>
              {openIndex === index && (
                <AccordionContent>
                  <p className="text-gray-700">{t(`faq.${faq.key}.answer`)}</p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

