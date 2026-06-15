import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#110035] text-white pt-20 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 border-b border-white/10 pb-12 text-start">
        <div>
          <h3 className="text-2xl font-black text-accent mb-6">
            {t('footer.about_title')}
          </h3>
          <p className="text-white/60 leading-relaxed mb-6">
            {t('footer.about_desc')}
          </p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><FaFacebook size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><FaInstagram size={20} /></a>
            <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-accent transition-colors"><FaTwitter size={20} /></a>
            <a href="https://wa.me/966501234567" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-lg hover:bg-[#25D366] transition-colors"><FaWhatsapp size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.quick_links')}</h4>
          <ul className="space-y-4 text-white/60">
            <li><Link to="/categories" className="hover:text-accent transition-colors">{t('footer.links.categories')}</Link></li>
            <li><Link to="/produits" className="hover:text-accent transition-colors">{t('footer.links.popular')}</Link></li>
            <li><Link to="/contact" className="hover:text-accent transition-colors">{t('footer.links.contact')}</Link></li>
            <li><Link to="/terms" className="hover:text-accent transition-colors">{t('footer.links.terms')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">{t('footer.contact_us')}</h4>
          <ul className="space-y-4 text-white/60 text-sm">
            <li>{t('sections.location')}</li>
            <li>info@eventrental.sa</li>
            <li>+966 50 123 4567</li>
          </ul>
        </div>

      </div>

      <div className="container mx-auto px-4 pt-10 text-center text-white/40 text-sm">
        <p>{t('footer.rights')}</p>
      </div>
    </footer>
  );
};

export default Footer;
