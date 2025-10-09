import { Dumbbell, Footprints, Trophy, Zap } from 'lucide-react';

const categories = [
  {
    name: 'Futebol',
    icon: Trophy,
    gradient: 'from-red-500 to-red-600',
    image: 'https://images.pexels.com/photos/274506/pexels-photo-274506.jpeg'
  },
  {
    name: 'Corrida',
    icon: Footprints,
    gradient: 'from-blue-500 to-blue-600',
    image: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg'
  },
  {
    name: 'Fitness',
    icon: Dumbbell,
    gradient: 'from-red-600 to-blue-600',
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg'
  },
  {
    name: 'Performance',
    icon: Zap,
    gradient: 'from-yellow-500 to-red-600',
    image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg'
  }
];

export default function Categories() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-black text-gray-900 mb-4">
            Explore por Categoria
          </h2>
          <p className="text-lg text-gray-600">
            Encontre os melhores produtos para o seu esporte favorito
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.name}
              className="group relative overflow-hidden rounded-2xl h-64 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <img
                src={category.image}
                alt={category.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-75 group-hover:opacity-90 transition-opacity`}></div>

              <div className="relative h-full flex flex-col items-center justify-center text-white p-6">
                <category.icon className="w-16 h-16 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-black">{category.name}</h3>
                <p className="text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver produtos
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
