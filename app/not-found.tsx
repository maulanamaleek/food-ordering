import Link from 'next/link';
import React from 'react';

/* eslint-disable max-len */
const classes = {
  container: "w-screen h-screen items-center justify-center flex flex-col gap-5",
  title: "text-3xl font-bold",
  subTitle: "text-2xl font-semibold",
  description: "max-w-xs sm:max-w-md text-center",
  btn: "py-1 px-5 bg-orange-600 text-white rounded-full text-lg font-semibold",
};
/* eslint-enable max-len */

const NotFoundPage = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>404</h1>
      <h1 className={classes.subTitle}>Content is Not Found</h1>
      <p className={classes.description}>
        The content you&apos;re looking is not found.
        Discover other contents by clicking button below!
      </p>

      <Link href="/">
        <button
          className={classes.btn}
        >
          Discover Food
        </button>
      </Link>
    </div>
  );
};

export default NotFoundPage;