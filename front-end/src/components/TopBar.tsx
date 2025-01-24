import React from 'react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-4 py-1 z-30">
      {/* Esquerda: Parcelamento */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-credit-card text-[10px]"></i>
        <span className="text-[8px] md:text-[10px] leading-tight">PARCELE EM ATÉ 5X (SEM JUROS)</span>
      </div>

      {/* Centro: Frete Grátis */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-truck text-[10px]"></i>
        <span className="text-[8px] md:text-[10px] leading-tight">FRETE GRÁTIS PARA O SUDESTE A PARTIR DE R$ 199,99</span>
      </div>

      {/* Direita: Compra Segura */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-shield-halved text-[10px]"></i>
        <span className="text-[8px] md:text-[10px] leading-tight">COMPRA SEGURA</span>
      </div>
    </div>
  );
}
