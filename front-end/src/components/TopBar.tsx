import React from 'react';

export default function TopBar() {
  return (
    <div className="fixed top-0 left-0 w-full bg-black text-white flex justify-between items-center px-8 py-1 z-30">
      {/* Esquerda: Parcelamento */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-credit-card text-xs"></i>
        <span className="text-[10px] md:text-xs leading-tight">PARCELE EM ATÉ 5X (SEM JUROS)</span>
      </div>

      {/* Centro: Frete Grátis */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-truck text-xs"></i>
        <span className="text-[10px] md:text-xs leading-tight">FRETE GRÁTIS PARA O SUDESTE A PARTIR DE R$ 199,99</span>
      </div>

      {/* Direita: Compra Segura */}
      <div className="flex items-center space-x-2">
        <i className="fa-solid fa-shield-halved text-xs"></i>
        <span className="text-[10px] md:text-xs leading-tight">COMPRA SEGURA</span>
      </div>
    </div>
  );
}
