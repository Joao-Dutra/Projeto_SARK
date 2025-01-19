import React from 'react';
import Logo from './Sark-LG.png';

export default function Banner() {
  return (
    <div className="h-screen snap-start relative overflow-hidden bg-white">
      <div className="absolute inset-0">
        {/* Fundo branco já é garantido com bg-white */}
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-black p-4 shadow-[0px_-10px_30px_rgba(0,0,0,0.8)]">
        {/* Logo em vez do ícone Shirt */}
        <img src={Logo} alt="Sark Logo" className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-8 animate-fade-in" />
        
        <p className="text-lg md:text-xl text-gray-800">Elegância em cada detalhe</p>
      </div>
      <div className="absolute top-0 left-0 right-0 h-16 bg-white shadow-[0px_4px_10px_rgba(0,0,0,0.3)]"></div> {/* Box Shadow na parte de cima */}
    </div>
  );
}
