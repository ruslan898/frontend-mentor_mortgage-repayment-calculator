import clsx from 'clsx';

import './button.scss';

export default function Button({ className, children, ...props }) {
  const classes = clsx('btn', className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
