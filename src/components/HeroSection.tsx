import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background with Overlay */}
      <div className="absolute inset-0">
        <iframe
          className="absolute inset-0 w-full h-full object-cover"
          src="https://www.youtube.com/embed/9RPbvQ_7GSc?autoplay=1&mute=1&loop=1&playlist=9RPbvQ_7GSc&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&disablekb=1&fs=0&cc_load_policy=0&playsinline=1&enablejsapi=0"
          title="Alpha AI Background Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen={false}
          style={{ pointerEvents: 'none' }}
        />
        <div className="absolute inset-0 alpha-gradient-bg opacity-80"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-alpha-primary rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-white rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-20 w-3 h-3 bg-alpha-primary/50 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-white/70 rounded-full animate-pulse"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 alpha-container text-center text-white">
        <div className="max-w-4xl mx-auto fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
            {t('hero.title')}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed fade-in-up-delay-1">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center fade-in-up-delay-2">
            <Button 
              variant="outline" 
              size="lg" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;