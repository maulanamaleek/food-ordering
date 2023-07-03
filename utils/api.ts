import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

export const handleApiError = (message: any) => {
  console.error(message);
};

export const delay = (t: number) => {
  return new Promise((r) => setTimeout(r, t));
};


export const getQueryClient = cache(() => new QueryClient());
