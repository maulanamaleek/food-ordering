/** Tailwind CSS Classes */

/* eslint-disable max-len */
const classes = {

  selectContent: "h-8 bg-white flex items-center px-2 rounded-md items-center gap-2 justify-between cursor-pointer",
  selectValue: "select-none text-sm overflow-ellipsis overflow-hidden flex-1",
  selectOption: (selected: boolean) =>
    `hover:text-orange-600 cursor-pointer select-none ${selected ? 'text-orange-600 font-semibold' : ''}`,
  ulFloat: "bg-white px-2 py-1 rounded-md mt-2 absolute border z-10 w-full sm:w-auto",

  applyFilterContainer: "fixed bottom-0 h-16 bg-white z-20 w-56 right-0 flex items-center px-5",
  applyFilterBtn: "bg-orange-600 font-semibold text-white text-sm py-2 rounded-md w-full",
}

/* eslint-enable max-len */

export default classes;