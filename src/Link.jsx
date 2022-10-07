import { memo } from 'react';
import { useRouter } from './Router';

export default memo(({ children, to, router }) => {
  const { push } = router || useRouter();

  function handleClick(event) {
    event.preventDefault();

    push(to);
  }

  return (
    <a
      href={to}
      onClick={handleClick}
    >
      {children}
    </a>
  );
});
