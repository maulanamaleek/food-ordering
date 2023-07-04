'use client';

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import classes from "./classes";
import useClickOutside from "@/hooks/useClickOutside";
import { IFoodFilter } from "@/schema";

interface ISelectBoxProps {
  className?: string;
  placeholder?: string;
  value: string;
  options: IFoodFilter[];
  label: string;
  onSelect: (value: { displayName: string, value: string }) => void;
}

const DEFAULT_VALUE = 'all';

const SelectBox = ({
  className,
  placeholder,
  value,
  options,
  label,
  onSelect,
}: ISelectBoxProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [displayName, setDisplayName] = useState('');
  const optionRef = useRef<HTMLDivElement | null>(null);
  useClickOutside(optionRef, () => setIsOpen(false));

  const handleSelect = (opt: IFoodFilter) => {
    onSelect({
      displayName: opt.displayName,
      value: opt.value,
    });
    setDisplayName(opt.displayName);
    setIsOpen(false);
  };

  useEffect(() => {
    if (value === DEFAULT_VALUE) {
      setDisplayName('');
    }
  }, [value]);

  const placeholderElem = (() => {
    if (displayName) {
      return <span className={classes.selectValue}>{displayName}</span>;
    }

    return <span className="select-none text-gray-500 text-sm">{placeholder}</span>;
  })();

  return (
    <div ref={optionRef} className={className}>
      <span className="font-semibold text-sm lg:text-base truncate w-full">{label}</span>
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
          {options.map((option) => (
            <li
              key={option.id}
              className={classes.selectOption(value === option.value)}
              onClick={() => handleSelect(option)}
            >
              {option.displayName}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
};

export default SelectBox;