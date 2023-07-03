'use client';

import { useEffect, useState } from "react";

const MOBILE_SCREEN_THRESHOLD = 400;

const useDetectMobileScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < MOBILE_SCREEN_THRESHOLD);

    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth < MOBILE_SCREEN_THRESHOLD);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setIsMobile(window.innerWidth < MOBILE_SCREEN_THRESHOLD);
      });
    };
  }, []);

  return isMobile;
};

export default useDetectMobileScreen;