import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    if (!form.current) return;

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          setLoading(false);
          setError(true);
          console.error('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Contactez-nous</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Restons en Contact</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions et demandes de devis.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ delay: 0.2 }}
               className="space-y-8"
            >
                <div className="bg-[#121212] p-8 rounded-xl border border-white/5">
                    <h3 className="text-2xl font-bold mb-6">Coordonnées</h3>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Notre Adresse</h4>
                                <p className="text-gray-400">45, rue Russie Sahabi 2<br/>Kairouan, Tunisie</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                             <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Téléphone & Fax</h4>
                                <p className="text-gray-400">Tél: +216 77 302 424</p>
                                <p className="text-gray-400">Fax: +216 77 302 425</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                             <div className="bg-primary/10 p-3 rounded-lg text-primary">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Email</h4>
                                <p className="text-gray-400">contact@hydroquip.tn</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-[#121212] p-8 rounded-xl border border-white/5">
                     <h3 className="text-xl font-bold mb-4">Horaires d'ouverture</h3>
                     <ul className="space-y-3 text-gray-400">
                         <li className="flex justify-between">
                             <span>Lundi - Vendredi</span>
                             <span className="text-white">8h00 - 17h00</span>
                         </li>
                          <li className="flex justify-between">
                             <span>Samedi</span>
                             <span className="text-white">8h00 - 13h00</span>
                         </li>
                          <li className="flex justify-between">
                             <span>Dimanche</span>
                             <span className="text-primary font-bold">Fermé (Assistance 7/7)</span>
                         </li>
                     </ul>
                </div>
            </motion.div>

            {/* Form */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#121212] p-8 rounded-xl border border-white/5"
            >
                <h3 className="text-2xl font-bold mb-6">Envoyer un message</h3>
                {success && (
                    <div className="bg-green-500/10 border border-green-500/20 text-green-500 px-4 py-3 rounded-lg mb-6">
                        Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                    </div>
                )}
                {error && (
                    <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg mb-6">
                        Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer plus tard.
                    </div>
                )}
                <form ref={form} className="space-y-6" onSubmit={sendEmail}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Nom complet</label>
                            <input 
                                type="text" 
                                name="name"
                                required
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                                placeholder="Votre nom" 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Email</label>
                            <input 
                                type="email" 
                                name="email"
                                required
                                className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                                placeholder="votre@email.com" 
                            />
                        </div>
                    </div>
                     <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Sujet</label>
                        <input 
                            type="text" 
                            name="title"
                            required
                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors" 
                            placeholder="Demande de devis..." 
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-400">Message</label>
                        <textarea 
                            name="message"
                            required
                            className="w-full bg-[#0A0A0A] border border-white/10 rounded-lg px-4 py-3 text-white h-32 focus:outline-none focus:border-primary transition-colors resize-none" 
                            placeholder="Votre message..." 
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className="w-full btn btn-primary gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                        {!loading && <Send size={18} />}
                    </button>
                </form>
            </motion.div>
        </div>

        {/* Map */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 bg-[#121212] p-2 rounded-xl border border-white/5"
        >
            <iframe 
                width="100%" 
                height="450" 
                style={{ border: 0, borderRadius: "0.5rem" }}
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://maps.google.com/maps?q=35.683079,10.079087&t=&z=15&ie=UTF8&iwloc=&output=embed"
            ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
