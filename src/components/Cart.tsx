import { X, Plus, Minus, Trash2, ShoppingBag } from 'lucide-react';
import { Product } from '../lib/supabase';

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose}></div>

      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
        <div className="flex items-center justify-between p-6 border-b bg-gradient-to-r from-red-600 to-blue-600 text-white">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6" />
            <h2 className="text-2xl font-bold">Carrinho</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">
          {items.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500 text-lg">Seu carrinho está vazio</p>
              <p className="text-gray-400 mt-2">Adicione produtos para continuar</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4 flex gap-4">
                  <img
                    src={item.image_url}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-red-600 font-bold">
                      R$ {item.price.toFixed(2).replace('.', ',')}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-1 bg-white rounded hover:bg-gray-200 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>

                      <span className="w-8 text-center font-semibold">{item.quantity}</span>

                      <button
                        onClick={() => onUpdateQuantity(item.id, Math.min(item.stock, item.quantity + 1))}
                        className="p-1 bg-white rounded hover:bg-gray-200 transition-colors"
                        disabled={item.quantity >= item.stock}
                      >
                        <Plus className="w-4 h-4" />
                      </button>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="ml-auto p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t p-6 bg-gray-50">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>R$ {total.toFixed(2).replace('.', ',')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Frete</span>
                <span className="text-green-600 font-semibold">
                  {total >= 299 ? 'GRÁTIS' : 'R$ 19,90'}
                </span>
              </div>
              <div className="flex justify-between text-xl font-black text-gray-900 pt-2 border-t">
                <span>Total</span>
                <span className="text-red-600">
                  R$ {(total >= 299 ? total : total + 19.9).toFixed(2).replace('.', ',')}
                </span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-red-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-red-700 hover:to-blue-700 transition-all duration-300 shadow-lg">
              Finalizar Compra
            </button>

            <p className="text-center text-xs text-gray-500 mt-3">
              Parcele em até 10x sem juros no cartão
            </p>
          </div>
        )}
      </div>
    </>
  );
}
