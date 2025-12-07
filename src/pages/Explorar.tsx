import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BarbershopCard } from "@/components/barbershop/BarbershopCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, SlidersHorizontal, Star, Clock, DollarSign, X } from "lucide-react";
import { useState } from "react";

const allBarbershops = [
  {
    id: "1",
    name: "Barbearia Vintage",
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 234,
    distance: "1.2 km",
    address: "Rua Augusta, 1234 - Consolação, SP",
    isOpen: true,
    priceRange: "R$ 35 - 80",
    services: ["Degradê", "Barba", "Sobrancelha", "Pigmentação"],
    featured: true,
  },
  {
    id: "2",
    name: "The Barber Club",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 189,
    distance: "2.5 km",
    address: "Av. Paulista, 900 - Bela Vista, SP",
    isOpen: true,
    priceRange: "R$ 40 - 100",
    services: ["Corte Social", "Barba Navalhada", "Hidratação"],
    featured: false,
  },
  {
    id: "3",
    name: "Old School Barber",
    image: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=600&h=400&fit=crop",
    rating: 4.7,
    reviews: 156,
    distance: "3.1 km",
    address: "Rua Oscar Freire, 456 - Jardins, SP",
    isOpen: false,
    priceRange: "R$ 45 - 120",
    services: ["Freestyle", "Coloração", "Spa Facial", "Alisamento"],
    featured: false,
  },
  {
    id: "4",
    name: "Kings Barbershop",
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&h=400&fit=crop",
    rating: 4.9,
    reviews: 312,
    distance: "0.8 km",
    address: "Rua Haddock Lobo, 789 - Cerqueira César, SP",
    isOpen: true,
    priceRange: "R$ 50 - 150",
    services: ["Degradê Navalhado", "Barba Completa", "Luzes"],
    featured: true,
  },
  {
    id: "5",
    name: "Corte & Estilo",
    image: "https://images.unsplash.com/photo-1622287162716-f311baa1a2b8?w=600&h=400&fit=crop",
    rating: 4.6,
    reviews: 98,
    distance: "4.2 km",
    address: "Rua da Consolação, 321 - República, SP",
    isOpen: true,
    priceRange: "R$ 30 - 70",
    services: ["Corte Simples", "Barba", "Sobrancelha"],
    featured: false,
  },
  {
    id: "6",
    name: "Premium Barber Studio",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=600&h=400&fit=crop",
    rating: 4.8,
    reviews: 267,
    distance: "1.8 km",
    address: "Al. Santos, 567 - Paraíso, SP",
    isOpen: true,
    priceRange: "R$ 60 - 200",
    services: ["Degradê Premium", "Barba Deluxe", "Tratamentos", "Coloração"],
    featured: true,
  },
];

const filters = [
  { id: "open", label: "Aberto agora", icon: Clock },
  { id: "rating", label: "Melhor avaliados", icon: Star },
  { id: "price", label: "Menor preço", icon: DollarSign },
];

const serviceFilters = ["Degradê", "Barba", "Sobrancelha", "Coloração", "Alisamento", "Hidratação"];

const Explorar = () => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeServices, setActiveServices] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFilter = (filterId: string) => {
    setActiveFilters((prev) =>
      prev.includes(filterId) ? prev.filter((f) => f !== filterId) : [...prev, filterId]
    );
  };

  const toggleService = (service: string) => {
    setActiveServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
    setActiveServices([]);
    setSearchQuery("");
  };

  const hasActiveFilters = activeFilters.length > 0 || activeServices.length > 0 || searchQuery.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
              Explorar <span className="text-gradient-gold">Barbearias</span>
            </h1>
            <p className="text-muted-foreground font-body">
              Encontre a barbearia perfeita para você
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-8">
            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Buscar por nome ou localização..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                />
              </div>
              <Button variant="secondary" className="gap-2">
                <SlidersHorizontal className="w-4 h-4" />
                Filtros
              </Button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => {
                const Icon = filter.icon;
                const isActive = activeFilters.includes(filter.id);
                return (
                  <Button
                    key={filter.id}
                    variant={isActive ? "gold" : "outline"}
                    size="sm"
                    className="gap-2"
                    onClick={() => toggleFilter(filter.id)}
                  >
                    <Icon className="w-4 h-4" />
                    {filter.label}
                  </Button>
                );
              })}
            </div>

            {/* Service Filters */}
            <div className="flex flex-wrap gap-2">
              {serviceFilters.map((service) => {
                const isActive = activeServices.includes(service);
                return (
                  <Badge
                    key={service}
                    variant={isActive ? "gold" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => toggleService(service)}
                  >
                    {service}
                  </Badge>
                );
              })}
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground font-body">Filtros ativos:</span>
                <Button variant="ghost" size="sm" className="text-primary gap-1" onClick={clearFilters}>
                  <X className="w-3 h-3" />
                  Limpar todos
                </Button>
              </div>
            )}
          </div>

          {/* Results Count */}
          <p className="text-muted-foreground text-sm font-body mb-6">
            Mostrando <span className="text-foreground font-semibold">{allBarbershops.length}</span> barbearias
          </p>

          {/* Barbershop Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allBarbershops.map((barbershop, index) => (
              <div
                key={barbershop.id}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <BarbershopCard {...barbershop} />
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="gold-outline" size="lg">
              Carregar mais barbearias
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Explorar;
