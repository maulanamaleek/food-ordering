import Filter from "@/components/Filter";
import FoodCard from "@/components/FoodCard";
import { API_URL } from "@/constants/api";
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

/* eslint-disable max-len */
const classes = {
  foodList: "flex flex-wrap w-full justify-between sm:justify-center gap-x-2 gap-y-5 lg:justify-start lg:gap-x-5 pb-10 xl:grid lg:grid-cols-5 xl:gap-y-8",
  container: "flex min-h-screen flex-col px-4 gap-5 mx-auto sm:w-3/4 mt-24",
  title: "font-bold text-lg",
};
/* eslint-enable max-len */

const Home = async ({
  searchParams,
}: IHomeProps) => {
  const { category, rating, search } = searchParams;
  const apiUrl = new URL(API_URL.FOODS);
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
    <main className={classes.container}>
      <Filter
        search={search}
        rating={rating}
        category={category}
      />

      <h1 className={classes.title}>Discover the best foods &rarr;</h1>
      <div
        className={classes.foodList}
      >
        {foodList}
      </div>
    </main>
  );
};

export default Home;