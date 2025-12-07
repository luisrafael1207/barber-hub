import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  MapPin,
  Clock,
  Phone,
  Instagram,
  Share2,
  Heart,
  ChevronLeft,
  ChevronRight,
  Check,
  Calendar,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const barbershopData = {
  id: "1",
  name: "Barbearia Vintage",
  description:
    "Uma experiência única de cuidado masculino. Combinamos técnicas tradicionais com tendências modernas para oferecer o melhor serviço da região. Ambiente sofisticado e atendimento personalizado.",
  rating: 4.9,
  reviews: 234,
  address: "Rua Augusta, 1234 - Consolação, São Paulo, SP",
  phone: "(11) 99999-9999",
  instagram: "@barbearivintage",
  hours: "Seg-Sáb: 09:00 - 20:00 | Dom: Fechado",
  isOpen: true,
  images: [
    "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
    "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=600&fit=crop",
  ],
  services: [
    { category: "Cabelo", items: [
      { name: "Corte Simples", price: 35, duration: "30 min" },
      { name: "Degradê Básico", price: 45, duration: "45 min" },
      { name: "Degradê Navalhado", price: 55, duration: "50 min" },
      { name: "Corte + Degradê Premium", price: 70, duration: "60 min" },
      { name: "Pigmentação Capilar", price: 80, duration: "45 min" },
    ]},
    { category: "Barba", items: [
      { name: "Barba Simples", price: 25, duration: "20 min" },
      { name: "Barba Navalhada", price: 40, duration: "35 min" },
      { name: "Barba + Toalha Quente", price: 50, duration: "45 min" },
    ]},
    { category: "Sobrancelha", items: [
      { name: "Sobrancelha Navalha", price: 15, duration: "10 min" },
      { name: "Design Completo", price: 25, duration: "20 min" },
    ]},
    { category: "Combos", items: [
      { name: "Corte + Barba", price: 55, duration: "50 min" },
      { name: "Corte + Barba + Sobrancelha", price: 65, duration: "60 min" },
      { name: "Pacote Completo Premium", price: 120, duration: "90 min" },
    ]},
  ],
  professionals: [
    { name: "Carlos Silva", role: "Barbeiro Master", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" },
    { name: "João Santos", role: "Barbeiro Senior", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face" },
    { name: "Pedro Costa", role: "Barbeiro", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" },
  ],
  amenities: ["Wi-Fi", "Ar Condicionado", "Estacionamento", "Café Cortesia", "TV", "Cerveja Artesanal"],
};

const BarbeariaDetalhes = () => {
  const { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % barbershopData.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + barbershopData.images.length) % barbershopData.images.length);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-20">
        {/* Image Gallery */}
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img
            src={barbershopData.images[currentImage]}
            alt={barbershopData.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

          {/* Gallery Navigation */}
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:bg-background/80 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {barbershopData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentImage ? "bg-primary" : "bg-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Actions */}
          <div className="absolute top-24 right-4 flex gap-2">
            <button className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/80 transition-colors">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/80 transition-colors">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Header */}
              <Card variant="elevated" className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={barbershopData.isOpen ? "success" : "secondary"}>
                        {barbershopData.isOpen ? "Aberto" : "Fechado"}
                      </Badge>
                      <Badge variant="gold">Destaque</Badge>
                    </div>
                    <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                      {barbershopData.name}
                    </h1>
                  </div>

                  <div className="flex items-center gap-2 bg-secondary rounded-lg px-3 py-2">
                    <Star className="w-5 h-5 fill-primary text-primary" />
                    <span className="font-bold text-foreground text-lg">{barbershopData.rating}</span>
                    <span className="text-muted-foreground text-sm">({barbershopData.reviews} avaliações)</span>
                  </div>
                </div>

                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {barbershopData.description}
                </p>

                <div className="grid sm:grid-cols-2 gap-4 text-sm font-body">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{barbershopData.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{barbershopData.hours}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{barbershopData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-muted-foreground">{barbershopData.instagram}</span>
                  </div>
                </div>
              </Card>

              {/* Services */}
              <Card variant="elevated" className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Serviços</h2>
                <div className="space-y-6">
                  {barbershopData.services.map((category) => (
                    <div key={category.category}>
                      <h3 className="font-display text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
                        <span className="w-1 h-6 bg-primary rounded-full" />
                        {category.category}
                      </h3>
                      <div className="space-y-2">
                        {category.items.map((service) => (
                          <div
                            key={service.name}
                            className={`flex items-center justify-between p-4 rounded-lg border transition-all cursor-pointer ${
                              selectedService === service.name
                                ? "border-primary bg-primary/5"
                                : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => setSelectedService(selectedService === service.name ? null : service.name)}
                          >
                            <div className="flex items-center gap-3">
                              {selectedService === service.name && (
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                  <Check className="w-3 h-3 text-primary-foreground" />
                                </div>
                              )}
                              <div>
                                <p className="font-body font-medium text-foreground">{service.name}</p>
                                <p className="text-sm text-muted-foreground">{service.duration}</p>
                              </div>
                            </div>
                            <p className="font-display font-bold text-primary text-lg">
                              R$ {service.price}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Professionals */}
              <Card variant="elevated" className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Nossa Equipe</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {barbershopData.professionals.map((pro) => (
                    <div key={pro.name} className="text-center p-4 rounded-xl bg-secondary/50">
                      <img
                        src={pro.avatar}
                        alt={pro.name}
                        className="w-20 h-20 rounded-full object-cover mx-auto mb-3 border-2 border-primary"
                      />
                      <p className="font-display font-semibold text-foreground">{pro.name}</p>
                      <p className="text-sm text-muted-foreground font-body">{pro.role}</p>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Amenities */}
              <Card variant="elevated" className="p-6">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">Comodidades</h2>
                <div className="flex flex-wrap gap-2">
                  {barbershopData.amenities.map((amenity) => (
                    <Badge key={amenity} variant="outline" className="px-4 py-2">
                      {amenity}
                    </Badge>
                  ))}
                </div>
              </Card>
            </div>

            {/* Sidebar - Booking */}
            <div className="lg:col-span-1">
              <Card variant="gold" className="p-6 sticky top-24">
                <h3 className="font-display text-xl font-bold text-foreground mb-4">Agendar Horário</h3>

                {selectedService ? (
                  <div className="mb-6 p-4 rounded-lg bg-primary/10 border border-primary/30">
                    <p className="text-sm text-muted-foreground mb-1">Serviço selecionado:</p>
                    <p className="font-display font-semibold text-foreground">{selectedService}</p>
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm font-body mb-6">
                    Selecione um serviço na lista ao lado para continuar
                  </p>
                )}

                <Button variant="hero" className="w-full gap-2" disabled={!selectedService}>
                  <Calendar className="w-5 h-5" />
                  Escolher Horário
                </Button>

                <p className="text-center text-muted-foreground text-xs font-body mt-4">
                  Pagamento seguro via cartão, Pix ou carteira digital
                </p>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <div className="mt-16">
        <Footer />
      </div>
    </div>
  );
};

export default BarbeariaDetalhes;
