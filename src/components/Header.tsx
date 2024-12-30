import { Search, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <a href="#" className="text-lg hover:text-gray-600">Inicio</a>
                <a href="#" className="text-lg hover:text-gray-600">Categorías</a>
                <a href="#" className="text-lg hover:text-gray-600">Ofertas</a>
                <a href="#" className="text-lg hover:text-gray-600">Contacto</a>
              </nav>
            </SheetContent>
          </Sheet>
          <h1 className="text-2xl font-semibold">Tienda de Moda</h1>
        </div>
        <div className="relative w-64">
          <Input
            type="search"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 w-full"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
      </div>
    </header>
  );
};