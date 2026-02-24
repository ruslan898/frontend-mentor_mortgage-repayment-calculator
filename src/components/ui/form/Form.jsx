import { NumericFormat } from 'react-number-format';

import Title from '../title/Title';
import Link from '../link/Link';
import InputBlock from '../inputBlock/InputBlock';
import Input from '../input/Input';
import Button from '../button/Button';

import './form.scss';

import calculatorIcon from '/src/assets/images/icon-calculator.svg';

export default function Form({
  values,
  errors,
  onInputChange,
  onFormSubmit,
  onClear,
}) {
  return (
    <form action="#" className="form" onSubmit={onFormSubmit}>
      <header className="header">
        <Title type="h1">Mortgage Calculator</Title>
        <Link onClick={onClear}>Clear all</Link>
      </header>
      <div className="input-section">
        <InputBlock label="Mortgage Amount" className="full-width">
          <NumericFormat
            customInput={Input}
            value={values.amount}
            onValueChange={(values) => onInputChange('amount', values.value)}
            thousandSeparator=","
            decimalSeparator="."
            allowNegative={false}
            decimalScale={2}
            name="amount"
            label="Mortgage Amount"
            prefixValue="£"
            error={errors.amount}
            minLength={1}
            maxLength={100_000_000}
          />
          {errors.amount && <p className="error-message">{errors.amount}</p>}
        </InputBlock>
        <InputBlock label="Mortgage Term">
          <NumericFormat
            customInput={Input}
            value={values.term}
            onValueChange={(values) => onInputChange('term', values.value)}
            thousandSeparator=","
            decimalSeparator="."
            allowNegative={false}
            decimalScale={2}
            name="term"
            label="Mortgage Term"
            suffixValue="years"
            error={errors.term}
            minLength={1}
            maxLength={40}
          />
          {errors.term && <p className="error-message">{errors.term}</p>}
        </InputBlock>

        <InputBlock label="Interest Rate">
          <NumericFormat
            customInput={Input}
            value={values.rate}
            onValueChange={(values) => onInputChange('rate', values.value)}
            thousandSeparator=","
            decimalSeparator="."
            allowNegative={false}
            decimalScale={2}
            name="rate"
            label="Interest Rate"
            suffixValue="%"
            error={errors.rate}
            minLength={0}
            maxLength={100}
          />
          {errors.rate && <p className="error-message">{errors.rate}</p>}
        </InputBlock>

        <fieldset className="input-block full-width radio-fieldset">
          <legend>Mortgage Type</legend>
          <Input
            type="radio"
            name="type"
            value="repayment"
            label="Repayment"
            id="repayment"
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            checked={values.type === 'repayment'}
          />
          <Input
            type="radio"
            name="type"
            value="interest"
            label="Interest Only"
            id="interest"
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            checked={values.type === 'interest'}
          />
        </fieldset>

        {/* <InputBlock label="Mortgage Type" className="full-width">
          <Input
            type="radio"
            name="type"
            value="repayment"
            label="Repayment"
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            checked={values.type === 'repayment'}
          />
          <Input
            type="radio"
            name="type"
            value="interest"
            label="Interest Only"
            id="interest"
            onChange={({ target: { name, value } }) =>
              onInputChange(name, value)
            }
            checked={values.type === 'interest'}
          />
        </InputBlock> */}

        {errors.type && <p className="error-message">{errors.type}</p>}
      </div>
      <Button type="submit">
        <img src={calculatorIcon} alt="Calculator icon" />
        Calculate Repayments
      </Button>
    </form>
  );
}
