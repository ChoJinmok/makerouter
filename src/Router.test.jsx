import { render } from '@testing-library/react';

import Router, { useRouter } from './Router';
import Route from './Route';

function CommonComponent() {
  return <h1>CommonComponents</h1>;
}

function ComponentInRouter() {
  const { pathname, push } = useRouter();

  return (
    <>
      <p>{pathname}</p>
      <p>{push.toString()}</p>
    </>
  );
}

describe('Router', () => {
  it('renders common component', () => {
    const { container } = render(
      <Router>
        <CommonComponent />
      </Router>,
    );

    expect(container).toHaveTextContent('CommonComponents');
  });

  context('with matching routes', () => {
    it('renders Route', () => {
      const { container } = render(
        <Router initialEntry={['/']}>
          <Route path="/" component={<ComponentInRouter />} />
        </Router>,
      );

      expect(container).toHaveTextContent('/');
      expect(container).toHaveTextContent('history.pushState(');
    });
  });

  context('without matching routes', () => {
    it('doens\'t render Route', () => {
      const { container } = render(
        <Router initialEntry={['/home']}>
          <Route path="/" component={<ComponentInRouter />} />
        </Router>,
      );

      expect(container).toHaveTextContent('');
    });
  });
});
