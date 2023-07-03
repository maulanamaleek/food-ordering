import SummaryCard from "@/components/SummaryCard";
import { API_URL } from "@/constants/api";
import { ISummaryResponse } from "@/schema";
import { IResponse } from "@/schema/api";


const classes = {
  container: "pt-24 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto pb-24",
  title: "text-center font-bold text-xl mb-5 xl:text-2xl",
};

export const dynamic = 'force-dynamic';

const Summary = async () => {
  const res = await fetch(API_URL.SUMMARY);
  const resData = await res.json() as IResponse<ISummaryResponse>;
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Summary</h1>

      <SummaryCard
        orders={resData.data.items}
        total={resData.data.total_price}
      />
    </div>
  );
};

export default Summary;