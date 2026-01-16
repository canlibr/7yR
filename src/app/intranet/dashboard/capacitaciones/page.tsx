import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const capacitaciones = [
    {
        title: "Técnicas de Negociación Avanzadas",
        description: "Aprende a cerrar tratos más favorables para tus clientes.",
        link: "#"
    },
    {
        title: "Marketing Digital para Agentes Inmobiliarios",
        description: "Domina las redes sociales y la publicidad online para captar más clientes.",
        link: "#"
    },
    {
        title: "Fotografía Inmobiliaria con tu Smartphone",
        description: "Consejos y trucos para tomar fotos impresionantes que vendan.",
        link: "#"
    },
    {
        title: "Aspectos Legales de la Compraventa",
        description: "Un repaso completo a la documentación y procesos legales.",
        link: "#"
    }
];

export default function CapacitacionesPage() {
  return (
    <div className="bg-secondary min-h-[calc(100vh-8rem)]">
        <div className="container py-12">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/intranet/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Panel
                </Link>
            </Button>
            <div className="text-left mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">
                    Capacitaciones
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Mejore sus habilidades y manténgase actualizado con nuestros cursos.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {capacitaciones.map((curso, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <CardTitle className="font-headline text-xl">{curso.title}</CardTitle>
                            <CardDescription>{curso.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button asChild>
                                <Link href={curso.link}>
                                    <Youtube className="mr-2 h-4 w-4" />
                                    Ver Video
                                </Link>
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    </div>
  );
}
