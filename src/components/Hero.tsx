import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-finance.jpg";

const Hero = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with enhanced styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-brand"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/10"></div>
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center text-primary-foreground">
        {/* Logo Integration */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src="/lovable-uploads/7552f582-1274-4df5-9511-451824e5aafa.png" 
            alt="Fin Tax Solutions" 
            className="h-20 md:h-24 w-auto drop-shadow-lg hover:scale-110 transition-transform duration-500"
          />
        </div>
        
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-delay-1">
          <span className="text-accent font-extrabold bg-gradient-to-r from-accent to-accent-light bg-clip-text text-transparent animate-glow-pulse">
            Fin Tax Solutions
          </span>
          <span className="block text-primary-foreground mt-2">
            Professional Financial Excellence
          </span>
        </h1>
        <p className="text-xl md:text-2xl mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
          Your comprehensive partner for GST compliance, tax planning, 
          audit services, and complete financial management solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-delay-3">
          <Button variant="accent" size="lg" className="text-lg px-10 py-6 shadow-glow hover:shadow-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            Schedule Free Consultation
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            onClick={scrollToServices}
            className="text-lg px-10 py-6 border-2 border-white text-white bg-transparent hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105 hover:-translate-y-1"
          >
            Explore Services
          </Button>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto animate-fade-in-delay-4">
          <div className="text-center group">
            <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">500+</div>
            <div className="text-sm opacity-80">Happy Clients</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">10+</div>
            <div className="text-sm opacity-80">Years Experience</div>
          </div>
          <div className="text-center group">
            <div className="text-3xl font-bold text-accent group-hover:scale-110 transition-transform duration-300">99%</div>
            <div className="text-sm opacity-80">Success Rate</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;