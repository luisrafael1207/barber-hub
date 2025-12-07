import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-gold opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Pronto para transformar seu{" "}
            <span className="text-gradient-gold">visual</span>?
          </h2>
          <p className="text-muted-foreground text-lg font-body mb-8 max-w-xl mx-auto">
            Cadastre-se agora e descubra as melhores barbearias da sua região. 
            Seu próximo corte perfeito está a um clique de distância.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Seu melhor e-mail"
              className="flex-1"
            />
            <Button variant="hero" className="gap-2">
              Começar Agora
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <p className="text-muted-foreground text-sm font-body mt-4">
            Ao se cadastrar, você concorda com nossos{" "}
            <a href="#" className="text-primary hover:underline">Termos</a> e{" "}
            <a href="#" className="text-primary hover:underline">Política de Privacidade</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
