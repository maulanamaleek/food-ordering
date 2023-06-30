'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

import NavigationDrawer from "./NavigationDrawer";
import classes from "./classes";
import { ROUTES } from "./constants";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <Link href="/" className={classes.logo}>Food.</Link>

          <div className={classes.links}>
            {ROUTES.map((route) => (
              <Link
                key={route.id}
                href={route.path}
                className={classes.link(route.path === pathname)}
              >
                {route.name}
              </Link>
            ))}
          </div>

          <Image
            className={classes.mOpenNav}
            src="assets/menu.svg"
            width={30}
            height={30}
            alt="navigation menu"
            onClick={() => setIsDrawerOpen(true)}
          />
        </div>

      </div>
      {isDrawerOpen && <NavigationDrawer onClose={closeDrawer} />}
    </>
  );
};

export default Navbar;
