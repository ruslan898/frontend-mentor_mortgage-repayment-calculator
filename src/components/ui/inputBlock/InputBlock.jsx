import { useId, createContext } from 'react';
import clsx from 'clsx';

import './inputBlock.scss';

const IdContext = createContext();

export default function InputBlock({ label, children, className}) {
  const id = useId();
  const classes = clsx('input-block', className);

  return (
    <IdContext.Provider value={id}>
      <div className={classes}>
        {label && <label htmlFor={id}>{label}</label>}
        {children}
      </div>
    </IdContext.Provider>
  );
}

export { IdContext };
