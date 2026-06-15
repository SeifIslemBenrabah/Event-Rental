import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Products } from '../data/mockData';
import { Minus, Plus, Check } from 'lucide-react';
import LazyImage from '../components/ui/LazyImage';

const COLORS = [
  { id: 'white', name: 'White', hex: '#FFFFFF', border: 'border-gray-300' },
  { id: 'gray', name: 'Gray', hex: '#CFCFCF', border: 'border-transparent' },
  { id: 'bej', name: 'Bej', hex: '#C1B6A6', border: 'border-transparent' },
  { id: 'cream', name: 'Cream', hex: '#EED93A', border: 'border-transparent' },
  { id: 'pink', name: 'Pink', hex: '#F09DF4', border: 'border-transparent' },
];

const DualRangeSlider = ({ min, max, value, onChange }: any) => {
  const [minVal, maxVal] = value;
  const minPercent = ((minVal - min) / (max - min)) * 100;
  const maxPercent = ((maxVal - min) / (max - min)) * 100;

  const handleMinChange = (e: any) => {
    const value = Math.min(Number(e.target.value), maxVal - 1);
    onChange([value, maxVal]);
  };

  const handleMaxChange = (e: any) => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    onChange([minVal, value]);
  };

  return (
    <div className="w-full relative mt-6 mb-2">
      <style>{`
        .custom-range::-webkit-slider-thumb {
          pointer-events: auto;
          appearance: none;
          width: 24px;
          height: 24px;
          background-color: white;
          border: 2px solid #5201FF;
          border-radius: 50%;
          cursor: pointer;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="%235201FF" stroke="%235201FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>');
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: 0 0 0 4px white inset;
        }
        .custom-range::-moz-range-thumb {
          pointer-events: auto;
          width: 24px;
          height: 24px;
          background-color: white;
          border: 2px solid #5201FF;
          border-radius: 50%;
          cursor: pointer;
          background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="%235201FF" stroke="%235201FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>');
          background-position: center;
          background-repeat: no-repeat;
          box-shadow: 0 0 0 4px white inset;
        }
      `}</style>
      
      <div className="relative h-2 flex items-center">
        {/* Track Background */}
        <div className="absolute w-full h-3 bg-gray-200 rounded-full"></div>
        {/* Active Track */}
        <div 
          className="absolute h-3 bg-[#5201FF] rounded-full" 
          style={{ left: `${minPercent}%`, width: `${maxPercent - minPercent}%` }}
        ></div>

        {/* Inputs */}
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={minVal} 
          onChange={handleMinChange}
          className="absolute w-full h-3 appearance-none bg-transparent pointer-events-none custom-range"
          style={{ zIndex: 3 }}
        />
        <input 
          type="range" 
          min={min} 
          max={max} 
          value={maxVal} 
          onChange={handleMaxChange}
          className="absolute w-full h-3 appearance-none bg-transparent pointer-events-none custom-range"
          style={{ zIndex: 4 }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-3 px-1">
        <span>{min}</span>
        <span>{max?.toLocaleString()}</span>
      </div>
    </div>
  );
};

