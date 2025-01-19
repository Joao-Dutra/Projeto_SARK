import React, { useState, useEffect } from 'react';
import { Product, Size } from '../types';
import { ChevronLeft, ShoppingCart } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product, size: Size) => void;
  onClose: () => void;
}

export default function ProductDetails({ product, onAddToCart, onClose }: ProductDetailsProps) {
  const sizes: Size[] = ['P', 'M', 'G', 'GG'];
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
  const [animatingSize, setAnimatingSize] = useState<Size | null>(null);

  const handleSizeClick = (size: Size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setSelectedSize(null); // Reseta o tamanho selecionado
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-gray-600 hover:text-black mb-6"
        >
          <ChevronLeft className="w-5 h-5" />
          Voltar
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold mb-6">R$ {product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Escolha o Tamanho</h2>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    data-size={size}
                    onClick={() => handleSizeClick(size)}
                    disabled={animatingSize !== null}
                    className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all transform ${
                      selectedSize === size
                        ? 'bg-black text-white scale-105'
                        : 'hover:bg-black hover:text-white scale-100 border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <button
                onClick={handleAddToCart}
                disabled={!selectedSize || animatingSize !== null}
                className={`mt-4 px-6 py-3 text-black rounded-full flex items-center gap-2 border border-black/30 transition-all transform hover:bg-black hover:text-white hover:border-white/60`}
              >
                <ShoppingCart className="w-5 h-5" />
                <span>Adicionar ao Carrinho</span>
              </button>
            </div>

            <div className="pt-6 border-t">
              <h2 className="text-lg font-semibold mb-4">Guia de Tamanhos</h2>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 text-left">Tamanho</th>
                    <th className="py-2 text-left">Ombro</th>
                    <th className="py-2 text-left">Tórax</th>
                    <th className="py-2 text-left">Comprimento</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">P</td>
                    <td className="py-2">42 cm</td>
                    <td className="py-2">100 cm</td>
                    <td className="py-2">68 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">M</td>
                    <td className="py-2">44 cm</td>
                    <td className="py-2">104 cm</td>
                    <td className="py-2">70 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">G</td>
                    <td className="py-2">46 cm</td>
                    <td className="py-2">108 cm</td>
                    <td className="py-2">72 cm</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">GG</td>
                    <td className="py-2">48 cm</td>
                    <td className="py-2">112 cm</td>
                    <td className="py-2">74 cm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
