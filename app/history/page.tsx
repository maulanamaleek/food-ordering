import OrderCard from "@/components/OrderCard";
import { Metadata } from "next";

const dummyCarts = [
  {
    id: 1,
    name: 'Food Name',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    orderedAt: Date.now(),
  },
  {
    id: 2,
    name: 'Spicy Meatball',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    orderedAt: Date.now(),
  },
  {
    id: 3,
    name: 'Margaritha Pizza',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    orderedAt: Date.now(),
  },
  {
    id: 4,
    name: 'Chicken Katsu Curry Ramen Super Long',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    orderedAt: Date.now(),
  },
];

export const metadata: Metadata = {
  title: 'Order History - Food Ordering App',
  description: 'History of order from our app',
};

const History = () => {
  return (
    <div className="pt-20 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto">
      <h1 className="text-center font-bold text-xl">History</h1>

      <div className="mt-5 px-5 flex flex-col gap-4">
        {dummyCarts.map((cartItem) => (
          <OrderCard
            key={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            description={cartItem.description}
            amount={cartItem.amount}
            imageUrl={cartItem.imageUrl}
            orderedAt={cartItem.orderedAt}
            viewOnly
          />
        ))}
      </div>
    </div>
  );
};

export default History;