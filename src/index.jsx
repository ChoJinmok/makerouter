import { StrictMode } from 'react';

import ReactDom from 'react-dom/client';

import Router from './Router';
import Route from './Route';
import Root from './Root';
import About from './About';

ReactDom.createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  </StrictMode>,
);
