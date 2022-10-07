import { StrictMode } from 'react';

import ReactDom from 'react-dom/client';

import Router from './Router';
import App from './App';

ReactDom.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
);
