'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";

import NavigationDrawer from "./NavigationDrawer";
import classes from "./classes";
import { ROUTES, ROUTE_MAP } from "./constants";
import CartIcon from "../Icons/CartIcon";
import { API_URL, QUERY_KEY } from "@/constants/api";
import { IUser } from "@/schema";
import { handleApiError } from "@/utils/api";
import { E_RESPONSE_CODE } from "@/schema/api";

const Navbar = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const {
    data: userData,
    isError,
    error,
  } = useQuery<IUser>({
    queryKey: [QUERY_KEY.USER],
    queryFn: async () => {
      const res = await fetch(API_URL.USER);
      const resData = await res.json();

      if (res.status !== E_RESPONSE_CODE.SUCCESS || !resData) {
        // will be catched in react query error
        throw new Error('Failed to fetch api');
      }

      return resData.data;
    },
  });
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const pathname = usePathname();


  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  if (isError) {
    handleApiError(error);
  }

  const toFoodList = () => {
    queryClient.clear();
    router.push('/');
  };


  return (
    <>
      <div className={classes.container}>
        <div className={classes.content}>
          <h1 className={classes.logo} onClick={toFoodList}>Food.</h1>

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
              {!!userData && (
                <>
                  <Link href="/cart">
                    <div className="relative">
                      <CartIcon
                        size={30}
                        title="Cart"
                        className={classes.iconNav(pathname === ROUTE_MAP.CART)}
                      />
                      <span className={classes.cartAmount}>{userData.cart_items}</span>
                    </div>
                  </Link>

                  <Image
                    src={userData.avatar_url}
                    width={30}
                    height={30}
                    alt={userData.name}
                    className="rounded-full hidden sm:block"
                    title={userData.name}
                  />
                </>
              )}

              <Image
                className={classes.mOpenNav}
                src="/assets/menu.svg"
                width={30}
                height={30}
                alt="navigation menu"
                onClick={() => setIsDrawerOpen(true)}
              />
            </div>
          </div>



        </div>

      </div>
      {isDrawerOpen && <NavigationDrawer user={userData} onClose={closeDrawer} />}
    </>
  );
};

export default Navbar;
