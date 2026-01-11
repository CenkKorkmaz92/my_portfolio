import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Impressum = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8 hover:bg-gradient-subtle transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-12 animate-fade-in">
            Legal Notice
          </h1>
          
          <div className="prose prose-lg max-w-none animate-fade-in-up">
            <h2 className="text-2xl font-semibold mb-6">Information according to § 5 TMG</h2>
            
            <div className="bg-gradient-card p-6 rounded-lg shadow-medium mb-8">
              <h3 className="text-xl font-semibold mb-4">Responsible for content:</h3>
              <p className="mb-2"><strong>Cenk Korkmaz</strong></p>
              <p className="mb-2">Germany</p>
              <p className="mb-4">
                <strong>Email:</strong> 
                <a 
                  href="mailto:Cenk.Korkmaz92@gmail.com" 
                  className="text-primary hover:underline ml-2"
                >
                  Cenk.Korkmaz92@gmail.com
                </a>
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-6">Liability for Content</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              As a service provider, I am responsible for my own content on these pages according to general laws 
              pursuant to § 7 para. 1 TMG. However, according to §§ 8 to 10 TMG, I am not obligated as a service 
              provider to monitor transmitted or stored third-party information or to investigate circumstances that 
              indicate illegal activity.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Liability for Links</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              My website contains links to external third-party websites over whose content I have no influence. 
              Therefore, I cannot assume any liability for this third-party content. The respective provider or 
              operator of the pages is always responsible for the content of the linked pages.
            </p>

            <h2 className="text-2xl font-semibold mb-6">Copyright</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              The content and works created by the site operator on these pages are subject to German copyright law. 
              Duplication, processing, distribution, and any form of commercialization beyond the scope of copyright 
              require the written consent of the respective author or creator.
            </p>

            <div className="mt-12 p-4 bg-gradient-subtle rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Note:</strong> This website serves exclusively for the presentation of my professional 
                qualifications and projects as a fullstack developer and manufacturing expert.
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                <strong>Last updated:</strong> January 8, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impressum;
