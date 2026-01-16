"use client";

import { useState, useMemo } from 'react';
import type { Property } from '@/lib/types';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { PropertyCard } from './PropertyCard';
import { X } from 'lucide-react';

const MAX_PRICE = 3000000;

export function PropertyListings({ properties }: { properties: Property[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('all');
  const [priceRange, setPriceRange] = useState([0, MAX_PRICE]);
  const [bedrooms, setBedrooms] = useState('any');
  const [bathrooms, setBathrooms] = useState('any');

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const searchMatch =
        searchQuery === '' ||
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.address.toLowerCase().includes(searchQuery.toLowerCase());
      
      const typeMatch = propertyType === 'all' || property.type === propertyType;
      
      const priceMatch = property.price >= priceRange[0] && property.price <= priceRange[1];

      const bedroomsMatch = bedrooms === 'any' || property.bedrooms >= parseInt(bedrooms);

      const bathroomsMatch = bathrooms === 'any' || property.bathrooms >= parseInt(bathrooms);

      return searchMatch && typeMatch && priceMatch && bedroomsMatch && bathroomsMatch;
    });
  }, [properties, searchQuery, propertyType, priceRange, bedrooms, bathrooms]);

  const resetFilters = () => {
    setSearchQuery('');
    setPropertyType('all');
    setPriceRange([0, MAX_PRICE]);
    setBedrooms('any');
    setBathrooms('any');
  };

  return (
    <div>
      <div className="bg-card p-6 rounded-lg shadow-sm border mb-12 sticky top-20 z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 items-center">
          <Input
            placeholder="Buscar por nombre o dirección..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="lg:col-span-2"
          />
          <Select value={propertyType} onValueChange={setPropertyType}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos los tipos</SelectItem>
              <SelectItem value="Casa">Casa</SelectItem>
              <SelectItem value="Apartamento">Apartamento</SelectItem>
              <SelectItem value="Terreno">Terreno</SelectItem>
            </SelectContent>
          </Select>
          <Select value={bedrooms} onValueChange={setBedrooms}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Habitaciones (cualquiera)</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
              <SelectItem value="4">4+</SelectItem>
            </SelectContent>
          </Select>
          <Select value={bathrooms} onValueChange={setBathrooms}>
            <SelectTrigger><SelectValue /></SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Baños (cualquiera)</SelectItem>
              <SelectItem value="1">1+</SelectItem>
              <SelectItem value="2">2+</SelectItem>
              <SelectItem value="3">3+</SelectItem>
            </SelectContent>
          </Select>
           <Button onClick={resetFilters} variant="ghost" className="flex items-center gap-2">
            <X className="w-4 h-4" />
            Limpiar
          </Button>
        </div>
        <div className="mt-4">
            <label className="block text-sm font-medium text-muted-foreground mb-2">Rango de precios</label>
            <div className="flex items-center gap-4">
                <span className='text-sm font-semibold'>${priceRange[0].toLocaleString()}</span>
                <Slider
                    min={0}
                    max={MAX_PRICE}
                    step={50000}
                    value={priceRange}
                    onValueChange={(value) => setPriceRange(value as [number, number])}
                />
                 <span className='text-sm font-semibold'>${priceRange[1].toLocaleString()}</span>
            </div>
        </div>
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-card rounded-lg border border-dashed">
          <h3 className="text-xl font-semibold">No se encontraron propiedades</h3>
          <p className="text-muted-foreground mt-2">Intente ajustar sus filtros de búsqueda.</p>
        </div>
      )}
    </div>
  );
}
