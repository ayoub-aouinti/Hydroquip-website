import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send } from 'lucide-react';

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // WhatsApp number from Contact page: +216 77 302 424
  // Format for WhatsApp API: remove + and spaces
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_NUMBER;
  
  const quickMessages = [
    { id: 1, text: 'Demande de devis', icon: '💰' },
    { id: 2, text: 'Support technique', icon: '🔧' },
    { id: 3, text: 'Informations générales', icon: 'ℹ️' }
  ];

  const openWhatsApp = (message?: string) => {
    const defaultMessage = message || 'Bonjour, je souhaite obtenir plus d\'informations sur vos services.';
    const encodedMessage = encodeURIComponent(defaultMessage);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 260, damping: 20 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-2xl transition-all duration-300 hover:scale-110 group"
        aria-label="WhatsApp Chat"
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
        </motion.div>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75"></span>
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-40 w-[90vw] max-w-[380px] bg-[#0A0A0A] border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#25D366] to-[#20BA5A] p-4 text-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MessageCircle size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Hydroquip</h3>
                  <p className="text-sm text-white/90">En ligne - Réponse rapide</p>
                </div>
              </div>
            </div>

            {/* Chat Content */}
            <div className="p-6 space-y-4 max-h-[400px] overflow-y-auto">
              {/* Welcome Message */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-[#121212] p-4 rounded-lg rounded-tl-none border border-white/5"
              >
                <p className="text-gray-300 text-sm leading-relaxed">
                  👋 Bonjour ! Bienvenue chez <span className="text-primary font-semibold">Hydroquip</span>.
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  Comment pouvons-nous vous aider aujourd'hui ?
                </p>
              </motion.div>

              {/* Quick Action Buttons */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Actions rapides</p>
                {quickMessages.map((msg, index) => (
                  <motion.button
                    key={msg.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    onClick={() => openWhatsApp(msg.text)}
                    className="w-full bg-[#121212] hover:bg-[#1a1a1a] border border-white/10 hover:border-primary/50 p-3 rounded-lg text-left transition-all duration-200 group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{msg.icon}</span>
                      <span className="text-gray-300 text-sm group-hover:text-white transition-colors">
                        {msg.text}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Custom Message Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                onClick={() => openWhatsApp()}
                className="w-full bg-gradient-to-r from-[#25D366] to-[#20BA5A] hover:from-[#20BA5A] hover:to-[#1DA851] text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={18} />
                Démarrer la conversation
              </motion.button>

              {/* Footer Info */}
              <div className="text-center pt-2">
                <p className="text-xs text-gray-500">
                  Disponible: Lun-Ven 8h-17h, Sam 8h-13h
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  Assistance 7/7
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WhatsAppWidget;
