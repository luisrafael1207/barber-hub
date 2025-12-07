import { Search, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-barbershop.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Barbearia Premium"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-body font-medium">
              +500 barbearias cadastradas
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "100ms" }}>
            Encontre a{" "}
            <span className="text-gradient-gold">barbearia perfeita</span>{" "}
            perto de você
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground font-body mb-8 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: "200ms" }}>
            Agende cortes de cabelo e barba nas melhores barbearias da sua região. 
            Simples, rápido e sem complicação.
          </p>

          {/* Search Bar */}
          <div className="flex flex-col sm:flex-row gap-3 mb-8 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <div className="relative flex-1">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Digite seu bairro ou cidade..."
                className="pl-12 h-14 text-base"
              />
            </div>
            <Button variant="hero" size="xl" className="gap-2" asChild>
              <Link to="/explorar">
                <Search className="w-5 h-5" />
                Buscar
              </Link>
            </Button>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-4 animate-fade-in-up" style={{ animationDelay: "400ms" }}>
            <span className="text-muted-foreground text-sm font-body">Populares:</span>
            {["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba"].map((city) => (
              <Link
                key={city}
                to={`/explorar?city=${city}`}
                className="text-sm font-body text-foreground hover:text-primary transition-colors"
              >
                {city}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="absolute bottom-8 left-0 right-0 z-10 hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-12">
            {[
              { value: "500+", label: "Barbearias" },
              { value: "50k+", label: "Agendamentos" },
              { value: "4.9", label: "Avaliação Média" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-display font-bold text-gradient-gold">{stat.value}</p>
                <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
