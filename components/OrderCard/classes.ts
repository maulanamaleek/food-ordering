/** Tailwind CSS Classes */

/* eslint-disable max-len */
const classes = {
  container: "bg-white rounded-md p-2 shadow-md flex gap-2",
  foodImage: "w-20 h-20 bg-blue-500 relative overflow-hidden rounded-md",
  actions: "w-24 flex flex-col justify-center items-end gap-2",
  totalPrice: "font-semibold text-orange-600 text-sm",
  orderAdjustNum: "px-2 bg-slate-200 rounded-md",

  overlay: "fixed top-0 left-0 h-full w-full bg-gray-600 bg-opacity-40 z-40 flex items-center justify-center",
  modalContainer: "w-3/4 sm:w-64 p-5 flex flex-col gap-6 bg-white rounded-md",
  cancelBtn: "py-1 bg-slate-200 rounded-md px-2 text-sm",
  confirmBtn: "py-1 bg-red-500 rounded-md px-2 text-white text-sm",
  confirmActions: "flex gap-5 items-center justify-center",
};

/* eslint-enable max-len */

export default classes;