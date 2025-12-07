import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const upcomingAppointments = [
  {
    id: "1",
    barbershop: "Barbearia Vintage",
    service: "Corte + Barba",
    date: "15 Jan 2024",
    time: "14:30",
    status: "confirmed",
    price: "R$ 55",
  },
  {
    id: "2",
    barbershop: "The Barber Club",
    service: "Degradê Navalhado",
    date: "22 Jan 2024",
    time: "10:00",
    status: "pending",
    price: "R$ 55",
  },
];

const favoriteShops = [
  {
    id: "1",
    name: "Barbearia Vintage",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=200&h=200&fit=crop",
  },
  {
    id: "2",
    name: "Kings Barbershop",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=200&h=200&fit=crop",
  },
  {
    id: "3",
    name: "The Barber Club",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=200&h=200&fit=crop",
  },
];

const ClienteDashboard = () => {
  return (
    <DashboardLayout type="cliente">
      <div className="space-y-6">
        {/* Welcome */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Olá, <span className="text-gradient-gold">Usuário</span>! 👋
            </h1>
            <p className="text-muted-foreground font-body">
              Bem-vindo de volta ao BarberHub
            </p>
          </div>
          <Button variant="gold" asChild>
            <Link to="/explorar" className="gap-2">
              Agendar Novo Corte
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Agendamentos", value: "12", sublabel: "Total" },
            { label: "Próximo Corte", value: "15 Jan", sublabel: "14:30" },
            { label: "Barbearias Favoritas", value: "3", sublabel: "Salvas" },
            { label: "Avaliações Feitas", value: "8", sublabel: "Reviews" },
          ].map((stat) => (
            <Card key={stat.label} variant="elevated" className="p-4">
              <p className="text-sm text-muted-foreground font-body">{stat.label}</p>
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground font-body">{stat.sublabel}</p>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Upcoming Appointments */}
          <Card variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Próximos Agendamentos</CardTitle>
              <Link to="/cliente/agendamentos" className="text-sm text-primary hover:underline font-body">
                Ver todos
              </Link>
            </CardHeader>
            <CardContent className="space-y-4">
              {upcomingAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Calendar className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-foreground">{apt.barbershop}</p>
                    <p className="text-sm text-muted-foreground font-body">{apt.service}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {apt.date} às {apt.time}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <Badge variant={apt.status === "confirmed" ? "success" : "warning"}>
                      {apt.status === "confirmed" ? "Confirmado" : "Pendente"}
                    </Badge>
                    <p className="text-sm font-semibold text-foreground mt-1 font-body">{apt.price}</p>
                  </div>
                </div>
              ))}

              {upcomingAppointments.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-muted-foreground font-body">Nenhum agendamento próximo</p>
                  <Button variant="gold-outline" className="mt-4" asChild>
                    <Link to="/explorar">Agendar Agora</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Favorite Shops */}
          <Card variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Barbearias Favoritas</CardTitle>
              <Link to="/cliente/favoritos" className="text-sm text-primary hover:underline font-body">
                Ver todas
              </Link>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                {favoriteShops.map((shop) => (
                  <Link
                    key={shop.id}
                    to={`/barbearia/${shop.id}`}
                    className="group text-center"
                  >
                    <div className="aspect-square rounded-xl overflow-hidden mb-2 border-2 border-transparent group-hover:border-primary transition-colors">
                      <img
                        src={shop.image}
                        alt={shop.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground font-body truncate">{shop.name}</p>
                    <div className="flex items-center justify-center gap-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground font-body">{shop.rating}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ClienteDashboard;
