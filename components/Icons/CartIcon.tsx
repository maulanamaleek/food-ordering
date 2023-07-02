import { HTMLAttributes } from "react";

interface ICartIconProps extends HTMLAttributes<HTMLOrSVGElement> {
  size: number;
  className: string;
}

const CartIcon = ({
  size,
  className,
  ...attributes
}: ICartIconProps) => {
  return (
    <svg
      {...attributes}
      xmlns="http://www.w3.org/2000/svg"
      height="48"
      viewBox="0 -960 960 960"
      width={size}
      className={className}
    >
      <path
        // eslint-disable-next-line max-len
        d="M196-120q-16 0-28.5-9.5T151-154L38-561q-4-15 5.5-27T69-600h200l185-270q5-6 11-9.5t14-3.5q8 0 14 3.5t11 9.5l184 270h205q15 0 24.5 12t5.5 27L809-154q-4 15-16.5 24.5T764-120H196Zm10-60h548l101-360H106l100 360Zm274-120q25 0 42.5-17.5T540-360q0-25-17.5-42.5T480-420q-25 0-42.5 17.5T420-360q0 25 17.5 42.5T480-300ZM342-600h273L479-800 342-600ZM206-180h548-548Z"
      />
    </svg>
  );
};

export default CartIcon;