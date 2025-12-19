import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Navigation() {
  const { t } = useTranslation();

  return (
    <nav className="p-5 border-b border-gray-200 bg-white">
      <div className="flex gap-5 flex-wrap">
        <Link to="/" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.home')}
        </Link>
        <Link to="/about" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.about')}
        </Link>
        <Link to="/products" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.products')}
        </Link>
        <Link to="/services" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.services')}
        </Link>
        <Link to="/blog" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.blog')}
        </Link>
        <Link to="/faq" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.faq')}
        </Link>
        <Link to="/contact" className="text-indigo-600 hover:text-indigo-800 font-medium transition-colors">
          {t('common.contact')}
        </Link>
      </div>
    </nav>
  );
}

