import { Leaf, Recycle, Users, Globe } from "lucide-react";

interface ImpactSectionProps {
  lang?: "en" | "pt";
}

const ImpactSection = ({ lang = "pt" }: ImpactSectionProps) => {
  const content = {
    en: {
      badge: "Our Impact",
      title: "Every cap counts.",
      subtitle: "Together, we're creating a circular economy that transforms waste into beautiful, functional design.",
      stats: [
        {
          icon: Recycle,
          value: "2.5M+",
          label: "Bottle Caps Recycled",
          description: "Diverted from landfills and oceans",
        },
        {
          icon: Leaf,
          value: "500",
          label: "Tons CO₂ Saved",
          description: "Compared to virgin plastic production",
        },
        {
          icon: Users,
          value: "150+",
          label: "Community Partners",
          description: "Schools, offices, and local businesses",
        },
        {
          icon: Globe,
          value: "30+",
          label: "Countries Reached",
          description: "Global impact, local action",
        },
      ],
      quote: "The best way to predict the future is to design it. We're designing a future where waste becomes wonder.",
      author: "— Xavisa Founders",
    },
    pt: {
      badge: "Nosso Impacto",
      title: "Cada tampa conta.",
      subtitle: "Juntos, estamos criando uma economia circular que transforma lixo em design bonito e funcional.",
      stats: [
        {
          icon: Recycle,
          value: "2.5M+",
          label: "Tampas Recicladas",
          description: "Desviadas de aterros e oceanos",
        },
        {
          icon: Leaf,
          value: "500",
          label: "Tons CO₂ Poupadas",
          description: "Comparado à produção de plástico virgem",
        },
        {
          icon: Users,
          value: "150+",
          label: "Parceiros Comunitários",
          description: "Escolas, escritórios e empresas locais",
        },
        {
          icon: Globe,
          value: "30+",
          label: "Países Alcançados",
          description: "Impacto global, ação local",
        },
      ],
      quote: "A melhor maneira de prever o futuro é projetá-lo. Estamos projetando um futuro onde o lixo se torna maravilha.",
      author: "— Fundadores Xavisa",
    },
  };

  const t = content[lang];

  return (
    <section id="impact" className="py-24 lg:py-32 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
          <p className="text-sm font-medium uppercase tracking-widest text-accent mb-4">
            {t.badge}
          </p>
          <h2 className="text-title lg:text-hero font-semibold mb-6">
            {t.title}
          </h2>
          <p className="text-lg opacity-70">
            {t.subtitle}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {t.stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-background/5 backdrop-blur-sm border border-background/10 transition-all duration-300 hover:bg-background/10"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/20 mb-6">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <p className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm font-medium uppercase tracking-wide mb-2">
                {stat.label}
              </p>
              <p className="text-sm opacity-60">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-16 lg:mt-24 text-center max-w-3xl mx-auto">
          <blockquote className="text-2xl lg:text-3xl font-light italic opacity-80 leading-relaxed">
            "{t.quote}"
          </blockquote>
          <cite className="block mt-6 text-sm font-medium uppercase tracking-wide opacity-60">
            {t.author}
          </cite>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
