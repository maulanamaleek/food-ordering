
export const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

export const API_URL = {
  FOODS: `${BASE_URL}/api/foods`,
  FOOD: `${BASE_URL}/api/food`,
  CART: `${BASE_URL}/api/cart`,
  HISTORY: `${BASE_URL}/api/history`,
  USER: `${BASE_URL}/api/user`,
};