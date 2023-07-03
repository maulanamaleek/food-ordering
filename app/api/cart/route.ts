import { mockCart } from "@/constants/mock";
import { delay } from "@/utils/api";
import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ code: 200, data: mockCart });
  } catch (error) {
    return NextResponse.error;
  }
};

export const DELETE = async () => {
  try {
    // simulate delay in real api call
    await delay(300);
    return NextResponse.json({ code: 200 });
  } catch (error) {
    return NextResponse.error;
  }
};