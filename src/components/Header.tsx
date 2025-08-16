import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-soft animate-fade-in">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/lovable-uploads/7552f582-1274-4df5-9511-451824e5aafa.png" 
              alt="Fin Tax Solutions Logo" 
              className="h-12 w-auto hover:scale-110 transition-transform duration-300"
            />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-110 hover:-translate-y-1"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-110 hover:-translate-y-1"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-all duration-300 font-medium cursor-pointer hover:scale-110 hover:-translate-y-1"
            >
              Contact
            </button>
          </nav>
          
          {/* CTA Button */}
          <Button variant="hero" size="sm" className="hidden md:inline-flex hover:scale-105 hover:-translate-y-1 transition-all duration-300">
            Get Consultation
          </Button>
          
          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden hover:scale-110 transition-transform duration-300">
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;