import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Factory, ShieldCheck, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-[#0A0A0A]">
            <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8 }}
          >
              <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-gray-300 font-medium">{t('home.badge')}</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
                {t('home.hero.title1')} <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">{t('home.hero.title2')}</span> & <br />
                <span className="text-primary">{t('home.hero.title3')}</span>
              </h1>
              
              <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                {t('home.hero.description')}
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <Link to="/services" className="btn btn-primary min-w-[180px] gap-2 group">
                  {t('home.hero.cta1')}
                  <ArrowRight size={18} className="group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180 transition-transform" />
                </Link>
                <Link to="/contact" className="btn btn-outline min-w-[180px]">
                  {t('home.hero.cta2')}
                </Link>
              </div>
          </motion.div>
        </div>
      </section>

      {/* Features Strip */}
      <section className="py-20 border-y border-white/5 bg-[#0F0F0F]">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <FeatureCard 
                    icon={<Factory size={32} />}
                    title={t('home.features.custom.title')}
                    description={t('home.features.custom.description')}
                />
                 <FeatureCard 
                    icon={<ShieldCheck size={32} />}
                    title={t('home.features.quality.title')}
                    description={t('home.features.quality.description')}
                />
                 <FeatureCard 
                    icon={<Clock size={32} />}
                    title={t('home.features.support.title')}
                    description={t('home.features.support.description')}
                />
            </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center ">
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0A0A0A] border border-white/10 rounded-2xl p-12 md:p-20 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-500" />
                    
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 relative z-10">{t('home.cta.title')}</h2>
                    <p className="text-gray-400 max-w-xl mx-auto mb-8 relative z-10">
                        {t('home.cta.description')}
                    </p>
                    <Link to="/contact" className="btn btn-primary relative z-10">
                        {t('home.cta.button')}
                    </Link>
              </div>
          </div>
      </section>
    </>
  );
};

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="flex flex-col items-center text-center p-6 rounded-xl hover:bg-white/5 transition-colors">
        <div className="bg-[#1a1a1a] p-4 rounded-full text-primary mb-4 border border-white/5 shadow-lg">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-400">{description}</p>
    </div>
);

export default Home;
