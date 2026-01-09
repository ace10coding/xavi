import bottleCapsImage from "@/assets/bottle-caps.jpg";
import plasticBottlesImage from "@/assets/plastic-bottles.jpg";
import blueChair from "@/assets/blue-chair.jpg";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Collect",
      description: "We partner with communities and businesses to collect plastic bottle caps that would otherwise end up in landfills.",
      image: plasticBottlesImage,
      objectFit: "cover" as const,
    },
    {
      number: "02",
      title: "Process",
      description: "Caps are cleaned, sorted by color, and processed into raw material ready for manufacturing.",
      image: bottleCapsImage,
      objectFit: "cover" as const,
    },
    {
      number: "03",
      title: "Create",
      description: "Our craftspeople mold and shape the recycled plastic into stunning, durable furniture pieces like The Classic Blue.",
      image: blueChair,
      objectFit: "contain" as const,
    },
  ];

  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            Our Process
          </p>
          <h2 className="text-title lg:text-hero font-semibold text-foreground mb-6">
            From cap to chair.
          </h2>
          <p className="text-lg text-muted-foreground">
            Every piece of furniture begins with a simple bottle cap. 
            Here's how we transform waste into design.
          </p>
        </div>

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
              >
                <div className={`aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated ${step.objectFit === "contain" ? "bg-background" : ""}`}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className={`w-full h-full transition-transform duration-700 hover:scale-105 ${
                      step.objectFit === "contain" ? "object-contain p-6" : "object-cover"
                    }`}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <span className="text-6xl lg:text-8xl font-bold text-border">
                  {step.number}
                </span>
                <h3 className="text-3xl lg:text-4xl font-semibold text-foreground -mt-4">
                  {step.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
