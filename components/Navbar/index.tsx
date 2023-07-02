'use client';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useEffect, useState } from "react";

import NavigationDrawer from "./NavigationDrawer";
import classes from "./classes";
import { ROUTES, ROUTE_MAP } from "./constants";
import CartIcon from "../Icons/CartIcon";
import { API_URL } from "@/constants/api";
import { IUser } from "@/schema";
import { handleApiError } from "@/utils/api";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<IUser | null>(null);
  const pathname = usePathname();

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  useEffect(() => {
    fetch(API_URL.USER)
      .then((res) => res.json())
      .then((data) => setUserInfo(data.data))
      .catch(handleApiError);
  }, []);

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

            <div className="flex items-center gap-5">
              {!!userInfo && (
                <>
                  <Link href="/cart">
                    <div className="relative">
                      <CartIcon
                        size={30}
                        title="Cart"
                        className={classes.iconNav(pathname === ROUTE_MAP.CART)}
                      />
                      <span className={classes.cartAmount}>{userInfo.cart_items}</span>
                    </div>
                  </Link>

                  <Image
                    src={userInfo.avatar_url}
                    width={30}
                    height={30}
                    alt={userInfo.name}
                    className="rounded-full hidden sm:block"
                    title={userInfo.name}
                  />
                </>
              )}

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
      {isDrawerOpen && <NavigationDrawer user={userInfo} onClose={closeDrawer} />}
    </>
  );
};

export default Navbar;
