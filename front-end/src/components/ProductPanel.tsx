import React, { useEffect, useState } from 'react';
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
  const [animatingSize, setAnimatingSize] = useState<Size | null>(null);
  const [isBouncing, setIsBouncing] = useState(false);

  // Ativa o "pulo" do botão quando um tamanho é selecionado
  useEffect(() => {
    if (selectedSize) {
      setIsBouncing(true);
    } else {
      setIsBouncing(false);
    }
  }, [selectedSize]);

  const handleSizeClick = (size: Size) => {
    setSelectedSize((prevSize) => (prevSize === size ? null : size));
  };

  const handleAddToCart = () => {
    if (selectedSize) {
      setAnimatingSize(selectedSize);
      const cartIcon = document.querySelector('.cart-icon');
      const button = document.querySelector(`button[data-size="${selectedSize}"]`);

      if (cartIcon && button) {
        const clone = button.cloneNode(true) as HTMLElement;
        const rect = button.getBoundingClientRect();
        const cartRect = cartIcon.getBoundingClientRect();

        clone.style.position = 'fixed';
        clone.style.left = `${rect.left}px`;
        clone.style.top = `${rect.top}px`;
        clone.style.margin = '0';
        clone.style.zIndex = '100';
        clone.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        clone.style.pointerEvents = 'none';

        document.body.appendChild(clone);

        requestAnimationFrame(() => {
          clone.style.transform = 'scale(0.5)';
          clone.style.left = `${cartRect.left + cartRect.width / 2 - rect.width / 4}px`;
          clone.style.top = `${cartRect.top + cartRect.height / 2 - rect.height / 4}px`;
          clone.style.opacity = '0';
        });

        setTimeout(() => {
          document.body.removeChild(clone);
          onAddToCart(product, selectedSize);
          setAnimatingSize(null);
          setSelectedSize(null); // Remove a marcação do tamanho
        }, 500);
      }
    }
  };

  return (
    <div className="relative h-screen snap-start">
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
                  data-size={size}
                  onClick={() => handleSizeClick(size)}
                  disabled={animatingSize !== null}
                  className={`w-12 h-12 border-2 rounded-full flex items-center justify-center transition-all transform ${
                    selectedSize === size
                      ? 'bg-white text-black scale-105'
                      : 'hover:bg-white hover:text-black scale-100 border-white'
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
            <button
              onClick={handleAddToCart}
              disabled={!selectedSize || animatingSize !== null}
              className={`mt-4 px-6 py-3 text-white rounded-full flex items-center gap-2 border border-white/30 transition-all transform hover:bg-white hover:text-black hover:border-white/60 $`}
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
