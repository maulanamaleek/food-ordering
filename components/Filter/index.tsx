'use client';

import Image from "next/image";
import SelectBox from "./SelectBox";
import { useState } from "react";
import MobileFilter from "./MobileFilter";
import { categoryOptions, starOptions } from "./constants";

const Filter = () => {
  const [category, setCategory] = useState("");
  const [star, setStar] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex gap-2">
      <input
        className="px-2 py-1 text-sm rounded-md flex-1 h-8"
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

      <button className="bg-white px-2 py-1 rounded-md h-8 sm:hidden">
        <Image
          onClick={() => setIsDrawerOpen(true)}
          src="assets/filter.svg"
          width={20}
          height={20}
          alt="more filter"
        />
      </button>

      <button className="bg-orange-600 text-white px-2 py-1 rounded-md text-sm h-8">Search</button>


      {isDrawerOpen && <MobileFilter onClose={() => setIsDrawerOpen(false)} />}
    </div>
  );
};

export default Filter;