import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-red-500 to-blue-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>

      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <div className="inline-block bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
            <span className="text-sm font-semibold">🔥 Lançamentos da Semana</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Sua Paixão pelo Esporte
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-white">
              Começa Aqui
            </span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
            Equipamentos de alta performance para atletas que buscam excelência.
            Ofertas imperdíveis em produtos das melhores marcas!
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-white text-red-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-300 hover:text-red-700 transition-all duration-300 shadow-2xl hover:shadow-yellow-300/50 flex items-center justify-center gap-2">
              Ver Ofertas
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-2xl border-2 border-white/20">
              Lançamentos
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
              <span className="font-semibold">Frete Grátis acima de R$ 299</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-yellow-300 rounded-full animate-pulse"></div>
              <span className="font-semibold">Parcele em até 10x sem juros</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
}
