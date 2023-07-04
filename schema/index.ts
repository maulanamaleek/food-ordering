
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

export interface IFoodResponse {
  foods: IFood[];
  has_next: boolean;
}

export interface IFoodFilterState {
  displayName: string;
  value: string;
}

export interface IFoodFilter extends IFoodFilterState {
  id: number;
}

export interface ICartData extends IFood {
  amount: number;
}

export interface ICartResponse {
  total_items: number;
  items: ICartData[];
}

export interface ISummaryResponse {
  total_price: number;
  items: ICartData[]
}

export interface IHistory extends ICartData {
  ordered_date: number;
}

export interface IUser {
  id: number;
  name: string;
  email: string;
  avatar_url: string;
  cart_items: number;
}