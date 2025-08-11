import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Angular", "TypeScript", "JavaScript", 
        "HTML5", "CSS3", "Tailwind CSS", "Firebase"
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        "Python", "Django", "Django REST Framework", "PostgreSQL", 
        "Redis", "SQL", "API Design", "Linux"
      ]
    },
    {
      title: "Development Tools",
      skills: [
        "Git/GitHub", "VS Code", "Docker", "Postman", "Vite", "npm", 
        "Scrum", "Database Design", "Version Control"
      ]
    },
    {
      title: "AI & Emerging Tech",
      skills: [
        "Open Source AI Models", "Local AI Development", "Node.js", 
        "Next.js", "Docker", "Cloud Services"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Skills & Technologies
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              My technical toolkit spans both frontend and backend development, with a growing 
              interest in AI integration. Here are the technologies I work with to build 
              modern, scalable web applications.
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
                          className="px-3 py-1 text-sm bg-orange-100 text-orange-600 border-0 transition-smooth shadow-soft"
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
                <h3 className="text-2xl font-semibold mb-4">Continuous Learning</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm passionate about staying current with emerging technologies and best practices. 
                  Currently exploring AI integration and local model development to bridge traditional 
                  web development with intelligent applications.
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