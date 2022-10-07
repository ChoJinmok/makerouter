import { useRouter } from './Router';

import Link from './Link';

export default function About({ router }) {
  const { push } = router || useRouter();

  function handleClick() {
    push('/');
  }

  return (
    <>
      <h1>about</h1>
      {/* <button
        type="button"
        onClick={handleClick}
      >
        go main
      </button> */}
      <Link to="/">go main</Link>
    </>
  );
}
