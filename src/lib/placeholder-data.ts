import type { Property, TeamMember, Testimonial } from "@/lib/types";

export const properties: Property[] = [
  {
    id: "1",
    title: "Villa Moderna con Piscina",
    address: "123 Calle Sol, Marbella, España",
    price: 1250000,
    description:
      "Una villa de lujo contemporánea con vistas panorámicas al mar. Cuenta con una piscina infinita, amplias terrazas y un diseño de planta abierta que combina a la perfección los espacios interiores y exteriores.",
    bedrooms: 5,
    bathrooms: 4,
    area: 450,
    type: "Casa",
    images: ["prop1-main", "prop1-1", "prop1-2", "prop1-3"],
    mainImage: "prop1-main",
    features: [
      "Piscina infinita",
      "Vistas al mar",
      "Garaje para 3 coches",
      "Cine en casa",
      "Cocina de chef",
    ],
    status: "En venta",
  },
  {
    id: "2",
    title: "Acogedora Casa Familiar",
    address: "456 Avenida Roble, Madrid, España",
    price: 650000,
    description:
      "Encantadora casa familiar en un barrio tranquilo y arbolado. Ideal para familias, con un gran jardín trasero, una cocina moderna y cerca de excelentes colegios y parques.",
    bedrooms: 4,
    bathrooms: 3,
    area: 280,
    type: "Casa",
    images: ["prop2-main"],
    mainImage: "prop2-main",
    features: ["Gran jardín", "Cocina reformada", "Cerca de colegios", "Barrio seguro"],
    status: "En venta",
  },
  {
    id: "3",
    title: "Apartamento en el Centro",
    address: "789 Plaza Mayor, Barcelona, España",
    price: 450000,
    description:
      "Moderno apartamento situado en el corazón de la ciudad. A pocos pasos de tiendas, restaurantes y transporte público. Ofrece impresionantes vistas de la ciudad desde su balcón.",
    bedrooms: 2,
    bathrooms: 2,
    area: 120,
    type: "Apartamento",
    images: ["prop3-main"],
    mainImage: "prop3-main",
    features: ["Ubicación céntrica", "Vistas a la ciudad", "Balcón", "Edificio con conserje"],
    status: "Alquilado",
  },
  {
    id: "4",
    title: "Terreno con Potencial",
    address: "101 Camino Rural, Valencia, España",
    price: 200000,
    description:
      "Amplio terreno con potencial para construir la casa de sus sueños. Ubicado en una zona tranquila y en desarrollo, con fácil acceso a los servicios principales.",
    bedrooms: 0,
    bathrooms: 0,
    area: 1000,
    type: "Terreno",
    images: ["prop4-main"],
    mainImage: "prop4-main",
    features: ["Amplia parcela", "Zona en desarrollo", "Conexiones de servicios públicos cercanas"],
    status: "En venta",
  },
  {
    id: "5",
    title: "Penthouse de Lujo",
    address: "212 Avenida del Puerto, Ibiza, España",
    price: 2500000,
    description:
      "Exclusivo penthouse con una terraza de 360 grados y vistas inmejorables al mar y la ciudad. Acabados de lujo, jacuzzi privado y acceso directo con ascensor.",
    bedrooms: 3,
    bathrooms: 3,
    area: 350,
    type: "Apartamento",
    images: ["prop5-main"],
    mainImage: "prop5-main",
    features: ["Terraza 360", "Jacuzzi privado", "Vistas al mar", "Acabados de lujo"],
    status: "Vendido",
  },
  {
    id: "6",
    title: "Casa de Campo con Encanto",
    address: "333 Vereda Verde, Sevilla, España",
    price: 780000,
    description:
      "Preciosa casa de campo rodeada de olivos y naturaleza. Un refugio perfecto de la ciudad con una gran piscina, un porche espacioso y un estilo rústico auténtico.",
    bedrooms: 4,
    bathrooms: 2,
    area: 300,
    type: "Casa",
    images: ["prop6-main"],
    mainImage: "prop6-main",
    features: ["Estilo rústico", "Piscina grande", "Rodeada de naturaleza", "Privacidad total"],
    status: "En venta",
  },
];

export const featuredProperties = properties.filter(p => p.status === "En venta").slice(0, 3);

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Elena García",
    role: "Directora General",
    bio: "Con más de 20 años de experiencia, Elena lidera CasaLink con pasión y una visión clara para el futuro del sector inmobiliario.",
    imageId: "team1",
  },
  {
    id: "2",
    name: "Carlos Rodríguez",
    role: "Jefe de Ventas",
    bio: "Carlos es un experto en negociación y se asegura de que cada cliente obtenga el mejor trato posible. Su energía es contagiosa.",
    imageId: "team2",
  },
  {
    id: "3",
    name: "Laura Martínez",
    role: "Especialista en Propiedades de Lujo",
    bio: "Laura tiene un ojo inigualable para el lujo y la calidad. Conecta a los clientes más exigentes con las propiedades de sus sueños.",
    imageId: "team3",
  },
  {
    id: "4",
    name: "Javier Pérez",
    role: "Agente Inmobiliario",
    bio: "Javier es el miembro más nuevo del equipo, aportando una perspectiva fresca y un compromiso inquebrantable con el servicio al cliente.",
    imageId: "team4",
  },
];

export const testimonials: Testimonial[] = [
    {
        id: "1",
        name: "Familia López",
        comment: "El equipo de CasaLink nos encontró el hogar perfecto. El proceso fue transparente y profesional. ¡Totalmente recomendados!",
        rating: 5,
    },
    {
        id: "2",
        name: "Ana Morales",
        comment: "Vendí mi apartamento en tiempo récord y a un precio excelente. Gracias a Carlos y su equipo por su increíble trabajo.",
        rating: 5,
    },
    {
        id: "3",
        name: "David Schmidt",
        comment: "Como inversor extranjero, necesitaba un equipo de confianza. CasaLink superó mis expectativas en todos los sentidos.",
        rating: 4,
    }
]

export const getPropertyById = (id: string): Property | undefined => {
  return properties.find((p) => p.id === id);
};
