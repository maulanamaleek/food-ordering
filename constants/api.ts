type TURLConfig = Record<typeof process.env.NODE_ENV, string>;
const BASE_URL_CONFIG: TURLConfig = {
  development: 'http://localhost:3000',
  test: 'https://food-ordering-git-dev-maulanamaleek.vercel.app',
  production: 'https://food-ordering-swart.vercel.app',

};

export const BASE_URL = BASE_URL_CONFIG[process.env.NODE_ENV];

export const API_URL = {
  FOODS: `${BASE_URL}/api/foods`,
  FOOD: `${BASE_URL}/api/food`,
  CART: `${BASE_URL}/api/cart`,
  HISTORY: `${BASE_URL}/api/history`,
  USER: `${BASE_URL}/api/user`,
  SUMMARY: `${BASE_URL}/api/summary`,
};

export const QUERY_KEY = {
  USER: 'USER',
  CART: 'CART',
  SUMMARY: 'SUMMARY',
};

