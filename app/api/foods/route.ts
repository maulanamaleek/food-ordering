import { mockFoods } from "@/constants/styles/mocks/foods";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    const foods = mockFoods;

    return NextResponse.json({ data: foods, code: 200, message: null });
  } catch (error) {
    return NextResponse.error;
  }
};