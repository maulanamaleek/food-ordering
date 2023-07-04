'use client';

import { IOrder } from "@/schema";
import OrderCard from "../OrderCard";
import classes from "./classes";
import OrderActions from "./OrderActions";

interface ISummaryCard {
  orders: IOrder[];
  total: number;
}

const SummaryCard = ({
  orders,
  total,
}: ISummaryCard) => {
  return (
    <>
      <div className="mx-5 flex flex-col gap-4 mb-5">

        <div className={classes.cardList}>
          {orders.map((order) => (
            <OrderCard
              key={order.id}
              id={order.id}
              name={order.name}
              amount={order.amount}
              price={order.price}
              description={order.description}
              imageUrl={order.imageUrl}
              viewOnly
            />
          ))}

        </div>

      </div>

      {!!orders.length && <OrderActions total={total} />}
    </>
  );
};

export default SummaryCard;