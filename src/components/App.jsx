import { useState } from 'react';

import Form from './ui/form/Form';
import Results from './ui/results/Results';

import './app.scss';

export default function App() {
  const [values, setValues] = useState({
    amount: '',
    term: '',
    rate: '',
    type: 'repayment',
  });
  const [errors, setErrors] = useState({});
  const [results, setResults] = useState(null);

  function handleInputChange(name, value) {
    setValues({ ...values, [name]: value });
  }

  function validate() {
    const newErrors = {};

    if (!values.amount) {
      newErrors.amount = 'This field is required';
    } else if (+values.amount <= 0 || +values.amount > 100_000_000) {
      newErrors.amount = 'Invalid value';
    }

    if (!values.term) {
      newErrors.term = 'This field is required';
    } else if (+values.term <= 0 || +values.term > 40) {
      newErrors.term = 'Invalid value';
    }

    if (!values.rate) {
      newErrors.rate = 'This field is required';
    } else if (+values.rate < 0 || +values.rate > 100) {
      newErrors.rate = 'Invalid value';
    }

    return newErrors;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setErrors({});
    const validationErrors = validate();

    if (Object.keys(validationErrors).length === 0) {
      setResults(() => calcResults(values));
    } else {
      setErrors(validationErrors);
    }
  }

  function handleClear(e) {
    e.preventDefault();

    setValues({
      amount: '',
      term: '',
      rate: '',
      type: 'repayment',
    });

    setResults(null);
  }

  function calcResults({ amount, rate, term, type }) {
    const P = +amount;
    const annualRate = +rate;
    const years = +term;

    const r = annualRate / 100 / 12;
    const n = years * 12;

    if (type === 'repayment') {
      const monthly = (P * (r * Math.pow(1 + r, n))) / (Math.pow(1 + r, n) - 1);

      return {
        monthly,
        total: monthly * n,
      };
    }

    if (type === 'interest') {
      const monthly = P * r;

      return {
        monthly,
        total: monthly * n + P,
      };
    }
  }

  return (
    <div className="container">
      <main className="app">
        <Form
          values={values}
          errors={errors}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
          onClear={handleClear}
        />
        <Results results={results} />
      </main>
    </div>
  );
}
