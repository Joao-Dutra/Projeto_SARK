import React from 'react';
import { Product, Size } from '../types';
import { ChevronLeft } from 'lucide-react';

interface ProductDetailsProps {
  product: Product;
  onAddToCart: (product: Product, size: Size) => void;
  onClose: () => void;
}

export default function ProductDetails({ product, onAddToCart, onClose }: ProductDetailsProps) {
  const sizes: Size[] = ['P', 'M', 'G', 'GG'];
  const additionalImages = [
    `https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=400`,
    `https://images.unsplash.com/photo-1618354691438-25bc04584c23?auto=format&fit=crop&q=80&w=400`,
    `https://images.unsplash.com/photo-1618354691229-88d47f285158?auto=format&fit=crop&q=80&w=400`,
  ];

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
            <div className="grid grid-cols-3 gap-4">
              {additionalImages.map((img, index) => (
                <div key={index} className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={img}
                    alt={`${product.name} - Imagem ${index + 2}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              <p className="text-2xl font-semibold mb-6">R$ {product.price.toFixed(2)}</p>
              <p className="text-gray-600 mb-6">{product.description}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Detalhes do Produto</h2>
              <ul className="space-y-2 text-gray-600">
                <li>• Cor: {product.color}</li>
                <li>• Logo: {product.logoColor}</li>
                <li>• Material: 100% Algodão</li>
                <li>• Lavagem: Máquina, água fria</li>
                <li>• Fabricação: Nacional</li>
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold mb-4">Escolha o Tamanho</h2>
              <div className="flex gap-4">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => onAddToCart(product, size)}
                    className="w-12 h-12 border-2 border-black rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors"
                  >
                    {size}
                  </button>
                ))}
              </div>
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