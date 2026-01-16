import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const faqs = [
    {
        id: '1',
        question: '¿Cómo accedo al material de marketing de una propiedad?',
        answer: 'Vaya a la sección "Gestión de Propiedades", busque la propiedad deseada y haga clic en el botón "Materiales". Esto lo llevará a una carpeta de Google Drive con todos los recursos.'
    },
    {
        id: '2',
        question: '¿Cuál es la comisión estándar de la agencia?',
        answer: 'Nuestra estructura de comisiones se detalla en el documento de "Políticas de Compensación" disponible en la sección de "Normas y Directrices".'
    },
    {
        id: '3',
        question: '¿Cómo registro un nuevo cliente en el sistema?',
        answer: 'Actualmente, el registro de nuevos clientes se realiza a través del CRM principal. Póngase en contacto con el equipo de administración para obtener acceso y capacitación sobre el CRM.'
    },
    {
        id: '4',
        question: '¿Qué hago si tengo un conflicto con otro agente?',
        answer: 'Consulte la política de "Resolución de Conflictos" en la sección de "Normas y Directrices". El primer paso es intentar una resolución directa y, si no es posible, escalar el problema a la gerencia.'
    }
];

export default function FaqPage() {
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
                    <CardTitle className="font-headline text-3xl">Preguntas Frecuentes de Agentes</CardTitle>
                </CardHeader>
                <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq) => (
                             <AccordionItem value={faq.id} key={faq.id}>
                                <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {faq.answer}
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
