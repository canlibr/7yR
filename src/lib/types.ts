export type Property = {
  id: string;
  title: string;
  address: string;
  price: number;
  description: string;
  bedrooms: number;
  bathrooms: number;
  area: number; // in m^2
  type: "Casa" | "Apartamento" | "Terreno";
  images: string[]; // array of image IDs from placeholder-images.json
  mainImage: string; // image ID
  features: string[];
  status: "En venta" | "Alquilado" | "Vendido";
};

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageId: string;
};

export type Testimonial = {
  id: string;
  name: string;
  comment: string;
  rating: number;
};
