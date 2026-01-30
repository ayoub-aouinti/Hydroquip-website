import { motion } from 'framer-motion';
import { Award, Shield, Truck, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-bold uppercase tracking-wider text-sm">{t('about.badge')}</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6">{t('about.title')}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            {t('about.description')}
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-6">{t('home.features.custom.title')}</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <strong>HYDROQUIP</strong> {t('footer.about.description')}
              </p>
              <p>
                {t('home.hero.description')}
              </p>
              <p>
                {t('home.features.support.description')}
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
               <span className="absolute text-white/20 font-bold text-6xl select-none uppercase tracking-widest">{t('home.features.quality.title').split(' ')[0]}</span>
            </div>
             <div className="absolute -bottom-6 -left-6 rtl:-left-auto rtl:-right-6 bg-primary p-6 rounded-lg shadow-xl hidden md:block">
                <p className="text-white font-bold text-lg">{t('home.features.support.title')}</p>
                <p className="text-white/80 text-sm">{t('whatsapp.status')}</p>
             </div>
          </motion.div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-colors">
                <Truck className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">{t('home.features.support.title')}</h3>
                <p className="text-gray-400">{t('home.features.support.description')}</p>
            </div>
            <div className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-colors">
                <Award className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">{t('home.features.quality.title')}</h3>
                <p className="text-gray-400">{t('home.features.quality.description')}</p>
            </div>
             <div className="p-8 rounded-xl bg-[#121212] border border-white/5 hover:border-primary/50 transition-colors">
                <Users className="text-primary mb-4" size={32} />
                <h3 className="font-bold text-xl mb-2">{t('home.features.custom.title')}</h3>
                <p className="text-gray-400">{t('home.features.custom.description')}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;
