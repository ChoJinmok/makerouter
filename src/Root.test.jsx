import { render } from '@testing-library/react';

import Router from './Router';

import Root from './Root';

describe('Root', () => {
  it('renders title', () => {
    const { container } = render(
      <Router>
        <Root />
      </Router>,
    );

    expect(container).toHaveTextContent('root');
  });

  it('renders button listen to click event', () => {
    const { getByText } = render(
      <Router>
        <Root />
      </Router>,
    );

    getByText('about');
  });
});
