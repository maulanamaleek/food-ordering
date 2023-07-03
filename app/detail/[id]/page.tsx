import Image from "next/image";
import DetailActions from "./DetailActions";
import { IFood } from "@/schema";
import { IResponse } from "@/schema/api";
import { API_URL } from "@/constants/api";

// TODO: implement dynamic metadata

interface IDetailPageProps {
  params: {
    id: string;
  }
}

const DetailPage = async ({
  params,
}: IDetailPageProps) => {
  // TODO: handle RESPONSE ERROR
  const res = await fetch(`${API_URL.FOOD}/${params.id}`);
  const resData = await res.json() as IResponse<IFood>;

  // TODO: handle not found
  if (!resData) {
    return null;
  }

  const {
    imageUrl,
    name,
    description,
  } = resData.data;

  return (
    <div className="pt-16 sm:pt-24 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto pb-24">
      <div className="w-full h-56 relative overflow-hidden sm:rounded-t-2xl">
        <Image
          src={imageUrl}
          fill
          alt="banner"
          className="object-cover"
        />
      </div>

      <div className="w-full shadow-lg bg-white rounded-3xl -translate-y-5 px-5 py-5">
        <h1 className="font-bold text-xl">{name}</h1>
        <p>{description}</p>

      </div>

      <DetailActions data={resData.data} />
    </div>
  );
};

export default DetailPage;