import Image from "next/image";

import classes from "./classes";
import { formatCurrency } from "@/utils";
import Link from "next/link";
import { IFood } from "@/schema";
import Badge from "../Badge";

interface IFoodCardProps {
  data: IFood;
}

const FoodCard = ({
  data,
}: IFoodCardProps) => {
  const {
    name,
    price,
    imageUrl,
    is_available,
    ordered_amount,
    avg_rating,
  } = data;

  const cardElem = (
    <>
      <div className="bg-gray-300 w-full h-36 relative">
        <Image
          src={imageUrl}
          fill
          alt={name}
          className="object-cover"
        />
      </div>

      <div className={classes.content}>
        <h3 className={classes.title}>{name}</h3>

        <span className={classes.price}>{formatCurrency(price, 'IDR')}</span>

        <div className={classes.review}>
          <div className="flex gap-1">
            <Image
              src="assets/star.svg"
              width={15}
              height={15}
              alt="likes"
            />
            <span className="text-xs">{avg_rating}</span>
          </div>

          {/* TODO: handle `s` for plural */}
          <span className="text-xs">{ordered_amount} purchases</span>
        </div>
      </div>
    </>
  );

  if (!is_available) {
    return (
      <div className="relative">
        <Badge>No Stock</Badge>
        <div className={`${classes.container} grayscale`}>
          {cardElem}
        </div>
      </div>
    );
  }

  return (
    <Link href={`/detail/${data.id}`}>
      <div className={classes.container}>
        {cardElem}
      </div>
    </Link>
  );
};

export default FoodCard;