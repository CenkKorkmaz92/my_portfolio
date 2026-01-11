import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/hooks/useTranslation";
import { TranslationKey } from "@/translations/translations";

const Projects = () => {
  const { t } = useTranslation();
  
  const getButtonColors = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return {
          primary: "bg-blue-500 text-white hover:bg-white hover:text-blue-600 border-2 border-blue-500",
          outline: "border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white"
        };
      case 'backend':
        return {
          primary: "bg-red-500 text-white hover:bg-white hover:text-red-600 border-2 border-red-500",
          outline: "border-red-500 text-red-600 hover:bg-red-500 hover:text-white"
        };
      case 'fullstack':
        return {
          primary: "bg-purple-500 text-white hover:bg-white hover:text-purple-600 border-2 border-purple-500",
          outline: "border-purple-500 text-purple-600 hover:bg-purple-500 hover:text-white"
        };
      default:
        return {
          primary: "bg-gray-500 text-white hover:bg-white hover:text-gray-600 border-2 border-gray-500",
          outline: "border-gray-500 text-gray-600 hover:bg-gray-500 hover:text-white"
        };
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend':
        return "border-2 border-blue-500 text-blue-700 bg-blue-50";
      case 'backend':
        return "border-2 border-red-500 text-red-700 bg-red-50";
      case 'fullstack':
        return "border-2 border-purple-500 text-purple-700 bg-purple-50";
      default:
        return "border-2 border-gray-500 text-gray-700 bg-gray-50";
    }
  };

  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    if (techLower.includes('angular') || techLower.includes('react') || techLower.includes('typescript') || 
        techLower.includes('scss') || techLower.includes('css') || techLower.includes('html') || 
        techLower.includes('responsive') || techLower.includes('i18n') || techLower.includes('rxjs') ||
        techLower.includes('standalone components') || techLower.includes('custom animations')) {
      return "border-2 border-blue-500 text-blue-700 bg-blue-50";
    }
    
    if (techLower.includes('django') || techLower.includes('python') || techLower.includes('api') || 
        techLower.includes('rest') || techLower.includes('jwt') || techLower.includes('token') || 
        techLower.includes('cors') || techLower.includes('authentication') || techLower.includes('upload') ||
        techLower.includes('rq queue') || techLower.includes('ffmpeg') || techLower.includes('hls')) {
      return "border-2 border-red-500 text-red-700 bg-red-50";
    }
    
    if (techLower.includes('postgresql') || techLower.includes('sqlite') || techLower.includes('redis') || 
        techLower.includes('database')) {
      return "border-2 border-green-500 text-green-700 bg-green-50";
    }
    
    if (techLower.includes('docker') || techLower.includes('streaming')) {
      return "border-2 border-purple-500 text-purple-700 bg-purple-50";
    }
    
    return "border-2 border-orange-600 text-orange-600";
  };

  const projects: Array<{
    titleKey: TranslationKey;
    descriptionKey: TranslationKey;
    technologies: string[];
    demoUrl: string;
    githubUrl: string;
    category: string;
  }> = [
    {
      titleKey: "projects.coderr.title",
      descriptionKey: "projects.coderr.description",
      technologies: ["Django 5.2", "Django REST Framework", "SQLite", "Token Authentication", "CORS", "Image Upload", "API Design"],
      demoUrl: "#",
      githubUrl: "https://github.com/CenkKorkmaz92/coderr",
      category: "Backend"
    },
    {
      titleKey: "projects.madamePearls.title",
      descriptionKey: "projects.madamePearls.description",
      technologies: ["Angular 18", "TypeScript", "SCSS", "Standalone Components", "RxJS", "Desktop-First Design", "i18n"],
      demoUrl: "https://cenk-korkmaz.de/madame-pearls/",
      githubUrl: "https://github.com/CenkKorkmaz92/madame_pearls_2.0",
      category: "Frontend"
    },
    {
      titleKey: "projects.videoflix.title",
      descriptionKey: "projects.videoflix.description",
      technologies: ["Django", "Django REST", "PostgreSQL", "Redis", "FFmpeg", "HLS Streaming", "JWT", "Docker", "RQ Queue"],
      demoUrl: "#",
      githubUrl: "https://github.com/CenkKorkmaz92/videoflix",
      category: "Fullstack"
    },
    {
      titleKey: "projects.angularPortfolio.title",
      descriptionKey: "projects.angularPortfolio.description",
      technologies: ["Angular 17", "TypeScript", "SCSS", "RxJS", "i18n", "Responsive Design", "Custom Animations"],
      demoUrl: "https://cenk-korkmaz.de/angular-portfolio/",
      githubUrl: "https://github.com/CenkKorkmaz92/portfolio",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 px-2">
              {t('projects.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto px-2">
              {t('projects.intro')}
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.titleKey}
                animation="scale"
                delay={index * 200}
              >
                <Card className="bg-gradient-card shadow-medium card-hover border-0 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {t(project.titleKey)}
                      </CardTitle>
                      <Badge variant="outline" className={`text-base ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-muted-foreground leading-relaxed">
                      {t(project.descriptionKey)}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-base"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      {(project.titleKey !== "projects.coderr.title" && project.titleKey !== "projects.videoflix.title") && (
                        <Button 
                          size="sm" 
                          className={`flex items-center gap-2 shadow-soft hover:shadow-medium transition-smooth ${getButtonColors(project.category).primary}`}
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            {t('projects.liveDemo')}
                          </a>
                        </Button>
                      )}
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className={`flex items-center gap-2 shadow-soft hover:shadow-medium transition-smooth ${getButtonColors(project.category).outline}`}
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          {t('projects.code')}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="text-center mt-16 px-4">
              <p className="text-muted-foreground mb-6">
                {t('projects.viewMore')}
              </p>
              <Button 
                variant="outline" 
                size="lg"
                className="shadow-medium hover:shadow-large transition-smooth text-base"
                asChild
              >
                <a href="https://github.com/CenkKorkmaz92" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Github size={20} />
                  <span className="break-words">{t('projects.viewGithub')}</span>
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;