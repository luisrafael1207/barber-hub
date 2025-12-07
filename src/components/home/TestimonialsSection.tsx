import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos Silva",
    role: "Cliente",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Nunca mais perco tempo ligando para agendar. Com o BarberHub, encontro as melhores barbearias perto de mim e agendo em segundos!",
  },
  {
    id: 2,
    name: "Barbearia Vintage",
    role: "Parceiro",
    avatar: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=100&h=100&fit=crop",
    rating: 5,
    text: "Desde que entramos na plataforma, nossos agendamentos aumentaram 60%. A gestão ficou muito mais profissional.",
  },
  {
    id: 3,
    name: "Lucas Mendes",
    role: "Cliente",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "O sistema de avaliações me ajuda a escolher sempre os melhores profissionais. Qualidade garantida!",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            O que dizem sobre nós
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Milhares de clientes e barbearias já confiam no BarberHub
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-colors"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground font-body">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground font-body leading-relaxed">"{testimonial.text}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
