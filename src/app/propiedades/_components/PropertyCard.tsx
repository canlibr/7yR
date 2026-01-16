import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BedDouble, Bath, Home, ArrowRight } from 'lucide-react';
import type { Property } from '@/lib/types';
import { getImageById } from '@/lib/image-utils';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const propertyImage = getImageById(property.mainImage);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <Link href={`/propiedades/${property.id}`}>
          <div className="relative aspect-video">
            {propertyImage && (
              <Image
                src={propertyImage.imageUrl}
                alt={propertyImage.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                data-ai-hint={propertyImage.imageHint}
              />
            )}
             <Badge className={`absolute top-4 left-4 ${property.status === 'Vendido' ? 'bg-destructive' : 'bg-primary'}`}>{property.status}</Badge>
          </div>
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-headline font-semibold mb-2 h-14">{property.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{property.address}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-primary">
            ${property.price.toLocaleString("es-MX")}
          </span>
          <div className="flex gap-3 text-muted-foreground">
            <div className="flex items-center gap-1">
              <BedDouble className="w-5 h-5" />
              <span className="text-sm">{property.bedrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath className="w-5 h-5" />
              <span className="text-sm">{property.bathrooms}</span>
            </div>
            <div className="flex items-center gap-1">
              <Home className="w-5 h-5" />
              <span className="text-sm">{property.area} m²</span>
            </div>
          </div>
        </div>
        <Button asChild className="w-full mt-auto">
          <Link href={`/propiedades/${property.id}`}>
            Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
