import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  Star,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const todayAppointments = [
  {
    id: "1",
    client: "Carlos Silva",
    service: "Corte + Barba",
    time: "09:00",
    status: "completed",
  },
  {
    id: "2",
    client: "João Santos",
    service: "Degradê Navalhado",
    time: "10:30",
    status: "in-progress",
  },
  {
    id: "3",
    client: "Pedro Costa",
    service: "Barba Completa",
    time: "11:30",
    status: "upcoming",
  },
  {
    id: "4",
    client: "Lucas Mendes",
    service: "Corte Social",
    time: "14:00",
    status: "upcoming",
  },
  {
    id: "5",
    client: "André Lima",
    service: "Corte + Sobrancelha",
    time: "15:30",
    status: "upcoming",
  },
];

const recentReviews = [
  {
    id: "1",
    client: "Carlos S.",
    rating: 5,
    comment: "Excelente atendimento! Corte perfeito como sempre.",
    date: "Hoje",
  },
  {
    id: "2",
    client: "João M.",
    rating: 5,
    comment: "Profissional muito habilidoso, ambiente agradável.",
    date: "Ontem",
  },
  {
    id: "3",
    client: "Pedro L.",
    rating: 4,
    comment: "Ótimo serviço, só demorou um pouco mais que o esperado.",
    date: "2 dias atrás",
  },
];

const BarbeariaDashboard = () => {
  return (
    <DashboardLayout type="barbearia">
      <div className="space-y-6">
        {/* Welcome */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Bom dia, <span className="text-gradient-gold">Barbearia Vintage</span>! ✂️
            </h1>
            <p className="text-muted-foreground font-body">
              Você tem <span className="text-primary font-semibold">5 agendamentos</span> para hoje
            </p>
          </div>
          <Button variant="gold">Ver Agenda Completa</Button>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Faturamento Hoje</p>
                <p className="text-2xl font-display font-bold text-foreground">R$ 380</p>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-body mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +12% vs ontem
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <DollarSign className="w-5 h-5" />
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Clientes Hoje</p>
                <p className="text-2xl font-display font-bold text-foreground">5</p>
                <p className="text-xs text-muted-foreground font-body mt-1">2 concluídos</p>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Avaliação Média</p>
                <p className="text-2xl font-display font-bold text-foreground">4.9</p>
                <div className="flex items-center gap-0.5 mt-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                  ))}
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Star className="w-5 h-5" />
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Faturamento Mensal</p>
                <p className="text-2xl font-display font-bold text-foreground">R$ 8.420</p>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-body mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +8% vs mês anterior
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-5 h-5" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Today's Schedule */}
          <Card variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Agenda de Hoje</CardTitle>
              <Badge variant="gold">{todayAppointments.length} agendamentos</Badge>
            </CardHeader>
            <CardContent className="space-y-3">
              {todayAppointments.map((apt) => (
                <div
                  key={apt.id}
                  className={`flex items-center gap-4 p-3 rounded-lg border ${
                    apt.status === "in-progress"
                      ? "border-primary bg-primary/5"
                      : apt.status === "completed"
                      ? "border-border bg-secondary/30"
                      : "border-border"
                  }`}
                >
                  <div className="w-16 text-center">
                    <p className="font-display font-bold text-foreground">{apt.time}</p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground font-body">{apt.client}</p>
                    <p className="text-sm text-muted-foreground font-body">{apt.service}</p>
                  </div>
                  <Badge
                    variant={
                      apt.status === "completed"
                        ? "secondary"
                        : apt.status === "in-progress"
                        ? "gold"
                        : "outline"
                    }
                  >
                    {apt.status === "completed"
                      ? "Concluído"
                      : apt.status === "in-progress"
                      ? "Em andamento"
                      : "Próximo"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Recent Reviews */}
          <Card variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Avaliações Recentes</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                Ver todas
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentReviews.map((review) => (
                <div key={review.id} className="p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                        {review.client[0]}
                      </div>
                      <span className="font-medium text-foreground font-body">{review.client}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-primary text-primary" />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground font-body">"{review.comment}"</p>
                  <p className="text-xs text-muted-foreground font-body mt-2">{review.date}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default BarbeariaDashboard;
