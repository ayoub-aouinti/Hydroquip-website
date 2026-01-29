import React from 'react';
import { motion } from 'framer-motion';
import { Car, Hammer, Droplets, FlaskConical, Tractor, LayoutGrid } from 'lucide-react';

const Services = () => {
    
  const services = [
    {
      icon: <Car size={40} />,
      title: "Automobile",
      description: "Tuyauterie de direction assistées, tuyauteries en polyamide pour le transport de carburants."
    },
    {
      icon: <Hammer size={40} />,
      title: "Matériels & Travaux Publics",
      description: "Pièces et flexibles pour engins de chantier, travaux publics et carrières."
    },
    {
      icon: <Droplets size={40} />,
      title: "Sondages Hydrauliques",
      description: "Equipements haute pression pour les sondages et forages hydrauliques."
    },
    {
      icon: <FlaskConical size={40} />,
      title: "Industrie Pétrolière & Pharma",
      description: "Solutions pour industries pétrolières, agroalimentaires (lait, huile d'olive) et pharmaceutiques."
    },
    {
       icon: <Tractor size={40} />,
       title: "Agricole", 
       description: "Flexibles et raccords pour machines agricoles et systèmes d'irrigation."
    },
    {
       icon: <LayoutGrid size={40} />,
       title: "Fabrication sur Mesure",
       description: "Fabrication de toute pièce mécanique selon vos modèles et spécifications."
    }
  ];

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-wider text-sm">Nos Services</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">Secteurs & Produits</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Notre diversité et panoplie d'articles vous donneront une optimisation pour vos choix qui seront parfaitement adéquates à vos fins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#121212] border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-all group"
            >
              <div className="text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
