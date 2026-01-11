import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 items-start">
            {/* Left: Name & Title */}
            <div className="animate-fade-in">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">{t('footer.name')}</h3>
              <p className="text-lg text-primary-foreground/90 mb-4">
                {t('footer.title')}
              </p>
              <p className="text-sm text-primary-foreground/70 leading-relaxed max-w-md">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Right: Contact & Social */}
            <div className="animate-fade-in-up md:text-right">
              <div className="space-y-3 mb-6">
                <a 
                  href="mailto:Cenk.Korkmaz92@gmail.com"
                  className="flex items-center gap-2 text-primary-foreground/80 hover:text-orange-400 transition-colors duration-300 md:justify-end"
                >
                  <Mail size={18} />
                  <span>Cenk.Korkmaz92@gmail.com</span>
                </a>
                <div className="flex items-center gap-2 text-primary-foreground/80 md:justify-end">
                  <MapPin size={18} />
                  <span>Sulzbach an der Murr, Germany</span>
                </div>
              </div>
              
              <div className="flex gap-4 md:justify-end">
                <a 
                  href="https://github.com/CenkKorkmaz92" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-orange-400 hover:scale-110 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/cenk-korkmaz-2731072a5" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 hover:text-blue-400 hover:scale-110 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:Cenk.Korkmaz92@gmail.com"
                  className="text-primary-foreground/80 hover:text-orange-400 hover:scale-110 transition-all duration-300"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/70 text-sm">
              © {currentYear} {t('footer.name')}. {t('footer.copyright')}
            </p>
            <div className="flex gap-6 text-base">
              <Link 
                to="/impressum" 
                className="text-primary-foreground/70 hover:text-orange-400 transition-colors duration-300"
              >
                {t('footer.impressum')}
              </Link>
              <Link 
                to="/privacy" 
                className="text-primary-foreground/70 hover:text-orange-400 transition-colors duration-300"
              >
                {t('footer.privacy')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;