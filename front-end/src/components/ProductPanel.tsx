import React, { useState } from 'react';
import { Product, Size } from '../types';
import { Eye, ShoppingCart } from 'lucide-react';

interface ProductPanelProps {
  product: Product;
  onAddToCart: (product: Product, size: Size) => void;
  onViewDetails: (product: Product) => void;
}

export default function ProductPanel({ product, onAddToCart, onViewDetails }: ProductPanelProps) {
  const sizes: Size[] = ['P', 'M', 'G', 'GG'];
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);

  const handleSizeClick = (size: Size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      onAddToCart(product, selectedSize);
      setSelectedSize(null); // Remove a marcação do tamanho
    }
  };

  return (
    <div className="relative h-screen snap-start overflow-y-auto">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
      </div>

      <div className="relative h-full flex items-center justify-center p-4">
        <div className="max-w-2xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h2>
          <p className="text-base md:text-lg mb-8 max-w-xl mx-auto">{product.description}</p>

          <div className="flex flex-col items-center gap-4">
            <p className="text-xl md:text-2xl font-semibold">R$ {product.price.toFixed(2)}</p>
            <div className="flex flex-wrap justify-center gap-4">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => handleSizeClick(size)}
                  className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all ${
                    selectedSize === size
                      ? 'bg-white text-black'
                      : 'hover:bg-white hover:text-black border-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize}
              className="mt-4 px-6 py-3 text-white rounded-full flex items-center gap-2 border border-white/30 transition-all hover:bg-white hover:text-black hover:border-white/60"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Adicionar ao Carrinho</span>
            </button>
            <button
              onClick={() => onViewDetails(product)}
              className="mt-4 flex items-center gap-2 text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-full border border-white/30 hover:border-white/60"
            >
              <Eye className="w-5 h-5" />
              <span className="hidden md:inline">Ver Detalhes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
