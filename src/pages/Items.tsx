import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CATEGORIES } from '../data/mockData';
import useStore from '../store/useStore';
import { Plus, ArrowLeft, ArrowRight } from 'lucide-react';
import LazyImage from '../components/ui/LazyImage';

const Items = () => {
  const { categoryId } = useParams();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const addToCart = useStore((state) => state.addToCart);

  // ✅ Find selected category
  const category = CATEGORIES.find(cat => cat.id === categoryId);

  // ✅ Get packs safely
  const categoryItems = category?.packs || [];

  return (
    <div className="container mx-auto mt-5 px-4 py-16 pb-16">

      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 text-start">

        <div className="max-w-xl">

          <Link to="/packs" className="text-accent font-bold mb-4 inline-block hover:opacity-70">
            {isRtl ? (
              <ArrowRight size={18} className="inline ml-1" />
            ) : (
              <ArrowLeft size={18} className="inline mr-1" />
            )}

            {isRtl ? 'العودة لكل الباقات' : 'Back to all packages'}
          </Link>

          <h1 className="text-4xl lg:text-5xl font-black">
            {t(`data.categories.${category?.id}.name`)}
          </h1>

          <p className="text-lg text-text/60 mt-4 italic">
          {t(`data.categories.${category?.id}.desc`)}
          </p>
        </div>

        <div className="flex gap-4">
          <button className="bg-code-bg px-6 py-2 rounded-xl font-bold border border-border">
            {isRtl ? 'حسب السعر' : 'By Price'}
          </button>

          <button className="bg-code-bg px-6 py-2 rounded-xl font-bold border border-border">
            {isRtl ? 'الأكثر طلباً' : 'Popular'}
          </button>
        </div>
      </div>

      {/* ✅ Empty state */}
      {categoryItems.length === 0 ? (
        <p className="text-center text-text/50">
          {isRtl ? 'لا توجد باقات' : 'No packages available'}
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">

          {categoryItems.map((item) => (
            <div key={item.id} className="group flex flex-col text-start">

              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden bg-code-bg mb-6">

                <LazyImage src={item.image} alt={item.name} className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-500" />

                <div className="absolute top-4 inset-x-4 flex justify-between items-start">

                  <span className="bg-white px-3 py-1 rounded-full font-black text-xs text-text-h shadow-sm">
                    {isRtl ? 'متاح' : 'Available'}
                  </span>

                  <button
                    onClick={() => addToCart(item)}
                    className="w-10 h-10 bg-accent text-white rounded-2xl flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="px-2">

                <h3 className="text-xl font-black mb-1">
                  {item.name}
                </h3>

                <p className="text-text/50 text-sm mb-4 italic">
                  {isRtl
                    ? 'باقة متكاملة بأسلوب عصري'
                    : 'Complete modern-style package'}
                </p>

                <p className="text-2xl font-black text-accent">
                  {item.price} {isRtl ? 'ر.س' : 'SAR'}
                  <span className="text-sm font-medium text-text/40">
                    {' '} / {isRtl ? 'اليوم' : 'day'}
                  </span>
                </p>

              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Items;