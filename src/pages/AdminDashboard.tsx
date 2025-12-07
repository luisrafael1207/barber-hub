import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  DollarSign,
  TrendingUp,
  ArrowUpRight,
  Check,
  X,
  Clock,
  Star,
} from "lucide-react";

const pendingBarbershops = [
  {
    id: "1",
    name: "Barber Bros",
    owner: "Ricardo Santos",
    location: "Moema, SP",
    date: "10 Jan 2024",
  },
  {
    id: "2",
    name: "Cut & Style",
    owner: "Fernando Lima",
    location: "Pinheiros, SP",
    date: "09 Jan 2024",
  },
];

const topBarbershops = [
  { id: "1", name: "Barbearia Vintage", revenue: "R$ 15.420", clients: 312, rating: 4.9 },
  { id: "2", name: "Kings Barbershop", revenue: "R$ 12.890", clients: 287, rating: 4.9 },
  { id: "3", name: "The Barber Club", revenue: "R$ 11.230", clients: 245, rating: 4.8 },
  { id: "4", name: "Premium Barber Studio", revenue: "R$ 10.650", clients: 201, rating: 4.8 },
  { id: "5", name: "Old School Barber", revenue: "R$ 9.870", clients: 189, rating: 4.7 },
];

const AdminDashboard = () => {
  return (
    <DashboardLayout type="admin">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
            Dashboard <span className="text-gradient-gold">Administrativo</span>
          </h1>
          <p className="text-muted-foreground font-body">
            Visão geral da plataforma BarberHub
          </p>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Barbearias Ativas</p>
                <p className="text-3xl font-display font-bold text-foreground">523</p>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-body mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +12 esta semana
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Usuários Cadastrados</p>
                <p className="text-3xl font-display font-bold text-foreground">12.847</p>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-body mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +234 esta semana
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Faturamento Mensal</p>
                <p className="text-3xl font-display font-bold text-foreground">R$ 89.4k</p>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-body mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +18% vs mês anterior
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <DollarSign className="w-6 h-6" />
              </div>
            </div>
          </Card>

          <Card variant="elevated" className="p-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-sm text-muted-foreground font-body">Agendamentos/Mês</p>
                <p className="text-3xl font-display font-bold text-foreground">48.2k</p>
                <div className="flex items-center gap-1 text-emerald-500 text-xs font-body mt-1">
                  <ArrowUpRight className="w-3 h-3" />
                  +8% vs mês anterior
                </div>
              </div>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Pending Approvals */}
          <Card variant="gold">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Barbearias Pendentes</CardTitle>
              <Badge variant="warning">{pendingBarbershops.length} pendentes</Badge>
            </CardHeader>
            <CardContent className="space-y-4">
              {pendingBarbershops.map((shop) => (
                <div
                  key={shop.id}
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 border border-border"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <p className="font-display font-semibold text-foreground">{shop.name}</p>
                    <p className="text-sm text-muted-foreground font-body">{shop.owner}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-muted-foreground font-body">{shop.location}</span>
                      <span className="text-xs text-muted-foreground font-body">•</span>
                      <span className="text-xs text-muted-foreground font-body flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {shop.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="outline" className="w-9 h-9 text-destructive hover:bg-destructive hover:text-destructive-foreground">
                      <X className="w-4 h-4" />
                    </Button>
                    <Button size="icon" variant="gold" className="w-9 h-9">
                      <Check className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}

              <Button variant="ghost" className="w-full">
                Ver todas as solicitações
              </Button>
            </CardContent>
          </Card>

          {/* Top Barbershops */}
          <Card variant="elevated">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-lg">Top Barbearias</CardTitle>
              <Button variant="ghost" size="sm" className="text-primary">
                Ver ranking
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {topBarbershops.map((shop, index) => (
                  <div
                    key={shop.id}
                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
                      index === 0 ? "bg-gradient-gold text-primary-foreground" :
                      index === 1 ? "bg-zinc-300 text-zinc-700" :
                      index === 2 ? "bg-amber-600 text-white" :
                      "bg-secondary text-muted-foreground"
                    }`}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground font-body">{shop.name}</p>
                      <p className="text-xs text-muted-foreground font-body">{shop.clients} clientes</p>
                    </div>
                    <div className="text-right">
                      <p className="font-display font-bold text-primary">{shop.revenue}</p>
                      <div className="flex items-center justify-end gap-1">
                        <Star className="w-3 h-3 fill-primary text-primary" />
                        <span className="text-xs text-muted-foreground font-body">{shop.rating}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Revenue Chart Placeholder */}
        <Card variant="elevated">
          <CardHeader>
            <CardTitle className="text-lg">Faturamento dos Últimos 6 Meses</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-end justify-between gap-4 px-4">
              {[
                { month: "Ago", value: 65 },
                { month: "Set", value: 72 },
                { month: "Out", value: 68 },
                { month: "Nov", value: 85 },
                { month: "Dez", value: 92 },
                { month: "Jan", value: 100 },
              ].map((item, index) => (
                <div key={item.month} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-gold rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${item.value * 2}px` }}
                  />
                  <span className="text-xs text-muted-foreground font-body">{item.month}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AdminDashboard;
