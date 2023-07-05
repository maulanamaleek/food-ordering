'use client';

import {
  FormEventHandler,
  Fragment,
  useEffect,
  useMemo,
  useState,
} from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";

import SelectBox from "./SelectBox";
import MobileFilter from "./MobileFilter";
import classes from "./classes";
import {
  CATEGORY_FILTER_VAL,
  CATEGORY_PLACEHOLDER_MAP,
  DEFAULT_RATING,
  RATING_FILTER,
  RATING_PLACEHOLDER_MAP,
} from "@/constants/filter";
import { E_FOOD_CATEGORY } from "@/schema";

interface IFilterProps {
  search?: string;
  category?: string;
  rating?: string;
}

const Filter = ({
  search: propSearch,
  category: propCategory,
  rating: propRating,
}: IFilterProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const [category, setCategory] = useState({
    displayName: 'All',
    value: 'all',
  });
  const [rating, setRating] = useState({
    displayName: 'All',
    value: 'all',
  });
  const [search, setSearch] = useState('');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  // hacky state to trigger useMemo element, only update element when user click apply
  const [filterCount, setFilterCount] = useState(1);

  useEffect(() => {
    setSearch(propSearch || '');

    setCategory({
      displayName: propCategory ? CATEGORY_PLACEHOLDER_MAP[propCategory] : 'All',
      value: propCategory ?? 'all',
    });

    setRating({
      displayName: propRating ? RATING_PLACEHOLDER_MAP[propRating] : 'All',
      value: propRating ?? 'all',
    });
  }, [propSearch, propCategory, propRating]);

  useEffect(() => {
    setFilterCount((p) => p + 1);
  }, []);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e?.preventDefault();

    // replace current url with search params
    const url = new URL(location.href);
    url.searchParams.set('category', category.value);
    url.searchParams.set('rating', rating.value);
    queryClient.clear();

    if (!search) {
      url.searchParams.delete('search');
    } else {
      url.searchParams.set('search', search);
    }
    setFilterCount((p) => p + 1);
    router.push(url.href);
  };

  const filterDescElem = useMemo(() => {
    const isNoProp = !propSearch && !propCategory && !propRating;
    const isEmptFilter = !search
      && category.value === E_FOOD_CATEGORY.ALL
      && rating.value === DEFAULT_RATING;

    if (filterCount === 0) {
      return null;
    }
    const elems: JSX.Element[] = [];

    if (isEmptFilter || isNoProp) {
      return null;
    }

    elems.push(
      <Fragment key="filter-desc">Viewing result(s) for</Fragment>
    );

    if (search) {
      elems.push(
        <Fragment key="filter-search">&nbsp;<b>&quot;{search}&quot;</b></Fragment>
      );
    }

    if (category.value !== E_FOOD_CATEGORY.ALL) {
      elems.push(
        <Fragment key="filter-category">
          &nbsp;category: <b>&quot;{category.displayName}&quot;</b>
        </Fragment>
      );
    }

    if (rating.value !== DEFAULT_RATING) {
      elems.push(
        <Fragment key="filter-rating">
          &nbsp;rating: <b>&quot;{rating.displayName}&quot;</b>
        </Fragment>
      );
    }

    return elems;
  }, [filterCount, propSearch, propCategory, propRating]);

  return (
    <>
      <form onSubmit={onSubmit} className="flex gap-2 items-end">
        <input
          className={classes.inputText}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search foods..."
        />

        <SelectBox
          className="hidden sm:block w-32"
          onSelect={setCategory}
          value={category.value}
          options={CATEGORY_FILTER_VAL}
          placeholder={category.displayName}
          label="Category"
        />

        <SelectBox
          className="hidden sm:block w-36"
          onSelect={setRating}
          value={rating.value}
          options={RATING_FILTER}
          placeholder={rating.displayName}
          label="Rating"
        />

        <button type="button" className={classes.openFilterBtn}>
          <Image
            onClick={() => setIsDrawerOpen(true)}
            src="assets/filter.svg"
            width={20}
            height={20}
            alt="more filter"
          />
        </button>

        <button type="submit" className={classes.searchBtn}>Apply</button>
      </form>

      <p
        className="text-sm bg-orange-100 w-fit px-2 py-1 rounded-md"
      >
        &#127829; Click <b>Apply</b> Button to implement search and filter(s)
      </p>

      {/* defining height to reduce Layout Shift a bit */}
      <p className="min-h-8 md:h-8">
        {filterDescElem}
      </p>

      <MobileFilter
        category={category}
        rating={rating}
        setCategory={setCategory}
        setRating={setRating}
        show={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default Filter;