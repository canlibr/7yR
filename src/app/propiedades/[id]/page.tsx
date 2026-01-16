import Image from "next/image";
import { notFound } from "next/navigation";
import { getPropertyById } from "@/lib/placeholder-data";
import { getImagesByIds } from "@/lib/image-utils";
import { BedDouble, Bath, Home, CheckCircle, Video } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

interface PropertyPageProps {
  params: {
    id: string;
  };
}

export default function PropertyPage({ params }: PropertyPageProps) {
  const property = getPropertyById(params.id);

  if (!property) {
    notFound();
  }

  const propertyImages = getImagesByIds(property.images);

  return (
    <div className="container py-12">
      <div className="mb-8">
        <h1 className="text-4xl font-bold font-headline">{property.title}</h1>
        <p className="text-lg text-muted-foreground mt-2">{property.address}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <Carousel className="w-full rounded-lg overflow-hidden shadow-lg">
            <CarouselContent>
              {propertyImages.map((image, index) => (
                <CarouselItem key={index}>
                  <div className="aspect-video relative">
                    <Image
                      src={image.imageUrl}
                      alt={`${property.title} - image ${index + 1}`}
                      fill
                      className="object-cover"
                      data-ai-hint={image.imageHint}
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Descripción</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{property.description}</p>
            </CardContent>
          </Card>

          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="font-headline text-2xl">Características</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-muted-foreground">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <Badge>{property.type}</Badge>
                        <p className="text-3xl font-bold text-primary mt-2">${property.price.toLocaleString("es-MX")}</p>
                    </div>
                    <Badge variant={property.status === 'En venta' ? 'default' : 'secondary'} className={`${property.status === 'Vendido' ? 'bg-destructive text-destructive-foreground' : 'bg-primary'}`}>
                        {property.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent>
              <div className="flex justify-around text-center border-t border-b py-4 my-4">
                <div className="flex flex-col items-center gap-1">
                  <BedDouble className="w-6 h-6 text-muted-foreground" />
                  <span className="font-semibold">{property.bedrooms}</span>
                  <span className="text-xs text-muted-foreground">Hab.</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Bath className="w-6 h-6 text-muted-foreground" />
                  <span className="font-semibold">{property.bathrooms}</span>
                  <span className="text-xs text-muted-foreground">Baños</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <Home className="w-6 h-6 text-muted-foreground" />
                  <span className="font-semibold">{property.area} m²</span>
                  <span className="text-xs text-muted-foreground">Área</span>
                </div>
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground mb-4">
                <Video className="mr-2 h-4 w-4"/>
                Tour Virtual
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
