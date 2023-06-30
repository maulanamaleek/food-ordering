
export type TCurrency = 'IDR';

export interface IOrder {
  amount: number;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export enum E_FOOD_CATEGORY {
  ALL = 'all',
  DRINKS = 'drinks',
  NOODLES = 'noodles',
  CAKE = 'cake',
  CHICKEN = 'chicken',
  BEEF = 'beef',
  FRIES = 'fries',
  SOUP = 'soup',
  SUSHI = 'sushi',
}

export interface IFood {
  id: number;
  price: number;
  is_available: boolean;
  name: string;
  description: string;
  imageUrl: string;
  avg_rating: number;
  ordered_amount: number;
  category: E_FOOD_CATEGORY[];
}

export interface IFoodFilter<T = string> {
  id: number;
  displayName: string;
  value: T;
}