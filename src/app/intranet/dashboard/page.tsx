import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ShieldCheck, BookOpen, Home, HelpCircle, Bot } from 'lucide-react';

const tools = [
  {
    title: 'Normas y Directrices',
    description: 'Políticas y procedimientos de la empresa.',
    href: '/intranet/dashboard/normas',
    icon: <ShieldCheck className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Capacitaciones',
    description: 'Material de formación y desarrollo profesional.',
    href: '/intranet/dashboard/capacitaciones',
    icon: <BookOpen className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Gestión de Propiedades',
    description: 'Ver propiedades disponibles y acceder a materiales.',
    href: '/intranet/dashboard/propiedades',
    icon: <Home className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Preguntas Frecuentes',
    description: 'Respuestas a las dudas más comunes de los agentes.',
    href: '/intranet/dashboard/faq',
    icon: <HelpCircle className="w-8 h-8 text-primary" />,
  },
  {
    title: 'Generador de Descripciones',
    description: 'Cree descripciones de propiedades con IA.',
    href: '/intranet/dashboard/generador',
    icon: <Bot className="w-8 h-8 text-primary" />,
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <Link href={tool.href} key={tool.title} className="block hover:no-underline">
              <Card className="h-full hover:shadow-lg hover:-translate-y-1 transition-transform duration-300">
                <CardHeader className="flex flex-row items-start gap-4">
                  {tool.icon}
                  <div>
                    <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
                    <CardDescription className="mt-1">{tool.description}</CardDescription>
                  </div>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
