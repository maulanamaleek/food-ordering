import Image from "next/image";

import classes from "./classes";
import { formatCurrency } from "@/utils";

interface IFoodCardProps {
  title: string;
  price: number;
  amount_purchased: number;
  rating: number;
  imgUrl?: string;
}

const FoodCard = ({
  title,
  price,
  amount_purchased,
  rating,
}: IFoodCardProps) => {
  return (
    <div className={classes.container}>
      {/* TODO: Change bellow with image later */}
      <div className="bg-green-400 w-full h-36" />

      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>

        <span className={classes.price}>{formatCurrency(price, 'IDR')}</span>

        <div className={classes.review}>
          <div className="flex gap-1">
            <Image
              src="assets/star.svg"
              width={15}
              height={15}
              alt="likes"
            />
            <span className="text-xs">{rating}</span>
          </div>

          {/* TODO: handle `s` for plural */}
          <span className="text-xs">{amount_purchased} purchases</span>
        </div>
      </div>
    </div>
  )
}

export default FoodCard;