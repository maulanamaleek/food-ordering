'use client';

import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";
import { useEffect } from "react";

import { IFoodResponse } from "@/schema";
import FoodCard from "../FoodCard";
import { QUERY_KEY } from "@/constants/api";
import { fetchHandled } from "@/utils/api";
import LoadingOverlay from "../LoadingOverlay";
import { IResponse } from "@/schema/api";

interface IFoodListProps {
  initialData: IFoodResponse;
}

/* eslint-disable max-len */
const classes = {
  foodList: "flex flex-wrap w-full justify-between sm:justify-center lg:justify-start gap-x-2 gap-y-5 pb-10 xl:gap-x-2 xl:gap-y-8",
  seeMore: "mb-20 bg-orange-600 text-white w-fit mx-auto px-5 py-1 rounded-md",
};
/* eslint-enable max-len */

const FoodList = ({
  initialData,
}: IFoodListProps) => {
  const queryClient = useQueryClient();
  const {
    data: foodsData,
    fetchNextPage,
    isFetching,
    isError,
    hasNextPage,
  } = useInfiniteQuery<IFoodResponse>(
    [QUERY_KEY.FOOD],
    async ({ pageParam = 0 }) => {
      const urlObj = new URL(location.origin + '/api/foods');
      const currSearchParams = new URL(location.href).searchParams;
      currSearchParams.forEach((v, k) => {
        urlObj.searchParams.set(k, v);
      });

      urlObj.searchParams.set('page', pageParam.toString());
      const {
        data,
        isError,
      } = await fetchHandled<IResponse<IFoodResponse>>(urlObj.href);

      if (isError) {
        // will catch in `react-query`
        throw new Error('Fetch Error');
      }

      return data.data;
    },
    {
      getNextPageParam: (lastPage, pages) => {
        return lastPage.has_next ? pages.length : undefined;
      },
      initialData: {
        pages: [initialData],
        pageParams: [0],
      },
      keepPreviousData: true,
    }
  );

  useEffect(() => {
    queryClient.clear();
  }, [initialData, queryClient]);


  if (isFetching) {
    return <LoadingOverlay />;
  }

  if (isError) {
    return (
      <Image
        src="/assets/Err_500.png"
        width={400}
        height={450}
        alt="Error"
        className="mx-auto"
      />
    );
  }

  const handleNext = () => {
    fetchNextPage();
  };

  const foodListElem = (() => {
    return foodsData?.pages?.map((page) => {
      return page.foods.map((food) => (
        <FoodCard
          key={food.id}
          data={food}
        />
      ));
    });
  })();

  return (
    <>
      <div className={classes.foodList}>
        {foodListElem}
      </div>

      {hasNextPage && (
        <button className={classes.seeMore} onClick={handleNext}>
          See More 	&darr;
        </button>
      )}
    </>
  );
};

export default FoodList;