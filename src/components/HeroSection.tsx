import { Button } from "@/components/ui/button";
import whiteChair from "@/assets/white-chair.jpg";

interface HeroSectionProps {
  lang?: "en" | "pt";
}

const HeroSection = ({ lang = "pt" }: HeroSectionProps) => {
  const content = {
    en: {
      badge: "Sustainable Design",
      title1: "From Waste",
      title2: "to Wonder.",
      description: "We transform discarded bottle caps into beautifully crafted chairs.",
      shopBtn: "Shop The Classic White",
      learnBtn: "Learn More",
      packLabel: "Pack of 4",
    },
    pt: {
      badge: "Design Sustentável",
      title1: "De Resíduo",
      title2: "a Maravilha.",
      description: "Transformamos tampas de garrafa descartadas em cadeiras e mesas de design único.",
      shopBtn: "Comprar Cadeira Classic White",
      learnBtn: "Saber Mais",
      packLabel: "Pack de 4",
      madeFrom: "Feito de",
      caps: "500 Tampas",
    },
  };

  const t = content[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <h1 className="text-hero lg:text-display font-semibold text-foreground text-balance">
                {t.title1}
                <br />
                <span className="text-muted-foreground">{t.title2}</span>
              </h1>
            </div>
            
            <p className="text-subtitle text-muted-foreground max-w-lg mx-auto lg:mx-0">
              {t.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                {t.shopBtn}
              </Button>
              <Button variant="heroOutline" size="lg">
                {t.learnBtn}
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary shadow-floating">
              <img
                src={whiteChair}
                alt="Classic White - Sustainable chair made from recycled bottle caps"
                className="w-full h-full object-cover animate-float"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-background rounded-2xl p-4 lg:p-6 shadow-elevated">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">{lang === "pt" ? "Feito de" : "Made from"}</p>
              <p className="text-xl lg:text-2xl font-semibold text-foreground">{lang === "pt" ? "500 Tampas" : "500 Caps"}</p>
            </div>

            {/* Price tag */}
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-foreground text-background rounded-2xl p-4 lg:p-5 shadow-elevated">
              <p className="text-xs uppercase tracking-wide opacity-70">{t.packLabel}</p>
              <p className="text-xl lg:text-2xl font-bold">799 MZN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
