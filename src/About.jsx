import { useRouter } from './Router';

export default function Root() {
  const { push } = useRouter();

  function handleClick() {
    push('/');
  }

  return (
    <>
      <h1>about</h1>
      <button
        type="button"
        onClick={handleClick}
      >
        go main
      </button>
    </>
  );
}
