'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import OrderCard from '@/components/OrderCard';
import { ICartData, ISummaryResponse, IUser } from '@/schema';
import classes from './classes';
import Link from 'next/link';
import LoadingOverlay from '@/components/LoadingOverlay';
import { DEFAULT_MODAL } from '@/constants';
import ConfirmModal from '@/components/ConfirmModal';
import { API_URL, QUERY_KEY } from '@/constants/api';
import { E_RESPONSE_CODE } from '@/schema/api';

interface ICartListProps {
  items: ICartData[];
}


const CartList = ({
  items,
}: ICartListProps) => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [modal, setModal] = useState(DEFAULT_MODAL);
  const [isLoading, setIsLoading] = useState(true);
  const { data: cartItems } = useQuery<ICartData[]>({
    queryKey: [QUERY_KEY.CART],
    queryFn: () => {
      return items;
    },
  });

  const {
    mutate: deleteAllCart,
  } = useMutation({
    mutationFn: async () => {
      const res = await fetch(API_URL.CART, { method: 'DELETE' });

      if (res.status !== E_RESPONSE_CODE.SUCCESS) {
        // will be catched in react query error
        throw new Error('Failed to Fetched');
      }
    },
    onMutate: () => {
      queryClient.invalidateQueries([QUERY_KEY.USER]);
    },
    onSuccess: () => {
      queryClient.setQueryData<IUser>([QUERY_KEY.USER], (oldData) => {
        if (oldData) {
          return {
            ...oldData,
            cart_items: 0,
          };
        }
      });
      queryClient.setQueryData([QUERY_KEY.CART], () => []);
    },
    onSettled: () => setIsLoading(false),
  });

  useEffect(() => {
    if (items.length) {
      setIsLoading(false);
      queryClient.refetchQueries([QUERY_KEY.USER]);
      queryClient.setQueryData([QUERY_KEY.CART], () => {
        return items;
      });
    }
  }, [items, queryClient]);

  const handleEmptyCartClick = () => {
    setModal({
      description: 'Are you sure to remove all items in the cart?',
      show: true,
      confirmText: 'Remove',
      cancelText: 'Cancel',
      onConfirm: () => {
        setModal(DEFAULT_MODAL);
        setIsLoading(true);

        deleteAllCart();
      },
      onClose: () => setModal(DEFAULT_MODAL),
    });
  };

  const handleCheckout = () => {
    queryClient.setQueryData<ISummaryResponse>([QUERY_KEY.SUMMARY], (oldData) => {
      if (oldData) {
        const newTotal = cartItems?.reduce((acc, curr) => acc + (curr.amount * curr.price), 0);
        return {
          items: cartItems || oldData.items,
          total_price: newTotal || oldData.total_price,
        };

      }
    });
    router.push('/summary');
  };

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (!cartItems?.length) {
    return (
      <div className={classes.noCartContainer}>
        <Image
          src="/assets/food-1.png"
          width={220}
          height={220}
          alt="food"
        />
        <h1 className={classes.noCartTitle}>You have no items in the card</h1>

        <Link href="/">
          <button className={classes.btn}>Discover more Foods</button>
        </Link>
      </div>
    );
  }

  return (
    <>
      <button
        className={classes.removeBtn}
        onClick={handleEmptyCartClick}
      >
        &#x1f5d1; Empty Cart
      </button>
      <div className={classes.orderList}>
        {cartItems?.map((cartItem) => (
          <OrderCard
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            description={cartItem.description}
            amount={cartItem.amount}
            imageUrl={cartItem.imageUrl}
          />))
        }
      </div>

      {cartItems?.length ? (
        <button
          className={classes.buttonSummary}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      ) : null}

      <ConfirmModal {...modal} />
    </>
  );
};

export default CartList;