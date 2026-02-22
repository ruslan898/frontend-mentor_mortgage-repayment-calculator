import { useContext } from 'react';
import clsx from 'clsx';

import { IdContext } from '../inputBlock/InputBlock';

import './input.scss';

export default function Input({
  type = 'text',
  name = 'input name',
  label = 'label text',
  className,
  prefix,
  suffix,
  ...props
}) {
  const id = useContext(IdContext);
  const isInputSmall = type === 'radio' || type === 'checkbox';
  const classes = clsx('input', isInputSmall && 'small', className);

  if (type === 'radio' || type === 'checkbox') {
    return (
      <div className="input-wrapper">
        <label className='label-radio'>
          <input type={type} name={name} id={id} className={classes} {...props} />
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className="input-wrapper">
      {prefix && <div className="prefix">{prefix}</div>}
      <input type={type} name={name} id={id} className={classes} {...props} />
      {suffix && <span className="suffix">{suffix}</span>}
    </div>
  );
}
