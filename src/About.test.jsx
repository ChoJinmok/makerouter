import { render, fireEvent } from '@testing-library/react';

import Router from './Router';

import About from './About';

describe('About', () => {
  it('renders title', () => {
    const { container } = render(
      <Router>
        <About />
      </Router>,
    );

    expect(container).toHaveTextContent('about');
  });

  it('renders button listen to click event', () => {
    const push = jest.fn();

    const { getByText } = render(
      <Router>
        <About router={{ push }} />
      </Router>,
    );

    fireEvent.click(getByText('go main'));

    expect(push).toBeCalledWith('/');
  });
});
