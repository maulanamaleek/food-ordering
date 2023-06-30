import { E_FOOD_CATEGORY, IFoodFilter } from "@/schema";
import { createPlaceholderMap } from "@/utils";

export const CATEGORY_FILTER_VAL: IFoodFilter[] = [
  {
    id: 1,
    displayName: 'All',
    value: E_FOOD_CATEGORY.ALL,
  },
  {
    id: 2,
    displayName: 'Beef',
    value: E_FOOD_CATEGORY.BEEF,
  },
  {
    id: 3,
    displayName: 'Cake',
    value: E_FOOD_CATEGORY.CAKE,
  },
  {
    id: 4,
    displayName: 'Chicken',
    value: E_FOOD_CATEGORY.CHICKEN,
  },
  {
    id: 5,
    displayName: 'Drinks',
    value: E_FOOD_CATEGORY.DRINKS,
  },
  {
    id: 6,
    displayName: 'Fries',
    value: E_FOOD_CATEGORY.FRIES,
  },
  {
    id: 7,
    displayName: 'Noodles',
    value: E_FOOD_CATEGORY.NOODLES,
  },
  {
    id: 8,
    displayName: 'Soup',
    value: E_FOOD_CATEGORY.SOUP,
  },
  {
    id: 9,
    displayName: 'Sushi',
    value: E_FOOD_CATEGORY.SUSHI,
  },
];

export const RATING_FILTER: IFoodFilter[] = [
  {
    id: 1,
    displayName: 'All',
    value: 'all',
  },
  {
    id: 2,
    displayName: '⭐️ 5',
    value: '5,5',
  },
  {
    id: 3,
    displayName: '⭐️ 4.5 - ⭐️ 4.9',
    value: '4.5,4.9',
  },
  {
    id: 4,
    displayName: ' ⭐️ 4 - ⭐️ 4.4',
    value: '4,4.4',
  },
  {
    id: 5,
    displayName: '⭐️ 3.5 - ⭐️ 3.9',
    value: '3.5,3.9',
  },
  {
    id: 6,
    displayName: '< ⭐️ 3.5',
    value: '0,3.4',
  },
];

export const CATEGORY_PLACEHOLDER_MAP = createPlaceholderMap(CATEGORY_FILTER_VAL);

export const RATING_PLACEHOLDER_MAP = createPlaceholderMap(RATING_FILTER);