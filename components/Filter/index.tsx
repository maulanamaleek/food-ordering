'use client'

import Image from "next/image";
import SelectBox from "./SelectBox";
import { useState } from "react";

const Filter = () => {
  const [category, setCategory] = useState("");

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
        placeholder="Category"
      />

      <button className="bg-white px-2 py-1 rounded-md h-8 sm:hidden">
        <Image
          src="assets/filter.svg"
          width={20}
          height={20}
          alt="more filter"
        />
      </button>
      <button className="bg-orange-600 text-white px-2 py-1 rounded-md text-sm h-8">Search</button>
    </div>
  )
}

export default Filter;