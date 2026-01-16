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
                  Sobre Inmobiliaria 7yR
                </h2>
                <p className="mt-4 text-muted-foreground">
                  En Inmobiliaria 7yR, somos más que una agencia inmobiliaria; somos sus socios en la búsqueda de su próximo hogar. Con años de experiencia y un profundo conocimiento del mercado, nuestro equipo está dedicado a ofrecer un servicio excepcional y personalizado. Creemos en construir relaciones duraderas basadas en la confianza y la transparencia.
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
                  alt="Oficina de Inmobiliaria 7yR"
                  fill
                  className="object-cover"
                  data-ai-hint="office interior"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sell-property" className="py-12 md:py-24 bg-primary/5">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-headline font-semibold">
              ¿Quiere Vender su Propiedad?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Confíe en nuestros expertos para obtener el mejor valor por su inmueble. Ofrecemos un servicio personalizado y eficaz para propietarios que buscan vender. ¡Contáctenos hoy y dé el primer paso!
            </p>
            <Button asChild className="mt-8" size="lg">
              <Link href="https://wa.me/34123456789?text=Hola%2C%20me%20gustar%C3%ADa%20recibir%20informaci%C3%B3n%20sobre%20c%C3%B3mo%20vender%20mi%20propiedad%20con%20Inmobiliaria%207yR." target="_blank" rel="noopener noreferrer">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-5 w-5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contactar por WhatsApp
              </Link>
            </Button>
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
