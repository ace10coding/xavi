import { Button } from "@/components/ui/button";
import bottleCaps from "@/assets/bottle-caps.jpg";

const CTASection = () => {
  return (
    <section className="py-24 lg:py-32 bg-secondary relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={bottleCaps}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
          Join the Movement
        </p>
        <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
          Start your collection today.
        </h2>
        <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
          Whether you're looking to add sustainable furniture to your space or 
          want to donate your bottle caps, we'd love to hear from you.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl">
            Shop Collection
          </Button>
          <Button variant="heroOutline" size="xl">
            Donate Caps
          </Button>
        </div>

        <p className="mt-8 text-sm text-muted-foreground">
          Free shipping on orders over $200 • 5-year warranty included
        </p>
      </div>
    </section>
  );
};

export default CTASection;
