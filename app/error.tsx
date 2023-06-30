'use client';

import Image from "next/image";

const Error = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center'>
      <Image
        src="/assets/Err_500.png"
        width={400}
        height={450}
        alt="Error"
      />
    </div>
  );
};

export default Error;