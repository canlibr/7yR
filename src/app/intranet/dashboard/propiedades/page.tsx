import { properties } from '@/lib/placeholder-data';
import { IntranetPropertyCard } from './_components/IntranetPropertyCard';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default async function IntranetPropiedadesPage() {
  // In a real app, you would fetch this data from an API
  const availableProperties = properties.filter(p => p.status === 'En venta');

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
                    Propiedades Disponibles
                </h1>
                <p className="mt-2 text-lg text-muted-foreground">
                    Aquí puede ver las propiedades actualmente en el mercado y acceder a sus materiales.
                </p>
            </div>
      
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {availableProperties.map((property) => (
                <IntranetPropertyCard key={property.id} property={property} />
              ))}
            </div>
        </div>
    </div>
  );
}
