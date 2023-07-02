import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import classes from "./classes";
import SideDrawer from "../SideDrawer";
import { ROUTES } from "./constants";
import { IUser } from "@/schema";

interface INavigationDrawerProps {
  user: IUser | null;
  onClose: () => void;
}

const NavigationDrawer = ({
  user,
  onClose,
}: INavigationDrawerProps) => {
  const pathname = usePathname();
  return (
    <SideDrawer onClose={onClose}>

      {/* USER PROFILE */}
      {user && (
        <div className="flex gap-2 mt-12">
          <Image
            src={user.avatar_url}
            width={36}
            height={36}
            className="rounded-full h-9"
            alt={user.name}
          />
          <div className="flex flex-col truncate overflow-hidden">
            <h3 className="font-semibold text-sm">{user.name}</h3>
            <span className="text-xs">{user.email}</span>
          </div>
        </div>
      )}

      {/* NAVIGATION LINKS */}
      <div className={classes.mLinks}>
        {ROUTES.map((route) => (
          <Link
            key={route.id}
            href={route.path}
            onClick={onClose}
            className={classes.link(route.path === pathname)}
          >
            {route.name}
          </Link>
        ))}
      </div>
    </SideDrawer>
  );
};

export default NavigationDrawer;