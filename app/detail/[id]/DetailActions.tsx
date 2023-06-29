'use client';
import { formatCurrency } from '@/utils';
import Link from 'next/link';
import React, { useState } from 'react';

interface IDetailActionsProps {
  price: number;
}

const DetailActions = ({
  price,
}: IDetailActionsProps) => {
  const [num, setNum] = useState(1);

  const addAmount = () => {
    setNum((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (num === 1) {
      return;
    };

    setNum((prev) => prev - 1);
  };
  return (
    <>
      <div className="mt-5 flex justify-between">
        <span className="font-semibold text-orange-600">{formatCurrency(price * num, 'IDR')}</span>

        <div className="flex gap-2">
          <button className="px-2 bg-slate-200 rounded-md" onClick={decreaseAmount}>-</button>
          <span>{num}</span>
          <button className="px-2 bg-slate-200 rounded-md" onClick={addAmount}>+</button>
        </div>
      </div>
      <Link href="/cart">
        <button className="mt-5 w-full bg-orange-600 text-white py-2 rounded-full">Add to Cart</button>
      </Link>
    </>
  );
};

export default DetailActions;