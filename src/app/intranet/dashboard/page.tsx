import { DescriptionGenerator } from './_components/DescriptionGenerator';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bot } from 'lucide-react';

export default function DashboardPage() {
  return (
    <div className="bg-secondary min-h-[calc(100vh-8rem)]">
        <div className="container py-12">
            <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-bold font-headline">
                Panel de Agente
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                Bienvenido. Aquí encontrará herramientas para facilitar su trabajo.
                </p>
            </div>
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Bot className="w-8 h-8 text-primary" />
                    <div>
                        <CardTitle className="font-headline text-2xl">
                            Generador de Descripciones con IA
                        </CardTitle>
                        <p className="text-muted-foreground">
                            Cree descripciones de propiedades atractivas y únicas en segundos.
                        </p>
                    </div>
                </CardHeader>
                <CardContent>
                    <DescriptionGenerator />
                </CardContent>
            </Card>
        </div>
    </div>
  );
}
