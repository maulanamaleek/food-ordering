'use client';
import { useState } from "react";
import SideDrawer from "../SideDrawer";
import SelectBox from "./SelectBox";
import classes from "./classes";
import { CATEGORY_FILTER_VAL, RATING_FILTER } from "@/constants/filter";

interface IMobileFilterProps {
  show: boolean;
  onClose: () => void;
  // onSearch: () => void;
}

const MobileFilter = ({
  show,
  onClose,
  // onSearch,
}: IMobileFilterProps) => {
  const [category, setCategory] = useState({
    displayName: 'All',
    value: 'all',
  });
  const [star, setStar] = useState({
    displayName: 'All',
    value: 'all',
  });

  const handleSubmit = () => {
    // onSearch();
    onClose();
  };

  if (!show) {
    return null;
  }

  return (
    <SideDrawer onClose={onClose}>
      <div className="relative top-14">
        <SelectBox
          options={CATEGORY_FILTER_VAL}
          value={category.value}
          onSelect={setCategory}
          placeholder={category.displayName}
          className="mb-5"
          label="Category"
        />

        <SelectBox
          options={RATING_FILTER}
          value={star.value}
          onSelect={setStar}
          placeholder={star.displayName}
          label="Rating"
        />
      </div>

      <div className={classes.applyFilterContainer}>
        <button onClick={handleSubmit} className={classes.applyFilterBtn}>Apply Filter</button>
      </div>
    </SideDrawer>
  );
};

export default MobileFilter;