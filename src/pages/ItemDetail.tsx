import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Products } from '../data/mockData';
import useStore from '../store/useStore';
import { ShoppingCart, ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import LazyImage from '../components/ui/LazyImage';

const ItemDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const addToCart = useStore((state) => state.addToCart);
  
  const [added, setAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);

  // Determine RTL based on language
  const isRtl = i18n.language === 'ar';

  const flatProducts = Products.categories.flatMap((cat: any) =>
    cat.products.map((p: any, index: number) => ({
      id: `${cat.name}-${index}`,
      name: isRtl ? p.name : (p.name_en || p.name),
      image: p.image,
      colors: p.color,
      quantity: p.quantity,
      price: p.price_per_day,
      category: isRtl ? cat.name : (cat.name_en || cat.name)
    }))
  );
  
  const item = flatProducts.find((i: any) => String(i.id) === id);

  const handleAddToCart = () => {
    if (item) {
      addToCart({ ...item, cartQuantity: quantity });
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  if (!item) {
    return (
      <div className="container mx-auto px-4 py-32 text-center h-[60vh] flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">{t('not_found', 'Item not found')}</h2>
        <button 
          onClick={() => navigate(-1)}
          className="text-accent underline cursor-pointer"
        >
          {isRtl ? 'العودة' : 'Go back'}
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto mt-5 px-4 py-16 pb-32">
      <div className="max-w-5xl mx-auto">
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-accent font-bold mb-8 hover:underline"
        >
          {isRtl ? (
             <ArrowRight size={18} className="inline ml-1" />
          ) : (
             <ArrowLeft size={18} className="inline mr-1" />
          )}
          {isRtl ? 'العودة' : 'Go back'}
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-border p-6 md:p-10 flex flex-col md:flex-row gap-10">
          
          {/* Image Section */}
          <div className="md:w-1/2">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-75 md:h-112.5">
              <LazyImage src={item.image} alt={item.name} className="absolute inset-0 w-full h-full" />
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-1/2 flex flex-col justify-center text-start">
            
            <h1 className="text-3xl md:text-5xl font-black mb-4 tracking-tight">
              {item.name}
            </h1>
            
            <p className="text-lg text-text/70 mb-8 leading-relaxed">
              {item.desc || item.description || (isRtl ? 'لا يوجد وصف متاح لهذا العنصر حاليا.' : 'No description available for this item yet.')}
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="font-bold text-lg text-gray-700">{isRtl ? 'الكمية:' : 'Quantity:'}</span>
              <div className="flex items-center border border-border rounded-xl overflow-hidden">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 text-xl font-medium transition-colors"
                >-</button>
                <div className="px-5 py-3 font-bold text-lg min-w-[60px] text-center border-x border-border">
                  {quantity}
                </div>
                <button 
                  onClick={() => setQuantity(Math.min(item.quantity || 99, quantity + 1))}
                  className="px-5 py-3 bg-gray-50 hover:bg-gray-100 text-xl font-medium transition-colors"
                >+</button>
              </div>
              <span className="text-sm text-gray-400 font-medium">
                ({item.quantity} {isRtl ? 'متاح المخزون' : 'in stock'})
              </span>
            </div>

            <div className="text-3xl font-black text-accent mb-10 border-t border-border pt-6">
              {item.price * quantity} {isRtl ? 'ر.س / يوم' : 'SAR / day'}
            </div>

            <button
              onClick={handleAddToCart}
              disabled={added}
              className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all ${
                added 
                  ? 'bg-green-500 text-white' 
                  : 'bg-[#4D02F0] text-white hover:bg-accent/90 hover:scale-[1.02] shadow-lg hover:shadow-accent/30'
              }`}
            >
              {added ? (
                <>
                  <CheckCircle size={24} />
                  {isRtl ? 'تمت الإضافة بنجاح' : 'Added to cart'}
                </>
              ) : (
                <>
                  <ShoppingCart size={24} />
                  {t('items.add_to_cart')}
                </>
              )}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
