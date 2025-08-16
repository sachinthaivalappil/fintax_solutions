import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} id="contact" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Get In <span className="text-primary font-extrabold">Touch</span> with <span className="text-primary font-extrabold">Fin Tax Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to transform your financial management? Let's discuss how we can help your business thrive.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'}`}>
            <Card className="shadow-soft hover:shadow-medium transition-all duration-500 hover:scale-105">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg animate-pulse">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">contact@fintaxsolutions.com</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Address</p>
                    <p className="text-muted-foreground">123 Business District, Financial Hub, Mumbai - 400001</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Business Hours</p>
                    <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Form */}
          <Card className={`shadow-soft hover:shadow-medium transition-all duration-1000 hover:scale-105 ${isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'}`}>
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-foreground">
                Schedule a Consultation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">First Name</label>
                    <Input placeholder="Enter your first name" className="bg-background transition-all duration-300 focus:scale-105" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Last Name</label>
                    <Input placeholder="Enter your last name" className="bg-background transition-all duration-300 focus:scale-105" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Email</label>
                  <Input type="email" placeholder="Enter your email" className="bg-background transition-all duration-300 focus:scale-105" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Phone</label>
                  <Input type="tel" placeholder="Enter your phone number" className="bg-background transition-all duration-300 focus:scale-105" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Service Required</label>
                  <select className="w-full p-3 border border-input rounded-md bg-background text-foreground transition-all duration-300 hover:scale-105 focus:scale-105">
                    <option>GST Services</option>
                    <option>Income Tax Services</option>
                    <option>TDS Services</option>
                    <option>Financial Accounting</option>
                    <option>Payroll & Compliance</option>
                    <option>Audit & Assurance</option>
                    <option>Business Consulting</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Message</label>
                  <Textarea 
                    placeholder="Tell us about your requirements" 
                    className="bg-background min-h-[120px] transition-all duration-300 focus:scale-105"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full hover:scale-105 hover:-translate-y-1 transition-all duration-300">
                  Schedule Consultation
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;