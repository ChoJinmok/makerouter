import { render, fireEvent } from '@testing-library/react';

import Router from './Router';

import Link from './Link';

describe('Link', () => {
  it('renders reviece text', () => {
    const { container } = render(
      <Router>
        <Link to="/">test</Link>
      </Router>,
    );

    expect(container).toHaveTextContent('test');
  });

  it('renders button listen to click event', () => {
    const push = jest.fn();

    const { getByText } = render(
      <Router>
        <Link to="/" router={{ push }}>test</Link>
      </Router>,
    );

    fireEvent.click(getByText('test'));

    expect(push).toBeCalledWith('/');
  });
});
