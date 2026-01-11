import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Palette, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import meImage from "@/assets/me.jpg";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  
  const highlights = [
    {
      icon: Code2,
      title: t('about.highlight1.title'),
      description: t('about.highlight1.desc')
    },
    {
      icon: Database,
      title: t('about.highlight2.title'), 
      description: t('about.highlight2.desc')
    },
    {
      icon: Brain,
      title: t('about.highlight3.title'),
      description: t('about.highlight3.desc')
    },
    {
      icon: Palette,
      title: t('about.highlight4.title'),
      description: t('about.highlight4.desc')
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {t('about.title')}
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('about.p1')}
                </p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {t('about.p2')}
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.p3')}
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-64 h-64 rounded-2xl overflow-hidden shadow-large border-4 border-white">
                    <img 
                      src={meImage} 
                      alt="Cenk Korkmaz - Fullstack Developer" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="bg-gradient-card rounded-2xl p-6 sm:p-8 shadow-large">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-6">{t('about.facts.title')}</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-base">{t('about.facts.background')}</span>
                    <span className="font-medium text-base text-right sm:text-left">{t('about.facts.backgroundValue')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-base">{t('about.facts.manufacturing')}</span>
                    <span className="font-medium text-base text-right sm:text-left">{t('about.facts.manufacturingValue')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-base">{t('about.facts.development')}</span>
                    <span className="font-medium text-base text-right sm:text-left">{t('about.facts.developmentValue')}</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-base">{t('about.facts.focus')}</span>
                    <span className="font-medium text-base text-right sm:text-left">{t('about.facts.focusValue')}</span>
                  </div>
                </div>
              </div>
              </div>
            </AnimatedSection>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <AnimatedSection 
                key={highlight.title}
                animation="scale"
                delay={index * 100}
              >
                <Card className="bg-gradient-card shadow-medium hover:shadow-large transition-smooth border-0">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-orange-200 transition-colors">
                      <highlight.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;