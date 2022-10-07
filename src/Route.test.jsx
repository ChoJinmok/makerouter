import { render } from '@testing-library/react';

import Route from './Route';

describe('Route', () => {
  function Component() {
    return <h1>Component</h1>;
  }

  it('renders conmponent', () => {
    const { container } = render(<Route component={<Component />} />);

    expect(container).toHaveTextContent('Component');
  });
});
