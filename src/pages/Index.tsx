import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProcessSection from "@/components/ProcessSection";
import ProductsSection from "@/components/ProductsSection";
import ImpactSection from "@/components/ImpactSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

interface IndexProps {
  lang?: "en" | "pt";
}

const Index = ({ lang = "pt" }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} />
      <main>
        <HeroSection lang={lang} />
        <ProcessSection lang={lang} />
        <ProductsSection lang={lang} />
        <ImpactSection lang={lang} />
        <CTASection lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};

export default Index;
