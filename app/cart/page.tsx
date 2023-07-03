import { API_URL } from "@/constants/api";
import { ICartResponse } from "@/schema";
import { IResponse } from "@/schema/api";
import classes from "./classes";
import CartList from "./CartList";


export const dynamic = 'force-dynamic';

const Cart = async () => {
  const res = await fetch(API_URL.CART);
  const resData = await res.json() as IResponse<ICartResponse>;
  const cart = resData.data.items;

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Cart</h1>

      <CartList items={cart} />
    </div>
  );
};

export default Cart;