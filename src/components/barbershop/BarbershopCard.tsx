import { Star, MapPin, Clock, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface BarbershopCardProps {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  distance: string;
  address: string;
  isOpen: boolean;
  priceRange: string;
  services: string[];
  featured?: boolean;
}

export function BarbershopCard({
  id,
  name,
  image,
  rating,
  reviews,
  distance,
  address,
  isOpen,
  priceRange,
  services,
  featured = false,
}: BarbershopCardProps) {
  return (
    <Card
      variant={featured ? "gold" : "elevated"}
      className={cn(
        "overflow-hidden group hover:-translate-y-1 hover:shadow-lg cursor-pointer",
        featured && "ring-1 ring-primary/50"
      )}
    >
      <Link to={`/barbearia/${id}`}>
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {featured && (
              <Badge variant="gold">Destaque</Badge>
            )}
            <Badge variant={isOpen ? "success" : "secondary"}>
              {isOpen ? "Aberto" : "Fechado"}
            </Badge>
          </div>

          {/* Favorite */}
          <button className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/50 backdrop-blur-sm flex items-center justify-center text-foreground hover:text-primary hover:bg-background/80 transition-colors">
            <Heart className="w-5 h-5" />
          </button>

          {/* Price & Distance */}
          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span className="text-sm font-semibold text-foreground font-body">{priceRange}</span>
            <span className="flex items-center gap-1 text-sm text-foreground/80 font-body">
              <MapPin className="w-4 h-4" />
              {distance}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-display font-semibold text-lg text-foreground line-clamp-1">
              {name}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="font-semibold text-foreground font-body">{rating.toFixed(1)}</span>
              <span className="text-muted-foreground text-sm font-body">({reviews})</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground font-body line-clamp-1 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5 shrink-0" />
            {address}
          </p>

          <div className="flex flex-wrap gap-1.5">
            {services.slice(0, 3).map((service) => (
              <Badge key={service} variant="outline" className="text-xs">
                {service}
              </Badge>
            ))}
            {services.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{services.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </Link>
    </Card>
  );
}
