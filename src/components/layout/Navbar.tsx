import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Menu, Search, Globe, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useStore from '../../store/useStore';
import { useState } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const cart = useStore((state) => state.cart);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.packs'), path: '/packs' },
    { name: t('nav.produits'), path: '/produits' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <div className='w-full fixed bg-transparent top-3 z-50 flex justify-center'>
      <nav className={`bg-white/40 text-black backdrop-blur-md border-b border-border md:px-3 w-11/12 md:w-2/3 transition-all ${mobileMenuOpen ? 'rounded-2xl' : 'rounded-full'}`}>
        <div className="container md:mx-auto px-4 h-14 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-black" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Logo */}
          <Link to="/" className="text-xl font-black text-accent tracking-tighter" onClick={() => setMobileMenuOpen(false)}>
            {i18n.language === 'ar' ? (
              <>إيفينت<span className="text-text-h text-[#5201FF]">رينتال</span></>
            ) : (
              <>Event<span className="text-text-h text-[#5201FF]">Rental</span></>
            )}
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `font-medium text-sm transition-colors hover:text-accent ${isActive ? 'text-[#5201FF] font-black' : 'text-text-h'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center text-sm gap-2">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 p-2 hover:bg-black/5 rounded-full transition-colors font-semibold text-sm"
            >
              <Globe size={18} />
              <span className='hidden md:flex'>{i18n.language === 'ar' ? 'EN' : 'ع'}</span>
            </button>

            <button className="hidden md:flex p-2 hover:bg-black/5 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <Link to="/reservation" className="relative p-2 hover:bg-black/5 rounded-full transition-colors" onClick={() => setMobileMenuOpen(false)}>
              <ShoppingCart size={20} />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 bg-accent text-white text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col p-4 border-t border-border mt-1 gap-2 rounded-b-2xl animate-[slideDown_0.3s_ease-out_forwards]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block py-3 px-4 rounded-xl text-start font-bold transition-colors ${isActive ? 'bg-[#5201FF]/10 text-[#5201FF]' : 'text-text-h hover:bg-black/5'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
