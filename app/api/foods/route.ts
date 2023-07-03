import { mockFoods } from "@/constants/mock";
import { E_FOOD_CATEGORY } from "@/schema";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  try {
    const searchParams = req.nextUrl.searchParams;
    const categoryFilter = searchParams.get('category') as E_FOOD_CATEGORY;
    const ratingFilter = searchParams.get('rating');
    const search = searchParams.get('search');
    const ALL_RATING = 'all';
    let foods = mockFoods;

    if (categoryFilter && categoryFilter !== E_FOOD_CATEGORY.ALL) {
      foods = foods.filter((food) => food.category.includes(categoryFilter));
    }

    if (ratingFilter && ratingFilter !== ALL_RATING) {
      foods = foods.filter((food) => {
        const [min, max] = ratingFilter.split(',');
        return (food.avg_rating >= +min && food.avg_rating <= +max);
      });
    }

    if (search) {
      const pattern = new RegExp(search, 'gi');
      foods = foods.filter((food) => pattern.test(food.name));
    }

    return NextResponse.json({ data: foods, code: 200, message: null });
  } catch (error) {
    return NextResponse.error;
  }
};