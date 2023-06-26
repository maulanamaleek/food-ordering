/** Tailwind CSS classes */

const classes = {
  container: "w-full bg-white fixed top-0",
  content: "w-full md:w-3/4 p-4 flex items-center justify-between mx-auto",
  links: "hidden sm:flex gap-5",
  logo: "font-bold text-xl xl:text-3xl cursor-pointer select-none",
  linkSelected: "text-orange-600 font-semibold",

  // mobile only
  mDrawerOverlay: "bg-gray-500 bg-opacity-50 fixed w-full h-full top-0 left-0",
  mOpenNav: "sm:hidden",
  mDrawerContainer: "w-56 h-full bg-white fixed right-0 px-5",
  mCloseNav: "fixed top-4 right-4 z-30",
};

export default classes;