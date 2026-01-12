import { Button } from "@/components/ui/button";
import whiteChair from "@/assets/white-chair.jpg";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
              Limited Availability
            </p>
            <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
              Own The Classic White.
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-lg">
              Join thousands who have chosen sustainable design without compromise. 
              Each chair is crafted to order.
            </p>

            <div className="bg-accent/10 rounded-2xl p-6 mb-6 border border-accent/20 max-w-sm">
              <p className="text-sm text-muted-foreground mb-1">Pack Exclusivo • 4 Cadeiras</p>
              <div className="flex items-end gap-3">
                <span className="text-3xl font-bold text-foreground">799 MZN</span>
                <span className="text-muted-foreground line-through">880 MZN</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl">
                Comprar Pack — 799 MZN
              </Button>
              <Button variant="heroOutline" size="xl">
                Doar Tampas
              </Button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Entrega grátis em Moçambique • Garantia 5 anos • Devoluções 30 dias
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden bg-background shadow-floating">
              <img
                src={whiteChair}
                alt="The Classic White Chair"
                className="w-full h-full object-contain p-6"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
