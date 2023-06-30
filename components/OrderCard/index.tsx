'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import dayjs from 'dayjs';

import { formatCurrency, truncateChar } from "@/utils";
import classes from "./classes";
import useDetectMobileScreen from "@/hooks/useDetectMobileScreen";
import ConfirmModal from "../ConfirmModal";

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
  viewOnly?: boolean;
  orderedAt?: number;
}

const OrderCard = ({
  price,
  amount,
  name,
  description,
  imageUrl,
  orderedAt,
  viewOnly = false,
}: ICartItemProps) => {
  const [itemNum, setItemNum] = useState(DEFAULT_AMOUNT);
  const [isShowModal, setIsShowModal] = useState(false);
  const isMobile = useDetectMobileScreen();

  const nameTruncateAmount = isMobile ? MOBILE_MAX_FOOD_NAME : DESKTOP_MAX_FOOD_NAME;
  const descTruncateAmount = isMobile ? MOBILE_MAX_DESC : DESKTOP_MAX_DESC;

  useEffect(() => {
    setItemNum(amount);
  }, [amount]);

  const addAmount = () => {
    setItemNum((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (itemNum === DEFAULT_AMOUNT) {
      // TODO: when user confirm, remove specific item from cart
      setIsShowModal(true);
      return;
    };

    setItemNum((prev) => prev - 1);
  };

  const actionsElem = (() => {
    const elems: JSX.Element[] = [];

    if (viewOnly) {
      if (!!orderedAt) {
        elems.push(
          <span key="ordered-at" className={classes.orderedAt}>
            {dayjs(orderedAt).format('DD-MM-YYYY').toString()}
          </span>
        );
      }

      elems.push(
        <span key="item-amount" className={classes.amount}>x{itemNum}</span>
      );
    } else {
      elems.push(
        <div key="order-adjust-amount" className="flex gap-3">
          <button onClick={decreaseAmount} className={classes.orderAdjustNum}>-</button>
          <span className={classes.amount}>{itemNum}</span>
          <button onClick={addAmount} className={classes.orderAdjustNum}>+</button>
        </div>
      );
    }

    return elems;
  })();

  return (
    <div className={classes.container}>
      <div className={classes.foodImage}>
        <Image
          className="object-cover"
          fill
          sizes="80px"
          src={imageUrl}
          alt={name}
        />
      </div>

      <div className="flex-1 py-1">
        <h3
          className="font-semibold text-sm sm:text-base lg:text-lg xl:text-xl"
        >
          {truncateChar(name, nameTruncateAmount)}
        </h3>
        <p className="text-xs sm:text-sm text-gray-500 xl:text-lg">
          {truncateChar(description, descTruncateAmount)}
        </p>
      </div>

      <div className={classes.actions}>
        {actionsElem}

        <span className={classes.totalPrice}>
          {formatCurrency(itemNum * price, 'IDR')}
        </span>
      </div>

      {isShowModal && (
        <ConfirmModal
          onClose={() => setIsShowModal(false)}
          confirmText="Remove"
          description="Decrement amount to 0 will remove this food from your cart"
          onConfirm={() => setIsShowModal(false)}
        />
      )}
    </div>
  );
};

export default OrderCard;