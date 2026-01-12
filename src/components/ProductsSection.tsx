import { Button } from "@/components/ui/button";
import whiteChair from "@/assets/white-chair.jpg";
import blackTable from "@/assets/black-table.png";

interface ProductsSectionProps {
  lang?: "en" | "pt";
}

const ProductsSection = ({ lang = "pt" }: ProductsSectionProps) => {
  const content = {
    en: {
      badge: "Exclusive",
      title: "Our Products.",
      subtitle: "Sustainable design, uncompromising quality.",
      // Chair content
      chairBadge: "Limited Edition",
      chairTitle: "The Classic White",
      chairDescription: "Crafted from 500+ recycled bottle caps, this iconic design combines bold aesthetics with uncompromising durability.",
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
      // Table content
      tableBadge: "Coming Soon",
      tableTitle: "3D Printed Black Table",
      tableDescription: "Our next innovation: elegant black tables crafted using advanced 3D printing technology with recycled materials.",
      tableMaterial: "Material",
      tableMaterialValue: "3D Printed Recycled Plastic",
      tableDimensions: "Dimensions",
      tableDimensionsValue: "120 × 60 × 45 cm",
      tablePrice: "Price",
      buyTable: "Pre-Order Now",
      // Bundle content
      bundleBadge: "Best Value",
      bundleTitle: "Complete Set",
      bundleDescription: "6 Chairs + 1 Table",
      bundleSavings: "Save 320 MZN",
      buyBundle: "Buy Complete Set",
    },
    pt: {
      badge: "Exclusivo",
      title: "Os Nossos Produtos.",
      subtitle: "Design sustentável, qualidade sem compromissos.",
      // Chair content
      chairBadge: "Edição Limitada",
      chairTitle: "The Classic White",
      chairDescription: "Fabricada com mais de 500 tampas de garrafa recicladas, este design icónico combina estética arrojada com durabilidade sem compromissos.",
      material: "Material",
      materialValue: "100% Plástico Reciclado",
      weightCapacity: "Capacidade de Peso",
      weightCapacityValue: "150 kg",
      dimensions: "Dimensões",
      dimensionsValue: "56 × 54 × 80 cm",
      unitPrice: "Preço Unitário",
      packBadge: "Pack Exclusivo",
      packDescription: "Conjunto de 4 Cadeiras",
      savings: "Poupe 81 MZN no pack",
      buyPack: "Comprar Pack de 4",
      buyOne: "Comprar 1 Cadeira",
      // Table content
      tableBadge: "Brevemente",
      tableTitle: "Mesa Preta Impressa em 3D",
      tableDescription: "A nossa próxima inovação: mesas pretas elegantes fabricadas com tecnologia avançada de impressão 3D e materiais reciclados.",
      tableMaterial: "Material",
      tableMaterialValue: "Plástico Reciclado Impresso em 3D",
      tableDimensions: "Dimensões",
      tableDimensionsValue: "120 × 60 × 45 cm",
      tablePrice: "Preço",
      buyTable: "Encomendar Agora",
      // Bundle content
      bundleBadge: "Melhor Valor",
      bundleTitle: "Conjunto Completo",
      bundleDescription: "6 Cadeiras + 1 Mesa",
      bundleSavings: "Poupe 320 MZN",
      buyBundle: "Comprar Conjunto Completo",
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

        {/* Products Grid */}
        <div className="space-y-24 lg:space-y-32">
          {/* Chair Product */}
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
                    {t.chairBadge}
                  </span>
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-foreground">
                    {t.chairTitle}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {t.chairDescription}
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

          {/* Table Product */}
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Product Details - Left side for table */}
              <div className="space-y-8 order-2 lg:order-1">
                <div className="space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-semibold text-foreground">
                    {t.tableTitle}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed">
                    {t.tableDescription}
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{t.tableMaterial}</p>
                    <p className="text-foreground font-medium">{t.tableMaterialValue}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide">{t.tableDimensions}</p>
                    <p className="text-foreground font-medium">{t.tableDimensionsValue}</p>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-6 border-t border-border">
                  <div className="mb-6">
                    <p className="text-sm text-muted-foreground uppercase tracking-wide mb-1">{t.tablePrice}</p>
                    <span className="text-3xl font-bold text-foreground">699 MZN</span>
                  </div>

                  <Button variant="hero" size="xl" className="w-full sm:w-auto">
                    {t.buyTable}
                  </Button>
                </div>
              </div>

              {/* Product Image - Right side for table */}
              <div className="relative group order-1 lg:order-2">
                <div className="absolute -inset-4 bg-gradient-to-r from-foreground/10 to-accent/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-secondary shadow-floating">
                  <img
                    src={blackTable}
                    alt="3D Printed Black Table"
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105 p-8"
                  />
                </div>
                {/* Coming Soon Badge */}
                <div className="absolute top-6 right-6">
                  <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-full">
                    {t.tableBadge}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bundle Offer */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-foreground to-foreground/90 rounded-3xl p-8 lg:p-12 text-background">
              <div className="text-center mb-8">
                <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-accent text-accent-foreground rounded-full mb-4">
                  {t.bundleBadge}
                </span>
                <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
                  {t.bundleTitle}
                </h3>
                <p className="text-xl opacity-80">
                  {t.bundleDescription}
                </p>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
                {/* Bundle Images */}
                <div className="flex items-center gap-4">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-background/10">
                    <img src={whiteChair} alt="Chair" className="w-full h-full object-cover" />
                  </div>
                  <span className="text-2xl font-bold">×6</span>
                  <span className="text-2xl">+</span>
                  <div className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl overflow-hidden bg-background/10">
                    <img src={blackTable} alt="Table" className="w-full h-full object-contain p-2" />
                  </div>
                  <span className="text-2xl font-bold">×1</span>
                </div>

                {/* Price & CTA */}
                <div className="text-center lg:text-left">
                  <div className="flex items-end gap-3 justify-center lg:justify-start mb-2">
                    <span className="text-5xl lg:text-6xl font-bold">1,699 MZN</span>
                    <span className="text-xl opacity-60 line-through">2,019 MZN</span>
                  </div>
                  <p className="text-accent font-medium mb-6">{t.bundleSavings}</p>
                  <Button variant="secondary" size="xl" className="w-full lg:w-auto bg-background text-foreground hover:bg-background/90">
                    {t.buyBundle}
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
