import { Scissors, Clock, CreditCard, Star, MapPin, Shield, TrendingUp, Users, Zap } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-gold transition-all duration-300">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="font-display font-semibold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm font-body leading-relaxed">{description}</p>
    </div>
  );
}

export function FeaturesSection() {
  const features = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Encontre Barbearias Próximas",
      description: "Descubra as melhores barbearias perto de você com geolocalização inteligente e filtros avançados.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Agendamento Fácil",
      description: "Agende seu horário em segundos. Veja disponibilidade em tempo real e receba confirmação instantânea.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Pagamento Seguro",
      description: "Pague com cartão, Pix ou carteira digital. Transações protegidas e sem complicação.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Avaliações Reais",
      description: "Confira avaliações e fotos de outros clientes antes de escolher sua barbearia.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Barbearias Verificadas",
      description: "Todas as barbearias passam por verificação rigorosa para garantir qualidade e segurança.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Notificações em Tempo Real",
      description: "Receba lembretes do seu agendamento e acompanhe o status do atendimento.",
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Por que escolher o{" "}
            <span className="text-gradient-gold">BarberHub</span>?
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            A plataforma mais completa para conectar você às melhores barbearias da sua região.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function ForBarbershopsSection() {
  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Aumente seus Clientes",
      description: "Seja encontrado por milhares de clientes em busca do melhor corte na sua região.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Gestão Completa",
      description: "Dashboard profissional para gerenciar agendamentos, clientes, serviços e finanças.",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Receba na Hora",
      description: "Pagamentos processados automaticamente com split de valores e repasse rápido.",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body mb-4">
              Para Barbearias
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Faça sua barbearia crescer com o{" "}
              <span className="text-gradient-gold">BarberHub</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body mb-8 leading-relaxed">
              Cadastre sua barbearia e tenha acesso a uma plataforma completa de gestão. 
              Aumente sua visibilidade, gerencie agendamentos e receba pagamentos de forma simples e segura.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    {benefit.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-muted-foreground text-sm font-body">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-gold p-1 shadow-gold">
              <div className="w-full h-full rounded-3xl bg-card flex items-center justify-center">
                <div className="text-center p-8">
                  <Scissors className="w-20 h-20 text-primary mx-auto mb-6" />
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">Comece Agora</h3>
                  <p className="text-muted-foreground font-body mb-6">
                    Planos a partir de R$ 49/mês
                  </p>
                  <div className="flex flex-wrap justify-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-body">7 dias grátis</span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-muted-foreground text-sm font-body">Sem fidelidade</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-24 h-24 rounded-2xl bg-gradient-gold animate-float shadow-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
