import OrderCard from "@/components/OrderCard";
import Image from "next/image";
import Link from "next/link";

// TODO: use state and local storage persist for cart data
const dummyCarts = [
  {
    id: 1,
    name: 'Food Name',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
  },
  {
    id: 2,
    name: 'Spicy Meatball',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
  },
  {
    id: 3,
    name: 'Margaritha Pizza',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
  },
  {
    id: 4,
    name: 'Chicken Katsu Curry Ramen Super Long',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
  },
  {
    id: 5,
    name: 'Chicken Katsu Curry Ramen Super Long',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
  },
];

/* eslint-disable max-len */
const classes = {
  container: "pt-24 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto pb-20",
  title: "text-center font-bold text-xl xl:text-2xl",
  buttonSummary: "fixed bottom-5 w-3/4 sm:w-1/2 lg:w-1/4 text-white left-1/2 -translate-x-1/2 py-2 bg-orange-600 rounded-full",
  btn: "bg-orange-600 rounded-full py-1 px-4 text-white w-fit",
  noCartContainer: "mt-10 flex flex-col justify-center items-center gap-5",
  noCartTitle: "font-semibold text-lg",
  orderList: "mt-5 px-5 flex flex-col gap-4",
};
/* eslint-enable max-len */

const Cart = () => {

  const orderListElem = (() => {
    if (!dummyCarts?.length) {
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

    return dummyCarts.map((cartItem) => (
      <OrderCard
        key={cartItem.id}
        name={cartItem.name}
        price={cartItem.price}
        description={cartItem.description}
        amount={cartItem.amount}
        imageUrl={cartItem.imageUrl}
      />
    ));
  })();

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Cart</h1>

      <div className={classes.orderList}>
        {orderListElem}
      </div>

      {dummyCarts.length ? (
        <Link href="/summary">
          <button
            className={classes.buttonSummary}>
            Checkout
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Cart;