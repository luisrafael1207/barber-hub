import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Calendar,
  Heart,
  CreditCard,
  Settings,
  LogOut,
  Scissors,
  User,
  Bell,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DashboardLayoutProps {
  children: React.ReactNode;
  type: "cliente" | "barbearia" | "admin";
}

export function DashboardLayout({ children, type }: DashboardLayoutProps) {
  const location = useLocation();

  const clienteLinks = [
    { href: "/cliente", label: "Início", icon: LayoutDashboard },
    { href: "/cliente/agendamentos", label: "Meus Agendamentos", icon: Calendar },
    { href: "/cliente/favoritos", label: "Favoritos", icon: Heart },
    { href: "/cliente/pagamentos", label: "Pagamentos", icon: CreditCard },
    { href: "/cliente/configuracoes", label: "Configurações", icon: Settings },
  ];

  const barbeariaLinks = [
    { href: "/barbearia", label: "Dashboard", icon: LayoutDashboard },
    { href: "/barbearia/agenda", label: "Agenda", icon: Calendar },
    { href: "/barbearia/servicos", label: "Serviços", icon: Scissors },
    { href: "/barbearia/financeiro", label: "Financeiro", icon: CreditCard },
    { href: "/barbearia/configuracoes", label: "Configurações", icon: Settings },
  ];

  const adminLinks = [
    { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
    { href: "/admin/barbearias", label: "Barbearias", icon: Scissors },
    { href: "/admin/usuarios", label: "Usuários", icon: User },
    { href: "/admin/financeiro", label: "Financeiro", icon: CreditCard },
    { href: "/admin/configuracoes", label: "Configurações", icon: Settings },
  ];

  const links = type === "cliente" ? clienteLinks : type === "barbearia" ? barbeariaLinks : adminLinks;

  const titles = {
    cliente: "Área do Cliente",
    barbearia: "Painel da Barbearia",
    admin: "Painel Administrativo",
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border hidden lg:flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-border">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold group-hover:scale-105 transition-transform">
              <Scissors className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-display font-bold text-foreground">
              Barber<span className="text-primary">Hub</span>
            </span>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {links.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm transition-colors",
                  isActive
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-border">
          <Button variant="ghost" className="w-full justify-start gap-3 text-muted-foreground hover:text-destructive">
            <LogOut className="w-5 h-5" />
            Sair
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className="lg:hidden">
              <div className="w-10 h-10 rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold">
                <Scissors className="w-5 h-5 text-primary-foreground" />
              </div>
            </Link>
            <h1 className="font-display text-lg font-semibold text-foreground">{titles[type]}</h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-primary-foreground font-bold">
                U
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-foreground font-body">Usuário</p>
                <p className="text-xs text-muted-foreground font-body">usuario@email.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
