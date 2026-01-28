import { Heart, Instagram, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="flex items-center gap-2">
              <Heart className="w-8 h-8 text-primary" />
              <span className="font-serif text-xl font-semibold">
                Dr. Nome Sobrenome
              </span>
            </div>

            <div className="text-center">
              <p className="text-secondary-foreground/70 text-sm">
                © {new Date().getFullYear()} Dr. Nome Sobrenome
                <br />
                Cardiologista • CRM 00000
              </p>
            </div>

            <div className="flex items-center justify-end gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-secondary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-secondary-foreground/10 text-center">
            <p className="text-secondary-foreground/50 text-xs">
              Este site é apenas informativo e não substitui consulta médica.
              Em caso de emergência, procure o pronto-socorro mais próximo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
