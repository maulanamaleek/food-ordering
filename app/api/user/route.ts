import { mockUser } from "@/constants/mock";
import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ code: 200, data: mockUser });
  } catch (error) {
    return NextResponse.error;
  }
};