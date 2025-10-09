import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../lib/supabase';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
      <div className="relative overflow-hidden bg-gray-100 aspect-square">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {product.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-red-600 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            DESTAQUE
          </div>
        )}

        {product.stock < 10 && product.stock > 0 && (
          <div className="absolute top-3 right-3 bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            Últimas unidades!
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      <div className="p-5">
        <div className="flex items-center gap-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
          <span className="text-sm text-gray-500 ml-1">(4.8)</span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-3xl font-black text-red-600">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </p>
            <p className="text-xs text-gray-500">ou 10x de R$ {(product.price / 10).toFixed(2).replace('.', ',')}</p>
          </div>

          <button
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
            className="bg-gradient-to-r from-red-600 to-red-500 text-white p-3 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg hover:shadow-red-500/50 disabled:opacity-50 disabled:cursor-not-allowed group/btn"
          >
            <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
          </button>
        </div>

        {product.stock === 0 && (
          <p className="text-red-600 font-semibold text-sm mt-2">Produto Esgotado</p>
        )}
      </div>
    </div>
  );
}
