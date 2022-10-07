import styled from '@emotion/styled';

import { useRouter } from './Router';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',

  '& button': {
    all: 'unset',
    display: 'flex',
    width: '100px',
    height: '40px',
    borderRadius: '8px',
    color: '#fff',
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    cursor: 'pointer',
  },
});

export default function Root({ router }) {
  const { push } = router || useRouter();

  function handleClick() {
    push('/about');
  }

  return (
    <Container>
      <h1>root</h1>
      <button
        type="button"
        onClick={handleClick}
      >
        about
      </button>
    </Container>
  );
}
