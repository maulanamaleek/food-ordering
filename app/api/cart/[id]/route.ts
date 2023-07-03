import { delay } from "@/utils/api";
import { NextResponse } from "next/server";

export const POST = async () => {
  try {
    // simulate delay in real api call
    // throw new Error();
    await delay(300);
    return NextResponse.json({ code: 200 });
  } catch (error) {
    return NextResponse.error;
  }
};

