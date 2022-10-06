import { useRouter } from './Router';

export default function Route({ path, component }) {
  const { pathname } = useRouter();

  if (!(path === pathname)) return null;

  return component;
}
