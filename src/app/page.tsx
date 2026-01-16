import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BedDouble,
  Bath,
  Home as HomeIcon,
  Star,
  Search,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { featuredProperties, testimonials } from "@/lib/placeholder-data";
import {
  getImageById,
} from "@/lib/image-utils";

export default function Home() {
  const heroImage = getImageById("hero");

  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10" />
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="relative z-20 container px-4 md:px-6 flex flex-col items-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tight">
              Encuentre la casa de sus sueños
            </h1>
            <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-200">
              Conectando hogares y corazones desde 2005. Su portal inmobiliario de confianza.
            </p>
            <Card className="mt-8 w-full max-w-4xl p-4 bg-white/10 backdrop-blur-sm border-gray-200/20">
              <form className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
                <div className="md:col-span-2">
                  <Input
                    placeholder="Buscar por ubicación, ciudad..."
                    className="bg-white/90 text-foreground"
                  />
                </div>
                <div>
                  <Select>
                    <SelectTrigger className="bg-white/90 text-foreground">
                      <SelectValue placeholder="Tipo de propiedad" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="casa">Casa</SelectItem>
                      <SelectItem value="apartamento">Apartamento</SelectItem>
                      <SelectItem value="terreno">Terreno</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button asChild className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  <Link href="/propiedades">
                    <Search className="mr-2 h-4 w-4" /> Buscar
                  </Link>
                </Button>
              </form>
            </Card>
          </div>
        </section>

        <section id="featured-properties" className="py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Propiedades Destacadas
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Explore nuestra selección de propiedades exclusivas, cuidadosamente elegidas para usted.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => {
                const propertyImage = getImageById(property.mainImage);
                return (
                  <Card key={property.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <Link href={`/propiedades/${property.id}`}>
                        <div className="relative aspect-video">
                          {propertyImage &&
                            <Image
                              src={propertyImage.imageUrl}
                              alt={propertyImage.description}
                              fill
                              className="object-cover"
                              data-ai-hint={propertyImage.imageHint}
                            />
                          }
                          <Badge className="absolute top-4 left-4" variant="default">{property.status}</Badge>
                        </div>
                      </Link>
                    </CardHeader>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-headline font-semibold mb-2">{property.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">{property.address}</p>
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-2xl font-bold text-primary">
                          ${property.price.toLocaleString("es-MX")}
                        </span>
                        <div className="flex gap-4 text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <BedDouble className="w-5 h-5" />
                            <span>{property.bedrooms}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Bath className="w-5 h-5" />
                            <span>{property.bathrooms}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <HomeIcon className="w-5 h-5" />
                            <span>{property.area} m²</span>
                          </div>
                        </div>
                      </div>
                      <Button asChild className="w-full">
                        <Link href={`/propiedades/${property.id}`}>
                          Ver Detalles <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="about-us" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                  Sobre CasaLink
                </h2>
                <p className="mt-4 text-muted-foreground">
                  En CasaLink, somos más que una agencia inmobiliaria; somos sus socios en la búsqueda de su próximo hogar. Con años de experiencia y un profundo conocimiento del mercado, nuestro equipo está dedicado a ofrecer un servicio excepcional y personalizado. Creemos en construir relaciones duraderas basadas en la confianza y la transparencia.
                </p>
                <Button asChild className="mt-6" variant="outline">
                  <Link href="/nosotros">
                    Conozca a nuestro equipo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://picsum.photos/seed/office/800/600"
                  alt="Oficina de CasaLink"
                  fill
                  className="object-cover"
                  data-ai-hint="office interior"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section id="testimonials" className="py-12 md:py-24 bg-secondary">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-headline font-semibold">
                Lo que dicen nuestros clientes
              </h2>
              <p className="mt-2 text-muted-foreground max-w-xl mx-auto">
                Nuestro compromiso con la excelencia se refleja en la satisfacción de quienes confían en nosotros.
              </p>
            </div>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="bg-card">
                  <CardContent className="p-6">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4">"{testimonial.comment}"</p>
                    <div className="flex items-center gap-4">
                      <Avatar>
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-semibold">{testimonial.name}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
