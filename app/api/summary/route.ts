import { mockSummary } from "@/constants/mock";
import { delay } from "@/utils/api";
import { NextResponse } from "next/server";

export const GET = () => {
  try {
    return NextResponse.json({ status: 200, data: mockSummary });
  } catch (error) {
    return NextResponse.error;
  }
};

export const POST = async () => {
  try {
    // simulate delay in real api call
    await delay(300);
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.error;
  }
};