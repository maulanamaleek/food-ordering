import { MutableRefObject, useEffect } from "react";

const useClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  cb: () => void,
) => {

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {

      if (!ref.current || !event.target) {
        return;
      }
      if (!ref.current.contains(event.target as Node)) {
        cb();
      }
    }


    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, cb]);
};

export default useClickOutside;