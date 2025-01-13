import React from 'react';
import { ShoppingCart, Shirt } from 'lucide-react';
import { CartItem } from '../types';

interface HeaderProps {
  onCartClick: () => void;
  cartItems: CartItem[];
}

export default function Header({ onCartClick, cartItems }: HeaderProps) {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Shirt className="w-6 h-6 md:w-8 md:h-8" />
          <span className="text-xl md:text-2xl font-bold">SARK</span>
        </div>
        
        <button
          onClick={onCartClick}
          className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ShoppingCart className="w-6 h-6 cart-icon" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 bg-black text-white text-xs w-5 h-5 rounded-full flex items-center justify-center animate-bounce">
              {itemCount}
            </span>
          )}
        </button>
      </div>
    </header>
  );
}