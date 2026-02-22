import Title from '../title/Title';
import Link from '../link/Link';
import InputBlock from '../inputBlock/InputBlock';
import Input from '../input/Input';
import Button from '../button/Button';

import './form.scss';

import calculatorIcon from '/src/assets/images/icon-calculator.svg';

export default function Form() {
  return (
    <form action="#" className="form">
      <header className="header">
        <Title>Mortgage Calculator</Title>
        <Link>Clear all</Link>
      </header>
      <div className="input-section">
        <InputBlock label="Mortgage Amount" className="full-width">
          <Input
            type="number"
            name="amount"
            label="Mortgage Amount"
            prefix="£"
          />
        </InputBlock>
        <InputBlock label="Mortgage Term">
          <Input
            type="number"
            name="term"
            label="Mortgage Term"
            suffix="years"
          />
        </InputBlock>
        <InputBlock label="Interest Rate">
          <Input type="number" name="rate" label="Interest Rate" suffix="%" />
        </InputBlock>
        <InputBlock label="Mortgage Type" className="full-width">
          <Input type="radio" name="type" value="repayment" label="Repayment" defaultChecked />
          <Input
            type="radio"
            name="type"
            value="interest"
            label="Interest Only"
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
