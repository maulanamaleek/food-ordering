import { Metadata } from "next";

import OrderCard from "@/components/OrderCard";
import { API_URL } from "@/constants/api";
import { IHistory } from "@/schema";
import { IResponse } from "@/schema/api";
import { fetchHandled, handleServerError } from "@/utils/api";

export const metadata: Metadata = {
  title: 'Order History - Food Ordering App',
  description: 'History of order from our app',
};

export const dynamic = 'force-dynamic';

const History = async () => {
  const {
    data: historyRes,
    isError,
  } = await fetchHandled<IResponse<IHistory[]>>(API_URL.HISTORY);
  const history = historyRes.data;

  if (isError) {
    // will catch in `app/error.tsx` error boundary
    handleServerError();
  }

  return (
    <div className="pt-24 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto">
      <h1 className="text-center font-bold text-xl xl:text-2xl">History</h1>

      <div className="mt-5 px-5 flex flex-col gap-4">
        {history?.map((cartItem) => (
          <OrderCard
            key={cartItem.id}
            id={cartItem.id}
            name={cartItem.name}
            price={cartItem.price}
            description={cartItem.description}
            amount={cartItem.amount}
            imageUrl={cartItem.imageUrl}
            orderedAt={cartItem.ordered_date}
            viewOnly
          />
        ))}
      </div>
    </div>
  );
};

export default History;