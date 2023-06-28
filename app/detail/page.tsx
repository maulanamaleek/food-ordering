import Image from "next/image";
import DetailActions from "./DetailActions";

const DetailPage = () => {
  return (
    <div className="pt-16 sm:pt-24 min-h-screen sm:w-3/4 lg:w-1/2 mx-auto pb-24">
      <div className="w-full h-56 relative overflow-hidden sm:rounded-t-2xl">
        <Image
          src="https://img.delicious.com.au/1DhZnhaT/del/2022/08/parmesan-crumbed-chicken-schnitzel-fried-eggs-and-apple-cabbage-slaw-173352-2.jpg"
          fill
          alt="banner"
          className="object-cover"
        />
      </div>

      <div className="w-full shadow-lg bg-white rounded-3xl -translate-y-5 px-5 py-5">
        <h1 className="font-bold text-xl">Food Name</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ipsam doloremque deleniti quo earum nihil veniam laboriosam adipisci dicta? Earum voluptatum amet minus temporibus sunt dignissimos eaque eius facere repellat.</p>

        <DetailActions />
      </div>
    </div>
  );
};

export default DetailPage;