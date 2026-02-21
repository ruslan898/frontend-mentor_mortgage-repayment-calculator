import clsx from 'clsx';

import './link.scss';

export default function Link({ children, className }) {
  const classes = clsx('link', className);

  return (
    <a href="#" className={classes} aria-label="Clear form">
      {children}
    </a>
  );
}
