import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Award, 
  Users, 
  Shield, 
  HeadphonesIcon, 
  TrendingUp 
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const features = [
  {
    icon: Clock,
    title: "Timely Delivery",
    description: "We ensure all your financial deadlines are met with precision and punctuality."
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Our certified professionals bring years of experience in taxation and finance."
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored solutions that fit your unique business requirements and goals."
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Your financial data is protected with enterprise-grade security measures."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your financial queries and concerns."
  },
  {
    icon: TrendingUp,
    title: "Growth Focused",
    description: "Strategic advice that helps your business grow and maximize profitability."
  }
];

const WhyChooseUs = () => {
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
    <section ref={ref} id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Why Choose <span className="text-primary font-extrabold">Fin Tax Solutions?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We combine expertise, technology, and personalized service to deliver exceptional results for your financial needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className={`border-2 hover:border-primary/30 hover:shadow-medium transition-all duration-500 group bg-card hover:scale-105 hover:-translate-y-2 ${
                  isVisible 
                    ? `animate-fade-in-delay-${Math.min(index % 4 + 1, 4)}` 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                      <Icon className="h-8 w-8 text-primary group-hover:animate-pulse" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;