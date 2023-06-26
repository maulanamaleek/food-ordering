'use client'

import Image from "next/image"
import { useEffect, useState } from "react"

import { formatCurrency, truncateChar } from "@/utils";
import ConfirmModal from "./ConfirmModal";
import classes from "./classes";

const DEFAULT_AMOUNT = 1;

const MOBILE_MAX_FOOD_NAME = 30;
const MOBILE_MAX_DESC = 45;
const DESKTOP_MAX_FOOD_NAME = 50;
const DESKTOP_MAX_DESC = 100;

interface ICartItemProps {
  price: number;
  amount: number;
  name: string;
  description: string;
  imageUrl: string;
}

const CartItem = ({
  price,
  amount,
  name,
  description,
  imageUrl,
}: ICartItemProps) => {
  const [itemNum, setItemNum] = useState(DEFAULT_AMOUNT);
  const [isShowModal, setIsShowModal] = useState(false);
  // TODO: create hooks for better screen detector
  const isMobile = window.innerWidth <= 400;

  const nameTruncateAmount = isMobile ? MOBILE_MAX_FOOD_NAME : DESKTOP_MAX_FOOD_NAME;
  const descTruncateAmount = isMobile ? MOBILE_MAX_DESC : DESKTOP_MAX_DESC;

  useEffect(() => {
    setItemNum(amount);
  }, [amount])

  const addAmount = () => {
    setItemNum((prev) => prev + 1);
  }

  const decreaseAmount = () => {
    // TODO: add confirmation dialog, when amount is 1. confirm to user to remove item from cart;
    if (itemNum === DEFAULT_AMOUNT) {
      setIsShowModal(true)
      return;
    };

    setItemNum((prev) => prev - 1);
  }

  return (
    <div className={classes.container}>
      <div className={classes.foodImage}>
        <Image
          className="object-cover"
          fill
          src={imageUrl}
          alt={name}
        />
      </div>

      <div className="flex-1 py-1">
        <h3 className="font-semibold text-sm">{truncateChar(name, nameTruncateAmount)}</h3>
        <p className="text-xs text-gray-500">{truncateChar(description, descTruncateAmount)}</p>
      </div>

      <div className={classes.actions}>
        <div className="flex gap-3">
          <button onClick={decreaseAmount} className="px-2 bg-slate-200 rounded-md">-</button>
          <span>{itemNum}</span>
          <button onClick={addAmount} className="px-2 bg-slate-200 rounded-md">+</button>
        </div>

        <span className={classes.totalPrice}>
          {formatCurrency(itemNum * price, 'IDR')}
        </span>
      </div>

      {isShowModal && (
        <ConfirmModal
          onClose={() => setIsShowModal(false)}
          onConfirm={() => setIsShowModal(false)}
        />
      )}
    </div>
  )
}

export default CartItem