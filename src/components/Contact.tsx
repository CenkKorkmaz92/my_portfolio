import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import AnimatedSection from "./AnimatedSection";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      message: ''
    };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some(error => error !== '');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "Check the form fields and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        from_name: formData.name,
        reply_to: formData.email,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon!",
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: t('contact.email'),
      value: "Cenk.Korkmaz92@gmail.com",
      href: "mailto:Cenk.Korkmaz92@gmail.com"
    },
    {
      icon: MapPin,
      title: t('contact.location'),
      value: "71560 Sulzbach an der Murr, Germany",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      href: "https://github.com/CenkKorkmaz92",
      color: "hover:text-orange-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/cenk-korkmaz-2731072a5",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 break-words px-2">
              {t('contact.title')}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-up" delay={200}>
            <p className="text-base sm:text-lg text-muted-foreground text-center mb-16 max-w-3xl mx-auto px-2">
              {t('contact.intro')}
            </p>
          </AnimatedSection>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slide-left">
              <Card className="bg-gradient-card shadow-large border-0">
                <CardHeader>
                  <CardTitle className="text-2xl font-semibold">{t('contact.formTitle')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-1">
                      <Input
                        name="name"
                        placeholder={t('contact.namePlaceholder')}
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={`shadow-soft focus:shadow-medium transition-smooth focus:!ring-0 focus:!outline-none text-orange-600 ${
                          errors.name 
                            ? '!border-red-500 focus:!border-red-500' 
                            : '!border-gray-300 focus:!border-orange-500'
                        }`}
                      />
                      <div className="h-5">
                        {errors.name && (
                          <p className="text-red-500 text-base">{errors.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Input
                        name="email"
                        type="email"
                        placeholder={t('contact.emailPlaceholder')}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={`shadow-soft focus:shadow-medium transition-smooth focus:!ring-0 focus:!outline-none text-orange-600 ${
                          errors.email 
                            ? '!border-red-500 focus:!border-red-500' 
                            : '!border-gray-300 focus:!border-orange-500'
                        }`}
                      />
                      <div className="h-5">
                        {errors.email && (
                          <p className="text-red-500 text-base">{errors.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="space-y-1">
                      <Textarea
                        name="message"
                        placeholder={t('contact.messagePlaceholder')}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className={`shadow-soft focus:shadow-medium transition-smooth resize-none focus:!ring-0 focus:!outline-none text-orange-600 ${
                          errors.message 
                            ? '!border-red-500 focus:!border-red-500' 
                            : '!border-gray-300 focus:!border-orange-500'
                        }`}
                      />
                      <div className="h-5">
                        {errors.message && (
                          <p className="text-red-500 text-base">{errors.message}</p>
                        )}
                      </div>
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full shadow-medium hover:shadow-large transition-smooth bg-orange-100 text-orange-600 hover:bg-orange-200 border-2 border-orange-200"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? t('contact.sending') : t('contact.send')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Contact Information */}
            <AnimatedSection animation="slide-right">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">{t('contact.getInTouch')}</h3>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {t('contact.getInTouchText')}
                  </p>
                </div>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <AnimatedSection
                      key={info.title}
                      animation="fade-up"
                      delay={600 + (index * 100)}
                    >
                      <a
                        href={info.href}
                        className="flex items-center gap-4 p-4 rounded-lg bg-gradient-card shadow-soft card-hover group"
                      >
                        <div className="group-hover:scale-110 transition-smooth">
                          <info.icon className="w-5 h-5 text-muted-foreground group-hover:text-orange-600" />
                        </div>
                        <div>
                          <p className="font-medium">{info.title}</p>
                          <p className="text-muted-foreground text-base">{info.value}</p>
                        </div>
                      </a>
                    </AnimatedSection>
                  ))}
                </div>

                <AnimatedSection animation="fade-up" delay={800}>
                  <div className="pt-8">
                    <h4 className="font-semibold mb-4">{t('contact.connectWith')}</h4>
                    <div className="flex gap-4">
                      {socialLinks.map((social) => (
                        <a
                          key={social.title}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`text-muted-foreground hover:scale-110 transition-all duration-300 ${social.color}`}
                        >
                          <social.icon size={20} />
                        </a>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;