import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/hooks/useTranslation";

const Hero = () => {
  const { t } = useTranslation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-subtle"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container mx-auto px-4 md:px-6 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-gradient break-words leading-normal">
            {t('hero.title')}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 animate-fade-in-up px-2 leading-relaxed">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-in">
            <Button 
              size="lg" 
              onClick={() => scrollToSection('projects')}
              className="shadow-medium hover:shadow-large transition-smooth bg-orange-500 text-white hover:bg-white hover:text-orange-600 border-2 border-orange-500"
            >
              {t('hero.viewWork')}
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="shadow-soft hover:shadow-medium transition-smooth hover:scale-[1.02] border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white"
            >
              {t('hero.getInTouch')}
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-fade-in-up">
            <a 
              href="https://github.com/CenkKorkmaz92" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-orange-600 hover:scale-110 transition-all duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-blue-600 hover:scale-110 transition-all duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:Cenk.Korkmaz92@gmail.com"
              className="text-muted-foreground hover:text-orange-600 hover:scale-110 transition-all duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-muted-foreground hover:text-primary transition-smooth animate-bounce"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  );
};

export default Hero;