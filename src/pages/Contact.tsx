import { useTranslation } from 'react-i18next';
import { Phone, MapPin } from "lucide-react";
const Contact = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <div className="container px-10 md:px-0  md:mx-auto py-16 mt-4 max-w-5xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
      <div
  className="relative flex items-center rounded-2xl overflow-hidden p-6 text-white"
  style={{
    backgroundImage: "url('https://www.apprenticeship.ng/wp-content/uploads/2019/09/event-image.jpg')", // change path
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-[#4D02F0]/50"></div>

  {/* Content */}
  <div className="relative w-full gap-9 flex flex-col items-center space-y-6">
    
    <div className="flex items-start gap-4 w-10/12 md:w-7/12 ">
      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
      <Phone size={24} />
      </div>
      <div className='text-start'>
        <h4 className="font-bold">{t('contact.phone')}</h4>
        <p className="text-white/80">+966 50 123 4567</p>
      </div>
    </div>

    <div className="flex items-start gap-4 w-10/12 md:w-7/12">
      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center">
      <MapPin size={24} />
      </div>
      <div className='text-start'>
        <h4 className="font-bold">{t('contact.location')}</h4>
        <p className="text-white/80">{t('contact.address')}</p>
      </div>
    </div>

  </div>
</div>
          <div className='flex flex-col py-4'>
          <h1 className="text-4xl text-start text-[#4D02F0] font-bold mb-2">{t('contact.title')}</h1>
          <p className="text-dm text-text/70 text-start mb-2 leading-relaxed">
            {t('contact.subtitle')}
          </p>
          <form className="bg-white rounded-3xl space-y-2 ">
          <div className="relative">
              <input type="text" placeholder=" " className="peer w-full bg-code-bg  border border-gray-300
outline-none focus:border-[#4D02F0] transition-colors rounded-xl p-4 pt-4 outline-accent"/>
  <label className={`absolute ${isRTL ? 'right-4 text-right' : 'left-4 text-left'} top-2 text-sm text-gray-500 transition-all 
    peer-placeholder-shown:top-4 
    peer-placeholder-shown:text-base 
    peer-placeholder-shown:text-gray-400
    peer-focus:text-[#4D02F0]
    peer-focus:top-1
    peer-focus:text-xs
    peer-focus:text-accent`}>
    {t('contact.form_name')}
  </label>
</div>
<div className="relative">
              <input type="tel" placeholder=" " className="peer w-full bg-code-bg  border border-gray-300
outline-none focus:border-[#4D02F0] transition-colors rounded-xl p-4 pt-4 outline-accent"/>
  <label className={`absolute ${isRTL ? 'right-4 text-right' : 'left-4 text-left'} top-2 text-sm text-gray-500 transition-all 
    peer-placeholder-shown:top-4 
    peer-placeholder-shown:text-base 
    peer-placeholder-shown:text-gray-400
    peer-focus:text-[#4D02F0]
    peer-focus:top-1
    peer-focus:text-xs 
    peer-focus:text-accent`}>
    {t('contact.form_phone')}
  </label>
</div>
<div className="relative">
              <textarea rows={4} placeholder=" " className={`peer w-full bg-code-bg border border-gray-300 rounded-xl p-4 pt-6 
outline-none focus:border-[#4D02F0] transition-colors resize-none
${isRTL ? 'text-right' : 'text-left'}`}/>
  <label className={`absolute ${isRTL ? 'right-4 text-right' : 'left-4 text-left'} top-2 text-sm text-gray-500 transition-all 
    peer-placeholder-shown:top-4 
    peer-placeholder-shown:text-base 
    peer-placeholder-shown:text-gray-400
    peer-focus:text-[#4D02F0]
    peer-focus:top-1 
    peer-focus:text-xs 
    peer-focus:text-accent`}>
    {t('contact.form_message')}
  </label>
</div>
          <button className="w-full bg-[#4D02F0] text-white py-4 rounded-xl font-black mt-2 hover:shadow-lg transition-shadow">{t('contact.submit')}</button>
        </form>

        </div>
      </div>
    </div>
  );
};

export default Contact;
