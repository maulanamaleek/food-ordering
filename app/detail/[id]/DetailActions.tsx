'use client';

import ConfirmModal from '@/components/ConfirmModal';
import { DEFAULT_MODAL } from '@/constants';
import { API_URL, QUERY_KEY } from '@/constants/api';
import { ICartData, IFood, IUser } from '@/schema';
import { E_RESPONSE_CODE } from '@/schema/api';
import { formatCurrency } from '@/utils';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

interface IDetailActionsProps {
  data: IFood;
}

const DetailActions = ({
  data,
}: IDetailActionsProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [num, setNum] = useState(1);
  const [modal, setModal] = useState(DEFAULT_MODAL);

  const { mutate: addToCart } = useMutation({
    mutationKey: [QUERY_KEY.CART, data.id],
    mutationFn: async () => {
      const res = await fetch(`${API_URL.CART}/${data.id}`, { method: 'POST' });

      if (res.status !== E_RESPONSE_CODE.SUCCESS) {
        // will be catched in react query error
        throw new Error('Failed to Fetched');
      }
    },
    onSuccess: () => {
      queryClient.setQueryData<ICartData[]>([QUERY_KEY.CART], (oldData) => {
        if (oldData) {
          return [
            ...oldData,
            {
              ...data,
              amount: num,
            },
          ];
        }
      });
      queryClient.setQueryData<IUser>([QUERY_KEY.USER], (oldData) => {
        if (oldData) {
          return {
            ...oldData,
            cart_items: oldData.cart_items + 1,
          };
        }
      });

      setModal({
        description: 'Your food has been added to cart',
        confirmText: 'Back to Home',
        onConfirm: () => router.push('/'),
        show: true,
      });
    },
    onError: () => {
      setModal({
        description: 'There is an Error while adding food to cart',
        confirmText: 'Close',
        onConfirm: () => setModal(DEFAULT_MODAL),
        show: true,
      });
    },
  });

  const addAmount = () => {
    setNum((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (num === 1) {
      return;
    };

    setNum((prev) => prev - 1);
  };

  const handleAddToCart = () => {
    addToCart();
  };
  return (
    <>
      <div className="px-5">
        <div className="mt-5 flex justify-between">
          <span className="font-semibold text-orange-600">
            {formatCurrency(data.price * num, 'IDR')}
          </span>

          <div className="flex gap-2">
            <button className="px-2 bg-slate-200 rounded-md" onClick={decreaseAmount}>-</button>
            <span>{num}</span>
            <button className="px-2 bg-slate-200 rounded-md" onClick={addAmount}>+</button>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-5 w-full bg-orange-600 text-white py-2 rounded-full box-border"
        >
          Add to Cart
        </button>
      </div>

      <ConfirmModal {...modal} />
    </>
  );
};

export default DetailActions;