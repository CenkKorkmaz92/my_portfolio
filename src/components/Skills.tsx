import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/hooks/useTranslation";

const Skills = () => {
  const { t } = useTranslation();
  
  const skillCategories = [
    {
      title: t('skills.cat1.title'),
      skills: [
        "CNC Processes", "CAM Optimization", "Quality Control", "Process Analysis",
        "Manufacturing Automation", "Production Systems", "Lean/KVP", "Safety Standards"
      ]
    },
    {
      title: t('skills.cat2.title'),
      skills: [
        "React", "Angular", "TypeScript", "JavaScript", 
        "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"
      ]
    },
    {
      title: t('skills.cat3.title'), 
      skills: [
        "Python", "Django", "Django REST Framework", "PostgreSQL", 
        "Redis", "SQL", "API Design", "Linux"
      ]
    },
    {
      title: t('skills.cat4.title'),
      skills: [
        "Git/GitHub", "Docker", "Cloud Services", "AI Integration",
        "Process Automation", "Data Analytics", "IoT Concepts", "Scrum"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              {t('skills.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              {t('skills.intro')}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <AnimatedSection 
                key={category.title}
                animation="scale"
                delay={categoryIndex * 200}
              >
                <Card className="bg-gradient-card shadow-medium hover:shadow-large hover:scale-[1.02] transition-all duration-300 border-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold">
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-3">
                      {category.skills.map((skill) => (
                        <Badge 
                          key={skill} 
                          variant="secondary" 
                          className="px-3 py-1 text-base bg-orange-100 text-orange-600 border-0 transition-smooth shadow-soft"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" delay={600}>
            <div className="mt-16 text-center">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-large max-w-4xl mx-auto">
                <h3 className="text-2xl font-semibold mb-4">{t('skills.learning.title')}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('skills.learning.text')}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Skills;