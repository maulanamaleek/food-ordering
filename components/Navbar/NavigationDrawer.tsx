import Image from "next/image";
import Link from "next/link";
import classes from "./classes";

interface INavigationDrawerProps {
  onClose: () => void;
}

const NavigationDrawer = ({
  onClose,
}: INavigationDrawerProps) => {
  return (
    <div className={classes.mDrawerOverlay}>
      <div className={classes.mDrawerContainer}>
        <Image
          className={classes.mCloseNav}
          onClick={onClose}
          src="assets/close.svg"
          width={30}
          height={30}
          alt="close navigation"
        />

        <div className={classes.mLinks}>
          <Link href="/" className={classes.linkSelected}>Discover</Link>
          <Link href="/">Cart</Link>
        </div>
      </div>
    </div>
  )
}

export default NavigationDrawer;