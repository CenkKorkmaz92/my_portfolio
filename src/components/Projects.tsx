import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce application with user authentication, product management, shopping cart, and payment integration. Built using Django REST framework for the backend and Angular for the frontend.",
      technologies: ["Angular", "TypeScript", "Django", "Django REST", "PostgreSQL", "Firebase"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Fullstack"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration features, and progress tracking. Built with Angular and Firebase for real-time functionality.",
      technologies: ["Angular", "TypeScript", "Firebase", "CSS", "HTML5"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Frontend"
    },
    {
      title: "Django REST API",
      description: "RESTful API service with comprehensive CRUD operations, authentication, data validation, and Redis caching. Built during backend development studies with PostgreSQL database.",
      technologies: ["Python", "Django", "Django REST", "PostgreSQL", "Redis"],
      demoUrl: "#",
      githubUrl: "#",
      category: "Backend"
    },
    {
      title: "Angular Web App",
      description: "Interactive web application built with Angular, featuring responsive design, component-based architecture, and Firebase integration for data persistence and authentication.",
      technologies: ["Angular", "TypeScript", "Firebase", "HTML5", "CSS"],
      demoUrl: "#",
      githubUrl: "#",
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