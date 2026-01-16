import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BedDouble, Bath, Home, ExternalLink, FolderKanban } from 'lucide-react';
import type { Property } from '@/lib/types';
import { getImageById } from '@/lib/image-utils';

interface PropertyCardProps {
  property: Property;
}

export function IntranetPropertyCard({ property }: PropertyCardProps) {
  const propertyImage = getImageById(property.mainImage);

  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
            {propertyImage && (
            <Image
                src={propertyImage.imageUrl}
                alt={propertyImage.description}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
                data-ai-hint={propertyImage.imageHint}
            />
            )}
        </div>
      </CardHeader>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-headline font-semibold mb-2 h-14">{property.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-grow">{property.address}</p>
        <div className="flex justify-between items-center mb-4 text-sm">
            <span className="font-bold text-primary text-lg">
                ${property.price.toLocaleString("es-MX")}
            </span>
            <div className="flex gap-3 text-muted-foreground">
                <div className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" />
                <span>{property.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1">
                <Home className="w-4 h-4" />
                <span>{property.area} m²</span>
                </div>
            </div>
        </div>
      </CardContent>
      <CardFooter className="p-3 pt-0 grid grid-cols-2 gap-2">
        <Button asChild variant="secondary">
          <Link href={`/propiedades/${property.id}`} target="_blank">
            Ver Ficha <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
        <Button asChild>
          <Link href={property.driveLink || '#'} target="_blank" rel="noopener noreferrer" className={!property.driveLink ? "pointer-events-none opacity-50" : ""}>
            Materiales <FolderKanban className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
