import { useRouter } from './Router';

export default function Root() {
  const { push } = useRouter();

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
