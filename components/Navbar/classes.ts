/** Tailwind CSS classes */

const classes = {
  container: "w-full bg-white fixed top-0 z-20",
  content: "w-full md:w-3/4 p-4 flex items-center justify-between mx-auto",
  links: "hidden sm:flex gap-5",
  logo: "font-bold text-xl xl:text-3xl cursor-pointer select-none",
  link: (selected: boolean) => `md:text-lg xl:text-2xl ${selected ? 'text-orange-600 font-semibold' : ''}`,

  // mobile only
  mOpenNav: "sm:hidden",
  mLinks: "relative top-14 flex gap-4 flex-col",
};

export default classes;