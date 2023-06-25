'use client'
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import NavigationDrawer from "./NavigationDrawer";
import classes from "./classes";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const closeDrawer = () => {
    setIsDrawerOpen(false);
  }

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1 className={classes.logo}>Food.</h1>

        <div className={classes.links}>
          <Link href="/" className={classes.linkSelected}>Discover Menus</Link>
          <Link href="/">Cart</Link>
        </div>

        <Image
          className={classes.mOpenNav}
          src="assets/menu.svg"
          width={30}
          height={30}
          alt="navigation menu"
          onClick={() => setIsDrawerOpen((prev) => !prev)}
        />
      </div>

      {isDrawerOpen && <NavigationDrawer onClose={closeDrawer} />}
    </div>
  )
}

export default Navbar;
