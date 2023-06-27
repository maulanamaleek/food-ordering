import { IOrder } from "@/schema";
import OrderCard from "../OrderCard";
import { formatCurrency } from "@/utils";
import classes from "./classes";

interface ISummaryCard {
  orders: IOrder[];
  total: number;
}

const SummaryCard = ({
  orders,
  total,
}: ISummaryCard) => {
  return (
    <div className="mx-5 flex flex-col gap-4 mb-5">

      <div className={classes.cardList}>
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            name={order.name}
            amount={order.amount}
            price={order.price}
            description={order.description}
            imageUrl={order.imageUrl}
            viewOnly
          />
        ))}

      </div>
      <div className={classes.actionsContainer}>
        <div className="flex justify-between">
          <h3>Total</h3>
          <span className="font-semibold text-orange-600">{formatCurrency(total, 'IDR')}</span>
        </div>
        {/* TODO: add confirm modal, cancel -> cart, order now -> order success page */}
        <div className="flex justify-between gap-5">
          <button className={classes.cancelBtn}>Cancel</button>
          <button className={classes.confirmBtn}>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;