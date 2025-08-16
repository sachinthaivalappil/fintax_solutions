import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary-dark text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/7552f582-1274-4df5-9511-451824e5aafa.png" 
                alt="Fin Tax Solutions" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-accent">Fin Tax Solutions</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              <span className="font-semibold text-accent">Fin Tax Solutions</span> - Your trusted partner for comprehensive financial services. 
              We help businesses and individuals achieve their financial goals with expert guidance.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>
          
          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">GST Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Income Tax Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">TDS Services</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Financial Accounting</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Payroll & Compliance</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Audit & Assurance</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Career Opportunities</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Info</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-accent" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                <span>contact@fintaxsolutions.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span>123 Business District, Financial Hub, Mumbai - 400001</span>
              </div>
            </div>
            <Button variant="accent" size="sm" className="mt-4">
              Get Directions
            </Button>
          </div>
        </div>
        
        <Separator className="my-8 bg-primary-foreground/20" />
        
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 <span className="font-bold text-accent">Fin Tax Solutions</span>. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-primary-foreground/60">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;