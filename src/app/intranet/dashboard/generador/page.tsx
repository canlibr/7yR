import { DescriptionGenerator } from './_components/DescriptionGenerator';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function GeneradorPage() {
  return (
    <div className="bg-secondary min-h-[calc(100vh-8rem)]">
        <div className="container py-12">
            <Button asChild variant="ghost" className="mb-4">
                <Link href="/intranet/dashboard">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Volver al Panel
                </Link>
            </Button>
            <Card>
                <CardHeader className="flex flex-row items-center gap-4">
                    <Bot className="w-8 h-8 text-primary" />
                    <div>
                        <CardTitle className="font-headline text-2xl">
                            Generador de Descripciones con IA
                        </CardTitle>
                        <CardDescription>
                            Cree descripciones de propiedades atractivas y únicas en segundos.
                        </CardDescription>
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
