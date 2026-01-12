interface FooterProps {
  lang?: "en" | "pt";
}

const Footer = ({ lang = "pt" }: FooterProps) => {
  const content = {
    en: {
      tagline: "Transforming waste into wonder.",
      products: "Products",
      productLinks: ["All Chairs"],
      company: "Company",
      companyLinks: ["Sustainability", "Careers"],
      support: "Support",
      supportLinks: ["Contact", "FAQ", "Shipping", "Returns"],
      connect: "Connect",
      connectLinks: ["Instagram", "Twitter", "LinkedIn", "Newsletter"],
      copyright: "© 2025 Xavisa. All rights reserved.",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
    },
    pt: {
      tagline: "A transformar resíduos em maravilha.",
      products: "Produtos",
      productLinks: ["Todas as Cadeiras", "Mesas"],
      company: "Empresa",
      companyLinks: ["Sustentabilidade", "Carreiras"],
      support: "Apoio",
      supportLinks: ["Contacto", "FAQ", "Envio", "Devoluções"],
      connect: "Ligações",
      connectLinks: ["Instagram", "Twitter", "LinkedIn", "Newsletter"],
      copyright: "© 2025 Xavisa. Todos os direitos reservados.",
      privacy: "Política de Privacidade",
      terms: "Termos de Serviço",
    },
  };

  const t = content[lang];

  const footerLinks = {
    [t.products]: t.productLinks,
    [t.company]: t.companyLinks,
    [t.support]: t.supportLinks,
    [t.connect]: t.connectLinks,
  };

  return (
    <footer id="about" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="text-xl font-semibold tracking-tight text-foreground">
              Xavisa
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              {t.tagline}
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-semibold text-foreground uppercase tracking-wide mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            {t.copyright}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.privacy}
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.terms}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
