import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="animate-fade-in">
              <h3 className="text-xl font-bold mb-4">Junior Fullstack Developer</h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                Passionate about creating beautiful, functional web applications. 
                Ready to contribute to meaningful projects and grow with your team.
              </p>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in-up">
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a 
                    href="#about" 
                    className="text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a 
                    href="#skills" 
                    className="text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a 
                    href="#projects" 
                    className="text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a 
                    href="#contact" 
                    className="text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="animate-slide-in">
              <h4 className="font-semibold mb-4">Let's Connect</h4>
              <div className="space-y-2 mb-6">
                <p className="text-primary-foreground/80">Cenk.Korkmaz92@gmail.com</p>
                <p className="text-primary-foreground/80">Sulzbach an der Murr, Germany</p>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/CenkKorkmaz92" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-orange-400 hover:scale-110 transition-all duration-300"
                >
                  <Github size={20} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-blue-400 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href="mailto:Cenk.Korkmaz92@gmail.com"
                  className="text-primary-foreground/80 hover:text-orange-400 hover:scale-110 transition-all duration-300"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Cenk Korkmaz. All rights reserved.
              </p>
              <div className="flex gap-4 text-sm">
                <Link 
                  to="/impressum" 
                  className="text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300"
                >
                  Impressum
                </Link>
                <Link 
                  to="/privacy" 
                  className="text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm flex items-center gap-1">
              Built with <Heart size={16} className="text-red-400" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;