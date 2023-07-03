import Image from "next/image";
import classes from "./classes";

interface ISideDrawerProps {
  onClose: () => void;
  children: React.ReactNode;
}

const SideDrawer = ({
  onClose,
  children,
}: ISideDrawerProps) => {
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

        {children}
      </div>
    </div>
  );
};

export default SideDrawer;