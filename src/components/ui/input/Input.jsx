import { useContext } from 'react';
import clsx from 'clsx';

import { IdContext } from '../inputBlock/InputBlock';

import './input.scss';

export default function Input({
  type = 'text',
  name = 'input name',
  label = 'label text',
  className,
  prefixValue,
  suffixValue,
  error,
  ...props
}) {
  const id = useContext(IdContext);
  const isInputSmall = type === 'radio' || type === 'checkbox';
  const wrapperClasses = clsx('input-wrapper', error && 'error');
  const inputClasses = clsx('input', isInputSmall && 'small', className);

  if (type === 'radio' || type === 'checkbox') {
    return (
      <div className="input-wrapper">
        <label className="label-radio">
          <input
            type={type}
            name={name}
            id={id}
            className={inputClasses}
            {...props}
          />
          {label}
        </label>
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      {prefixValue && <div className="prefix">{prefixValue}</div>}
      <input
        type={type}
        name={name}
        id={id}
        className={inputClasses}
        {...props}
      />
      {suffixValue && <span className="suffix">{suffixValue}</span>}
    </div>
  );
}
