import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-16 pb-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">HYDROQUIP</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Société d'Equipements Hydrauliques. Spécialisée dans la fabrication de toute pièce mécanique pour circuits oléohydrauliques et pneumatiques.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary mt-1" />
                <span>45, rue Russie Sahabi 2<br />Kairouan, Tunisie</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary" />
                <span>+216 77 302 424</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary" />
                <span>contact@hydroquip.tn</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Liens Rapides</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="/" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="/services" className="hover:text-white transition-colors">Produits</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">À Propos</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-primary">Horaires</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Lun - Ven: 8h00 - 17h00</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={16} />
                <span>Sam: 8h00 - 13h00</span>
              </li>
              <li className="text-primary">7/7 Assistance Technique</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Hydroquip. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
