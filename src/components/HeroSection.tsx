import { Button } from "@/components/ui/button";
import blueChair from "@/assets/blue-chair.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-up">
            <div className="space-y-4">
              <p className="text-sm font-medium uppercase tracking-widest text-accent">
                Sustainable Design
              </p>
              <h1 className="text-hero lg:text-display font-semibold text-foreground text-balance">
                From Waste
                <br />
                <span className="text-muted-foreground">to Wonder.</span>
              </h1>
            </div>
            
            <p className="text-subtitle text-muted-foreground max-w-lg mx-auto lg:mx-0">
              We transform discarded bottle caps into beautifully crafted chairs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg">
                Shop The Classic Blue
              </Button>
              <Button variant="heroOutline" size="lg">
                Learn More
              </Button>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 pt-4">
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">50K+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Caps Recycled</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">1,200+</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Chairs Made</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="text-2xl font-semibold text-foreground">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Sustainable</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-secondary shadow-floating">
              <img
                src={blueChair}
                alt="The Classic Blue - Sustainable chair made from recycled bottle caps"
                className="w-full h-full object-contain p-8 animate-float"
              />
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 bg-background rounded-2xl p-4 lg:p-6 shadow-elevated">
              <p className="text-xs text-muted-foreground uppercase tracking-wide">Made from</p>
              <p className="text-xl lg:text-2xl font-semibold text-foreground">500 Caps</p>
            </div>

            {/* Price tag */}
            <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 bg-foreground text-background rounded-2xl p-4 lg:p-5 shadow-elevated">
              <p className="text-xs uppercase tracking-wide opacity-70">Pack de 4</p>
              <p className="text-xl lg:text-2xl font-bold">799 MZN</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
