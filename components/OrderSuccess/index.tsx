import Link from 'next/link';
import React from 'react';

const classes = {
  title: "w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center gap-5",
  btn: "py-2 text-white bg-orange-600 px-5 rounded-full",
};

const OrderSuccess = () => {
  return (
    <div className={classes.title}>
      <h1>Your Order Has Been Created!</h1>
      <Link href="/">
        <button className={classes.btn}>Back to Home</button>

      </Link>
    </div>
  );
};

export default OrderSuccess;