import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProcessSection />
        <ProductsSection />
        <ImpactSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
