import Filter from "@/components/Filter";
import FoodCard from "@/components/FoodCard";

const dummyFoods = [
  {
    id: 1,
    title: "Food Name",
    price: 25000,
    amount_purchased: 23,
    rating: 4.5,
  },
  {
    id: 2,
    title: "Food Name - Noodles",
    price: 33000,
    amount_purchased: 316,
    rating: 4.9,
  },
  {
    id: 3,
    title: "Food Name Long",
    price: 62500,
    amount_purchased: 10,
    rating: 4.0,
  },
  {
    id: 4,
    title: "Food Name Very Long Should Be Truncated",
    price: 53000,
    amount_purchased: 5,
    rating: 3.8,
  },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-4 gap-5 mx-auto sm:w-3/4 mt-24">
      <Filter />

      <h1 className="font-bold text-lg">Discover the best foods &rarr;</h1>
      <div className="flex flex-wrap w-full justify-between sm:justify-center gap-x-2 gap-y-5 lg:justify-start lg:gap-x-5">
        {dummyFoods.map((food) => (
          <FoodCard
            key={food.id}
            title={food.title}
            price={food.price}
            amount_purchased={food.amount_purchased}
            rating={food.rating}
          />
        ))}
      </div>
    </main>
  );
}
