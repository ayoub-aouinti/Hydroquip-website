import { motion } from 'framer-motion';
import { Award, Shield, Truck, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Notre Entreprise</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Leader en Solutions Hydrauliques</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Société spécialisée dans la fabrication de toute pièce mécanique, raccord ou flexible; basse, moyenne, haute et très haute pression.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">Notre Expertise</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong>HYDROQUIP</strong> est une société active aujourd'hui dans plusieurs secteurs stratégiques. Nous offrons des solutions complètes pour les circuits oléohydrauliques, pneumatiques et autres montages industriels.
              </p>
              <p>
                Notre force réside dans notre équipe technique qui veille sur l'importance de la continuité de votre travail et la non-interruption du cycle de production. Cela est notre garantie sur le service que nous offrons pour votre satisfaction.
              </p>
              <p>
                Notre assistance technique est à votre écoute tous les jours (7/7) y compris les jours fériés et à toute heure qui vous convient.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/10 flex items-center justify-center">
               <Shield size={64} className="text-primary/50" />
               <span className="absolute text-white/20 font-bold text-6xl select-none">QUALITY</span>
            </div>
             <div className="absolute -bottom-6 -left-6 bg-primary p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-white font-bold text-lg">Assistance 7/7</p>
                <p className="text-white/80 text-sm">Disponibilité garantie</p>
             </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-colors">
                <Truck className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">Rapidité d'Intervention</h3>
                <p className="text-gray-400">Nous parions sur la rapidité de nos interventions grâce à nos moyens pour mieux vous servir.</p>
            </div>
            <div className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-colors">
                <Award className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">Qualité & Prix</h3>
                <p className="text-gray-400">Nous vous proposons le meilleur des prix qui s’adapteront parfaitement à vos fins et besoins.</p>
            </div>
             <div className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-colors">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">Équipe Experte</h3>
                <p className="text-gray-400">Une équipe technique dédiée qui veille sur la continuité de votre cycle de production.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
