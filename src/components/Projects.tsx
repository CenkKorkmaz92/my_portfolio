import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Coderr - Freelance Marketplace API",
      description: "Comprehensive Django REST Framework backend for a freelance marketplace platform. Features user authentication with token-based security, dual user types (customers/business), complete offer management system, order processing workflow, and review system with rating validation. Includes advanced filtering, search capabilities, image upload functionality, and proper permission-based access control.",
      technologies: ["Django 5.2", "Django REST Framework", "SQLite", "Token Authentication", "CORS", "Image Upload", "API Design"],
      demoUrl: "#",
      githubUrl: "https://github.com/CenkKorkmaz92/coderr",
      category: "Backend"
    },
    {
      title: "Madame Pearls - Jewelry Showcase",
      description: "Elegant Angular SPA for a custom jewelry business featuring multilingual support (EN/DE/GR/HR), interactive image galleries with favorites system, smooth scroll navigation, and responsive contact forms. Built with modern Angular standalone components and custom SCSS styling.",
      technologies: ["Angular 18", "TypeScript", "SCSS", "Standalone Components", "RxJS", "Responsive Design", "i18n"],
      demoUrl: "#",
      githubUrl: "https://github.com/CenkKorkmaz92/Madame-Pearls",
      category: "Frontend"
    },
    {
      title: "VideoFlix - Netflix Clone",
      description: "Full-stack video streaming platform with Django REST API backend featuring JWT authentication, automatic video processing into multiple qualities (480p/720p/1080p), HLS streaming with seamless quality switching, Redis background processing, real thumbnail extraction, and PostgreSQL database. Complete Netflix-like experience with user registration, watch progress tracking, and admin panel.",
      technologies: ["Django", "Django REST", "PostgreSQL", "Redis", "FFmpeg", "HLS Streaming", "JWT", "Docker", "RQ Queue"],
      demoUrl: "#",
      githubUrl: "https://github.com/CenkKorkmaz92/videoflix",
      category: "Fullstack"
    },
    {
      title: "Angular Portfolio - Professional Showcase",
      description: "Sophisticated Angular 17 portfolio website featuring modern standalone components, multilingual support (EN/DE), advanced SCSS styling with custom animations, interactive modals, and responsive design. Showcases professional UI/UX capabilities with custom design system, smooth transitions, and comprehensive skill demonstrations including growth mindset popup.",
      technologies: ["Angular 17", "TypeScript", "SCSS", "RxJS", "i18n", "Responsive Design", "Custom Animations"],
      demoUrl: "#",
      githubUrl: "https://github.com/CenkKorkmaz92/portfolio",
      category: "Frontend"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 animate-fade-in">
            Featured Projects
          </h2>
          
          <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto animate-fade-in-up">
            Here are some key projects that showcase my technical skills and passion for 
            creating meaningful digital solutions. Each project demonstrates different aspects 
            of my fullstack development capabilities.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={project.title} 
                className="bg-gradient-card shadow-medium hover:shadow-large transition-smooth border-0 group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                      {project.title}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button 
                      size="sm" 
                      className="flex items-center gap-2 shadow-soft hover:shadow-medium transition-smooth"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-2 shadow-soft hover:shadow-medium transition-smooth"
                      asChild
                    >
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-muted-foreground mb-6">
              Want to see more of my work?
            </p>
            <Button 
              variant="outline" 
              size="lg"
              className="shadow-medium hover:shadow-large transition-smooth"
              asChild
            >
              <a href="https://github.com/CenkKorkmaz92" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2" size={20} />
                View All Projects on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;