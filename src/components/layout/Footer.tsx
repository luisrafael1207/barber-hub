import { Link } from "react-router-dom";
import { Scissors, Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-display font-bold text-foreground">
                Barber<span className="text-primary">Hub</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm font-body leading-relaxed">
              A maior plataforma de barbearias do Brasil. Conectando clientes às melhores barbearias com apenas alguns cliques.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Para Clientes</h4>
            <ul className="space-y-2">
              {["Explorar Barbearias", "Como Funciona", "Avaliações", "Perguntas Frequentes"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Links 2 */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Para Barbearias</h4>
            <ul className="space-y-2">
              {["Cadastre sua Barbearia", "Planos e Preços", "Central de Ajuda", "Termos de Serviço"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm font-body">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <Mail className="w-4 h-4 text-primary" />
                contato@barberhub.com.br
              </li>
              <li className="flex items-center gap-3 text-muted-foreground text-sm font-body">
                <Phone className="w-4 h-4 text-primary" />
                (11) 99999-9999
              </li>
              <li className="flex items-start gap-3 text-muted-foreground text-sm font-body">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-border my-8" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground font-body">
          <p>© 2024 BarberHub. Todos os direitos reservados.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
