import { E_RESPONSE_CODE } from "@/schema/api";
import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

export const handleApiError = (message: any) => {
  console.error(message);
};

export const handleServerError = () => {
  throw new Error('Internal Server Error');
};

export const delay = (t: number) => {
  return new Promise((r) => setTimeout(r, t));
};

export const getQueryClient = cache(() => new QueryClient());

export const fetchHandled = async <T>(
  URL: string,
  config?: RequestInit
): Promise<{ data: T, isError: boolean }> => {
  let isError = false;
  let data;
  const res = await fetch(URL, config);

  if (res.status !== E_RESPONSE_CODE.SUCCESS) {
    isError = true;
  } else if (!isError) {
    data = await res.json();
  }

  return {
    data,
    isError,
  };
};