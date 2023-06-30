'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState } from "react";

import NavigationDrawer from "./NavigationDrawer";
import classes from "./classes";
import { ROUTES, ROUTE_MAP } from "./constants";
import CartIcon from "../Icons/CartIcon";

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

          <div className="flex items-center gap-5">
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

            <div className="flex items-center gap-3">
              <Link href="/cart">
                <div className="relative">
                  <CartIcon size={30} className={classes.iconNav(pathname === ROUTE_MAP.CART)} />
                  <span className={classes.cartAmount}>99</span>
                </div>
              </Link>

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



        </div>

      </div>
      {isDrawerOpen && <NavigationDrawer onClose={closeDrawer} />}
    </>
  );
};

export default Navbar;
