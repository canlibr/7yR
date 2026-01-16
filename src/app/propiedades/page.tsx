import { properties } from '@/lib/placeholder-data';
import { PropertyListings } from './_components/PropertyListings';

export default async function PropiedadesPage() {

  // In a real app, you would fetch this data from an API
  const allProperties = properties;

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold font-headline">
          Nuestras Propiedades
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore nuestro catálogo de casas, apartamentos y terrenos. Use los filtros para encontrar exactamente lo que busca.
        </p>
      </div>
      
      <PropertyListings properties={allProperties} />
    </div>
  );
}
