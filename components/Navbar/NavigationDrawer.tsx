import Link from "next/link";

import classes from "./classes";
import SideDrawer from "../SideDrawer";
import { ROUTES } from "./constants";
import { usePathname } from "next/navigation";

interface INavigationDrawerProps {
  onClose: () => void;
}

const NavigationDrawer = ({
  onClose,
}: INavigationDrawerProps) => {
  const pathname = usePathname();
  return (
    <SideDrawer onClose={onClose}>

      <div className={classes.mLinks}>
        {ROUTES.map((route) => (
          <Link
            key={route.id}
            href={route.path}
            onClick={onClose}
            className={route.path === pathname ? classes.linkSelected : undefined}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </SideDrawer>
  );
};

export default NavigationDrawer;