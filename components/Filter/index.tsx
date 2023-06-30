'use client';

import Image from "next/image";
import SelectBox from "./SelectBox";
import { FormEventHandler, useEffect, useState } from "react";
import MobileFilter from "./MobileFilter";
import classes from "./classes";
import { CATEGORY_FILTER_VAL, CATEGORY_PLACEHOLDER_MAP, RATING_FILTER, RATING_PLACEHOLDER_MAP } from "@/constants/filter";
import { useRouter } from "next/navigation";

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

  useEffect(() => {
    !!propSearch && setSearch(propSearch);

    !!propCategory && setCategory({
      displayName: CATEGORY_PLACEHOLDER_MAP[propCategory] || 'Select',
      value: propCategory,
    });

    !!propRating && setRating({
      displayName: RATING_PLACEHOLDER_MAP[propRating] || 'Select',
      value: propRating,
    });
  }, [propSearch, propCategory, propRating]);

  const onSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // replace current url with search params
    const url = new URL(location.href);
    url.searchParams.set('category', category.value);
    url.searchParams.set('rating', rating.value);
    url.searchParams.set('search', search);
    router.replace(url.href);
  };

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

        <button type="submit" className={classes.searchBtn}>Search</button>
      </form>

      <MobileFilter
        show={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
};

export default Filter;