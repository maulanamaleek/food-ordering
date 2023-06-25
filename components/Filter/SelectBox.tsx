'use client';

import Image from "next/image";
import { useState } from "react";
import classes from "./classes";

interface ISelectBoxProps {
  className?: string;
  placeholder?: string;
  value: string;
  options?: string[];
  onSelect: (value: string) => void;
}

const items = ['All', 'Fries', 'Noodles', 'Dessert', 'Diet']

const SelectBox = ({
  className,
  placeholder,
  value,
  options = items,
  onSelect,
}: ISelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value: string) => {
    onSelect(value);
    setIsOpen(false);
  }

  const placeholderElem = (() => {
    if (value) {
      return <span className={classes.selectValue}>{value}</span>
    }

    return <span className="select-none text-gray-500 text-sm">{placeholder}</span>
  })()

  return (
    <div className={className}>
      <div
        className={classes.selectContent}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {placeholderElem}

        {/* TODO: CHEVRON DOWN ICON LATER */}
        <Image
          src="assets/expand.svg"
          width={20}
          height={25}
          alt="expand more"
        />
      </div>

      {isOpen && (
        <ul className="bg-white px-2 py-1 rounded-md mt-2 absolute">
          {options.map((i) => (
            <li
              key={i} className="hover:text-orange-600 cursor-pointer select-none"
              onClick={() => handleSelect(i)}
            >
              {i}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SelectBox;