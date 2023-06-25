'use client'
import { useState } from "react";
import SideDrawer from "../SideDrawer";
import SelectBox from "./SelectBox";
import classes from "./classes";
import { categoryOptions, starOptions } from "./constants";

interface IMobileFilterProps {
  onClose: () => void;
}

const MobileFilter = ({
  onClose,
}: IMobileFilterProps) => {
  const [category, setCategory] = useState("All");
  const [star, setStar] = useState("All")

  return (
    <SideDrawer onClose={onClose}>
      <div className="relative top-14">
        <h3 className="font-semibold mb-1">Category</h3>
        <SelectBox
          options={categoryOptions}
          value={category}
          onSelect={setCategory}
          className="border rounded-md"
        />

        <h3 className="font-semibold mb-1 mt-5">Rating</h3>
        <SelectBox
          options={starOptions}
          value={star}
          onSelect={setStar}
          className="border rounded-md"
        />
      </div>

      <div className={classes.applyFilterContainer}>
        <button onClick={onClose} className={classes.applyFilterBtn}>Apply Filter</button>
      </div>
    </SideDrawer>
  )
}

export default MobileFilter;