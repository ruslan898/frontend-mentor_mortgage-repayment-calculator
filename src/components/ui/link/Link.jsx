import clsx from 'clsx';

import './link.scss';

export default function Link({ children, className, ...props }) {
  const classes = clsx('link', className);

  return (
    <a className={classes} {...props} aria-label="Clear form">
      {children}
    </a>
  );
}
