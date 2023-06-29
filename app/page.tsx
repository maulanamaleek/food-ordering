import Filter from "@/components/Filter";
import FoodCard from "@/components/FoodCard";
import { IFood } from "@/schema";
import { IResponse } from "@/schema/api";

const Home = async () => {
  const res = await fetch('http://localhost:3000/api/foods');
  const resData = await res.json() as IResponse<IFood[]>;

  return (
    <main className="flex min-h-screen flex-col px-4 gap-5 mx-auto sm:w-3/4 mt-24">
      <Filter />

      <h1 className="font-bold text-lg">Discover the best foods &rarr;</h1>
      <div className="flex flex-wrap w-full justify-between sm:justify-center gap-x-2 gap-y-5 lg:justify-start lg:gap-x-5 pb-10">
        {resData.data.map((food) => (
          <FoodCard
            key={food.id}
            data={food}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;