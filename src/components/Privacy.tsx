import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Privacy = () => {
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
            Privacy Policy
          </h1>
          
          <div className="prose prose-lg max-w-none animate-fade-in-up">
            <div className="bg-gradient-card p-6 rounded-lg shadow-medium mb-8">
              <p className="text-lg font-medium mb-2">Personal Portfolio Website</p>
              <p className="text-muted-foreground">
                This privacy policy explains how I collect, use, and protect your personal information 
                when you visit my portfolio website.
              </p>
            </div>

            <h2 className="text-2xl font-semibold mb-6">1. Data Controller</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              <strong>Cenk Korkmaz</strong><br />
              Email: <a href="mailto:Cenk.Korkmaz92@gmail.com" className="text-primary hover:underline">Cenk.Korkmaz92@gmail.com</a>
            </p>

            <h2 className="text-2xl font-semibold mb-6">2. Data Collection and Use</h2>
            
            <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              When you use the contact form on this website, I collect:
            </p>
            <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
              <li>Your name</li>
              <li>Your email address</li>
              <li>Your message content</li>
            </ul>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              This information is used solely to respond to your inquiry and is not shared with third parties.
            </p>

            <h3 className="text-xl font-semibold mb-4">Website Analytics</h3>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              This website does not use cookies or tracking technologies. No personal data is collected 
              automatically during your visit.
            </p>

            <h2 className="text-2xl font-semibold mb-6">3. Legal Basis</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              The processing of your contact form data is based on your consent (Art. 6(1)(a) GDPR) 
              and my legitimate interest in responding to your inquiries (Art. 6(1)(f) GDPR).
            </p>

            <h2 className="text-2xl font-semibold mb-6">4. Data Retention</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              Contact form submissions are retained only as long as necessary to respond to your inquiry, 
              typically no longer than 3 months unless ongoing communication is required.
            </p>

            <h2 className="text-2xl font-semibold mb-6">5. Your Rights</h2>
            <p className="mb-4 text-muted-foreground leading-relaxed">
              Under the GDPR, you have the following rights:
            </p>
            <ul className="list-disc list-inside mb-6 text-muted-foreground space-y-2">
              <li>Right to access your personal data</li>
              <li>Right to rectification of inaccurate data</li>
              <li>Right to erasure of your data</li>
              <li>Right to restrict processing</li>
              <li>Right to data portability</li>
              <li>Right to object to processing</li>
              <li>Right to withdraw consent</li>
            </ul>

            <h2 className="text-2xl font-semibold mb-6">6. Contact</h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">
              If you have questions about this privacy policy or want to exercise your rights, 
              please contact me at: 
              <a href="mailto:Cenk.Korkmaz92@gmail.com" className="text-primary hover:underline ml-1">
                Cenk.Korkmaz92@gmail.com
              </a>
            </p>

            <div className="mt-12 p-4 bg-gradient-subtle rounded-lg">
              <p className="text-sm text-muted-foreground">
                <strong>Last updated:</strong> January 8, 2026
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
