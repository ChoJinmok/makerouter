import styled from '@emotion/styled';

import Link from './Link';

const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',

  '& a': {
    display: 'flex',
    width: '100px',
    height: '40px',
    borderRadius: '8px',
    color: '#fff',
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
  },
});

export default function About() {
  return (
    <Container>
      <h1>about</h1>
      <Link to="/">go main</Link>
    </Container>
  );
}
