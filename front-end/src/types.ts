export interface Product {
  id: string;
  name: string;
  color: string;
  description: string;
  price: number;
  image: string;
  logoColor: string;
}

export interface CartItem extends Product {
  size: 'P' | 'M' | 'G' | 'GG';
  quantity: number;
}

export type Size = 'P' | 'M' | 'G' | 'GG';