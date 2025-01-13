import React from 'react';
import { Shirt } from 'lucide-react';

export default function Banner() {
  return (
    <div className="h-screen snap-start relative overflow-hidden bg-gradient-to-br from-gray-900 to-black">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
      </div>
      <div className="relative h-full flex flex-col items-center justify-center text-white p-4">
        <Shirt className="w-20 h-20 md:w-32 md:h-32 mb-6 md:mb-8 animate-fade-in" />
        <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">SARK</h1>
        <p className="text-lg md:text-xl text-gray-300">Elegância em cada detalhe</p>
      </div>
    </div>
  );
}