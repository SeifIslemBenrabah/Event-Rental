import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '966501234567';

const WhatsAppButton = () => {
  const url = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#1ebe5d] hover:scale-110 transition-all duration-200"
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppButton;
