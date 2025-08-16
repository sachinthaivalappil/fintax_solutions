import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useRef, useState } from "react";

const stats = [
  { number: 500, suffix: "+", label: "Happy Clients", icon: "👥" },
  { number: 10, suffix: "+", label: "Years Experience", icon: "🏆" },
  { number: 99, suffix: "%", label: "Success Rate", icon: "✅" },
  { number: 24, suffix: "/7", label: "Support Available", icon: "📞" }
];

const CounterAnimation = ({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target, isVisible]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-accent group-hover:text-accent-light transition-colors">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-brand relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <Badge variant="secondary" className="mb-4 px-4 py-2 text-sm animate-pulse">
            ✨ <span className="font-bold text-primary">Fin Tax Solutions</span> - Trusted Excellence
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            Numbers That Speak For <span className="text-accent">Themselves</span>
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Over a decade of excellence in financial services with proven results
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className={`bg-primary-foreground/10 border-primary-foreground/20 backdrop-blur-sm hover:bg-primary-foreground/15 transition-all duration-500 group hover:scale-105 hover:-translate-y-2 ${
                isVisible 
                  ? `animate-scale-in` 
                  : 'opacity-0 scale-90'
              }`}
              style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300 animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                  {stat.icon}
                </div>
                <div className="mb-2">
                  <CounterAnimation target={stat.number} suffix={stat.suffix} isVisible={isVisible} />
                </div>
                <div className="text-primary-foreground/80 font-medium">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;