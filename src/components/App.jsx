import Form from './ui/form/Form';
import Results from './ui/results/Results';

import './app.scss';

export default function App() {
  return (
    <div className="container">
      <main className="app">
        <Form />
        <Results />
      </main>
    </div>
  );
}
