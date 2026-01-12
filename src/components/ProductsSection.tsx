import { Button } from "@/components/ui/button";
import whiteChair from "@/assets/white-chair.jpg";

interface ProductsSectionProps {
  lang?: "en" | "pt";
}

const ProductsSection = ({ lang = "pt" }: ProductsSectionProps) => {
  const content = {
    en: {
      badge: "Exclusive",
      title: "The Classic White.",
      subtitle: "One chair. Perfected.",
      description: "Crafted from 500+ recycled bottle caps, this iconic design combines bold aesthetics with uncompromising durability.",
      material: "Material",
      materialValue: "100% Recycled Plastic",
      weightCapacity: "Weight Capacity",
      weightCapacityValue: "150 kg",
      dimensions: "Dimensions",
      dimensionsValue: "56 × 54 × 80 cm",
      unitPrice: "Unit Price",
      packBadge: "Exclusive Pack",
      packDescription: "Set of 4 Chairs",
      savings: "Save 81 MZN on pack",
      buyPack: "Buy Pack of 4",
      buyOne: "Buy 1 Chair",
      limitedEdition: "Limited Edition",
    },
    pt: {
      badge: "Exclusivo",
      title: "The Classic White.",
      subtitle: "Uma cadeira. Perfeita.",
      description: "Feita com mais de 500 tampas de garrafa recicladas, este design icónico combina estética ousada com durabilidade sem compromissos.",
      material: "Material",
      materialValue: "100% Plástico Reciclado",
      weightCapacity: "Capacidade de Peso",
      weightCapacityValue: "150 kg",
      dimensions: "Dimensões",
      dimensionsValue: "56 × 54 × 80 cm",
      unitPrice: "Preço Unitário",
      packBadge: "Pack Exclusivo",
      packDescription: "Conjunto de 4 Cadeiras",
      savings: "Poupa 81 MZN no pack",
      buyPack: "Comprar Pack de 4",
      buyOne: "Comprar 1 Cadeira",
      limitedEdition: "Edição Limitada",
    },
  };

  const t = content[lang];

  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            {t.badge}
          </p>
          <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
            {t.title}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t.subtitle}
          </p>
        </div>

        {/* Single Exclusive Product */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Product Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-eco-blue/20 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary shadow-floating">
                <img
                  src={whiteChair}
                  alt="The Classic White Chair"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Exclusive Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-foreground text-background rounded-full">
                  {t.limitedEdition}
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-semibold text-foreground">
                  The Classic White
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  {t.description}
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{t.material}</p>
                  <p className="text-foreground font-medium">{t.materialValue}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{t.weightCapacity}</p>
                  <p className="text-foreground font-medium">{t.weightCapacityValue}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">{t.dimensions}</p>
                  <p className="text-foreground font-medium">{t.dimensionsValue}</p>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-border">
                {/* Single Chair Price */}
                <div className="mb-6">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">{t.unitPrice}</p>
                  <span className="text-2xl font-semibold text-foreground">220 MZN</span>
                </div>
                
                {/* Bundle Offer */}
                <div className="bg-accent/10 rounded-2xl p-6 mb-6 border border-accent/20">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                      {t.packBadge}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{t.packDescription}</p>
                  <div className="flex items-end gap-3">
                    <span className="text-4xl font-bold text-foreground">799 MZN</span>
                    <span className="text-lg text-muted-foreground line-through">880 MZN</span>
                  </div>
                  <p className="text-sm text-accent font-medium mt-2">{t.savings}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" className="flex-1">
                    {t.buyPack}
                  </Button>
                  <Button variant="heroOutline" size="xl">
                    {t.buyOne}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
