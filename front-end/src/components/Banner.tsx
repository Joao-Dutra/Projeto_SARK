import React from 'react';
import Logo from './Sark-LG.png';

export default function Banner() {
  return (
    <div className="relative snap-start min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Logo e texto centralizados */}
      <img
        src={Logo}
        alt="Sark Logo"
        className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-8 animate-fade-in"
      />
      <p className="text-lg md:text-xl text-gray-800">Elegância em cada detalhe</p>
    </div>
  );
}
