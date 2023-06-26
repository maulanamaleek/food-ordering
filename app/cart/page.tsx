import OrderCard from "@/components/OrderCard";

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
];

const Cart = () => {
  return (
    <div className="pt-24 min-h-screen sm:w-1/2 mx-auto">
      <h1 className="text-center font-bold text-xl">CART</h1>

      <div className="mt-10 px-5 flex flex-col gap-4">
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
    </div>
  );
};

export default Cart;