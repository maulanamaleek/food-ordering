import Image from "next/image";

import classes from "./classes";
import { formatCurrency } from "@/utils";
import Link from "next/link";

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
    <Link href="detail">

      <div className={classes.container}>
        {/* TODO: Change bellow with image later */}
        <div className="bg-gray-300 w-full h-36 relative">
          <Image
            src="https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
            fill
            alt="banner"
            className="object-cover"
          />
        </div>

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
    </Link>
  );
};

export default FoodCard;