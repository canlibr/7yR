import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { teamMembers } from "@/lib/placeholder-data";
import { getImageById } from "@/lib/image-utils";

export default function NosotrosPage() {
  return (
    <>
      <section className="bg-primary/10 py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold font-headline">
            Conozca a Nuestro Equipo
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Somos un equipo de profesionales apasionados y dedicados, comprometidos a hacer realidad sus sueños inmobiliarios.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => {
              const memberImage = getImageById(member.imageId);
              return (
              <Card key={member.id} className="text-center transition-transform transform hover:-translate-y-2 hover:shadow-xl duration-300">
                <CardHeader className="items-center">
                  <Avatar className="w-32 h-32 border-4 border-primary/20">
                    {memberImage ? (
                      <AvatarImage src={memberImage.imageUrl} alt={member.name} data-ai-hint={memberImage.imageHint} />
                    ) : null}
                    <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-xl font-headline">{member.name}</CardTitle>
                  <p className="text-primary font-semibold mt-1">{member.role}</p>
                  <p className="text-muted-foreground mt-4 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            )})}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 md:py-24">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold font-headline">Nuestra Misión</h2>
              <p className="mt-4 text-muted-foreground">
                Nuestra misión en Inmobiliaria 7yR es simple: ofrecer una experiencia inmobiliaria excepcional, transparente y personalizada. Nos esforzamos por superar las expectativas de nuestros clientes en cada paso del camino, construyendo relaciones duraderas basadas en la confianza, la integridad y resultados extraordinarios. Su satisfacción es la medida de nuestro éxito.
              </p>
            </div>
            <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://picsum.photos/seed/mission/800/600"
                alt="Manos estrechándose en un trato"
                fill
                className="object-cover"
                data-ai-hint="handshake deal"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
