import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import App from './components/App';

import './main.scss';

createRoot(document.querySelector('#root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
