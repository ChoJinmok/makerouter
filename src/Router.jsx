import {
  createContext,
  useContext,
  useMemo,
  useCallback,
  useState,
  Children,
} from 'react';

export const RouterContext = createContext();

export default function Router({ children, initialEntry }) {
  const [pathname, setPathname] = initialEntry || useState(window.location.pathname);

  const push = useCallback((path) => {
    setPathname(path);
    const url = `${window.location.origin}${path}`;
    // eslint-disable-next-line no-restricted-globals
    history.pushState(null, null, url);
  }, [setPathname]);

  window.onpopstate = () => {
    setPathname(window.location.pathname);
  };

  const value = useMemo(() => ({
    pathname, push,
  }), [pathname, push]);

  const RouteIndex = Children.toArray(children)
    .findIndex((child) => (
      child.type.name === 'Route'
       && child.props.path === pathname
    ));

  return (
    <RouterContext.Provider value={value}>
      {Children.toArray(children).filter((child, index) => (
        child.type.name === 'Route' ? index === RouteIndex : true
      ))}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  const context = useContext(RouterContext);

  if (context === undefined) {
    throw new Error('useRouter should be used within Router');
  }

  return context;
}
