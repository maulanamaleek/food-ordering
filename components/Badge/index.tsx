import React from 'react';
import classes from './classes';

interface IBadgeProps {
  children: string;
}

const Badge = ({
  children,
}: IBadgeProps) => {
  return (
    <div className={classes.badge}>
      {children}
    </div>
  );
};

export default Badge;