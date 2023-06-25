'use client';

import Image from "next/image";
import { useRef, useState } from "react";
import classes from "./classes";
import useClickOutside from "@/hooks/useClickOutside";

interface ISelectBoxProps {
  className?: string;
  placeholder?: string;
  value: string;
  options: string[];
  onSelect: (value: string) => void;
}

const SelectBox = ({
  className,
  placeholder,
  value,
  options,
  onSelect,
}: ISelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(optionRef, () => setIsOpen(false))

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
    <div ref={optionRef} className={className}>
      <div
        className={classes.selectContent}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {placeholderElem}

        <Image
          src="assets/expand.svg"
          width={20}
          height={25}
          alt="expand more"
        />
      </div>

      {isOpen && (
        <ul className={classes.ulFloat}>
          {options.map((i) => (
            <li
              key={i}
              className={classes.selectOption(value === i)}
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