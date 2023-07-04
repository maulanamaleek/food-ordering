import Filter from "@/components/Filter";
import FoodList from "@/components/FoodList";
import { API_URL } from "@/constants/api";
import { IFoodResponse } from "@/schema";
import { IResponse } from "@/schema/api";
import { fetchHandled, handleServerError } from "@/utils/api";

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
  container: "flex min-h-screen flex-col px-4 gap-5 mx-auto sm:w-3/4 mt-24",
  title: "font-bold text-lg",
};
/* eslint-enable max-len */

export const dynamic = 'force-dynamic';

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


  const {
    data: foodData,
    isError,
  } = await fetchHandled<IResponse<IFoodResponse>>(apiUrl.href);

  if (isError) {
    handleServerError();
  }

  const {
    foods,
  } = foodData.data;

  const foodList = (() => {
    if (!foods.length) {
      return (
        <h1>Food is not found, please change your filter</h1>
      );
    }
    return <FoodList initialData={foodData.data} />;

  })();

  return (
    <main className={classes.container}>
      <Filter
        search={search}
        rating={rating}
        category={category}
      />

      {!!foods.length && (
        <h1 className={classes.title}>Discover the best foods &rarr;</h1>
      )}

      {foodList}
    </main>
  );
};

export default Home;