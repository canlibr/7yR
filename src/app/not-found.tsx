import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-8rem)] text-center px-4">
      <h1 className="text-9xl font-bold text-primary font-headline tracking-tighter">404</h1>
      <h2 className="text-3xl font-semibold mt-4">Página no encontrada</h2>
      <p className="mt-2 text-muted-foreground max-w-md">
        Lo sentimos, la página que busca no existe o ha sido movida.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">
          <Home className="mr-2 h-4 w-4" />
          Volver a Inicio
        </Link>
      </Button>
    </div>
  )
}
