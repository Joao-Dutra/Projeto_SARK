import React from 'react';
import { X, CreditCard, Truck, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CheckoutProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
}

export default function Checkout({ isOpen, onClose, items }: CheckoutProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 15.90;
  const finalTotal = total + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold flex items-center gap-2">
              <CreditCard className="w-6 h-6" />
              Finalizar Compra
            </h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Formulário de Pagamento */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Informações Pessoais</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Endereço de Entrega</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="CEP"
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Endereço"
                    className="w-full p-3 border rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Número"
                      className="p-3 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="Complemento"
                      className="p-3 border rounded-lg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Cidade"
                    className="w-full p-3 border rounded-lg"
                  />
                  <input
                    type="text"
                    placeholder="Estado"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Informações do Cartão</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Número do Cartão"
                    className="w-full p-3 border rounded-lg"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="p-3 border rounded-lg"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="p-3 border rounded-lg"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Nome no Cartão"
                    className="w-full p-3 border rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Resumo do Pedido */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Resumo do Pedido</h3>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between">
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-gray-500">
                        Tamanho: {item.size} | Qtd: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-1">
                    <Truck className="w-4 h-4" />
                    Frete
                  </span>
                  <span>R$ {shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg pt-2 border-t">
                  <span>Total</span>
                  <span>R$ {finalTotal.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => alert('Pedido finalizado com sucesso!')}
                className="w-full mt-6 bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="w-4 h-4" />
                Confirmar Pagamento
              </button>

              <p className="text-sm text-gray-500 text-center mt-4">
                Pagamento seguro e criptografado
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}