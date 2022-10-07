import { render } from '@testing-library/react';

import Router from './Router';

import App from './App';

describe('App', () => {
  context('with path /', () => {
    it('renders the root page', () => {
      const { container } = render(
        <Router initialEntry={['/']}>
          <App />
        </Router>,
      );

      expect(container).toHaveTextContent('root');
    });
  });

  context('with path /about', () => {
    it('renders the about page', () => {
      const { container } = render(
        <Router initialEntry={['/']}>
          <App />
        </Router>,
      );

      expect(container).toHaveTextContent('about');
    });
  });
});
