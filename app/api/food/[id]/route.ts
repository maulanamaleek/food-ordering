import { mockFoods } from "@/constants/styles/mocks/foods";
import { E_RESPONSE_CODE } from "@/schema/api";
import { NextResponse } from "next/server";

interface IGetParams {
  params: {
    id: string;
  }
}

export const GET = async (_req: Request, { params }: IGetParams) => {
  try {
    const id = +params.id;
    const data = mockFoods.find((food) => food.id === id);

    if (!data) {
      return NextResponse.error;
    }
    return NextResponse.json({ data, code: E_RESPONSE_CODE.SUCCESS, message: null });

  } catch (error) {
    return NextResponse.error;
  }
};