import EmptyPlaceholder from '../emptyPlaceholder/EmptyPlaceholder';
import Title from '../title/Title';

import './results.scss';

import emptyPlaceholderImage from '/src/assets/images/illustration-empty.svg';

export default function Results({ results }) {



  return (
    <div className="results">
      <div className="results-wrapper">
        {results ? (
          <>
            <Title Title type="h2" className="results-title">
              Your results
            </Title>
            <p className="results-text">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              “calculate repayments” again.
            </p>
            <div className="results-values">
              <div className="results-values-wrapper">
                <div className="results-values-item">
                  <Title type="h3" className="results-values-title">
                    Your monthly repayments
                  </Title>
                  <p className="results-values-value big">£{results.monthly.toFixed(2)}</p>
                </div>
                <div className="divider"></div>
                <div className="results-values-item">
                  <Title type="h3" className="results-values-title">
                    Total you'll repay over the term
                  </Title>
                  <p className="results-values-value">£{results.total.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </>
        ) : (
          <EmptyPlaceholder>
            <img src={emptyPlaceholderImage} alt="Placeholder image" />
            <h2 className="placeholder-title">Results shown here</h2>
            <p className="placeholder-text">
              Complete the form and click “calculate repayments” to see what
              your monthly repayments would be.
            </p>
          </EmptyPlaceholder>
        )}
      </div>
    </div>
  );
}
