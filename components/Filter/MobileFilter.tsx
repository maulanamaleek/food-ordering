import SideDrawer from "../SideDrawer";
import SelectBox from "./SelectBox";
import classes from "./classes";
import { CATEGORY_FILTER_VAL, RATING_FILTER } from "@/constants/filter";
import { IFoodFilterState } from "@/schema";

interface IMobileFilterProps {
  show: boolean;
  category: IFoodFilterState;
  rating: IFoodFilterState;
  onClose: () => void;
  onSubmit: Function;
  setCategory: (val: IFoodFilterState) => void;
  setRating: (val: IFoodFilterState) => void;
}

const MobileFilter = ({
  category,
  rating,
  show,
  onClose,
  onSubmit,
  setCategory,
  setRating,
}: IMobileFilterProps) => {

  const handleSubmit = () => {
    onSubmit();
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
          value={rating.value}
          onSelect={setRating}
          placeholder={rating.displayName}
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