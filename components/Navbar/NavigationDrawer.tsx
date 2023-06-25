import Link from "next/link";
import classes from "./classes";
import SideDrawer from "../SideDrawer";

interface INavigationDrawerProps {
  onClose: () => void;
}

const NavigationDrawer = ({
  onClose,
}: INavigationDrawerProps) => {
  return (
    <SideDrawer onClose={onClose}>

      <div className={classes.mLinks}>
        <Link href="/" className={classes.linkSelected}>Discover</Link>
        <Link href="/">Cart</Link>
      </div>
    </SideDrawer>
  )
}

export default NavigationDrawer;