import bottleCapsImage from "@/assets/bottle-caps.jpg";
import plasticBottlesImage from "@/assets/plastic-bottles.jpg";
import whiteChair from "@/assets/white-chair.jpg";

interface ProcessSectionProps {
  lang?: "en" | "pt";
}

const ProcessSection = ({ lang = "pt" }: ProcessSectionProps) => {
  const content = {
    en: {
      badge: "Our Process",
      title: "From cap to chair.",
      subtitle: "Every piece of furniture begins with a simple bottle cap. Here's how we transform waste into design.",
      steps: [
        {
          number: "01",
          title: "Collect",
          description: "We partner with unsettled individuals by helping them get proper documentation and providing them with the necessary wear and equipment to collect plastic bottle caps that would otherwise end up in landfills and oceans.",
        },
        {
          number: "02",
          title: "Process",
          description: "Caps are cleaned, sorted by color, and processed into raw material ready for manufacturing.",
        },
        {
          number: "03",
          title: "Create",
          description: "Our craftspeople mold and shape the recycled plastic into stunning, durable furniture pieces like The Classic White.",
        },
      ],
    },
    pt: {
      badge: "O Nosso Processo",
      title: "De tampa a cadeira.",
      subtitle: "Cada peça de mobiliário começa com uma simples tampa de garrafa. Veja como transformamos resíduos em design.",
      steps: [
        {
          number: "01",
          title: "Recolher",
          description: "Fazemos parceria com pessoas em situação irregular, ajudando-as a obter documentação adequada e fornecendo-lhes o vestuário e equipamento necessários para recolher tampas de garrafas plásticas que, de outra forma, acabariam em aterros e oceanos.",
        },
        {
          number: "02",
          title: "Processar",
          description: "As tampas são limpas, separadas por cor e processadas em matéria-prima pronta para fabrico.",
        },
        {
          number: "03",
          title: "Criar",
          description: "Os nossos artesãos moldam e dão forma ao plástico reciclado em peças de mobiliário impressionantes e duráveis como a The Classic White.",
        },
      ],
    },
  };

  const t = content[lang];

  const images = [plasticBottlesImage, bottleCapsImage, whiteChair];

  return (
    <section id="process" className="py-24 lg:py-32 bg-secondary">
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

        {/* Process Steps */}
        <div className="space-y-16 lg:space-y-24">
          {t.steps.map((step, index) => (
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
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-elevated">
                  <img
                    src={images[index]}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
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
