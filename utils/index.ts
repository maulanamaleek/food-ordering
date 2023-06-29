import { TCurrency } from "@/schema";

type TCurrencyMap = Record<TCurrency, (amount: string) => string>;
export const currencyMap: TCurrencyMap = {
  IDR: (amount) => `Rp. ${amount}`,
};

export const formatCurrency = (amount: number, currency: TCurrency): string => {
  const thousandSeparated = amount.toLocaleString('IDR');
  return currencyMap[currency](thousandSeparated) || amount.toString();
};

export const truncateChar = (str: string, amount: number) => {
  if (str.length <= amount) {
    return str;
  }

  return str.slice(0, amount - 3) + '...';
};