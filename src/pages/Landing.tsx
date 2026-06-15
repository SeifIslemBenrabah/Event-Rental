import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { CATEGORIES, POPULAR_ITEMS1, POPULAR_ITEMS2, POPULAR_ITEMS } from '../data/mockData';
import { ArrowLeft, ArrowRight, Star } from 'lucide-react';
import { useState } from "react";


const Landing = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';

  return (
    <>
      {/* 1. HERO */}
      <section id="hero" className="relative min-h-screen flex items-center bg-text-h  overflow-hidden">

        {/* ================= MOBILE BACKGROUND (sm only) ================= */}
        <div className="absolute inset-0 flex md:hidden gap-3 px-4 pb-6">

          <div className="flex h-screen  flex-row gap-5 overflow-hidden">

            <div className='w-1/2 flex flex-col gap-2'>
              {/* CARD 1 */}
              <div className="bg-[#4D02F0] rounded-bl-4xl flex flex-row items-end justify-center pb-11 h-60
opacity-0 translate-y-[-80px]
animate-[slideDown_.8s_ease-out_forwards]">
                <div>
                  <p className="text-white font-semibold text-3xl">+564</p>
                  <p className="text-white font-light text-md">Satisfied customer</p>
                </div>

              </div>
              {/* IMAGE 2 */}
              <div className="relative overflow-hidden rounded-br-4xl rounded-l-4xl grow 
opacity-0 translate-y-[-80px]
animate-[slideDown_.8s_ease-out_.2s_forwards]">
                <img
                  src="https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?q=80&w=1170"
                  className="w-full h-full object-cover scale-105"
                  alt=""
                />
                {/* <div className="absolute inset-0 bg-[#4D02F0]/40"></div> */}

              </div>
            </div>
            <div className='w-1/2 flex flex-col gap-2'>
              {/* IMAGE 1 */}
              <div className="relative overflow-hidden rounded-br-4xl h-48
opacity-0 translate-y-[-80px]
animate-[slideDown_.8s_ease-out_.1s_forwards]">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661286678499-211423a9ff5e?q=80&w=687"
                  className="w-full object-cover scale-105"
                  alt=""
                />
                <div className="absolute inset-0 bg-[#4D02F0]/40"></div>
              </div>



              {/* CARD 2 */}
              <div className="grow flex flex-col gap-3 h-64 
opacity-0 translate-y-[-80px]
animate-[slideDown_.8s_ease-out_.3s_forwards]">

                <div className="grow relative overflow-hidden rounded-tl-4xl rounded-br-4xl h-34">
                  <img
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000"
                    className="w-full h-full object-cover scale-105"
                    alt=""
                  />
                  <div className="absolute inset-0 bg-yellow-300/50"></div>
                </div>

                <div className="bg-[#4D02F0] rounded-b-4xl rounded-tr-4xl flex flex-col items-center justify-center h-32">
                  <p className="text-white font-semibold text-3xl">+1,884</p>
                  <p className="text-white font-light text-md">rented event items</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* dark overlay for mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 via-85% to-black/00 md:hidden" />



        <div className="grow text-white md:text-black mx-auto px-4 z-10">
          <div className="ml-9 mr-14 text-start">
            <h1 className="text-xl mb-3 lg:text-xl font-black leading-tight">
              {t('hero.title_start')} <span className="text-accent">{t('hero.title_accent')}</span> {t('hero.title_end')}
            </h1>
            <p className="text-md font-light  mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-wrap gap-4 mt-7">
              <Link to="/produits" className="bg-[#4D02F0] text-white px-4 py-4 rounded-4xl font-black text-sm hover:shadow-[0_0_30px_rgba(170,59,255,0.4)] transition-all">
                {t('hero.cta_start')}
              </Link>

            </div>
          </div>
        </div>
        <div className="hidden md:flex w-2/3 h-screen  flex-row gap-5 mx-10 overflow-hidden">

          <div className='w-1/2 flex flex-col gap-2'>
            {/* CARD 1 */}
            <div className="bg-[#4D02F0] rounded-bl-4xl flex flex-row items-end justify-center pb-11 h-60
  opacity-0 translate-y-[-80px]
  animate-[slideDown_.8s_ease-out_forwards]">
              <div>
                <p className="text-white font-semibold text-3xl">+564</p>
                <p className="text-white font-light text-md">Satisfied customer</p>
              </div>

            </div>
            {/* IMAGE 2 */}
            <div className="relative overflow-hidden rounded-br-4xl rounded-l-4xl grow 
  opacity-0 translate-y-[-80px]
  animate-[slideDown_.8s_ease-out_.2s_forwards]">
              <img
                src="https://images.unsplash.com/photo-1700514077430-3659e38eb5e7?q=80&w=1170"
                className="w-full h-full object-cover scale-105"
                alt=""
              />
              {/* <div className="absolute inset-0 bg-[#4D02F0]/40"></div> */}
            </div>
          </div>
          <div className='w-1/2 flex flex-col gap-2'>
            {/* IMAGE 1 */}
            <div className="relative overflow-hidden rounded-br-4xl h-48
  opacity-0 translate-y-[-80px]
  animate-[slideDown_.8s_ease-out_.1s_forwards]">
              <img
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2000"
                className="w-full h-full object-cover scale-105"
                alt=""
              />
              <div className="absolute inset-0 bg-yellow-300/50"></div>
            </div>



            {/* CARD 2 */}
            <div className="grow flex flex-col gap-3 h-64 
  opacity-0 translate-y-[-80px]
  animate-[slideDown_.8s_ease-out_.3s_forwards]">

              <div className="grow relative overflow-hidden rounded-tl-4xl rounded-br-4xl h-34">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661286678499-211423a9ff5e?q=80&w=687"
                  className="w-full object-cover scale-105"
                  alt=""
                />
                <div className="absolute inset-0 bg-[#4D02F0]/40"></div>
              </div>

              <div className="bg-[#4D02F0] rounded-b-4xl rounded-tr-4xl flex flex-col items-center justify-center h-32">
                <p className="text-white font-semibold text-3xl">+1,884</p>
                <p className="text-white font-light text-md">rented event items</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. OUR LATEST */}
      <div className="w-full  mt-14 flex flex-row items-center justify-around gap-6 md:hidden ">
        <div className='flex flex-col items-start'>
          <h2 className="text-4xl font-black mt-2">
            {t('sections.latest')}
          </h2>
          <p className="text-[#4D02F0] font-black text-lg">
            {t('sections.latest_badge')}
          </p>

        </div>

        <Link
          to="/produits"
          className="text-accent text-[#4D02F0] font-bold flex items-center gap-2 hover:gap-4 transition-all"
        >
          {t('sections.view_all')}
          {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
        </Link>
      </div>
      <section
        id="latest"
        className="w-full md:w-5/6 mx-auto mt-12 md:mt-20 px-4 flex items-center justify-around gap-8"
      >
        {/* LEFT */}
        <div className="w-2/5  md:w-1/3 flex flex-col gap-6">
          {POPULAR_ITEMS1.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl h-64 md:h-80 cursor-pointer"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-black text-text-h text-sm tracking-tighter">
                {t('items.new')}
              </div>

              <div className="absolute bottom-0 bg-white/90 backdrop-blur w-full py-1 font-black text-sm tracking-tighter">
                <p className="text-xl font-bold mb-1">
                  {t(`data.items.i${item.id}`)}
                </p>
                <p className="text-accent font-black">
                  {item.price} {t('items.per_day')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CENTER */}
        <div className="hidden md:flex w-1/3 flex-col items-center justify-center text-center gap-6">
          <div>
            <h2 className="text-4xl font-black mt-2">
              {t('sections.latest')}
            </h2>
            <p className="text-[#4D02F0] font-black text-lg">
              {t('sections.latest_badge')}
            </p>

          </div>

          <Link
            to="/produits"
            className="text-accent border-2 rounded-full border-[#4D02F0] text-[#4D02F0] p-3 font-bold flex items-center gap-2 hover:gap-4 transition-all"
          >
            {t('sections.view_all')}
            {isRtl ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
          </Link>
        </div>

        {/* RIGHT */}
        <div className="w-2/5 md:w-1/3 flex flex-col gap-6">
          {POPULAR_ITEMS2.map((item) => (
            <div
              key={item.id}
              className="relative overflow-hidden rounded-3xl h-64 md:h-80 cursor-pointer"
            >
              <img
                src={item.image}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full font-black text-text-h text-sm tracking-tighter">
                {t('items.new')}
              </div>

              <div className="absolute bottom-0 bg-white/90 backdrop-blur w-full py-1 font-black text-sm tracking-tighter">
                <p className="text-xl font-bold mb-1">
                  {t(`data.items.i${item.id}`)}
                </p>
                <p className="text-accent font-black">
                  {item.price} {t('items.per_day')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR CATEGORIES */}
      <section
        id="categories"
        className="pt-10 pb-24 my-20 md:px-24 relative bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=500&auto=format&fit=crop')",
        }}
      >
        {/* dark overlay for readability */}
        <div className="absolute inset-0  bg-[#110035]/70"></div>

        <div className="relative w-full md:mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl mb-4 text-white">
              {t('sections.categories_title')}
            </h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3">
            {CATEGORIES.map((cat) => (
              <div

                key={cat.id}
                className="flex flex-col items-start px-2 md:px-5 justify-evenly py-5 md:py-0 md:justify-center h-48 md:h-52 bg-linear-to-r from-[#210066] to-[#300095] overflow-hidden rounded-[1.8rem] shadow-sm hover:shadow-2xl transition-all"
              >
                <p className="text-xl font-semibold text-white mb-1">
                  {t(`data.categories.${cat.id}.name`)}
                </p>
                <p className='text-start text-xs text-white font-extralight'>{t(`data.categories.${cat.id}.desc`)}</p>
                <Link to={`/items/${cat.id}`} className="bg-white mt-4 p-2 rounded-full">
                  <p className="text-[#4D02F0] text-sm">{cat.packagesCount} {t('categories.packs_available')}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES */}
      <section id="services" >
        <div className='w-full items-center md:mb-14'>
          <h1 className="text-4xl mb-4 text-[#5201FF]">
            {t('sections.services_title')}
          </h1>
        </div>
        <div className=" mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">

          {[
            {
              title: t('sections.services.s1.t'),
              desc: t('sections.services.s1.d'),
              image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800'
            },
            {
              title: t('sections.services.s2.t'),
              desc: t('sections.services.s2.d'),
              image: 'https://images.unsplash.com/photo-1503428593586-e225b39bddfe?q=80&w=800'
            },
            {
              title: t('sections.services.s3.t'),
              desc: t('sections.services.s3.d'),
              image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800'
            },
            {
              title: t('sections.services.s4.t'),
              desc: t('sections.services.s4.d'),
              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800'
            },
          ].map((s, i) => (

            <div
              key={i}
              className="relative h-96 rounded-[2rem] overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={s.image}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Text Box (TOP or BOTTOM depending on index) */}
              <div
                className={`absolute  bg-white/90 backdrop-blur rounded-xl p-4 text-start transition-all overflow-hidden w-full
          ${i % 2 === 0 ? 'bottom-0' : 'top-0'}
        `}
              >
                <p className="text-sm font-medium mb-1">{s.title}</p>
                <p className="text-xs text-text/70">{s.desc}</p>
              </div>

            </div>

          ))}
        </div>
      </section>

      {/* 5. MOST POPULAR */}
      <section id="popular" className="py-24 bg-text-h text-white">
        <div className="mx-auto px-4">
          <h1 className="text-4xl font-black mb-16 text-[#5201FF]">{t('sections.popular_title')}</h1>
          <div className="flex flex-row-reverse gap-6 overflow-x-auto scrollbar-hide py-4">

            {POPULAR_ITEMS.map((item, i) => (
              <div
                key={i}
                className="w-64 text-black border-[0.5pxs] bg-white/5 rounded-4xl border border-black/10 hover:border-black/40 transition-all text-start flex-shrink-0">
                <div className="h-72  rounded-t-3xl overflow-hidden">
                  <img src={item.image} className="w-full h-full object-cover" />
                </div>
                <div className='flex px-3 py-5 flex-row justify-between items-center'>
                  <p className="text-lg font-medium">
                    {t(`data.items.i${item.id}`)}
                  </p>
                  <p className="text-sm font-light text-purple-500">
                    {item.price} {i18n.language === 'ar' ? 'ر.س' : 'SAR'}
                  </p>

                </div>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 6. HOW TO RENT */}
      <section
        id="how-to-rent"
        className="py-10"
      >
        {/* overlay */}


        <div className="flex justify-center px-4 flex-col md:flex-row gap-12">

          {/* LEFT */}
          <div
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1600&auto=format&fit=crop')"
            }}
            className="md:w-1/3 relative overflow-hidden rounded-2xl">
            <div className='relative  z-10 text-white flex flex-col items-start justify-center px-6 pt-6 pb-5 md:pb-0 md:pt-16'>
              <h1 className="text-4xl font-black mb-3">
                {t('sections.how_to_rent')}
              </h1>
              <p className="mb-6 text-white/80 text-start text-sm">
                {t('sections.how_to_rent_description')}
              </p>
              <Link to="/produits" className="bg-white text-black px-6 py-3 rounded-full font-bold">
                Get Started
              </Link>
            </div>
            <div className="absolute inset-0 bg-[#4100dd]/20"></div>
          </div>

          {/* RIGHT */}
          <div className="md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">

            {(t('sections.how_steps', { returnObjects: true }) as any[]).map((step, i) => (
              <div key={i} className="bg-gray-300/20 flex flex-col items-start backdrop-blur rounded-2xl p-6">

                <span className="text-5xl font-black text-[#5201FF] opacity-30 block mb-2">
                  0{i + 1}
                </span>

                <p className="text-lg font-semibold mb-2 text-start">
                  {step.t}
                </p>

                <p className="text-black/80 text-sm text-start">
                  {step.d}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>



      {/* 8. WHAT OUR CUSTOMERS ARE SAYING */}
      <section className="py-24 bg-gray-200">
        <div className="mx-auto px-4">
          <h1 className="text-4xl font-black mb-16 text-center">{t('sections.testimonials_title')}</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-start">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-code-bg p-10 rounded-[2.5rem] border border-border shadow-sm">
                <div className="flex gap-1 text-accent mb-6">
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                  <Star fill="currentColor" size={16} />
                </div>
                <p className="italic text-lg mb-8 leading-relaxed text-text-h font-medium">{t('sections.testimonial_text')}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-border rounded-full flex items-center justify-center font-bold">
                    {t('sections.customer_name').charAt(0)}
                  </div>
                  <div>
                    <h5 className="font-black">{t('sections.customer_name')}</h5>
                    <span className="text-sm text-text/50">{t('sections.location')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ'S */}


      <section className="py-24 bg-code-bg">
        <div className="mx-auto px-4 max-w-4xl text-start">
          <h2 className="text-4xl font-black mb-16 text-center">
            {t('sections.faq_title')}
          </h2>

          <div className="space-y-4">
            {[
              {
                q: isRtl ? 'كيف يمكنني الحجز؟' : 'How can I make a booking?',
                a: isRtl ? 'يمكنك الحجز مباشرة عبر الموقع أو عبر الواتساب.' : 'You can book directly through the website or via WhatsApp.'
              },
              {
                q: isRtl ? 'ما هي طرق الدفع؟' : 'What payment methods are available?',
                a: isRtl ? 'الدفع عند الاستلام أو تحويل بنكي.' : 'Cash on delivery or bank transfer.'
              },
              {
                q: isRtl ? 'هل توفرون التركيب؟' : 'Do you provide installation?',
                a: isRtl ? 'نعم، نوفر التوصيل والتركيب والفك.' : 'Yes, delivery, installation, and dismantling are included.'
              },
              {
                q: isRtl ? 'هل يمكن تعديل الحجز؟' : 'Can I modify my reservation?',
                a: isRtl ? 'نعم، يمكنك التعديل قبل موعد الحدث.' : 'Yes, you can modify your booking before the event date.'
              },
              {
                q: isRtl ? 'هل تقدمون خدمات مخصصة؟' : 'Do you offer custom packages?',
                a: isRtl ? 'نعم، نقدم حلول حسب الطلب.' : 'Yes, we offer fully tailored solutions on request.'
              },
              {
                q: isRtl ? 'كم مدة التوصيل؟' : 'What is the delivery timeframe?',
                a: isRtl ? 'يتم التوصيل حسب الجدول المتفق عليه.' : 'Delivery is scheduled according to your agreed event timeline.'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl border border-border cursor-pointer transition-all"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-bold">{item.q}</h4>
                  <span className="text-2xl font-bold">
                    {openIndex === i ? '-' : '+'}
                  </span>
                </div>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-40 mt-4' : 'max-h-0'
                    }`}
                >
                  <p className="text-text/70">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Landing;
