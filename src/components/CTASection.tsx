import { Button } from "@/components/ui/button";
import whiteChair from "@/assets/white-chair.jpg";

interface CTASectionProps {
  lang?: "en" | "pt";
}

const CTASection = ({ lang = "pt" }: CTASectionProps) => {
  const content = {
    en: {
      badge: "Limited Availability",
      title: "Own The Classic White.",
      description: "Join thousands who have chosen sustainable design without compromise. Each chair is crafted to order.",
      packLabel: "Exclusive Pack • 4 Chairs",
      buyPack: "Buy Pack — 799 MZN",
      mission: "We partner with unsettled individuals by helping them get proper documentation and providing them with the necessary wear and equipment to collect plastic bottle caps that would otherwise end up in landfills and oceans.",
    },
    pt: {
      badge: "Disponibilidade Limitada",
      title: "Tenha a The Classic White.",
      description: "Junte-se a milhares que escolheram design sustentável sem compromisso. Cada cadeira é feita por encomenda.",
      packLabel: "Pack Exclusivo • 4 Cadeiras",
      buyPack: "Comprar Pack — 799 MZN",
      mission: "Fazemos parceria com pessoas em situação irregular, ajudando-as a obter documentação adequada e fornecendo-lhes o vestuário e equipamento necessários para recolher tampas de garrafas plásticas que, de outra forma, acabariam em aterros e oceanos.",
    },
  };

  const t = content[lang];

  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              {t.badge}
            </p>
            <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
              {t.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              {t.description}
            </p>

            <div className="bg-accent/10 rounded-2xl p-6 mb-6 border border-accent/20 max-w-sm">
              <p className="text-sm text-muted-foreground mb-1">{t.packLabel}</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-foreground">799 MZN</span>
                <span className="text-muted-foreground line-through">880 MZN</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                {t.buyPack}
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground max-w-md">
              {t.mission}
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-background shadow-floating">
              <img
                src={whiteChair}
                alt="The Classic White Chair"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
