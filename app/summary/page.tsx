'use client';
import OrderSuccess from "@/components/OrderSuccess";
import SummaryCard from "@/components/SummaryCard";
import { useState } from "react";

// TODO: use state for summary data

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
    amount: 4,
    price: 32000,
    description: 'Food description with variant available, more description for long content. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    orderedAt: Date.now(),
  },
  {
    id: 5,
    name: 'Chicken Katsu Curry Ramen Super Long',
    amount: 2,
    price: 32000,
    description: 'Food description with variant available, more description for long content. lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
    imageUrl: "https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg",
    orderedAt: Date.now(),
  },
];

const totalPayment = dummyCarts.reduce((acc, curr) => acc + (curr.price * curr.amount), 0);


const Summary = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  if (isSuccess) {
    return <OrderSuccess />;
  }

  const onSuccess = () => setIsSuccess(true);
  return (
    <div className="pt-20 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto pb-24">
      <h1 className="text-center font-bold text-xl mb-5">Summary</h1>

      <SummaryCard orders={dummyCarts} total={totalPayment} onSuccess={onSuccess} />
    </div>
  );
};

export default Summary;