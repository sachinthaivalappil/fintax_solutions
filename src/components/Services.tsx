import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Calculator, 
  DollarSign, 
  BookOpen, 
  Users, 
  Building, 
  UserCheck, 
  Shield, 
  TrendingUp, 
  Target,
  Briefcase
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const services = [
  {
    icon: FileText,
    title: "GST Services",
    description: "Complete GST solutions for your business compliance needs",
    features: ["GST Registration", "GST Return Filing", "GST Compliance & Advisory"],
    color: "bg-blue-50 border-blue-200"
  },
  {
    icon: Calculator,
    title: "Income Tax Services", 
    description: "Professional income tax planning and filing services",
    features: ["ITR Filing", "Tax Planning", "Advance Tax Compliance"],
    color: "bg-green-50 border-green-200"
  },
  {
    icon: DollarSign,
    title: "TDS Services",
    description: "Comprehensive TDS management and compliance solutions",
    features: ["TDS Registration", "TDS Return Filing", "Lower/NIL TDS Certificate"],
    color: "bg-purple-50 border-purple-200"
  },
  {
    icon: BookOpen,
    title: "Financial Accounting",
    description: "Professional accounting services to keep your books accurate",
    features: ["Bookkeeping", "Accounts Finalization", "MIS Reporting"],
    color: "bg-orange-50 border-orange-200"
  },
  {
    icon: Users,
    title: "Payroll & Compliance",
    description: "End-to-end payroll management and statutory compliance",
    features: ["ESI & PF Registration", "Return Filing", "Payslip Generation"],
    color: "bg-teal-50 border-teal-200"
  },
  {
    icon: Building,
    title: "Back Office Operations",
    description: "Streamline your back-office operations with our expertise",
    features: ["Vendor Reconciliation", "Receivables & Payables", "Management"],
    color: "bg-indigo-50 border-indigo-200"
  },
  {
    icon: UserCheck,
    title: "Business Registrations",
    description: "All your business registration needs under one roof",
    features: ["DSC, PAN, UDYAM (MSME)", "Trade License, FSSAI", "Import/Export Code (IEC)"],
    color: "bg-pink-50 border-pink-200"
  },
  {
    icon: Shield,
    title: "Audit & Assurance",
    description: "Professional audit services to ensure compliance and accuracy",
    features: ["Internal Audit", "Statutory Audit", "Tax Audit, Stock Audit"],
    color: "bg-yellow-50 border-yellow-200"
  },
  {
    icon: TrendingUp,
    title: "Project Reports & Financial Statements",
    description: "Detailed financial analysis and business loan assistance",
    features: ["CMA Data", "Business Loan Assistance", "Forecasting & Budgeting"],
    color: "bg-red-50 border-red-200"
  },
  {
    icon: Target,
    title: "Investment & Wealth Management",
    description: "Strategic investment planning for long-term wealth creation",
    features: ["Mutual Fund Advisory", "Tax-Saving Investments", "Portfolio Management"],
    color: "bg-emerald-50 border-emerald-200"
  },
  {
    icon: Briefcase,
    title: "Startup & Business Consulting",
    description: "Expert guidance for startups and growing businesses",
    features: ["Business Planning", "Growth Strategy", "Compliance Advisory"],
    color: "bg-cyan-50 border-cyan-200"
  }
];

const Services = () => {
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
    <section ref={ref} id="services" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            <span className="text-primary font-extrabold">Fin Tax Solutions</span> Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive financial solutions tailored to meet all your business and personal finance needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className={`${service.color} hover:shadow-medium transition-all duration-500 group cursor-pointer hover:scale-105 hover:-translate-y-2 ${
                  isVisible 
                    ? `animate-fade-in-delay-${Math.min(index % 4 + 1, 4)}` 
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-6 w-6 text-primary group-hover:animate-pulse" />
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;