import { useTranslation } from 'react-i18next';
import useStore from '../store/useStore';
import { Calendar, Package, User, Truck, CheckCircle2, Trash2 } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';


const Reservation = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === 'ar';
  const { cart, removeFromCart, currentStep, setCurrentStep, reservationData, updateReservationData, clearCart } = useStore();
  const [showSuccess, setShowSuccess] = useState(false);
  const steps = [
    { title: t('reservation.steps.review'), icon: <Package size={18} /> },
    { title: t('reservation.steps.time'), icon: <Calendar size={18} /> },
    { title: t('reservation.steps.info'), icon: <User size={18} /> },
    { title: t('reservation.steps.shipping'), icon: <Truck size={18} /> },
    { title: t('reservation.steps.confirm'), icon: <CheckCircle2 size={18} /> }
  ];

  const handleNext = () => setCurrentStep(Math.min(currentStep + 1, 5));
  const handlePrev = () => setCurrentStep(Math.max(currentStep - 1, 1));
  const navigate = useNavigate();

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full">
            <h3 className="text-xl font-black mb-8 text-start">{t('reservation.step2.title')} ({cart.length})</h3>
            <div className="space-y-4 mb-10 overflow-hidden">
              {cart.map((item) => (
                <div key={item.id} className="flex flex-col md:flex-row items-start md:items-center gap-6 p-4 bg-white border border-border rounded-2xl transition-all hover:bg-gray-50">
                  <img src={item.image} className="w-20 h-20 rounded-xl object-cover" />
                  <div className="flex-1 text-start">
                    <h4 className="font-bold text-lg">{item.name}</h4>
                    <p className="text-accent font-black mt-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
                      <span>{item.price} {isRtl ? 'ر.س' : 'SAR'} x {item.quantity}</span>
                      <span className="text-sm font-medium text-text/60 md:border-l md:border-border md:pl-4">
                        {isRtl ? 'الإجمالي اليومي:' : 'Daily total:'} {item.price * item.quantity} {isRtl ? 'ر.س' : 'SAR'} / {t('items.day')}
                      </span>
                    </p>
                  </div>
                  <button onClick={() => removeFromCart(item.id)} className="text-red-500 p-2 hover:bg-red-50 rounded-xl self-end md:self-auto"><Trash2 size={22} /></button>
                </div>
              ))}
              {cart.length === 0 && <p className="text-center py-10 text-text/50 italic">{t('reservation.step2.empty')}</p>}
            </div>
            <div className="bg-code-bg p-8 rounded-3xl border border-border">
              <div className="flex justify-between font-black text-xl">
                <span>{t('reservation.step2.total')}</span>
                <span className="text-accent">{cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)} {isRtl ? 'ر.س' : 'SAR'}</span>
              </div>
            </div>
          </div>
        );
      case 2:
        const handleDateChange = (field: 'start' | 'end', value: string) => {
          let currentDates: any = reservationData.dates || { start: '', end: '', days: 0 };
          const newDates = { ...currentDates, [field]: value };

          if (newDates.start && newDates.end) {
            const diffTime = Math.abs(new Date(newDates.end).getTime() - new Date(newDates.start).getTime());
            newDates.days = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1;
          }
          updateReservationData({ dates: newDates });
        };

        const today = new Date().toISOString().split('T')[0];

        return (
          <div className="w-full text-start">
            <label className="block text-xl font-black mb-6">{t('reservation.step1.title')}</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="p-6 bg-code-bg rounded-3xl border border-border hover:border-accent transition-colors">
                <span className="block text-sm font-bold text-text/50 mb-2">{t('reservation.step1.start_date')}</span>
                <input
                  type="date"
                  value={reservationData.dates?.start || ''}
                  onChange={(e) => handleDateChange('start', e.target.value)}
                  min={today}
                  className="w-full bg-transparent text-xl font-bold outline-none cursor-pointer text-text-h"
                />
              </div>
              <div className="p-6 bg-code-bg rounded-3xl border border-border hover:border-accent transition-colors">
                <span className="block text-sm font-bold text-text/50 mb-2">{t('reservation.step1.end_date')}</span>
                <input
                  type="date"
                  value={reservationData.dates?.end || ''}
                  onChange={(e) => handleDateChange('end', e.target.value)}
                  min={reservationData.dates?.start || today}
                  className="w-full bg-transparent text-xl font-bold outline-none cursor-pointer text-text-h"
                />
              </div>
            </div>

            {((reservationData.dates as any)?.days) > 0 && (
              <p className="bg-green-50 text-green-700 p-5 rounded-2xl font-bold text-[16px] mb-6 border border-green-200 shadow-sm flex items-center justify-center">
                {isRtl ? `تم اختيار مدة: ${(reservationData.dates as any).days} أيام` : `Duration selected: ${(reservationData.dates as any).days} day(s)`}
              </p>
            )}

            <p className="bg-accent-bg text-accent p-6 rounded-2xl font-bold text-sm">{t('reservation.step1.note')}</p>
          </div>
        );
      case 3:
        const handleUserChange = (field: string, value: string) => {
          updateReservationData({
            userDetails: {
              ...reservationData.userDetails,
              [field]: value
            }
          });
        };

        return (
          <div className="w-full grid grid-cols-1 gap-6 text-start">
            <div>
              <label className="block text-sm font-bold mb-2 mr-1">{t('reservation.step3.name')}</label>
              <input
                type="text"
                value={reservationData.userDetails.name}
                onChange={(e) => handleUserChange('name', e.target.value)}
                className="w-full bg-code-bg p-4 rounded-xl outline-accent cursor-text"
                placeholder={t('reservation.step3.name_placeholder')}
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 mr-1">{t('reservation.step3.phone')}</label>
              <input
                type="tel"
                value={reservationData.userDetails.phone}
                onChange={(e) => handleUserChange('phone', e.target.value)}
                className="w-full bg-code-bg p-4 rounded-xl outline-accent cursor-text"
                placeholder={t('reservation.step3.phone_placeholder')}
              />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="w-full text-start">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                className={`p-6 rounded-2xl border-2 font-black transition-all 
      ${reservationData.shipping.method === "delivery"
                    ? "bg-[#4D02F0] text-white "
                    : "border-border hover:border-[#4D02F0]"
                  }`}
                onClick={() =>
                  updateReservationData({
                    shipping: { ...reservationData.shipping, method: "delivery" },
                  })
                }
              >
                {t("reservation.step4.delivery")}
              </button>

              <button
                className={`p-6 rounded-2xl border-2 font-black transition-all 
      ${reservationData.shipping.method === "pickup"
                    ? "bg-[#4D02F0] text-white border-[#4D02F0]"
                    : "border-border hover:border-[#4D02F0]"
                  }`}
                onClick={() =>
                  updateReservationData({
                    shipping: { ...reservationData.shipping, method: "pickup" },
                  })
                }
              >
                {t("reservation.step4.pickup")}
              </button>
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 mr-1 font-black">{t('reservation.step4.address')}</label>
              <textarea
                value={reservationData.shipping.address || ''}
                onChange={(e) => updateReservationData({ shipping: { ...reservationData.shipping, address: e.target.value } })}
                className="w-full bg-code-bg p-4 rounded-2xl outline-accent resize-none h-32 cursor-text"
                placeholder={t('reservation.step4.address_placeholder')}
              />
            </div>
          </div>
        );
      case 5:
        const rentalDays = (reservationData.dates as any)?.days || 1;
        const totalItemsPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const subtotal = totalItemsPrice * rentalDays;
        const deliveryFee = 1000;
        const grandTotal = subtotal + deliveryFee;

        return (
          <div className="w-full text-center">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 size={40} />
            </div>
            <h3 className="text-3xl font-black mb-4">{t('reservation.step5.confirm_title')}</h3>
            <p className="text-text/60 mb-10 max-w-sm mx-auto">{t('reservation.step5.desc')}</p>

            <div className="bg-code-bg p-8 rounded-3xl border border-border text-start w-full">
              <h4 className="font-bold text-lg mb-6 pb-4 border-b border-border">{isRtl ? 'تفاصيل الفاتورة' : 'Invoice Details'}</h4>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-text/70 text-lg">
                  <span>{isRtl ? 'تكلفة المنتجات اليومية' : 'Daily cost'}</span>
                  <span className="font-bold">{totalItemsPrice} {isRtl ? 'ر.س / يوم' : 'SAR / day'}</span>
                </div>
                <div className="flex justify-between text-text/70 text-lg">
                  <span>{isRtl ? 'مدة الإيجار' : 'Rental duration'}</span>
                  <span className="font-bold">{rentalDays} {isRtl ? 'أيام' : 'day(s)'}</span>
                </div>
                <div className="flex justify-between text-text/70 text-lg">
                  <span>{isRtl ? 'الإجمالي الجزيئي' : 'Subtotal'}</span>
                  <span className="font-bold">{subtotal} {isRtl ? 'ر.س' : 'SAR'}</span>
                </div>
                {reservationData.shipping.method === 'delivery' && (
                  <div className="flex justify-between text-text/70 text-lg">
                    <span>{isRtl ? 'رسوم التوصيل' : 'Delivery fee'}</span>
                    <span className="font-bold border-b-2 border-dashed border-border pb-2">{deliveryFee} {isRtl ? 'ر.س' : 'SAR'}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between text-2xl font-black text-accent mt-4 pt-2">
                <span>{isRtl ? 'الإجمالي الكلي' : 'Grand Total'}</span>
                <span>{reservationData.shipping.method === 'delivery' ? grandTotal : subtotal} {isRtl ? 'ر.س' : 'SAR'}</span>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex flex-col gap-2">
                <p className="font-bold flex justify-between text-sm">
                  <span>{t('reservation.step5.payment_method')}</span>
                  <span className="text-accent">{t('reservation.step5.cash_on_delivery')}</span>
                </p>
              </div>
            </div>
          </div>
        );
      default: return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-16 pb-32 max-w-4xl">
      {
        showSuccess && (
          <div className="fixed inset-0 bg-black/40 flex flex-col items-center justify-center z-[100]">
            <div className="bg-white rounded-2xl p-6 w-80 text-center shadow-xl relative z-[110]">
              <h2 className="text-xl font-black mb-2 text-green-600">
                {t("reservation.alerts.success", { defaultValue: "Success!" })}
              </h2>
              <p className="text-sm text-gray-500 mb-6 font-medium">
                {isRtl ? 'تم تأكيد طلبك بنجاح ' : 'Votre commande a été confirmée'}
              </p>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setCurrentStep(1);
                  navigate("/");
                }}
                className="w-full bg-[#4D02F0] hover:bg-accent text-white py-3 rounded-xl font-black transition-colors"
              >
                {isRtl ? 'العودة للصفحة الرئيسية' : 'Retour à l\'accueil'}
              </button>
            </div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-[105]" onClick={() => setShowSuccess(false)}></div>
          </div>
        )
      }
      <h1 className="text-5xl font-black my-5 text-center">{t('reservation.page_title')}</h1>

      {/* Stepper */}
      <div className="flex justify-between items-center mb-5 z-10 relative w-full overflow-x-auto pb-4 hide-scrollbar">
        <div className="absolute top-8 left-0 right-0 h-[2px] bg-border  min-w-[600px]"></div>
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center gap-4 bg-white px-2 min-w-[100px]">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-sm ${currentStep === index + 1 ? 'bg-[#4D02F0] text-white scale-105 shadow-accent/40' :
              currentStep > index + 1 ? 'bg-text-h border border-border text-green-800' : 'bg-white border border-border text-gray-400'
              }`}>
              {step.icon}
            </div>
            <span className={`text-[10px] sm:text-xs font-black uppercase tracking-tighter text-center ${currentStep >= index + 1 ? 'text-text-h' : 'text-text/30'}`}>
              {step.title}
            </span>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white border border-border/50 p-6 md:p-12 rounded-[2rem] shadow-sm min-h-[500px] flex flex-col items-center overflow-hidden">
        {renderStep()}

        <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full pt-10 border-t border-border/50">
          {currentStep > 1 && (
            <button
              onClick={handlePrev}
              className="px-10 py-4 rounded-2xl font-black bg-code-bg hover:bg-gray-200 transition-colors w-full sm:w-auto text-center"
            >
              {t('reservation.btns.prev')}
            </button>
          )}
          {currentStep < 5 && (
            <button
              onClick={handleNext}
              disabled={
                (currentStep === 1 && cart.length === 0) ||
                (currentStep === 2 && !(reservationData.dates as any)?.days)
              }
              className={`bg-[#4D02F0] flex-1 py-4 rounded-2xl font-black transition-all ${((currentStep === 1 && cart.length === 0) || (currentStep === 2 && !(reservationData.dates as any)?.days))
                ? 'bg-gray-100 text-text/30 cursor-not-allowed'
                : 'bg-accent text-white hover:shadow-lg'
                }`}
            >
              {t('reservation.btns.next')}
            </button>
          )}
          {currentStep === 5 && (
            <button
              onClick={(e) => {
                e.preventDefault();

                try {
                  // 0. Compute final values
                  const rentalDays = (reservationData.dates as any)?.days || 1;
                  const totalItemsPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                  const subtotal = totalItemsPrice * rentalDays;
                  const deliveryFee = 1000;
                  const grandTotal = reservationData.shipping.method === "delivery" ? subtotal + deliveryFee : subtotal;

                  // 1. Prepare Payload Data
                  const orderData = {
                    name: reservationData.userDetails.name || "Unknown",
                    phone: reservationData.userDetails.phone || "Unknown",
                    product: cart.map(item => `${item.quantity}x ${item.name}`).join(", "),
                    price: grandTotal,
                    address: reservationData.shipping.method === "delivery" ? (reservationData.shipping.address || "No address provided") : "Store Pickup",
                    date: new Date().toLocaleDateString()
                  };

                  // 1.5 Send to Google Sheets
                  const scriptUrl = "https://script.google.com/macros/s/AKfycbwq3cJMxUw7qlllJ5T5st31xVaKTuNtYv9m-s3e5k0Y3AM1EY65W65OU_JMa3ThzSo-xg/exec";
                  fetch(scriptUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(orderData)
                  }).catch(e => console.error("Google Sheets Error", e));

                  // 2. WhatsApp Deep Link Generation (Most Reliable Method)
                  const waMessage = `*New Order* 🛒\n\n*Name:* ${orderData.name}\n*Phone:* ${orderData.phone}\n*Products:* ${orderData.product}\n*Rental Days:* ${rentalDays}\n*Delivery:* ${reservationData.shipping.method}\n*Address:* ${orderData.address}\n*Total:* ${orderData.price} SAR`;
                  const TARGET_PHONE_NUMBER = "966501234567";
                  const waUrl = `https://wa.me/${TARGET_PHONE_NUMBER}?text=${encodeURIComponent(waMessage)}`;

                  // 3. UI Cleanup & Redirect
                  setShowSuccess(true);
                  clearCart();

                  // Open WhatsApp in a new tab so success modal remains visible
                  window.open(waUrl, '_blank');

                } catch (err) {
                  console.error("Order processing error: ", err);
                  alert("Something went wrong processing your order. Please try again.");
                }
              }}
              className="flex-1 bg-green-600 text-white py-4 rounded-2xl font-black hover:bg-green-700 transition-colors"
            >
              {t("reservation.btns.confirm")}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservation;
