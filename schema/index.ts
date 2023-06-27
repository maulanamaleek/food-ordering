
export type TCurrency = 'IDR';

export interface IOrder {
  amount: number;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}