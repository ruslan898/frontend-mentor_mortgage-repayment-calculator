import Title from '../title/Title';
import Link from '../link/Link';
import InputBlock from '../inputBlock/InputBlock';
import Input from '../input/Input';
import Button from '../button/Button';

import './form.scss';

import calculatorIcon from '/src/assets/images/icon-calculator.svg';

export default function Form({values, errors, onInputChange, onFormSubmit, onClear}) {
  return (
    <form action="#" className="form" onSubmit={onFormSubmit}>
      <header className="header">
        <Title>Mortgage Calculator</Title>
        <Link onClick={onClear}>Clear all</Link>
      </header>
      <div className="input-section">
        <InputBlock label="Mortgage Amount" className="full-width">
          <Input
            type="number"
            name="amount"
            label="Mortgage Amount"
            prefix="£"
            value={values.amount}
            onChange={onInputChange}
            error={errors.amount}
          />
          {errors.amount && <p className="error-message">{errors.amount}</p>}
        </InputBlock>
        <InputBlock label="Mortgage Term">
          <Input
            type="number"
            name="term"
            label="Mortgage Term"
            suffix="years"
            value={values.term}
            onChange={onInputChange}
            error={errors.term}
          />
          {errors.term && <p className="error-message">{errors.term}</p>}
        </InputBlock>

        <InputBlock label="Interest Rate">
          <Input
            type="number"
            name="rate"
            label="Interest Rate"
            suffix="%"
            value={values.rate}
            onChange={onInputChange}
            error={errors.rate}
          />
          {errors.rate && <p className="error-message">{errors.rate}</p>}
        </InputBlock>

        <InputBlock label="Mortgage Type" className="full-width">
          <Input
            type="radio"
            name="type"
            value="repayment"
            label="Repayment"
            onChange={onInputChange}
            checked={values.type === 'repayment'}
          />
          <Input
            type="radio"
            name="type"
            value="interest"
            label="Interest Only"
            onChange={onInputChange}
            checked={values.type === 'interest'}
          />
        </InputBlock>
      </div>
      <Button type="submit">
        <img src={calculatorIcon} alt="Calculator icon" />
        Calculate Repayments
      </Button>
    </form>
  );
}
