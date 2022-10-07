import { useRouter } from './Router';

export default function Root({ router }) {
  const { push } = router || useRouter();

  function handleClick() {
    push('/about');
  }

  return (
    <>
      <h1>root</h1>
      <button
        type="button"
        onClick={handleClick}
      >
        about
      </button>
    </>
  );
}
