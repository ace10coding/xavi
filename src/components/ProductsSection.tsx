import { Button } from "@/components/ui/button";
import blueChair from "@/assets/blue-chair.jpg";

const ProductsSection = () => {
  return (
    <section id="products" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Exclusive
          </p>
          <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
            The Classic Blue.
          </h2>
          <p className="text-lg text-muted-foreground">
            One chair. Perfected.
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
                  src={blueChair}
                  alt="The Classic Blue Chair"
                  className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Exclusive Badge */}
              <div className="absolute top-6 left-6">
                <span className="inline-block px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-foreground text-background rounded-full">
                  Limited Edition
                </span>
              </div>
            </div>

            {/* Product Details */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-semibold text-foreground">
                  The Classic Blue
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Crafted from 500+ recycled bottle caps, this iconic design 
                  combines bold aesthetics with uncompromising durability.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Material</p>
                  <p className="text-foreground font-medium">100% Recycled Plastic</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Weight Capacity</p>
                  <p className="text-foreground font-medium">150 kg</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Dimensions</p>
                  <p className="text-foreground font-medium">56 × 54 × 80 cm</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">Warranty</p>
                  <p className="text-foreground font-medium">5 Years</p>
                </div>
              </div>

              {/* Price & CTA */}
              <div className="pt-6 border-t border-border">
                <div className="flex items-end gap-4 mb-6">
                  <span className="text-4xl font-bold text-foreground">$299</span>
                  <span className="text-lg text-muted-foreground line-through">$399</span>
                  <span className="text-sm font-medium text-accent uppercase">Save $100</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button variant="hero" size="xl" className="flex-1">
                    Order Now
                  </Button>
                  <Button variant="heroOutline" size="xl">
                    Learn More
                  </Button>
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Free shipping worldwide • 30-day returns
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
