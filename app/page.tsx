import Filter from "@/components/Filter";
import FoodCard from "@/components/FoodCard";
import { IFood } from "@/schema";
import { IResponse } from "@/schema/api";

interface IHomeProps {
  params: any;
  searchParams: {
    category?: string,
    rating?: string;
    search?: string;
  }
}

const Home = async ({
  searchParams,
}: IHomeProps) => {
  const { category, rating, search } = searchParams;
  const apiUrl = new URL('http://localhost:3000/api/foods');
  if (category) {
    apiUrl.searchParams.set('category', category);
  }

  if (rating) {
    apiUrl.searchParams.set('rating', rating);
  }

  if (search) {
    apiUrl.searchParams.set('search', search);
  }

  const res = await fetch(apiUrl.href);
  const resData = await res.json() as IResponse<IFood[]>;

  const foodList = (() => {
    if (!resData.data.length) {
      return (
        <h1>No food found, please change your filter</h1>
      );
    }
    return resData.data.map((food) => (
      <FoodCard
        key={food.id}
        data={food}
      />
    ));

  })();

  return (
    <main className="flex min-h-screen flex-col px-4 gap-5 mx-auto sm:w-3/4 mt-24">
      <Filter
        search={search}
        rating={rating}
        category={category}
      />

      <h1 className="font-bold text-lg">Discover the best foods &rarr;</h1>
      <div
        className="flex flex-wrap w-full justify-between sm:justify-center gap-x-2 gap-y-5 lg:justify-start lg:gap-x-5 pb-10"
      >
        {foodList}
      </div>
    </main>
  );
};

export default Home;