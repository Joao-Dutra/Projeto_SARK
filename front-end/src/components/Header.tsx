import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { CartItem } from '../types';
import Logo from './Sark-logo.png';

interface HeaderProps {
  onCartClick: () => void;
  cartItems: CartItem[];
}

export default function Header({ onCartClick, cartItems }: HeaderProps) {
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="fixed top-[18qpx] left-0 right-0 bg-white z-40 shadow-md">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Exibe a logo */}
          <img src={Logo} alt="Sark Logo" className="w-16 h-16 md:w-20 md:h-20" />
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
