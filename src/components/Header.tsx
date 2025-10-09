import { ShoppingCart, Menu, Search } from 'lucide-react';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <img src="/logo.png" alt="World Sports" className="h-12 w-auto" />

            <nav className="hidden md:flex gap-6">
              <a href="#futebol" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Futebol
              </a>
              <a href="#basquete" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Basquete
              </a>
              <a href="#corrida" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Corrida
              </a>
              <a href="#fitness" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Fitness
              </a>
              <a href="#ofertas" className="text-gray-700 hover:text-red-600 font-medium transition-colors">
                Ofertas
              </a>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center bg-gray-100 rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="bg-transparent outline-none w-64 text-sm"
              />
              <Search className="w-5 h-5 text-gray-500" />
            </div>

            <button
              onClick={onCartClick}
              className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart className="w-6 h-6 text-gray-700" />
              {cartItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemsCount}
                </span>
              )}
            </button>

            <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Menu className="w-6 h-6 text-gray-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
