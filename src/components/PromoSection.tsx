import { Timer, Percent } from 'lucide-react';

export default function PromoSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-red-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-red-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-red-600 to-red-700 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Percent className="w-10 h-10" />
              <h3 className="text-3xl font-black">SUPER OFERTA</h3>
            </div>

            <h4 className="text-5xl font-black mb-4">
              ATÉ 50% OFF
            </h4>

            <p className="text-lg mb-6 text-white/90">
              Em produtos selecionados de futebol, basquete e corrida.
              Aproveite enquanto durar o estoque!
            </p>

            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-red-700 transition-all duration-300 shadow-lg">
              Ver Ofertas
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center gap-3 mb-4">
              <Timer className="w-10 h-10" />
              <h3 className="text-3xl font-black">OFERTA RELÂMPAGO</h3>
            </div>

            <h4 className="text-5xl font-black mb-4">
              FRETE GRÁTIS
            </h4>

            <p className="text-lg mb-6 text-white/90">
              Em compras acima de R$ 299,00 para todo o Brasil.
              Válido por tempo limitado!
            </p>

            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold hover:bg-yellow-300 hover:text-blue-700 transition-all duration-300 shadow-lg">
              Aproveitar Agora
            </button>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-black mb-2">10x</p>
            <p className="text-sm text-white/80">Sem Juros</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-black mb-2">24h</p>
            <p className="text-sm text-white/80">Entrega Expressa</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-black mb-2">30 dias</p>
            <p className="text-sm text-white/80">Para Trocar</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <p className="text-4xl font-black mb-2">5%</p>
            <p className="text-sm text-white/80">Cashback PIX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
