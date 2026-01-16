import Link from "next/link";
import { Building, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-secondary">
      <div className="container py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-start">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Building className="h-6 w-6 text-primary" />
              <span className="font-bold text-lg font-headline">CasaLink</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Conectando hogares y corazones.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3 font-headline">Navegación</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-muted-foreground hover:text-primary">Inicio</Link></li>
              <li><Link href="/propiedades" className="text-sm text-muted-foreground hover:text-primary">Propiedades</Link></li>
              <li><Link href="/nosotros" className="text-sm text-muted-foreground hover:text-primary">Nosotros</Link></li>
              <li><Link href="/intranet" className="text-sm text-muted-foreground hover:text-primary">Intranet</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 font-headline">Contacto</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>info@casalink.com</li>
              <li>+34 123 456 789</li>
              <li>Calle Ficticia 123, Madrid</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3 font-headline">Síganos</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
              <Link href="#" className="text-muted-foreground hover:text-primary"><Instagram className="h-5 w-5" /></Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} CasaLink. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
