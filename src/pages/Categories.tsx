import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '../data/mockData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Categories = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <div className="container mx-auto px-4 py-20 pb-32">
      <div className="max-w-2xl mx-auto text-center mb-8">
        <h1 className="text-4xl font-black mb-4">{t('categories.title')}</h1>
        <p className="text-lg text-text/60">{t('categories.subtitle')}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {CATEGORIES.map((cat) => (
          <Link 
            to={`/items/${cat.id}`} 
            key={cat.id} 
            className="group flex flex-col md:flex-row h-auto md:h-40 bg-white border border-border rounded-[1rem] overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <div className="md:w-1/3 overflow-hidden">
              <img src={cat.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={cat.name} />
            </div>
            <div className="md:w-2/3 py-5 px-2 flex flex-col justify-between text-start">
              <h3 className="text-lg font-black ">{t(`data.categories.${cat.id}.name`)}</h3>
              <p className="text-xs leading-relaxed mb-2">{t(`data.categories.${cat.id}.desc`)}</p>
              <div>
                <span className="text-sm font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                  {t('categories.view_packs')} 
                  <span className="text-accent">{isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
