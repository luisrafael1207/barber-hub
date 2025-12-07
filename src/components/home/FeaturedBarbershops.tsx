import { BarbershopCard } from "@/components/barbershop/BarbershopCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const featuredBarbershops = [
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
];

export function FeaturedBarbershops() {
  return (
    <section className="py-20 md:py-28 bg-gradient-dark">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Barbearias em{" "}
              <span className="text-gradient-gold">Destaque</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body max-w-xl">
              As barbearias mais bem avaliadas e procuradas da sua região
            </p>
          </div>

          <Button variant="gold-outline" asChild>
            <Link to="/explorar" className="gap-2">
              Ver Todas
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredBarbershops.map((barbershop, index) => (
            <div
              key={barbershop.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <BarbershopCard {...barbershop} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
