/** Tailwind CSS classes */

/* eslint-disable max-len */
const classes = {
  container: "w-full bg-white fixed flex top-0 z-20 h-16 items-center",
  content: "w-full md:w-3/4 px-4 flex items-center justify-between mx-auto",
  links: "hidden sm:flex gap-5",
  logo: "font-bold text-xl xl:text-3xl cursor-pointer select-none",
  link: (selected: boolean) => `md:text-lg xl:text-lg 2xl:text-xl ${selected ? 'text-orange-600 font-semibold' : ''}`,
  iconNav: (selected: boolean) => `${selected ? 'fill-orange-600' : ''}`,
  cartAmount: "absolute w-5 h-5 flex items-center justify-center top-1 -right-2 bg-red-500 px-1 rounded-full text-xs text-white",

  // mobile only
  mOpenNav: "sm:hidden cursor-pointer",
  mLinks: "relative top-10 flex gap-4 flex-col",
};
/* eslint-enable max-len */

export default classes;