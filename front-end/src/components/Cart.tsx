import React from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (itemId: string, size: CartItem['size'], quantity: number) => void;
  onRemoveItem: (itemId: string, size: CartItem['size']) => void;
  onCheckout: () => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem, onCheckout }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-96 bg-white shadow-lg z-50 p-6 overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <ShoppingCart className="w-6 h-6" />
          Carrinho
        </h2>
        <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
          <X className="w-6 h-6" />
        </button>
      </div>

      {items.length === 0 ? (
        <p className="text-gray-500 text-center mt-8">Seu carrinho está vazio</p>
      ) : (
        <>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Tamanho: {item.size}</p>
                    <p className="text-sm text-gray-500">{item.color}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id, item.size)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.size, Math.max(0, item.quantity - 1))}
                      className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.size, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                  <p className="font-medium">R$ {(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 space-y-4">
            <div className="flex justify-between items-center font-semibold text-lg">
              <span>Total</span>
              <span>R$ {total.toFixed(2)}</span>
            </div>
            <button
              onClick={onCheckout}
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}