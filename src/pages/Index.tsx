import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import StatsSection from "@/components/StatsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <StatsSection />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
