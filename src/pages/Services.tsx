import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Services = () => {
  const { t } = useTranslation();
    
  const services = [
    {
      image: "/images/automobile.png",
      title: t('services.items.automobile.title'),
      description: t('services.items.automobile.description'),
      details: t('services.items.automobile.details')
    },
    {
      image: "/images/construction.png",
      title: t('services.items.construction.title'),
      description: t('services.items.construction.description'),
      details: t('services.items.construction.details')
    },
    {
      image: "/images/drilling.png",
      title: t('services.items.drilling.title'),
      description: t('services.items.drilling.description'),
      details: t('services.items.drilling.details')
    },
    {
      image: "/images/industrial.png",
      title: t('services.items.industrial.title'),
      description: t('services.items.industrial.description'),
      details: t('services.items.industrial.details')
    },
    {
       image: "/images/agricultural.png",
       title: t('services.items.agricultural.title'), 
       description: t('services.items.agricultural.description'),
       details: t('services.items.agricultural.details')
    },
    {
       image: "/images/custom.png",
       title: t('services.items.custom.title'),
       description: t('services.items.custom.description'),
       details: t('services.items.custom.details')
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
          <span className="text-primary font-bold uppercase tracking-wider text-sm">{t('services.badge')}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{t('services.title')}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('services.description')}
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