const Produits = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  // Sidebar toggles
  const [styleOpen, setStyleOpen] = useState(true);
  const [priceOpen, setPriceOpen] = useState(true);
  const [colorsOpen, setColorsOpen] = useState(true);
  
  // Price range state
  const [priceRange, setPriceRange] = useState([0, 100000]);
  
  // Selected colors
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [showFiltersOnMobile, setShowFiltersOnMobile] = useState(false);
  
  const toggleColor = (id: string) => {
    setSelectedColors(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    );
  };

  const flatProducts = Products.categories.flatMap((cat: any) =>
    cat.products.map((p: any, index: number) => ({
      id: `${cat.name}-${index}`,
      name: isRtl ? p.name : (p.name_en || p.name),
      image: p.image,
      colors: p.color,
      quantity: p.quantity,
      price: p.price_per_day,
      categoryKey: cat.name,
      category: isRtl ? cat.name : (cat.name_en || cat.name)
    }))
  );

  const filteredItems = flatProducts.filter((item: any) => {
    const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchCategory = selectedCategory ? item.categoryKey === selectedCategory : true;
    const matchPrice = item.price >= priceRange[0] && item.price <= priceRange[1];
    return matchSearch && matchCategory && matchPrice;
  });

  return (
    <div className="container mx-auto px-4 py-20 pb-32">
      
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-10">
        <p className="text-lg text-text/60">{t('categories.subtitle')}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* Custom Sidebar */}
        <div className={`hidden md:w-[320px] flex-shrink-0  w-full space-y-6 ${showFiltersOnMobile ? 'block' : 'hidden md:block'}`}>
          
          {/* Style Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setStyleOpen(!styleOpen)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-[30px] px-6 py-4 text-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lg">Style</span>
              {styleOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            
            {styleOpen && (
              <div className="mt-4 px-6 space-y-4">
                {Products.categories.map((cat: any) => {
                   const isChecked = selectedCategory === cat.name;
                   return (
                    <label key={cat.name} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${isChecked ? 'bg-[#5201FF] border-[#5201FF]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                        {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className="text-[16px]">{isRtl ? cat.name : (cat.name_en || cat.name)}</span>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={isChecked}
                        onChange={() => setSelectedCategory(isChecked ? null : cat.name)}
                      />
                    </label>
                   );
                })}
              </div>
            )}
          </div>

          {/* Rental Price Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setPriceOpen(!priceOpen)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-[30px] px-6 py-4 text-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lg">Rental Price</span>
              {priceOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            {priceOpen && (
              <div className="mt-8 px-1">
                <div className="flex items-center justify-between gap-4 mb-4 text-center">
                  <div className="flex-1 py-3 border border-gray-200 rounded-[30px]">
                    <span className="text-[#5201FF] text-[16px]">{priceRange[0]} {isRtl ? "ر.س" : "SAR"}</span>
                  </div>
                  <span className="text-gray-600 font-medium text-sm">to</span>
                  <div className="flex-1 py-3 border border-gray-200 rounded-[30px]">
                    <span className="text-[#5201FF] text-[16px]">{priceRange[1]} {isRtl ? "ر.س" : "SAR"}</span>
                  </div>
                </div>
                
                <DualRangeSlider 
                  min={0} 
                  max={100000} 
                  value={priceRange} 
                  onChange={setPriceRange} 
                />
              </div>
            )}
          </div>

          {/* Colors Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setColorsOpen(!colorsOpen)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-[30px] px-6 py-4 text-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lg">Colors</span>
              {colorsOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            {colorsOpen && (
              <div className="mt-6 px-6 space-y-4">
                {COLORS.map((color) => {
                  const isChecked = selectedColors.includes(color.id);
                  return (
                    <label key={color.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${isChecked ? 'border-[#5201FF] bg-[#5201FF]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                        {isChecked && <Check size={12} className="text-white" strokeWidth={4} />}
                      </div>
                      <div 
                        className={`w-5 h-5 rounded-full border ${color.border}`} 
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="text-[16px] text-gray-800">{color.name}</span>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={isChecked}
                        onChange={() => toggleColor(color.id)}
                      />
                    </label>
                  );
                })}
              </div>
            )}
          </div>

        </div>

        {/* Products Grid */}
        <div className="flex-1">
          {/* Simple search bar placed at top of products grid instead of sidebar */}
          <div className="mb-6 flex gap-3 w-full md:justify-end">
            <button 
              onClick={() => setShowFiltersOnMobile(!showFiltersOnMobile)}
              className="md:hidden flex items-center justify-center gap-2 bg-white border border-border px-5 py-3 rounded-[30px] font-bold text-sm text-[#4D02F0] shrink-0 hover:bg-gray-50"
            >
              {isRtl ? 'التصفية' : 'Filters'}
            </button>
            <input
              type="text"
              placeholder={t('search') || 'Search...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-1/2 px-4 py-3 border border-border rounded-[30px] outline-none hover:border-gray-300 focus:border-[#5201FF]"
            />
          </div>

{/* Custom Sidebar */}
<div className={` md:hidden flex-shrink-0  w-full space-y-6 ${showFiltersOnMobile ? 'block' : 'hidden md:block'}`}>
          
          {/* Style Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setStyleOpen(!styleOpen)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-[30px] px-6 py-4 text-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lg">Style</span>
              {styleOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            
            {styleOpen && (
              <div className="mt-4 px-6 space-y-4">
                {Products.categories.map((cat: any) => {
                   const isChecked = selectedCategory === cat.name;
                   return (
                    <label key={cat.name} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${isChecked ? 'bg-[#5201FF] border-[#5201FF]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                        {isChecked && <Check size={12} className="text-white" strokeWidth={3} />}
                      </div>
                      <span className="text-[16px]">{isRtl ? cat.name : (cat.name_en || cat.name)}</span>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={isChecked}
                        onChange={() => setSelectedCategory(isChecked ? null : cat.name)}
                      />
                    </label>
                   );
                })}
              </div>
            )}
          </div>

          {/* Rental Price Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setPriceOpen(!priceOpen)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-[30px] px-6 py-4 text-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lg">Rental Price</span>
              {priceOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            {priceOpen && (
              <div className="mt-8 px-1">
                <div className="flex items-center justify-between gap-4 mb-4 text-center">
                  <div className="flex-1 py-3 border border-gray-200 rounded-[30px]">
                    <span className="text-[#5201FF] text-[16px]">{priceRange[0]} {isRtl ? "ر.س" : "SAR"}</span>
                  </div>
                  <span className="text-gray-600 font-medium text-sm">to</span>
                  <div className="flex-1 py-3 border border-gray-200 rounded-[30px]">
                    <span className="text-[#5201FF] text-[16px]">{priceRange[1]} {isRtl ? "ر.س" : "SAR"}</span>
                  </div>
                </div>
                
                <DualRangeSlider 
                  min={0} 
                  max={100000} 
                  value={priceRange} 
                  onChange={setPriceRange} 
                />
              </div>
            )}
          </div>

          {/* Colors Section */}
          <div className="flex flex-col">
            <button 
              onClick={() => setColorsOpen(!colorsOpen)}
              className="w-full flex items-center justify-between border border-gray-200 rounded-[30px] px-6 py-4 text-black hover:bg-gray-50 transition-colors"
            >
              <span className="font-medium text-lg">Colors</span>
              {colorsOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>

            {colorsOpen && (
              <div className="mt-6 px-6 space-y-4">
                {COLORS.map((color) => {
                  const isChecked = selectedColors.includes(color.id);
                  return (
                    <label key={color.id} className="flex items-center gap-3 cursor-pointer group">
                      <div className={`w-4 h-4 rounded-sm flex items-center justify-center border transition-colors ${isChecked ? 'border-[#5201FF] bg-[#5201FF]' : 'border-gray-400 group-hover:border-gray-500'}`}>
                        {isChecked && <Check size={12} className="text-white" strokeWidth={4} />}
                      </div>
                      <div 
                        className={`w-5 h-5 rounded-full border ${color.border}`} 
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="text-[16px] text-gray-800">{color.name}</span>
                      <input 
                        type="checkbox" 
                        className="hidden" 
                        checked={isChecked}
                        onChange={() => toggleColor(color.id)}
                      />
                    </label>
                  );
                })}
              </div>
            )}
          </div>

        </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item: any) => (
              <Link
  to={`/item/${item.id}`}
  key={item.id}
  className="relative rounded-xl border-[0.1px] border-gray-300 overflow-hidden group h-72  hover:shadow-xl transition"
>
  <LazyImage src={item.image} alt={item.name} className="absolute inset-0 w-full h-full" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-t from-white/100 via-white/50 to-transparent" />

  {/* Content */}
  <div className="relative z-10 p-4 flex flex-col justify-end h-full">
    <h3 className="font-bold text-lg mb-1">{item.name}</h3>

    <div className="font-black text-accent text-lg">
      {item.price} {isRtl ? "ر.س" : "SAR"}
    </div>
  </div>
</Link>
            ))}

            {filteredItems.length === 0 && (
              <p className="col-span-full text-center text-text/60 py-20 bg-gray-50 rounded-xl">
                {isRtl ? 'لا توجد عناصر' : 'No items found'}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produits;