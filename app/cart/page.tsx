import OrderCard from "@/components/OrderCard";
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

const Cart = () => {
  return (
    <div className="pt-20 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto pb-20">
      <h1 className="text-center font-bold text-xl">Cart</h1>

      <div className="mt-5 px-5 flex flex-col gap-4">
        {dummyCarts.map((cartItem) => (
          <OrderCard
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            description={cartItem.description}
            amount={cartItem.amount}
            imageUrl={cartItem.imageUrl}
          />
        ))}
      </div>

      {dummyCarts.length ? (
        <Link href="/summary">
          <button
            className="fixed bottom-5 w-3/4 sm:w-1/2 lg:w-1/4 text-white left-1/2 -translate-x-1/2 py-2 bg-orange-600 rounded-full">
            Checkout
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default Cart;