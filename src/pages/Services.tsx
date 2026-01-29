import { motion } from 'framer-motion';

const Services = () => {
    
  const services = [
    {
      image: "/images/automobile.png",
      title: "Automobile",
      description: "Tuyauterie de direction assistées, tuyauteries en polyamide pour le transport de carburants.",
      details: "Solutions hydrauliques complètes pour l'industrie automobile incluant flexibles haute pression et raccords spécialisés."
    },
    {
      image: "/images/construction.png",
      title: "Matériels & Travaux Publics",
      description: "Pièces et flexibles pour engins de chantier, travaux publics et carrières.",
      details: "Équipements robustes conçus pour résister aux conditions extrêmes des chantiers et carrières."
    },
    {
      image: "/images/drilling.png",
      title: "Sondages Hydrauliques",
      description: "Equipements haute pression pour les sondages et forages hydrauliques.",
      details: "Systèmes haute performance pour applications de forage et sondage nécessitant une fiabilité maximale."
    },
    {
      image: "/images/industrial.png",
      title: "Industrie Pétrolière & Pharma",
      description: "Solutions pour industries pétrolières, agroalimentaires (lait, huile d'olive) et pharmaceutiques.",
      details: "Composants en acier inoxydable sanitaire conformes aux normes les plus strictes de l'industrie."
    },
    {
       image: "/images/agricultural.png",
       title: "Agricole", 
       description: "Flexibles et raccords pour machines agricoles et systèmes d'irrigation.",
       details: "Équipements hydrauliques adaptés aux tracteurs, moissonneuses et systèmes d'irrigation modernes."
    },
    {
       image: "/images/custom.png",
       title: "Fabrication sur Mesure",
       description: "Fabrication de toute pièce mécanique selon vos modèles et spécifications.",
       details: "Service de fabrication personnalisée avec usinage de précision pour répondre à vos besoins spécifiques."
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
              className="bg-[#121212] border border-white/5 rounded-xl overflow-hidden hover:border-primary/50 transition-all group"
            >
              {/* Image Header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60"></div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-3">
                  {service.description}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {service.details}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
