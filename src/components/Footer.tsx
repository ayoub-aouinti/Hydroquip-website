import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HYDROQUIP</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footer.about.description')}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">{t('footer.contact.title')}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span>{t('contact.info.address.line1')}<br />{t('contact.info.address.line2')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>{t('contact.info.phone.tel').replace('Tél: ', '')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>hydroquiptn@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">{t('footer.quickLinks.title')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">{t('nav.services')}</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">{t('nav.contact')}</Link></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">{t('contact.info.hours.title')}</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>{t('contact.info.hours.weekdays')}: {t('contact.info.hours.weekdaysTime')}</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>{t('contact.info.hours.saturday')}: {t('contact.info.hours.saturdayTime')}</span>
              </li>
              <li className="text-primary">{t('contact.info.hours.sundayTime')}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hydroquip. {t('footer.copyright')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
