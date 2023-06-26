'use client';

import Image from "next/image";
import SelectBox from "./SelectBox";
import { useState } from "react";
import MobileFilter from "./MobileFilter";
import { categoryOptions, starOptions } from "./constants";
import classes from "./classes";

const Filter = () => {
  const [category, setCategory] = useState("");
  const [star, setStar] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div className="flex gap-2">
        <input
          className={classes.inputText}
          placeholder="Search foods..."
        />

        <SelectBox
          className="hidden sm:block"
          onSelect={setCategory}
          value={category}
          options={categoryOptions}
          placeholder="Category"
        />

        <SelectBox
          className="hidden sm:block w-36"
          onSelect={setStar}
          value={star}
          options={starOptions}
          placeholder="Rating"
        />

        <button className={classes.openFilterBtn}>
          <Image
            onClick={() => setIsDrawerOpen(true)}
            src="assets/filter.svg"
            width={20}
            height={20}
            alt="more filter"
          />
        </button>

        <button className={classes.searchBtn}>Search</button>
      </div>

      {isDrawerOpen && <MobileFilter onClose={() => setIsDrawerOpen(false)} />}
    </>
  );
};

export default Filter;