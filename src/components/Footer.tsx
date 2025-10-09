import { Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <img src="/logo.png" alt="World Sports" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-400 text-sm">
              Os melhores produtos esportivos com qualidade e preço justo.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Categorias</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Futebol</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Basquete</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Corrida</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Fitness</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Acessórios</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Institucional</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Trocas e Devoluções</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Atendimento</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-red-500 transition-colors">Central de Ajuda</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Meus Pedidos</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Rastreamento</a></li>
              <li className="pt-2">
                <p className="font-semibold text-white">SAC: 0800 123 4567</p>
                <p className="text-xs">Segunda a Sábado, 8h às 20h</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 World Sports. Todos os direitos reservados.</p>
          <p className="mt-2">CNPJ: 12.345.678/0001-90</p>
        </div>
      </div>
    </footer>
  );
}
