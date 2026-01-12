import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

interface HeaderProps {
  lang?: "en" | "pt";
}

const Header = ({ lang = "pt" }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    en: {
      navLinks: [
        { name: "Products", href: "#products" },
        { name: "Process", href: "#process" },
        { name: "Impact", href: "#impact" },
        { name: "About", href: "#about" },
      ],
      shopNow: "Shop Now",
      langSwitch: "PT",
      langSwitchPath: "/pt",
    },
    pt: {
      navLinks: [
        { name: "Produtos", href: "#products" },
        { name: "Processo", href: "#process" },
        { name: "Impacto", href: "#impact" },
        { name: "Sobre Nós", href: "#about" },
      ],
      shopNow: "Comprar Agora",
      langSwitch: "EN",
      langSwitchPath: "/en",
    },
  };

  const t = content[lang];

  const handleLanguageSwitch = () => {
    navigate(t.langSwitchPath);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl shadow-soft"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-xl font-semibold tracking-tight text-foreground">
              Xavisa
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {t.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" onClick={handleLanguageSwitch}>
              {t.langSwitch}
            </Button>
            <Button variant="default" size="sm">
              {t.shopNow}
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className="h-6 w-6 text-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col space-y-4">
              {t.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors px-2 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="ghost" size="sm" onClick={handleLanguageSwitch}>
                  {t.langSwitch}
                </Button>
                <Button variant="default" size="sm">
                  {t.shopNow}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
