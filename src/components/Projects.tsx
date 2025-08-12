import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const Projects = () => {
  // Function to get button colors based on project category
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

  // Function to get category badge color
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

  // Function to get color classes based on technology type
  const getTechColor = (tech: string) => {
    const techLower = tech.toLowerCase();
    
    // Frontend technologies - Blue
    if (techLower.includes('angular') || techLower.includes('react') || techLower.includes('typescript') || 
        techLower.includes('scss') || techLower.includes('css') || techLower.includes('html') || 
        techLower.includes('responsive') || techLower.includes('i18n') || techLower.includes('rxjs') ||
        techLower.includes('standalone components') || techLower.includes('custom animations')) {
      return "border-2 border-blue-500 text-blue-700 bg-blue-50";
    }
    
    // Backend technologies - Red/Orange
    if (techLower.includes('django') || techLower.includes('python') || techLower.includes('api') || 
        techLower.includes('rest') || techLower.includes('jwt') || techLower.includes('token') || 
        techLower.includes('cors') || techLower.includes('authentication') || techLower.includes('upload') ||
        techLower.includes('rq queue') || techLower.includes('ffmpeg') || techLower.includes('hls')) {
      return "border-2 border-red-500 text-red-700 bg-red-50";
    }
    
    // Database technologies - Green
    if (techLower.includes('postgresql') || techLower.includes('sqlite') || techLower.includes('redis') || 
        techLower.includes('database')) {
      return "border-2 border-green-500 text-green-700 bg-green-50";
    }
    
    // DevOps/Tools - Purple
    if (techLower.includes('docker') || techLower.includes('streaming')) {
      return "border-2 border-purple-500 text-purple-700 bg-purple-50";
    }
    
    // Default - Orange (Fullstack/General)
    return "border-2 border-orange-600 text-orange-600";
  };

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
      title: "Madame Pearls - Jewelry Showcase (Work in Progress)",
      description: "Elegant Angular SPA for a custom jewelry business featuring multilingual support (EN/DE/GR/HR), interactive image galleries with favorites system, and smooth scroll navigation. This project is currently in development, optimized for desktop use, with plans to add e-commerce functionality later this year. Built with modern Angular standalone components and custom SCSS styling.",
      technologies: ["Angular 18", "TypeScript", "SCSS", "Standalone Components", "RxJS", "Desktop-First Design", "i18n"],
      demoUrl: "https://cenk-korkmaz.de/madame-pearls/",
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
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Featured Projects
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
              Here are some key projects that showcase my technical skills and passion for 
              creating meaningful digital solutions. Each project demonstrates different aspects 
              of my fullstack development capabilities.
            </p>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <AnimatedSection 
                key={project.title}
                animation="scale"
                delay={index * 200}
              >
                <Card className="bg-gradient-card shadow-medium card-hover border-0 group">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                        {project.title}
                      </CardTitle>
                      <Badge variant="outline" className={`text-xs ${getCategoryColor(project.category)}`}>
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
                        <Badge 
                          key={tech} 
                          variant="secondary" 
                          className="text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      {(project.title !== "Coderr - Freelance Marketplace API" && project.title !== "VideoFlix - Netflix Clone") && (
                        <Button 
                          size="sm" 
                          className={`flex items-center gap-2 shadow-soft hover:shadow-medium transition-smooth ${getButtonColors(project.category).primary}`}
                          asChild
                        >
                          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={16} />
                            Live Demo
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
                          Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection animation="fade-up" delay={800}>
            <div className="text-center mt-16">
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
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Projects;