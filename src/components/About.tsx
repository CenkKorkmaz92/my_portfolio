import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Palette, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React, TypeScript, Tailwind CSS, and modern web technologies"
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Python, Django, API design, and database management"
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Exploring open source AI models and local AI development"
    },
    {
      icon: Palette,
      title: "Problem Solving",
      description: "Bridging traditional development with innovative AI solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              About Me
            </h2>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="slide-left">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I'm a passionate fullstack developer who combines strong technical skills with 
                  real-world problem-solving experience. With a keen interest in AI development, 
                  I'm excited about the intersection of traditional web development and artificial intelligence.
                </p>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Currently exploring the latest open source AI models and looking forward to developing 
                  local AI solutions. I believe the future of web development lies in intelligent applications 
                  that can adapt and learn from user interactions.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I specialize in modern technologies including React, TypeScript, Angular, Python, Django, 
                  and PostgreSQL. My goal is to bridge the gap between robust fullstack development and 
                  cutting-edge AI capabilities to create truly innovative applications.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-right">
              <div className="bg-gradient-card rounded-2xl p-6 sm:p-8 shadow-large">
                <h3 className="text-xl sm:text-2xl font-semibold mb-6">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-sm sm:text-base">Specialization</span>
                    <span className="font-medium text-sm sm:text-base text-right sm:text-left">Fullstack Development</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-sm sm:text-base">Frontend</span>
                    <span className="font-medium text-sm sm:text-base text-right sm:text-left">React, Angular, TS</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-sm sm:text-base">Backend</span>
                    <span className="font-medium text-sm sm:text-base text-right sm:text-left">Python, Django, PostgreSQL</span>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2">
                    <span className="text-muted-foreground text-sm sm:text-base">Interest</span>
                    <span className="font-medium text-sm sm:text-base text-right sm:text-left">AI & Local Models</span>
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
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