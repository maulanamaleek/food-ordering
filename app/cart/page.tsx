import { API_URL } from "@/constants/api";
import { ICartResponse } from "@/schema";
import { IResponse } from "@/schema/api";
import classes from "./classes";
import CartList from "./CartList";
import { fetchHandled, handleServerError } from "@/utils/api";


export const dynamic = 'force-dynamic';

const Cart = async () => {
  const {
    data: cartData,
    isError,
  } = await fetchHandled<IResponse<ICartResponse>>(API_URL.CART);

  if (isError) {
    handleServerError();
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Cart</h1>

      <CartList items={cartData.data.items} />
    </div>
  );
};

export default Cart;