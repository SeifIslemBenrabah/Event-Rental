import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Translation resources
const resources = {
  ar: {
    translation: {
      contact: {
        title: "تواصل معنا",
        subtitle: "هل لديك استفسار أو ترغب في حجز خدمة؟ لا تتردد في التواصل معنا وسنكون سعداء بمساعدتك.",

        form_name: "الاسم",
        form_phone: "رقم الهاتف",
        form_message: "رسالتك",

        placeholder_name: "اكتب اسمك",
        placeholder_phone: "+966 5X XXX XXXX",
        placeholder_message: "اكتب رسالتك هنا...",

        submit: "إرسال الرسالة",

        phone: "رقم الهاتف",
        location: "الموقع",
        address: "المملكة العربية السعودية، الرياض"
      },
      search: 'بحث...',
      all: 'الكل',
      nav: {
        home: 'الرئيسية',
        packs: 'الباقات',
        produits: 'المنتجات',
        contact: 'اتصل بنا',
        login: 'دخول / تسجيل',
      },
      hero: {
        badge: 'مرحباً بكم في إيفينت رينتال',
        title_start: 'اجعل مناسبتك ',
        title_accent: 'استثنائية',
        title_end: ' بلمستنا الخاصة',
        subtitle: 'نوفر أجود مستلزمات حفلات الزفاف والمناسبات بأفضل الأسعار في الرياض. بساطة في الحجز، وتميز في التنفيذ.',
        cta_start: 'ابدأ بالتسوق الآن',
        cta_contact: 'تواصل معنا',
      },
      sections: {
        latest: 'أحدث ما وصلنا',
        latest_badge: 'المجموعة الجديدة',
        view_all: 'شاهد الكل',
        categories_title: 'تصفح حسب الفئات',
        services_title: 'خدماتنا',
        how_to_rent: 'كيفية الحجز',
        how_to_rent_description: 'نُقدّم نظام تأجير بسيط لمعدات الزفاف والفعاليات مثل الكراسي والطاولات والإضاءة وعناصر الديكور. يمكنك اختيار ما يناسبك، وحجزه لتاريخ مُحدد، واستخدامه خلال فعاليتك، وإعادته بسهولة بعد انتهائها.',
        popular_title: 'الأكثر طلباً',
        faq_title: 'الأسئلة الشائعة',
        services: {
          s1: {
            t: 'إعداد مخصص للفعاليات',
            d: 'نقوم بتصميم وتجهيز كل فعالية بما يتناسب مع رؤيتك واحتياجاتك.'
          },
          s2: {
            t: 'خيارات تأجير مرنة',
            d: 'اختر من بين مجموعة واسعة من الباقات التي تناسب حجم وميزانية فعاليتك.'
          },
          s3: {
            t: 'نظام حجز سهل',
            d: 'احجز خدماتك بسهولة من خلال منصة سريعة وبسيطة الاستخدام.'
          },
          s4: {
            t: 'خدمة العملاء',
            d: 'فريقنا متواجد لمساعدتك في كل مراحل تنظيم فعاليتك.'
          }
        },
        how_steps: [
          { t: 'تصفح واختيار', d: 'تصفح قائمة العناصر المتاحة واختر ما يناسبك.' },
          { t: 'أضف للحجز', d: 'أضف العناصر المختارة إلى سلة الحجز الخاصة بك.' },
          { t: 'حدد التاريخ', d: 'اختر مواعيد الاستلام والتسليم المناسبة لك.' },
          { t: 'استمتع بمناسبتك', d: 'سنقوم بتوصيل الطلب وتركيبه في موعده.' }
        ],
        last_chance: {
          badge: 'فرصة أخيرة - خصم 30%',
          title: 'باقة زفاف ذهبية متكاملة',
          desc: 'احصل على باقة متكاملة تشمل الخيمة، الإضاءة، والمجالس بخصم خاص لفترة محدودة جداً.',
          cta: 'احجز العرض الآن'
        },
        testimonials_title: 'ماذا يقول عملاؤنا؟',
        testimonial_text: '"تعامل راقي جداً والتزام تام بالمواعيد. كانت الخيام نظيفة وجديدة، والتركيب كان سريعاً ومنظماً. شكراً لكم!"',
        customer_name: 'سارة عبد الله',
        location: 'المملكة العربية السعودية، الرياض',
      },
      footer: {
        about_title: 'إيفينت رينتال',
        about_desc: 'منصتك الأولى لتأجير مستلزمات الزفاف والفعاليات بجودة عالية في الرياض، المملكة العربية السعودية. نجعل مناسباتكم أسهل وأجمل.',
        quick_links: 'روابط سريعة',
        contact_us: 'اتصل بنا',
        newsletter: 'النشرة البريدية',
        newsletter_desc: 'اشترك ليصلك جديدنا وعروضنا الحصرية.',
        email_placeholder: 'بريدك الإلكتروني',
        subscribe: 'اشترك الآن',
        rights: '© 2026 إيفينت رينتال. جميع الحقوق محفوظة.',
        links: {
          categories: 'تصفح الفئات',
          produits: 'المنتجات',
          popular: 'الأكثر طلباً',
          contact: 'اتصل بنا',
          terms: 'الشروط والأحكام'
        }
      },
      categories: {
        title: 'فئات الباقات',
        subtitle: 'تصفح مجموعاتنا المتنوعة من باقات الزفاف والمناسبات.',
        packs_available: 'باقة متاحة',
        view_packs: 'عرض الباقات'
      },
      items: {
        title: 'المستلزمات المتاحة',
        subtitle: 'استعرض باقاتنا المميزة في هذه الفئة.',
        add_to_cart: 'أضف للسلة',
        day: 'يوم',
        per_day: 'ر.س / يوم',
        new: 'جديد'
      },
      data: {
        categories: {
          tents: { name: 'خيام وقباب', desc: 'خيام ملكية وقباب فاخرة لجميع المساحات' },
          furniture: { name: 'أثاث ومجالس', desc: 'كراسي، طاولات، ومجالس عربية فاخرة' },
          lighting: { name: 'إضاءة وصوت', desc: 'أنظمة إضاءة LED احترافية وشاشات وأجهزة صوت' },
          decor: { name: 'ديكور وزينة', desc: 'أقواس، ستائر، وزينة لمختلف مناسبات الزفاف' },
          events: { name: 'تنظيم المناسبات', desc: 'تنظيم كامل لحفلات الزفاف والمناسبات من البداية للنهاية' },
          catering: { name: 'الضيافة والتموين', desc: 'بوفيه مفتوح، طاولات كيك، وضيافة راقية للمناسبات' }
        },
        items: {
          i1: 'كرسي العريس الذهبي',
          i2: 'قبة زفاف جيوديسية',
          i3: 'قوس زفاف بالزهور',
          i4: 'شاشة LED عملاقة',
          i5: 'مجلس عربي فاخر',
          i6: 'سجادة حمراء ملكية',
        }
      },
      reservation: {
        page_title: 'إتمام الحجز',
        steps: {
          time: 'وقت الحجز',
          review: 'مراجعة الطلب',
          info: 'المعلومات',
          shipping: 'الشحن',
          confirm: 'إرسال الطلب'
        },
        step1: {
          title: 'اختر تاريخ الفعالية',
          start_date: 'تاريخ البداية',
          end_date: 'تاريخ النهاية',
          note: 'ملاحظة: الحد الأدنى للاستئجار هو يوم واحد.'
        },
        step2: {
          title: 'قائمة العناصر المختارة',
          empty: 'لا توجد عناصر في سلة الحجز.',
          total: 'الإجمالي اليومي:'
        },
        step3: {
          name: 'الاسم الكامل',
          name_placeholder: 'أدخل اسمك',
          phone: 'رقم الجوال',
          phone_placeholder: '+966 5X XXX XXXX',
          event_type: 'نوع المناسبة'
        },
        event_types: {
          wedding: 'زواج',
          party: 'حفلة خاصة',
          business: 'اجتماع عمل',
          other: 'أخرى'
        },
        step4: {
          delivery: 'توصيل للموقع',
          pickup: 'استلام من المستودع',
          address: 'عنوان التوصيل / الموقع',
          address_placeholder: 'أدخل تفاصيل العنوان في الرياض بدقة...'
        },
        step5: {
          confirm_title: 'هل أنت مستعد للتأكيد؟',
          desc: 'سيتم مراجعة طلبك والتواصل معك عبر الواتساب لتأكيد الحجز النهائي وتفاصيل التوصيل.',
          payment_method: 'طريقة الدفع:',
          cash_on_delivery: 'عند الاستلام',
          shipping_fee: 'رسوم التوصيل:',
          to_be_determined: 'تحدد لاحقاً'
        },
        btns: {
          prev: 'السابق',
          next: 'التالي',
          confirm: 'تأكيد وإرسال الطلب'
        },
        alerts: {
          success: 'تم إرسال طلبك بنجاح! سنتواصل معك قريباً.'
        }
      }
    }
  },
  en: {
    translation: {
      contact: {
        title: "Contact Us",
        subtitle: "Have a question or want to book a service? Don't hesitate to reach out — we're happy to help.",

        form_name: "Full Name",
        form_phone: "Phone Number",
        form_message: "Your Message",

        placeholder_name: "Enter your name",
        placeholder_phone: "+966 5X XXX XXXX",
        placeholder_message: "Write your message here...",

        submit: "Send Message",

        phone: "Phone",
        location: "Location",
        address: "Riyadh, Saudi Arabia"
      },
      search: 'Search...',
      all: 'All',
      nav: {
        home: 'Home',
        packs: 'Packages',
        produits: 'Products',
        contact: 'Contact',
        login: 'Login / Register',
      },
      hero: {
        badge: 'Welcome to Event Rental',
        title_start: 'Make your event ',
        title_accent: 'unforgettable',
        title_end: ' with our touch',
        subtitle: 'We provide premium wedding & event rental equipment at the best prices in Riyadh. Easy booking, flawless execution.',
        cta_start: 'Shop Now',
        cta_contact: 'Contact Us',
      },
      sections: {
        latest: 'Latest Arrivals',
        latest_badge: 'New Collection',
        view_all: 'View All',
        categories_title: 'Browse by Category',
        services_title: 'Our Services',
        how_to_rent: 'How to Rent',
        how_to_rent_description: 'We offer a simple rental system for wedding & event equipment — chairs, tables, lighting, decor, and more. Choose what you need, book it for your date, use it at your event, and return it effortlessly.',
        popular_title: 'Most Popular',
        faq_title: 'Frequently Asked Questions',
        services: {
          s1: {
            t: 'Custom Event Setup',
            d: 'We design and set up every event to match your vision and requirements.'
          },
          s2: {
            t: 'Flexible Rental Options',
            d: 'Choose from a wide range of packages suited to any size and budget.'
          },
          s3: {
            t: 'Easy Booking System',
            d: 'Book your items quickly through our fast and intuitive platform.'
          },
          s4: {
            t: 'Dedicated Customer Support',
            d: 'Our team is here to assist you at every step of your event planning.'
          }
        },
        how_steps: [
          { t: 'Browse & Choose', d: 'Explore our catalog and select the items that fit your event.' },
          { t: 'Add to Cart', d: 'Add your selected items to your reservation cart.' },
          { t: 'Pick Your Date', d: 'Choose your preferred delivery and pickup dates.' },
          { t: 'Enjoy Your Event', d: 'We deliver and set up everything on time for you.' }
        ],
        last_chance: {
          badge: 'Limited Offer - 30% Off',
          title: 'Complete Golden Wedding Package',
          desc: 'Get a full package including tents, lighting, and luxury seating at a special price for a very limited time.',
          cta: 'Book the Offer Now'
        },
        testimonials_title: 'What Our Clients Say',
        testimonial_text: '"Exceptional service and perfect punctuality. The tents were spotless and brand new, setup was quick and professional. Highly recommended!"',
        customer_name: 'Sarah Abdullah',
        location: 'Riyadh, Saudi Arabia',
      },
      footer: {
        about_title: 'Event Rental',
        about_desc: 'Your premier platform for high-quality wedding and event rental equipment in Riyadh, Saudi Arabia. We make your occasions easier and more beautiful.',
        quick_links: 'Quick Links',
        contact_us: 'Contact Us',
        newsletter: 'Newsletter',
        newsletter_desc: 'Subscribe to receive our latest offers and exclusive deals.',
        email_placeholder: 'Your email',
        subscribe: 'Subscribe',
        rights: '© 2026 Event Rental. All rights reserved.',
        links: {
          categories: 'Browse Categories',
          produits: 'Products',
          popular: 'Most Popular',
          contact: 'Contact Us',
          terms: 'Terms & Conditions'
        }
      },
      categories: {
        title: 'Package Categories',
        subtitle: 'Browse our diverse collections of wedding and event rental equipment.',
        packs_available: 'packages available',
        view_packs: 'View Packages'
      },
      items: {
        title: 'Available Packages',
        subtitle: 'Explore our premium packages in this category.',
        add_to_cart: 'Add to Cart',
        day: 'day',
        per_day: 'SAR / day',
        new: 'New'
      },
      data: {
        categories: {
          tents: { name: 'Tents & Domes', desc: 'Royal tents and geodesic domes for all spaces' },
          furniture: { name: 'Furniture & Lounges', desc: 'Chairs, tables, and luxury Arabic majlis' },
          lighting: { name: 'Lighting & Sound', desc: 'Professional LED lighting, screens, and sound systems' },
          decor: { name: 'Decor & Floral', desc: 'Arches, backdrops, and decorations for weddings' },
          events: { name: 'Event Planning', desc: 'Full wedding and event management from start to finish' },
          catering: { name: 'Catering & Hospitality', desc: 'Buffet, cake tables, and premium Saudi hospitality' }
        },
        items: {
          i1: 'Royal Groom Chair',
          i2: 'Geodesic Wedding Dome',
          i3: 'Floral Wedding Arch',
          i4: 'Giant LED Screen',
          i5: 'Luxury Arabic Majlis',
          i6: 'Royal Red Carpet'
        }
      },
      reservation: {
        page_title: 'Complete Your Reservation',
        steps: {
          time: 'Date',
          review: 'Review',
          info: 'Details',
          shipping: 'Delivery',
          confirm: 'Confirm'
        },
        step1: {
          title: 'Choose Your Event Date',
          start_date: 'Start Date',
          end_date: 'End Date',
          note: 'Note: Minimum rental period is one day.'
        },
        step2: {
          title: 'Selected Items',
          empty: 'No items in your cart yet.',
          total: 'Daily Total:'
        },
        step3: {
          name: 'Full Name',
          name_placeholder: 'Enter your full name',
          phone: 'Phone Number',
          phone_placeholder: '+966 5X XXX XXXX',
          event_type: 'Event Type'
        },
        event_types: {
          wedding: 'Wedding',
          party: 'Private Party',
          business: 'Business Meeting',
          other: 'Other'
        },
        step4: {
          delivery: 'Delivery to Venue',
          pickup: 'Pickup from Warehouse',
          address: 'Delivery Address / Venue',
          address_placeholder: 'Enter your full address in Riyadh...'
        },
        step5: {
          confirm_title: 'Ready to Confirm?',
          desc: 'Your order will be reviewed and we will contact you via WhatsApp to confirm the final booking and delivery details.',
          payment_method: 'Payment Method:',
          cash_on_delivery: 'Cash on Delivery',
          shipping_fee: 'Delivery Fee:',
          to_be_determined: 'To be determined'
        },
        btns: {
          prev: 'Previous',
          next: 'Next',
          confirm: 'Confirm & Send Order'
        },
        alerts: {
          success: 'Your order has been sent successfully! We will contact you shortly.'
        }
      }
    }
  }
};

const handleLanguageChange = (lng: string) => {
  document.documentElement.dir = lng === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lng;
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ar',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    }
  }, (err) => {
    if (!err) {
      handleLanguageChange(i18n.language);
    }
  });

i18n.on('languageChanged', handleLanguageChange);

export default i18n;
