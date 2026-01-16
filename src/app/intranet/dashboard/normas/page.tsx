import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const normas = [
    {
        id: '1',
        title: 'Código de Vestimenta',
        content: 'Se espera que todos los agentes mantengan una apariencia profesional al interactuar con clientes. Traje de negocios o vestimenta casual de negocios es apropiada.'
    },
    {
        id: '2',
        title: 'Comunicación con Clientes',
        content: 'Todas las comunicaciones deben ser claras, honestas y oportunas. Responder a las consultas de los clientes dentro de las 24 horas es obligatorio.'
    },
    {
        id: '3',
        title: 'Manejo de Listados',
        content: 'Toda la información del listado debe ser precisa y verificada. Las fotos deben ser de alta calidad y representar fielmente la propiedad.'
    },
    {
        id: '4',
        title: 'Confidencialidad',
        content: 'La información del cliente y los detalles de la transacción son estrictamente confidenciales y no deben compartirse fuera de la organización.'
    }
];

export default function NormasPage() {
  return (
    <div className="bg-secondary min-h-[calc(100vh-8rem)]">
        <div className="container py-12">
            <Button asChild variant="ghost" className="mb-8">
                <Link href="/intranet/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Panel
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-3xl">Normas y Directrices</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {normas.map((norma) => (
                             <AccordionItem value={norma.id} key={norma.id}>
                                <AccordionTrigger className="text-lg">{norma.title}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {norma.content}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
